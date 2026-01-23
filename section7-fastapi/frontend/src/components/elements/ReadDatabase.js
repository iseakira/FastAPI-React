import useReadSales from '../hooks/useReadSales';
import { useEffect } from 'react';
import React from 'react';

const ReadDatabase = (props) => {
  const { year, handleDataChange } = props;
  const { onClickReadSales } = useReadSales();

  useEffect(() => {
    if (year === '' || year === undefined) {
      return;
    }
    const promise = onClickReadSales(year);
    console.log(promise);
    let array = [];
    let arrayDepartment = [];
    let arrayYear = [];
    let arraySales = [];

    promise.then((data) => {
      if (data.length > 0) {
        console.log(data);
        arrayDepartment.push('department');
        arrayYear.push('year');
        arraySales.push('sales');

        for (let i = 0; i < data.length; i++) {
          arrayDepartment.push(data[i].department);
          arrayYear.push(data[i].year);
          arraySales.push(data[i].sales);
        }
        array.push(arrayDepartment, arrayYear, arraySales);
        console.log(array);
        handleDataChange(array);
      } else {
        console.log('データなし');
        handleDataChange(array);
      }
    });
  }, [year, onClickReadSales, handleDataChange]);

  return <div></div>;
};

export default ReadDatabase;
