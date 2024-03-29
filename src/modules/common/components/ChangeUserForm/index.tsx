import { useEffect, useRef, useState } from 'react';
import { CreateUserData, useAuth } from '@/shared/hooks/auth';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Input, Radio, Select } from '@/shared/components/FormElements';
import { FaMars, FaVenus } from 'react-icons/fa';
import { Genero } from '@/styles/pages/signup';
import { Scholarity } from '@/shared/data/Scholarity';
import subjects from '@/data/subjects';
import Button from '@/shared/components/Buttons/Button';

import { ValidationError } from 'yup';
import subtractYears from '@/shared/utils/subtractYears';
import { UpdateUserValidator } from '@/modules/logouted/validators/UpdateUser';
import getValidationErrors from '@/shared/utils/getValidationErros';
import { useToast } from '@/shared/hooks/toast';
import { format, parseISO } from 'date-fns';
import Modal from '@/shared/components/Modal';
import { MdDelete } from 'react-icons/md';
import { ModalContainer } from '@/shared/components/Modal/styles';
import * as userServices from '../../../logouted/services/userServices';
import ChangePasswordModal from '../ChangePasswordModal';

import { Container, Line, SecuritySection } from './styles';

const ChangeUserForm = () => {
  const { user, updateUser, signOut } = useAuth();
  const { addToast } = useToast();

  const formRef = useRef<FormHandles>(null);
  const [initialData, setInitialData] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModalDeleteAccount, setIsOpenModalDeleteAccount] = useState(
    false,
  );

  function handleToggleModal() {
    setIsOpenModal(!isOpenModal);
  }

  function handleToggleModalDeleteAccount() {
    setIsOpenModalDeleteAccount(!isOpenModalDeleteAccount);
  }

  useEffect(() => {
    if (user) {
      const areasInterest = user.areasInterest?.map(
        areaInterest => areaInterest.name,
      );

      setInitialData({
        ...user,
        dateBirth: user.dateBirth
          ? format(parseISO(user.dateBirth), 'yyyy-MM-dd')
          : '',
        areasInterest,
      });
    }
  }, [user]);

  async function handleSubmit(data: Partial<CreateUserData>) {
    try {
      formRef.current?.setErrors({});

      await UpdateUserValidator(subtractYears(6)).validate(data, {
        abortEarly: false,
      });

      if (!data.dateBirth) {
        // eslint-disable-next-line no-param-reassign
        delete data.dateBirth;
      }

      const updatedUser = await userServices.updateUser(user.id, data);

      updateUser(updatedUser);

      addToast({
        type: 'success',
        title: 'Usuário atualizado com sucesso!',
      });
    } catch (error) {
      let description: string;
      let title: string;

      if (error instanceof ValidationError) {
        const erros = getValidationErrors(error);

        formRef.current?.setErrors(erros);

        title = 'Campos obrigatórios';
        description =
          'Preencha todos campos obrigatórios para concluir o cadastro';
      } else {
        const message = error.response?.data?.message || 'error';

        title = 'Erro na cadastro';

        switch (true) {
          case message.includes('Email'):
            description = 'O e-mail informado já esta sendo utilizado';
            break;
          case message.includes('NickName'):
            description = 'O Nick Name informado já esta sendo utilizado';
            break;
          default:
            description = 'Ocorreu um erro ao fazer cadastro, tente novamente';
        }
      }

      addToast({
        type: 'error',
        title,
        description,
      });
    }
  }

  async function handleDeleteAccount() {
    try {
      await userServices.deleteUser(user.id);

      addToast({
        type: 'success',
        title: 'Usuário excluído com sucesso!',
      });

      signOut();
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Ocorreu um erro ao excluir sua conta',
        description: 'Não conseguimos delatar sua conta, tente novamente!',
      });
    }
  }

  return (
    <Container>
      <h1>Configuração</h1>

      <Line />

      <Form ref={formRef} onSubmit={handleSubmit} initialData={initialData}>
        <Input
          id="name"
          name="name"
          label="Nome"
          type="text"
          placeholder="Digite seu nome completo"
        />

        <Input
          id="email"
          name="email"
          label="E-mail"
          type="text"
          placeholder="Digite seu email"
        />

        <Input id="nickName" name="nickName" label="Nick name" />

        <Input
          type="date"
          id="dateBirth"
          name="dateBirth"
          label="Data de nascimento (opcional)"
        />

        <Radio
          label="Selecione seu Gênero"
          customComponent={Genero}
          name="gender"
          items={[
            { id: 'MALE', descrption: 'Masculino', icon: FaMars },
            { id: 'FEMALE', descrption: 'Feminino', icon: FaVenus },
            { id: 'OTHER', descrption: 'Não declarar' },
          ]}
        />

        <Select
          id="scholarity"
          name="scholarity"
          label="Escolaridade (opcional)"
          data={Scholarity}
        />

        <Select
          id="areasInterest"
          name="areasInterest"
          label="Área(s) de interesse (opcional)"
          data={subjects}
          multiSelect
        />

        <Button type="submit" text="Salvar" />
      </Form>

      <Line />

      <h2>Segurança</h2>

      <SecuritySection>
        <Button
          type="button"
          text="Clique aqui para alterar a Senha"
          onClick={handleToggleModal}
        />

        <Button
          type="button"
          text="Excluir conta"
          onClick={handleToggleModalDeleteAccount}
          variant="error"
        />
      </SecuritySection>
      <Modal isOpenModal={isOpenModal} handleToggleModal={handleToggleModal}>
        <ChangePasswordModal />
      </Modal>

      <Modal
        isOpenModal={isOpenModalDeleteAccount}
        handleToggleModal={handleToggleModalDeleteAccount}
      >
        <ModalContainer>
          <MdDelete />
          <p>Tem certeza que deseja excluir sua conta?</p>
          <Button text="Confirmar" onClick={handleDeleteAccount} />
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default ChangeUserForm;
