import Head from 'next/head';
import NextLink from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import UserService from 'src/services/UserService';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useForm } from 'react-hook-form';

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword]= useState('')
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: '',
      Name: '',
      PhoneNumber: '',
      password: '',
      policy: false
    },
      validationSchema: Yup.object({
        email: Yup
          .string()
          .email(
            'Must be a valid email')
          .max(255)
          .required(
            'Email is required'),
        Name: Yup
          .string()
          .max(255)
          .required(
            'Name is required'),
        PhoneNumber: Yup
          .string()
          .max(10)
          .required(
            'Phone Number is required'),
        password: Yup
          .string()
          .max(255)
          .required(
            'Password is required'),
      
      policy: Yup
        .boolean()
        .oneOf(
          [true],
          'This field must be checked'
        )
    }),
    onSubmit: () => {
      router.push('/login');
    }
  });
  
  const saveUser =(e)=>{
    const user = {name,email,phoneNumber,password}
    console.log(user);

    UserService.createUser(user).then((response) =>{
       console.log(response.data)
    }).catch(error =>{
      console.log(error)
    })

    }
    
  return (
    <>
      <Head>
        <title>
          Register 
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="sm">
          <NextLink
            href="/"
            passHref
          >
            <Button
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
            >
              Dashboard
            </Button>
          </NextLink>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Create a new account
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                Use your email to create a new account
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.Name && formik.errors.Name)}
              fullWidth
              helperText={formik.touched.Name && formik.errors.Name}
              label="Name"
              margin="normal"
              name="Name"
              onBlur={formik.handleBlur}
              onChange={(e) => setName(e.target.value)}
              onInput={formik.handleChange}
              value={name}
              variant="outlined"
            autoComplete='off'  
            />
          
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={(e) => setEmail(e.target.value)}
              onInput={formik.handleChange}
              type="email"
              value={email}
              variant="outlined"
              autoComplete="off" 
            />
            <TextField
              error={Boolean(formik.touched.PhoneNumber && formik.errors.PhoneNumber)}
              fullWidth
              helperText={formik.touched.PhoneNumber && formik.errors.PhoneNumber}
              label="Phone Number"
              margin="normal"
              name="PhoneNumber"
              onBlur={formik.handleBlur}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              onInput={formik.handleChange}
              variant="outlined"
            
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={(e) => setPassword(e.target.value)}
              onInput={formik.handleChange}
              type="password"
              value={password}
              variant="outlined"
              
            />
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                ml: -1
              }}
            >
              <Checkbox
                checked={formik.values.policy}
                name="policy"
                onChange={formik.handleChange}
              />
              <Typography
                color="textSecondary"
                variant="body2"
              >
                I have read the
                {' '}
                <NextLink
                  href="#"
                  passHref
                >
                  <Link
                    color="primary"
                    underline="always"
                    variant="subtitle2"
                  >
                    Terms and Conditions
                  </Link>
                </NextLink>
              </Typography>
            </Box>
            {Boolean(formik.touched.policy && formik.errors.policy) && (
              <FormHelperText error>
                {formik.errors.policy}
              </FormHelperText>
            )}
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                onClick={(e) => saveUser(e)}
              >
                Sign Up Now
              </Button>
            </Box>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Have an account?
              {' '}
              <NextLink
                href="/login"
                passHref
              >
                <Link
                  variant="subtitle2"
                  underline="hover"
                >
                  Sign In
                </Link>
              </NextLink>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Register;
