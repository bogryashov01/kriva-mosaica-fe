import { Button, CircularProgress, Grid, Step, StepLabel, Stepper } from '@material-ui/core';
import { Form, Formik, FormikConfig, FormikValues } from 'formik';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
  label: string;
}

function FormikStepper({ children, ...props }: FormikConfig<FormikValues>) {
  const childrenArray = React.Children.toArray(
    children as any,
  ) as React.ReactElement<FormikStepProps>[];
  const [step, setStep] = useState(0);
  const { t } = useTranslation();
  const currentChild = childrenArray[step];
  const [completed, setCompleted] = useState(false);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  return (
    <Formik
      {...props}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setCompleted(true);
        } else {
          setStep((s) => s + 1);

          // the next line was not covered in the youtube video
          //
          // If you have multiple fields on the same step
          // we will see they show the validation error all at the same time after the first step!
          //
          // If you want to keep that behaviour, then, comment the next line :)
          // If you want the second/third/fourth/etc steps with the same behaviour
          //    as the first step regarding validation errors, then the next line is for you! =)
          //
          // In the example of the video, it doesn't make any difference, because we only
          //    have one field with validation in the second step :)
          helpers.setTouched({});
        }
      }}>
      {({ isSubmitting }) => (
        <Form autoComplete="on">
          <Stepper alternativeLabel activeStep={step}>
            {childrenArray.map((child, index) => (
              <Step key={child.props.label} completed={step > index || completed}>
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {currentChild}

          <Grid container spacing={2}>
            {step > 0 ? (
              <Grid item>
                <Button
                  disabled={isSubmitting}
                  variant="contained"
                  color="primary"
                  onClick={() => setStep((s) => s - 1)}>
                  {t('back-button')}
                </Button>
              </Grid>
            ) : null}
            <Grid item>
              <Button
                startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
                disabled={isSubmitting}
                variant="contained"
                color="primary"
                type="submit">
                {isSubmitting
                  ? 'Submitting'
                  : isLastStep()
                  ? t('confirm-button')
                  : t('next-button')}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default FormikStepper;
