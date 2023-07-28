import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import Chart from './Chart';

export default function ChartNorte() {
  const norte = ['Acre', 'Amapá', 'Amazonas', 'Pará', 'Rondônia', 'Roraima', 'Tocantins'];
  const temp_norte = [24, 26.5, 24.1, 26.5, 24.1, 24.1, 26.5];

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
      categories: [...norte],
    },
  };

  const series = [
    {
      name: 'Temperatura',
      data: [...temp_norte],
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
          <h1>Temperatura da região Norte</h1>
          <ReactApexChart options={options} series={series} type="bar" height={350} width={750} />
          <button onClick={handleButtonClick}>Visão geral</button>
        </div>
      ) : (
        <Chart />
      )}
    </div>
  );
}
