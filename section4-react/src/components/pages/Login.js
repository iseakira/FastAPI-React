import { Container, Box, Typography, TextField, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onClickLogin = () => {
    console.log('ログイン処理実行');
    const endpoint = 'https://jsonplaceholder.typicode.com/users';
    const queries = { username: user.username, id: user.password };
    axios.get(endpoint, { params: queries }).then((res) => {
      console.log(res.data[0]);
      if (res.data[0] === undefined) {
        console.log('ユーザーが存在しません');
        navigate('/loginfailed');
      } else {
        console.log('ログイン成功');
        navigate('/');
      }
    });
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
        />
        <Typography variant="h5">ログイン画面</Typography>
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
          name="username"
          label="パスワード"
          fullWidth
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={onClickLogin}
        >
          ログイン
        </Button>

        <Link to="/register">新規登録はこちら</Link>
      </Container>
    </>
  );
};

export default Login;
