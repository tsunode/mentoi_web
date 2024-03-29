import { ReactNode, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import ButtonIcon from '../Buttons/ButtonIcon';
import { Container, ModalStyles } from './styles';

interface ModalProps {
  isOpenModal: boolean;
  handleToggleModal(): void;
  styles?: ModalStyles;
  children: ReactNode;
}

const Modal = ({
  isOpenModal,
  handleToggleModal,
  styles,
  children,
}: ModalProps) => {
  useEffect(() => {
    document.body.style.overflowY = isOpenModal ? 'hidden' : 'auto';
  }, [isOpenModal]);

  return (
    <Container visible={isOpenModal} styles={styles}>
      <div>
        <ButtonIcon icon={IoMdClose} onClick={handleToggleModal} />
        {children}
      </div>
    </Container>
  );
};

export default Modal;
