import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const RegisterFailed = () => {
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
          <Typography variant="h5">登録失敗しました</Typography>
          <Typography variant="h5">管理者へご連絡してください</Typography>
          <Typography variant="h5">名前：{state.username}</Typography>
          <Typography variant="h5">パスワード：{state.password}</Typography>
          <Link to="/login">ログイン画面</Link>
        </Box>
      </Container>
    </div>
  );
};

export default RegisterFailed;
