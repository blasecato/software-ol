/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../services/_common/hooks";
import { getCardsInfo, getCpuReport, getReleaseResume, getReportCommits, getWeather } from "../../../services/dashboard/dashboard.thunk";
import CardClimate from "./cards/CardClimate";
import CardColors from "./cards/CardColors";
import CardServerDetail from "./cards/CardServerDetail";
import CardCommitsReport from "./cards/CardCommitsReport";
import CardResume from "./cards/CardResume";
import { getToken } from "../../../services/_common/api";
import { IAdmin } from "../../../services/auth/auth.constants";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const [user, setUser] = useState<IAdmin>()
  const { dashboardCards, cpuReport, reportCommits, releaseResume } = useAppSelector(({ dashboard }) => dashboard);
  const { notifications } = useAppSelector(({ notification }) => notification);
  const { authentication } = useAppSelector(({ auth }) => auth);

  useEffect(() => {
    dispatch(getCardsInfo());
    dispatch(getCpuReport());
    dispatch(getReportCommits());
    dispatch(getReleaseResume());
    setTimeout(() => {
      const token: any = getToken()
      setUser(token);
    }, 1000);
  }, [dispatch])

  useEffect(() => {
    if (user?.location !== undefined) {
      dispatch(getWeather({ city: user?.location }));
    }
  }, [dispatch, user, authentication, dashboardCards])

  return (
    <section className="Dashboard">
      <div className="welcome">
        <h2 className="h2">Bienvenido {user?.name}</h2>
        <p className="sub-title mt-10">Verifica tus alertas, posee {notifications?.data?.length} alertas sin leer</p>
      </div>
      <div className="flex content">
        <div className="item">
          <CardClimate />
        </div>
        <div className="item item-cards">
          {dashboardCards.data !== null &&
            <>
              <CardColors
                amount={dashboardCards.data?.projects ?? 0}
                title="Proyectos Realizados"
                color="#7fa1fb"
                text="Ultimo proyecto realizado hace 15 dias"
              />
              <CardColors
                amount={dashboardCards.data?.projects_dev ?? 0}
                title="Proyectos en Desarrollo"
                color="#4746a3"
                text="Total de avance 22.00%"
              />
              <CardColors
                amount={dashboardCards.data?.peding_nc ?? 0}
                title="NC's sin resolver"
                color="#7878e8"
                text="Ultimo NC registrado hace 1 dia"
              />
              <CardColors
                amount={dashboardCards.data?.errors_deploy ?? 0}
                title="Cantidad de Errores"
                color="#f3777f"
                text="Ultimo error hace 2 horas"
              />
            </>
          }
        </div>
        <div className="item">
          {cpuReport.data !== null &&
            <CardServerDetail time={cpuReport.data?.time} deploys={cpuReport.data?.deploys} percentajeTime={cpuReport.data?.percentaje_time} />
          }
        </div>
        <div className="item">
          {reportCommits.data !== null &&
            <CardCommitsReport reportCommits={reportCommits.data} />
          }
        </div>
      </div>
      <div className="item-big">
        {releaseResume.data !== null &&
          <CardResume releaseResume={releaseResume.data} />
        }
      </div>
    </section>
  )
}

export default Dashboard