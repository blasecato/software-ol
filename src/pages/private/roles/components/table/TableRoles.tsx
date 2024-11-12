
import { Table } from 'antd';
import type { TableProps } from 'antd';

interface IRol {
  value: number
  label: string
}

interface Props {
  listRoles: IRol[]
}

const TableRoles = ({ listRoles }: Props) => {


  const columns: TableProps<IRol>['columns'] = [
    {
      title: 'ID',
      dataIndex: 'value',
      key: 'value',
    },
    {
      title: 'Nombre',
      dataIndex: 'label',
      key: 'label',
    },
  ];

  return (
    <Table<IRol>
      columns={columns}
      dataSource={listRoles}
      className='mt-20 Table'
      scroll={{ x: 'max-content' }}
    />
  )
}

export default TableRoles