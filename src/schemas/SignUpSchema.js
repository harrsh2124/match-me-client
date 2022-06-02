import * as Yup from 'yup';

const phoneRegExp = /^[6-9]\d{9}$/;

const SignUpSchema = Yup.object().shape({
    firstName: Yup.string().required('Please enter the first name.'),

    lastName: Yup.string().required('Please enter the last name.'),

    email: Yup.string()
        .required('Please enter an email address.')
        .email('Please enter a valid email address.'),

    password: Yup.string().required('Please enter the password.'),

    confirmationPassword: Yup.string()
        .required('Please enter the confirmation password.')
        .when('password', (password, schema) => {
            return password ? schema.oneOf([Yup.ref('password')], 'Passwords must match.') : schema;
        }),

    contactNumber: Yup.string()
        .required('Please enter the contact number.')
        .matches(phoneRegExp, 'Please enter a valid contact number.'),

    gender: Yup.string().oneOf(['male', 'female'], 'Gender should be male or female only.')
});

export default SignUpSchema;
