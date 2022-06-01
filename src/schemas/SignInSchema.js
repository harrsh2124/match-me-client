import * as Yup from 'yup';

const SignInSchema = Yup.object().shape({
    email: Yup.string()
        .required('Please enter an email address.')
        .email('Please enter a valid email address.'),

    password: Yup.string().required('Please enter the password.')
});

export default SignInSchema;
