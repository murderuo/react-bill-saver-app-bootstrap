import { useState } from 'react';
import Chart from 'react-apexcharts';

function ExampleCharts() {
  const [values, setValues] = useState({
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    },
    series: [
      {
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });
  return (
    <>
      <div className="row w-50 p-2 my-2 div-bg mx-auto text-center justify-content-center">
      Consume graphics by years
      </div>
      <div className="row w-25 mx-auto mb-md-3 mb-sm-2 div-bg  ">
        <select>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
      <div className="row mx-md-auto mx-sm-auto  w-75">
        <Chart
          options={values.options}
          series={values.series}
          type="bar"
          width="100%"
        />
      </div>
    </>
  );
}

export default ExampleCharts;
