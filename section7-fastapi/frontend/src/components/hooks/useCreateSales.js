import React from 'react';

export const useCreateSales = () => {
  const endpoint = ' http://127.0.0.1:8000/sales';
  const onClickCreateSales = (data) => {
    console.log(data);
  };
  return onClickCreateSales;
};
