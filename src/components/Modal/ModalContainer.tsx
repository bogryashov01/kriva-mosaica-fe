import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { increament, decrement } from '../../redux/cartSlice';

import ModalComponent from './Modal';

function ModalContainer(props: any) {
  const { isOpen, handleClose } = props;
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const cart = useSelector((state: any) => state.cart);

  const HandleIncrementButton = (id: number) => {
    dispatch(increament(id));
  };

  const HandleDecrementButton = (id: number) => {
    dispatch(decrement(id));
  };

  return (
    <ModalComponent
      isOpen={isOpen}
      handleClose={handleClose}
      cart={cart}
      t={t}
      i18n={i18n}
      HandleIncrementButton={HandleIncrementButton}
      HandleDecrementButton={HandleDecrementButton}
    />
  );
}

export default ModalContainer;
