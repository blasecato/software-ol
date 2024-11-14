/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"
import { type ITime } from "../../../../services/dashboard/dashboard.constants"
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

interface Props {
  percentajeTime: number
  deploys: number
  time: ITime[]
}

const CardServerDetail = ({ percentajeTime, deploys, time }: Props) => {
  const [isData, setData] = useState<any>()
  const [isOptions, setOptions] = useState<any>()
  useEffect(() => {
    if (time !== null && time?.length >= 1) {
      const labels = time.map(item => item.time);
      const dataValues = time.map(item => item.value);

      const data = {
        labels: labels,
        datasets: [{
          label: 'Valor a lo largo del tiempo',
          data: dataValues,
          borderColor: '#4c4aad',
          backgroundColor: '#6e6daa',
          fill: true,
          tension: 0.3
        }]
      };

      const options = {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Fechas'
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Valor'
            }
          }
        }
      };
      setData(data)
      setOptions(options)
    }
  }, [time])

  return (
    <div className="card-graph">
      <h3 className="h3">Detalles del servidor</h3>
      <p className="body-regular mt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
      </p>
      <div className="description flex flex-start g-50 mt-20">
        <div className="description-item">
          <span className="small-detail">
            Tiempo de uso
          </span>
          <h3 className="sub-title mt-5">{percentajeTime}%</h3>
        </div>
        <div className="description-item">
          <span className="small-detail">
            Proyectos desplegados
          </span>
          <h3 className="sub-title mt-5">{deploys}</h3>
        </div>
      </div>
      <div className="mt-20">
        {isData !== undefined && isOptions !== undefined &&
          <Line data={isData} options={isOptions} />
        }
      </div>
    </div>
  )
}

export default CardServerDetail