import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import SignInSchema from '../../schemas/SignInSchema';
import { handleUserSignIn } from '../../slices/auth/signInUserSlice';

const defaultSignInValues = {
    email: '',
    password: ''
};

const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoading, isCompleted, error } = useSelector((state) => state.userSignIn);

    useEffect(() => {
        if (isCompleted && !Boolean(error)) navigate('/');

        // eslint-disable-next-line
    }, [isCompleted]);

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

                <Button
                    fullWidth
                    variant="outlined"
                    type="submit"
                    disabled={isLoading}
                    sx={{
                        my: 2
                    }}
                >
                    Sign In
                </Button>
            </Box>

            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    gap: '6px'
                }}
            >
                <Typography>Don't have an account? </Typography>

                <Link to="/signup">
                    <Typography
                        sx={{
                            fontWeight: 'bold',
                            color: '#3f50b5',
                            textDecoration: 'none'
                        }}
                    >
                        Sign Up
                    </Typography>
                </Link>
            </Box>
        </Container>
    );
};

export default SignIn;
