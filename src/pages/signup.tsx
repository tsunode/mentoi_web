import { useState, useRef } from 'react';
import Link from 'next/link';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ValidationError } from 'yup';

import { HiOutlineArrowLeft } from 'react-icons/hi';
import { FaMars, FaVenus } from 'react-icons/fa';

import Button from '@/shared/components/Buttons/Button';
import { Input, Radio, Select } from '@/shared/components/FormElements';
import Modal from '@/shared/components/Modal';

import {
  Container,
  Left,
  Right,
  Genero,
  Footer,
  ContractSpan,
} from '@/styles/pages/signup';

import Logo from '@/assets/logo_mentoi_white.svg';
import LogoWithColor from '@/assets/logo_mentoi_two_line.svg';

import { Scholarity } from '@/shared/data/Scholarity';
import subjects from '@/data/subjects';
import getValidationErrors from '@/shared/utils/getValidationErros';

import { useToast } from '@/shared/hooks/toast';
import LoginModal from '@/modules/logouted/components/LoginModal';

import { CreateUserValidator } from '@/modules/logouted/validators/CreateUser';
import { CreateUserData } from '@/shared/hooks/auth';
import SEO from '@/shared/components/SEO';
import subtractYears from '@/shared/utils/subtractYears';
import * as authServices from '@/modules/logouted/services/authServices';

const SignUp = () => {
  const formRef = useRef<FormHandles>(null);
  const [actualStep, setActualStep] = useState(1);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const router = useRouter();
  const { addToast } = useToast();

  function handleToggleModal() {
    setIsOpenModal(!isOpenModal);
  }

  function handleChangeStep() {
    setActualStep(state => (state === 1 ? 2 : 1));
  }

  async function handleSubmit(data: CreateUserData) {
    try {
      formRef.current?.setErrors({});

      await CreateUserValidator(subtractYears(6)).validate(data, {
        abortEarly: false,
      });

      if (!data.dateBirth) {
        // eslint-disable-next-line no-param-reassign
        delete data.dateBirth;
      }

      if (actualStep === 2) {
        await authServices.createUser(data);

        addToast(
          {
            type: 'success',
            title: 'Estamos quase lá!',
            description:
              'Verifique sua caixa de entrada, para ativar sua conta!',
          },
          12000,
        );

        router.push('/');
      } else {
        setActualStep(2);
      }
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

      setActualStep(1);
    }
  }

  return (
    <>
      <SEO
        title="Plataforma Educacional para Professores e Alunos | Mentoi"
        description="Plataforma educacional para interação entre estudantes e professores com atuação verificada, garantindo responsabilidade e evitando respostas com erros ou Fake News."
      />
      <Container>
        <Left step={actualStep}>
          <Image
            src="/background_create_account.jpg"
            alt="Background"
            layout="fill"
          />

          <div>
            <button type="button" onClick={() => router.back()}>
              <HiOutlineArrowLeft />
              Voltar
            </button>

            <ul>
              <li>
                Dados pessoais
                <div />
              </li>
              <li>
                Escolaridade
                <div />
              </li>
            </ul>
          </div>

          <Logo />
        </Left>

        <Right step={actualStep}>
          <LogoWithColor />

          <Form onSubmit={handleSubmit} ref={formRef}>
            <h1>CRIE SUA CONTA</h1>

            <div>
              <div>
                <Input
                  id="name"
                  name="name"
                  label="Nome"
                  type="text"
                  placeholder="Digite seu nome completo"
                />

                <Input
                  id="nickName"
                  name="nickName"
                  label="Nick name"
                  placeholder="Digite um usuário único "
                />

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

                <Input type="text" id="email" name="email" label="E-mail" />

                <Input
                  type="password"
                  id="password"
                  name="password"
                  label="Senha"
                />

                <Input
                  type="password"
                  id="passwordConfirmation"
                  name="passwordConfirmation"
                  label="Confirmar sua senha"
                />
              </div>

              <div>
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

                <ContractSpan>
                  Ao efetuar o cadastro você declara que leu e aceitou os
                  <Link href="/contract">termos de uso.</Link>
                </ContractSpan>
              </div>
            </div>
            <Footer>
              <div>
                {actualStep === 2 && (
                  <>
                    <Button
                      variant="secondary"
                      type="button"
                      text="Voltar"
                      onClick={handleChangeStep}
                    />

                    <Button type="submit" text="Cadastrar" />
                  </>
                )}

                {actualStep === 1 && (
                  <>
                    <Button
                      variant="inlinePrimary"
                      text="Já sou cadastrado"
                      onClick={handleToggleModal}
                    />

                    <Button type="submit" text="Próximo" />
                  </>
                )}
              </div>
            </Footer>
          </Form>

          <a
            href="https://api.whatsapp.com/send?phone=5535984127102&text=Ol%C3%A1%2C%20Estou%20com%20d%C3%BAvida%20sobre..."
            target="_blank"
            rel="noopener noreferrer"
          >
            Precisa de <b>AJUDA?</b>
          </a>
        </Right>
      </Container>

      <Modal isOpenModal={isOpenModal} handleToggleModal={handleToggleModal}>
        <LoginModal />
      </Modal>
    </>
  );
};

export default SignUp;
