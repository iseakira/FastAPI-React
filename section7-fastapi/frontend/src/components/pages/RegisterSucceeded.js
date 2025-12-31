import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const RegisterSucceeded = () => {
  const { state } = useLocation();

  return (
    <div>
      <Container maxwidth="xs">
        <Box
          sx={{
            display: 'flex',
            marginTop: 8,
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h5">登録完了しました</Typography>
          <Typography variant="h5">名前：{state.username}</Typography>
          <Typography variant="h5">パスワード：{state.password}</Typography>
          <Link to="/login">ログイン画面</Link>
        </Box>
      </Container>
    </div>
  );
};

export default RegisterSucceeded;
