/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table } from 'antd';
import type { TableProps } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import ModalFormUsers from '../modal/ModalFormUser';
import ModalDelete from '../../../../../components/modals/ModalDelete';
import { IUsers } from '../../../../../services/users/users.constants';
import avatarPng from '../../../../../assets/images/avatar.png';
import { useEffect, useState } from 'react';
import { getToken } from '../../../../../services/_common/api';
import { IAdmin } from '../../../../../services/auth/auth.constants';

interface Props {
  listUsers: IUsers[]
}

const TableUsers = ({ listUsers }: Props) => {
  const [user, setUser] = useState<IAdmin>()

  useEffect(() => {
    const token: any = getToken()
    setUser(token);
  }, [])

  const columns: TableProps<IUsers>['columns'] = [
    {
      dataIndex: 'avatar',
      key: 'avatar',
      render: () => (
        <img src={avatarPng} alt='avatar' className='avatar' />
      ),
    },
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Apellido',
      dataIndex: 'last_name',
      key: 'last_name',
    },
    {
      title: 'Rol',
      dataIndex: 'rol',
      key: 'rol',
      render: (_, record) => (
        <span >
          {record.rol === 1 ?
            'Admin'
            :
            'Dev'
          }
        </span>
      ),
    },
    {
      title: 'Tecnologias',
      dataIndex: 'list',
      key: 'list',
      render: (_, record) => {
        let items: any = []
        if (Array.isArray(record.list)) {
          items = record.list
        }
        else {
          items = record.list.split('|');
        }
        return (
          <ul key={`item-${record.name}`}>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )
      },
    },
    {
      title: 'Area',
      dataIndex: 'area',
      key: 'area',
      render: (_, record) => (
        <span >
          {record.area === '1' ?
            'Soporte'
            :
            record.area === '2' ? 'Desarrollo'
              :
              record.area === '3' ? 'Diseño'
                :
                record.area === '4' ? 'RH' : record.area
          }
        </span>
      ),
    },
    {
      title: 'Editar/Eliminar',
      key: 'edit-delete',
      dataIndex: 'edit-delete',
      render: (_, record: any) => (
        user?.user === "admin" && (
          <div className='flex g-10'>
            <ModalFormUsers user={record} title={<EditOutlined />} />
            <ModalDelete title='Usuario' user={record} />
          </div>
        )
      ),
    },
  ];

  return (
    <Table<IUsers>
      columns={columns}
      dataSource={listUsers}
      className={`mt-20 Table ${user?.user !== 'admin' && 'Table-admin'}`}
      scroll={{ x: 'max-content' }}
    />
  )
}

export default TableUsers