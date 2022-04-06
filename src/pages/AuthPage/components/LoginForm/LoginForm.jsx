import StyledRegisterForm from '../RegisterForm/StyledRegisterForm';
import FormButton from '../../../../components/FormButton';
import FormLink from '../../../../components/FormLink';
import Input from '../Input';
import { React } from 'react';
import { Formik, Form } from 'formik';
import { loginValidationsSchema } from '../validation';
import { ReactComponent as EmailIcon } from '../icons/email.svg';
import { ReactComponent as LockIcon } from '../icons/lock.svg';

function LoginForm() {
  const handleRegister = ({ email, password }) => {
    const login = { email, password };
    console.log(login);
  };

  return (
    <StyledRegisterForm>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validateOnBlur
        onSubmit={handleRegister}
        validationSchema={loginValidationsSchema}
      >
        {({ handleChange, handleBlur, values }) => (
          <Form className="form">
            <Input
              label={<EmailIcon width={24} height={24} />}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              name="email"
              type="email"
              placeholder="E-mail"
              className="field"
              id="email"
            />
            <Input
              label={<LockIcon width={24} height={24} />}
              name="password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="Пароль"
              className="field"
              id="password"
            />

            <ul className="buttons-area">
              <li>
                <FormButton title={'Вход'} />
              </li>
              <li className="link_item">
                <FormLink title={'Регистрация'} path={'/register'} />
              </li>
            </ul>
          </Form>
        )}
      </Formik>
    </StyledRegisterForm>
  );
}

export default LoginForm;
