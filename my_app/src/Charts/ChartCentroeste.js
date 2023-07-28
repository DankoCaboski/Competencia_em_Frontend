import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import Chart from './Chart';

export default function ChartCentroeste() {
    const centro_oeste = ['Goiás', 'Mato Grosso', 'Mato Grosso do Sul'];
    const temp_centro_oeste = [24, 26.5, 24.1];

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
      categories: [...centro_oeste],
    },
  };

  const series = [
    {
      name: 'Temperatura',
      data: [...temp_centro_oeste],
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
          <h1>Temperatura da região Centroeste</h1>
          <ReactApexChart options={options} series={series} type="bar" height={350} width={750} />
          <button onClick={handleButtonClick}>Visão geral</button>
        </div>
      ) : (
        <Chart />
      )}
    </div>
  );
}
