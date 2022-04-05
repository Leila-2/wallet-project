import * as Yup from 'yup';

const validationsSchema = Yup.object({
  email: Yup.string()
    .email('Введите корректный e-mail')
    .required('Обязательное поле для заполнения!'),
  password: Yup.string()
    .min(6, 'Пароль должен состоять минимум из 6 символов')
    .max(12, 'Пароль должен состоять максимум из 12 символов')
    .required('Обязательное поле для заполнения!'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Пароли не совпадают')
    .required('Требуется подтверждение пароля!'),
  name: Yup.string()
    .typeError()
    .min(1, 'Имя должно состоять минимум из 1 символа')
    .max(12, 'Имя должно состоять максимум из 12 символов')
    .required('Обязательное поле для заполнения!'),
});

export default validationsSchema;
