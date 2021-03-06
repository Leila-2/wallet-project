import StyledRegisterForm from './StyledRegisterForm';
import FormButton from '../../../../components/FormButton';
import FormLink from '../../../../components/FormLink';
import Input from '../Input';
import PasswordStrenght from './PasswordStrenght';
import authSelectors from '../../../../store/auth/authSelectors';
import { React } from 'react';
import { useState } from 'react';
import { Formik, Form } from 'formik';
import { registerValidationsSchema } from '../validation';
import { ReactComponent as EmailIcon } from '../icons/email.svg';
import { ReactComponent as LockIcon } from '../icons/lock.svg';
import { ReactComponent as NameIcon } from '../icons/name.svg';
import { useDispatch } from 'react-redux';
import { actionRegister } from '../../../../store/auth/authActions';
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = ({ name, email, password }) => {
    const registerData = { name, email, password };
    dispatch(actionRegister(registerData));
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
        validationSchema={registerValidationsSchema}
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
              placeholder="????????????"
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
              placeholder="?????????????????????? ????????????"
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
              placeholder="???????? ??????"
              className="field"
              id="name"
            />
            <ul className="buttons-area">
              <li>
                <FormButton title={'??????????????????????'} type="submit" />
              </li>
              <li className="link_item">
                <FormLink title={'????????'} path={'/login'} />
              </li>
            </ul>
          </Form>
        )}
      </Formik>
    </StyledRegisterForm>
  );
}

export default RegisterForm;
