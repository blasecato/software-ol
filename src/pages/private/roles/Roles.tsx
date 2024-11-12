import TableRoles from "./components/table/TableRoles"

const Roles = () => {
  const roles = [
    { value: 1, label: "Admin" },
    { value: 2, label: "Dev" }
  ]
  return (
    <div className="Roles">
      <h2 className="h2">Lista de Roles</h2>
      <TableRoles listRoles={roles} />
    </div>
  )
}

export default Roles