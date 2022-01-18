import Head from 'next/head';
import React, { useState ,useEffect} from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Checkbox, Container, Grid, Link, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckboxLabels from './checkbox';
import UserService from 'src/services/UserService';




const Login = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email(
          'Must be a valid email')
        .max(255)
        .required(
          'Email is required'),
      password: Yup
        .string()
        .max(255)
        .required(
          'Password is required')
    }),
    onSubmit: () => {
      router.push('/');
    }
  });
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [users, setUsers] = useState([])
  useEffect(() => {
    UserService.getAllUsers().then((Response) =>{
        setUsers(Response.data)
        console.log(Response.data);

    }).catch(error=>{
        console.log(error);
    })
    }, [])
    users.map(
      user =>
      <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.email}</td>
          <td>{user.name}</td>
      </tr>
    )
  const handleEmailChange=(e)=>{
    setEmailError('')
    setEmail(e.target.value);
  }
  const handlePasswordChange =(e)=>{
    setPasswordError('')
    setPassword(e.target.value);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(email===users.email)
    {
      if(password ===users.password)
      {
        router.push('/');
      }
      else
      {
        setPasswordError('Password is Incorrect')
      }
    }
    else
    {
      setEmailError('Email Does Not Exist')
    }
    
  }
  
  
  return (
    <>
    
      <Head>
        <title>Login | Call Center</title>
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
          <form onSubmit={handleSubmit}>
            <Box sx={{ my: 3 }}>

              <Typography
                color="red"
                variant="h1"
              align="center"
              >
                Call Center
              </Typography>
              <h1 style={{fontStyle:'monospace',fontFamily:'courier',textAlign:'center'}}>
                Agent Login
                </h1>
            </Box>
            <Box
              sx={{
                pb: 1,
                pt: 3
              }}
            >
              <Typography
                align="center"
                color="textSecondary"
                variant="body1"
              >
                login with email address
              </Typography>
            </Box>
          
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              onChange={handleEmailChange}
              onBlur={formik.handleBlur}
              onInput={formik.handleChange}
              type="email"
              value={email}
              variant="outlined"            
            />
            {emailError&&<div className='error-masg'>{emailError}</div>}
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onInput={formik.handleChange}
              onChange={handlePasswordChange}
              type="password"
              value={password}
              variant="outlined"
            />
            {passwordError&&<div className='error-masg'>{passwordError}</div>}
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                xs={12}
                md={6}
              >
                <Grid
              container
              spacing={1}
            >
              <Grid
                item
                xs={12}
                md={8}
              >
            <CheckboxLabels></CheckboxLabels>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
              >
              <button>Forget Password?</button>
              </Grid>
            </Grid>
            </Grid>
              <Grid
                item
                xs={12}
                md={6}
              >            
              </Grid>
            </Grid>
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Login 
              </Button>
            </Box>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Don&apos;t have an account?
              {' '}
              <NextLink
                href="/register"
              >
                <Link
                  to="/register"
                  variant="subtitle2"
                  underline="hover"
                  sx={{
                    cursor: 'pointer'
                  }}
                >
                  Sign Up
                </Link>
              </NextLink>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};
export default Login;
