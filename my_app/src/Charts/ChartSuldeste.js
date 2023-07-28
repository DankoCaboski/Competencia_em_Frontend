import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import Chart from './Chart';

export default function ChartSuldeste() {
  const suldeste = ['Espírito Santo', 'Minas Gerais', 'Rio de Janeiro', 'São Paulo'];
  const temp_suldeste = [24, 26.5, 24.1];

  const options = {
    chart: {
      type: 'horizontalBar',
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    xaxis: {
      labels: {
        show: true,
        position: 'top',
        offsetY: -20,
      },
      categories: [...suldeste],
    },
  };

  const series = [
    {
      name: 'Temperatura',
      data: [...temp_suldeste],
    },
  ];

  const [showChart, setShowChart] = useState(true);

  const handleButtonClick = () => {
    setShowChart((prevShowChart) => !prevShowChart);
  };

  return (
    <div>
      {showChart ? (
        <div>
          <h1>Temperatura da região Suldeste</h1>
          <ReactApexChart options={options} series={series} type="bar" height={350} width={750} />
          <button onClick={handleButtonClick}>Visão geral</button>
        </div>
      ) : (
        <Chart />
      )}
    </div>
  );
}
