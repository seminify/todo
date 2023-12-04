import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { signup } from './ApiService';

const SignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const username = data.get('username');
    const password = data.get('password');
    signup({ username, password }).then(() => {
      window.location.href = '/login';
    });
  };
  return (
    <Container
      component='main'
      maxWidth='xs'
      style={{ marginTop: '8%' }}
    >
      <form
        noValidate
        onSubmit={handleSubmit}
      >
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            xs={12}
          >
            <Typography
              component='h1'
              variant='h5'
            >
              계정 생성
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
          >
            <TextField
              label='아이디'
              required
              variant='outlined'
              autoComplete='fname'
              id='username'
              name='username'
              fullWidth
              autoFocus
            />
          </Grid>
          <Grid
            item
            xs={12}
          >
            <TextField
              label='패스워드'
              type='password'
              required
              variant='outlined'
              id='password'
              name='password'
              autoComplete='current-password'
              fullWidth
            />
          </Grid>
          <Grid
            item
            xs={12}
          >
            <Button
              type='submit'
              variant='contained'
              color='primary'
              fullWidth
            >
              계정 생성
            </Button>
          </Grid>
          <Grid item>
            <Link
              to='/login'
              variant='body2'
            >
              이미 계정이 있습니까? 로그인하세요.
            </Link>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default SignUp;
