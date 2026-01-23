import React from 'react';
import axious from 'axios';

const useReadSales = () => {
  const baseEndpoint = 'http://127.0.0.1:8000/sales/';

  const onClickReadSales = async (year) => {
    const endpoint = baseEndpoint + year;
    const res = await axious.get(endpoint);
    return res.data;
  };
  return { onClickReadSales };
};

export default useReadSales;
