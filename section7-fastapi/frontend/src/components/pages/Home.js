import Headrer from '../templates/Header';
import { Navigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { LoginUserContext } from '../providers/LoginUserProvider';
import { useContext } from 'react';

const Home = () => {
  const location = useLocation();
  const [data] = useState(location.state || {});
  const { LoginUser, isLogined } = useContext(LoginUserContext);
  if (!isLogined) {
    return <Navigate to="/login" />;
  } else {
    return (
      <>
        <Headrer name="XYZ" />
        ホーム画面:{LoginUser}
        {data.username}
      </>
    );
  }
};

export default Home;
