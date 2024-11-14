import { useEffect, useState } from "react";
import TableUsers from "./components/table/TableUsers"
import { useAppDispatch, useAppSelector } from "../../../services/_common/hooks";
import { getUsers } from "../../../services/users/users.thunk";
import { IUsers } from "../../../services/users/users.constants";
import ModalFormUsers from "./components/modal/ModalFormUser";

const Users = () => {
  const dispatch = useAppDispatch();
  const { listUsers } = useAppSelector(({ users }) => users);
  const [isListUsers, setListUsers] = useState<IUsers[]>([])

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch])

  useEffect(() => {
    if (listUsers?.data?.length >= 1) {
      setListUsers(listUsers?.data)
    }
  }, [listUsers])

  return (
    <div className="Users">
      <h2 className="h2">Lista de usuarios registrados</h2>
      <div className="flex flex-end">
        <ModalFormUsers title={<span>Agregar Usuario</span>} />
      </div>
      <TableUsers listUsers={isListUsers ?? []} />
    </div>
  )
}

export default Users