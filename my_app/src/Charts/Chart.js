import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import ChartSuldeste from './ChartSuldeste';
import ChartNorte from './ChartNorte';
import ChartNordeste from './ChartNordeste';
import ChartCentroeste from './ChartCentroeste';

export default function Chart() {
  const centro_oeste = ['Goiás', 'Mato Grosso', 'Mato Grosso do Sul'];
  const temp_centro_oeste = [24, 26.5, 24.1];

  const nordeste = ['Alagoas', 'Bahia', 'Ceará', 'Maranhão', 'Paraíba', 'Pernambuco', 'Piauí', 'Rio Grande do Norte', 'Sergipe'];
  const temp_nordeste = [24, 26.5, 24.1, 26.5, 24.1, 24.1, 26.5, 24.1, 26.5];

  const norte = ['Acre', 'Amapá', 'Amazonas', 'Pará', 'Rondônia', 'Roraima', 'Tocantins'];
  const temp_norte = [24, 26.5, 24.1, 26.5, 24.1, 24.1, 26.5];

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
      categories: [...centro_oeste, ...nordeste, ...norte, ...suldeste],
    },
    tooltip: { enabled: false }
  };

  const series = [
    {
      name: 'Temperatura',
      data: [...temp_centro_oeste, ...temp_nordeste, ...temp_norte, ...temp_suldeste],
    },
  ];

  const [showChartNorte, setShowChartNorte] = useState(false);
  const [showChartNordeste, setShowChartNordeste] = useState(false);
  const [showChartSuldeste, setShowChartSuldeste] = useState(false);
  const [showChartCentroOeste, setShowChartCentroOeste] = useState(false);

  const handleChartNorte = () => {
    setShowChartNorte(true);
    setShowChartNordeste(false);
    setShowChartSuldeste(false);
    setShowChartCentroOeste(false);
  };

  const handleChartNordeste = () => {
    setShowChartNorte(false);
    setShowChartNordeste(true);
    setShowChartSuldeste(false);
    setShowChartCentroOeste(false);
  };

  const handleChartSuldeste = () => {
    setShowChartNorte(false);
    setShowChartNordeste(false);
    setShowChartSuldeste(true);
    setShowChartCentroOeste(false);
  };

  const handleChartCentroOeste = () => {
    setShowChartNorte(false);
    setShowChartNordeste(false);
    setShowChartSuldeste(false);
    setShowChartCentroOeste(true);
  };

  return (
    <div>
      {showChartNorte ? (
        <ChartNorte /> // Renderize o componente ChartNorte
      ) : showChartNordeste ? (
        <ChartNordeste /> // Renderize o componente ChartNordeste
      ) : showChartSuldeste ? (
        <ChartSuldeste/>
      ) : showChartCentroOeste ? (
        <ChartCentroeste /> // Renderize o componente ChartCentroeste
      ) : (
        <div>
          <h1>Temperatura das regiões</h1>
          <ReactApexChart options={options} series={series} type="bar" height={350} width={850} />
          <div>
            <button onClick={handleChartNorte}>Norte</button>
            <button onClick={handleChartNordeste}>Nordeste</button>
            <button onClick={handleChartSuldeste}>Suldeste</button>
            <button onClick={handleChartCentroOeste}>Centro Oeste</button>
          </div>
        </div>
      )}
    </div>
  );
}