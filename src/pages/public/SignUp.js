import {
    Box,
    Button,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography
} from '@mui/material';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import SignUpSchema from '../../schemas/SignUpSchema';
import { handleUserSignUp } from '../../slices/auth/signUpUserSlice';

const defaultSignUpValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    contactNumber: '',
    confirmationPassword: '',
    gender: 'male'
};

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoading, isCompleted, error } = useSelector((state) => state.userSignUp);

    useEffect(() => {
        if (isCompleted && !Boolean(error)) navigate('/verify-user?emailSent=true');

        // eslint-disable-next-line
    }, [isCompleted]);

    const formik = useFormik({
        initialValues: defaultSignUpValues,
        validationSchema: SignUpSchema,
        onSubmit: (values) => {
            dispatch(handleUserSignUp(values));
        }
    });

    return (
        <Container
            maxWidth="sm"
            sx={{
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center'
            }}
        >
            <Typography
                variant="h4"
                component="div"
                sx={{
                    my: '3rem'
                }}
            >
                Sign Up
            </Typography>

            <Box
                component="form"
                sx={{
                    width: '100%'
                }}
                autoComplete="off"
                onSubmit={formik.handleSubmit}
                noValidate
            >
                <TextField
                    id="firstName"
                    autoComplete="firstName"
                    label="First Name"
                    type="text"
                    autoFocus={true}
                    required={true}
                    value={formik.values.firstName}
                    helperText={formik.touched.firstName ? formik.errors.firstName : null}
                    error={Boolean(formik.touched.firstName && formik.errors.firstName)}
                    onChange={formik.handleChange}
                    margin="normal"
                    variant="outlined"
                    disabled={isLoading}
                    fullWidth
                />

                <TextField
                    id="lastName"
                    autoComplete="lastName"
                    label="Last Name"
                    type="text"
                    required={true}
                    value={formik.values.lastName}
                    helperText={formik.touched.lastName ? formik.errors.lastName : null}
                    error={Boolean(formik.touched.lastName && formik.errors.lastName)}
                    onChange={formik.handleChange}
                    margin="normal"
                    variant="outlined"
                    disabled={isLoading}
                    fullWidth
                />

                <TextField
                    id="email"
                    autoComplete="email"
                    label="Email"
                    type="email"
                    required={true}
                    value={formik.values.email}
                    helperText={formik.touched.email ? formik.errors.email : null}
                    error={Boolean(formik.touched.email && formik.errors.email)}
                    onChange={formik.handleChange}
                    margin="normal"
                    variant="outlined"
                    disabled={isLoading}
                    fullWidth
                />

                <TextField
                    id="password"
                    autoComplete="password"
                    label="Password"
                    type="password"
                    required={true}
                    value={formik.values.password}
                    helperText={formik.touched.password ? formik.errors.password : null}
                    error={Boolean(formik.touched.password && formik.errors.password)}
                    onChange={formik.handleChange}
                    margin="normal"
                    variant="outlined"
                    disabled={isLoading}
                    fullWidth
                />

                <TextField
                    id="confirmationPassword"
                    autoComplete="confirmationPassword"
                    label="Confirm Password"
                    type="password"
                    required={true}
                    value={formik.values.confirmationPassword}
                    helperText={
                        formik.touched.confirmationPassword
                            ? formik.errors.confirmationPassword
                            : null
                    }
                    error={Boolean(
                        formik.touched.confirmationPassword && formik.errors.confirmationPassword
                    )}
                    onChange={formik.handleChange}
                    margin="normal"
                    variant="outlined"
                    disabled={isLoading}
                    fullWidth
                />

                <TextField
                    id="contactNumber"
                    autoComplete="contactNumber"
                    label="Contact Number"
                    type="text"
                    required={true}
                    value={formik.values.contactNumber}
                    helperText={formik.touched.contactNumber ? formik.errors.contactNumber : null}
                    error={Boolean(formik.touched.contactNumber && formik.errors.contactNumber)}
                    onChange={formik.handleChange}
                    margin="normal"
                    variant="outlined"
                    disabled={isLoading}
                    fullWidth
                />

                <FormControl
                    id="gender"
                    fullWidth
                    sx={{
                        my: 2
                    }}
                >
                    <InputLabel id="gender-label">Gender</InputLabel>
                    <Select
                        id="gender"
                        name="gender"
                        labelId="gender-label"
                        value={formik.values.gender}
                        label="Gender"
                        onChange={formik.handleChange}
                    >
                        <MenuItem id="gender" value="male">
                            Male
                        </MenuItem>
                        <MenuItem id="gender" value="female">
                            Female
                        </MenuItem>
                    </Select>
                </FormControl>

                <Button
                    fullWidth
                    variant="outlined"
                    type="submit"
                    disabled={isLoading}
                    sx={{
                        my: 2
                    }}
                >
                    Sign Up
                </Button>
            </Box>

            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    gap: '6px'
                }}
            >
                <Typography>Already have an account? </Typography>

                <Link to="/signin">
                    <Typography
                        sx={{
                            fontWeight: 'bold',
                            color: '#3f50b5',
                            textDecoration: 'none'
                        }}
                    >
                        Sign In
                    </Typography>
                </Link>
            </Box>
        </Container>
    );
};

export default SignUp;
