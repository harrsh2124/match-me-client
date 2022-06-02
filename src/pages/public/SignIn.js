import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import SignInSchema from '../../schemas/SignInSchema';
import { handleUserSignIn } from '../../slices/auth/signInUserSlice';

const defaultSignInValues = {
    email: '',
    password: ''
};

const SignIn = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: defaultSignInValues,
        validationSchema: SignInSchema,
        onSubmit: (values) => {
            dispatch(handleUserSignIn(values));
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
                Sign In
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
                    id="email"
                    autoComplete="email"
                    label="Email"
                    type="email"
                    autoFocus={true}
                    required={true}
                    value={formik.values.email}
                    helperText={formik.touched.email ? formik.errors.email : null}
                    error={Boolean(formik.touched.email && formik.errors.email)}
                    onChange={formik.handleChange}
                    margin="normal"
                    variant="outlined"
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
                    fullWidth
                />

                <Button
                    variant="outlined"
                    fullWidth
                    type="submit"
                    sx={{
                        my: 2
                    }}
                >
                    Sign In
                </Button>
            </Box>
        </Container>
    );
};

export default SignIn;
