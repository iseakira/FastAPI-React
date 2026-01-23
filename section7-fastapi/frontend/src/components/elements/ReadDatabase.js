import useReadSales from '../hooks/useReadSales';

const ReadDatabase = (props) => {
  const { year, handleDataChange } = props;
  const { onClickReadSales } = useReadSales();

  const promise = onClickReadSales(year);
  console.log(promise);
  let array = [];
  let arrayDepartment = [];
  let arrayYear = [];
  let arraySales = [];

  promise.then((data) => {
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
  });

  return <div></div>;
};

export default ReadDatabase;
