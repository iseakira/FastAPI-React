import { Container, Box, Typography } from '@mui/material';

const Login = () => {
  return (
    <>
      <Container maxwidth="xs">
        <Box
          sx={{
            display: 'flex',
            marginTop: 8,
            flexDirection: 'column',
            alignItems: 'center',
          }}
        />
        <Typography variant="h5">ログイン画面</Typography>
      </Container>
    </>
  );
};

export default Login;
