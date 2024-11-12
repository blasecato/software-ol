import TableProjects from "./components/table/TableProjects"
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../services/_common/hooks";
import { getProjects } from "../../../services/projects/projects.thunk";
import { IProjects } from "../../../services/projects/projects.constants";
import ModalFormProjects from "./components/modal/ModalFormProjects";

const Projects = () => {
  const dispatch = useAppDispatch();
  const { listProjects } = useAppSelector(({ projects }) => projects);
  const [isListProjects, setListProjects] = useState<IProjects[]>([])

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch])

  useEffect(() => {
    if (listProjects?.data?.length >= 1) {
      setListProjects(listProjects?.data)
    }
  }, [listProjects])

  return (
    <div className="Projects">
      <h2 className="h2">Lista de proyectos registrados</h2>
      <div className="flex flex-end">
        <ModalFormProjects title={<span>Agregar proyecto</span>} />
      </div>
      <TableProjects listProjects={isListProjects} />
    </div>
  )
}

export default Projects