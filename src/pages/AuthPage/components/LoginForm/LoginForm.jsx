import StyledRegisterForm from '../RegisterForm/StyledRegisterForm';
import FormButton from '../../../../components/FormButton';
import FormLink from '../../../../components/FormLink';
import Input from '../Input';
import { React } from 'react';
import { Formik, Form } from 'formik';
import { loginValidationsSchema } from '../validation';
import { ReactComponent as EmailIcon } from '../icons/email.svg';
import { ReactComponent as LockIcon } from '../icons/lock.svg';
import { actionLogin } from '../../../../store/auth/authActions';
import { useDispatch } from 'react-redux';


function LoginForm() {
  const dispatch = useDispatch();

  const handleLogin = ({ email, password }) => {
    const login = { email, password };

    dispatch(actionLogin(login));
  };


  return (
    <StyledRegisterForm>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validateOnBlur
        onSubmit={handleLogin}
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
