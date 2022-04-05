import { React } from 'react';
import { useState } from 'react';
// import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import Input from '../Input';
import PasswordStrenght from './PasswordStrenght';
import validationsSchema from './validation';
import { ReactComponent as EmailIcon } from '../icons/email.svg';
import { ReactComponent as LockIcon } from '../icons/lock.svg';
import { ReactComponent as NameIcon } from '../icons/name.svg';
import StyledRegisterForm from './StyledRegisterForm';
import FormButton from '../../../../components/FormButton';
import FormLink from '../../../../components/FormLink';

function RegisterForm() {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');

  const handleRegister = ({ name, email, password }) => {
    // dispatch();
    navigate('/login');
  };

  return (
    <StyledRegisterForm>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          name: '',
        }}
        validateOnBlur
        onSubmit={handleRegister}
        validationSchema={validationsSchema}
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
              onInput={e => setPassword(e.target.value)}
            />
            <Input
              label={<LockIcon width={24} height={24} />}
              name="confirmPassword"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
              placeholder="Подтвердите пароль"
              className="field"
            />

            <PasswordStrenght password={password} />

            <Input
              label={<NameIcon width={24} height={24} />}
              name="name"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              placeholder="Ваше имя"
              className="field"
              id="name"
            />
            <ul className="buttons-area">
              <li>
                <FormButton title={'Регистрация'} />
              </li>
              <li className="link_item">
                <FormLink title={'Вход'} path={'/login'} />
              </li>
            </ul>
          </Form>
        )}
      </Formik>
    </StyledRegisterForm>
  );
}

export default RegisterForm;
