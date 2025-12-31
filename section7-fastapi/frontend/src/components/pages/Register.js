import { Container, Box, Typography, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useRegister } from '../hooks/useRegister';

const Register = () => {
  const { register } = useRegister();
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const onClickRegister = () => {
    register(user);
  };

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
        >
          <Typography variant="h5">ユーザー登録画面</Typography>
          <TextField
            margin="normal"
            required
            placeholder="・・・"
            id="username"
            autoComplete="current-password"
            name="username"
            label="名前"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            placeholder="••••••"
            id="password"
            autoComplete="current-password"
            name="password"
            label="パスワード"
            fullWidth
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            color="error"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={onClickRegister}
          >
            登録
          </Button>

          <Link to="/login">登録済みの方はこちら</Link>
        </Box>
      </Container>
    </>
  );
};

export default Register;
