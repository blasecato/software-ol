/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"
import { type IReportCommits } from "../../../../services/dashboard/dashboard.constants"
import { Link } from "react-router-dom";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Props {
  reportCommits: IReportCommits[]
}

const CardCommitsReport = ({ reportCommits }: Props) => {
  const [isData, setData] = useState<any>()
  const [isOptions, setOptions] = useState<any>()
  useEffect(() => {
    if (reportCommits !== null && reportCommits.length >= 1) {


      const chartData = {
        labels: reportCommits.map(item => `Month ${item.month}`),
        datasets: [
          {
            label: 'Feat',
            data: reportCommits.map(item => item.feat),
            backgroundColor: '#97bdfe',
          },
          {
            label: 'Fix',
            data: reportCommits.map(item => item.fix),
            backgroundColor: '#4c4aad',
          },
        ],
      };

      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Datos de funciones y correcciones mensuales',
          },
        },
      };


      setData(chartData)
      setOptions(options)
    }
  }, [reportCommits])

  return (
    <div className="card-graph flex flex-column flex-btw">
      <div>
        <div className="flex flex-btw items-center w-full">
          <h3 className="h3">Reportes de commits</h3>
          <Link to='./'>View all</Link>
        </div>
        <p className="body-regular mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
      </div>
      <div className="mt-50">
        {isData !== undefined && isOptions !== undefined &&
          <Bar data={isData} options={isOptions} />
        }
      </div>
    </div>
  )
}

export default CardCommitsReport