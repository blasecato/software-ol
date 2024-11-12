/* eslint-disable @typescript-eslint/no-explicit-any */
import { Progress } from "antd"
import { formatDate } from "../../../../common/utils"
import { INcState, IReleaseResume, ITopProjects } from "../../../../services/dashboard/dashboard.constants"
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { useEffect, useState } from "react";
ChartJS.register(ArcElement, Tooltip, Legend);
interface Props {
  releaseResume: IReleaseResume
}

const CardResume = ({ releaseResume }: Props) => {
  const [isData, setData] = useState<any>()

  function formatChartData(ncState: INcState) {
    return {
      labels: ['Detected', 'Process', 'Solved'],
      datasets: [
        {
          data: [ncState.detected, ncState.process, ncState.solved],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }
      ]
    };
  }

  useEffect(() => {
    const data = formatChartData(releaseResume.nc_state)
    setData(data)
  }, [releaseResume.nc_state])

  return (
    <div className="card-big card-graph flex gap-20 mt-20">
      <div className="box">
        <p className="body-bold">Entregas</p>
        <h1 className="h1 mt-10">{releaseResume.porcentaje}%</h1>
        <p className="sub-title">Proximo Ciclo: {formatDate(releaseResume.cicle)}</p>
        <p className="body-regular mt-25">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>
      </div>
      <div className="box">
        {releaseResume?.top_projects?.map((item: ITopProjects) => (
          <div key={item.name} className="flex flex-btw g-10 mt-20">
            <span className="small-detail">
              {item.name}
            </span>
            <Progress percent={+item.porcentaje} strokeColor={item.color} />
            <span className="body-bold">{item.porcentaje}%</span>
          </div>
        ))}
      </div>
      <div className="box">
        {isData !== undefined &&
          <Doughnut data={isData} />
        }
      </div>
    </div>
  )
}

export default CardResume