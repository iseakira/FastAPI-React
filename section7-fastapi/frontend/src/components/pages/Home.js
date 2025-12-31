import Headrer from '../templates/Header';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import { LoginUserContext } from '../providers/LoginUserProvider';
import { useContext } from 'react';
import ReadCsv from '../elements/ReadCsv';

const Home = () => {
  const { LoginUser, isLogined } = useContext(LoginUserContext);
  const [data, setData] = useState([]);
  const handleDataChange = (newData) => {
    setData(newData);
  };

  if (!isLogined) {
    return <Navigate to="/login" />;
  } else {
    return (
      <>
        <Headrer />
        <h3>CSVをデータベースで格納する</h3>
        <ReadCsv handleDataChange={handleDataChange} />
        ホーム画面:{LoginUser}
      </>
    );
  }
};

export default Home;
