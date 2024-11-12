/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table } from 'antd';
import type { TableProps } from 'antd';
import { IProjects } from '../../../../services/projects/projects.constants';
import { CheckOutlined, CloseCircleOutlined, EditOutlined } from '@ant-design/icons';
import ModalFormProjects from '../modal/ModalFormProjects';
import ModalDelete from '../../../../components/modals/ModalDelete';
import { useEffect, useState } from 'react';
import { getToken } from '../../../../services/_common/api';
import { IAdmin } from '../../../../services/auth/auth.constants';

interface Props {
  listProjects: IProjects[]
}

const TableProjects = ({ listProjects }: Props) => {
  const [user, setUser] = useState<IAdmin>()

  useEffect(() => {
    const token: any = getToken()
    setUser(token);
  }, [])

  const columns: TableProps<IProjects>['columns'] = [
    {
      title: 'Proyecto',
      dataIndex: 'project_name',
      key: 'project_name',
    },
    {
      title: 'Cliente',
      dataIndex: 'client',
      key: 'client',
    },
    {
      title: 'Repositorio',
      dataIndex: 'project_name',
      key: 'project_name',
    },
    {
      title: 'Desarrolladores',
      dataIndex: 'developers',
      key: 'developers',
      render: (_, record) => {
        const items = record.developers.split('|');
        return (
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )
      },
    },
    {
      title: 'CI',
      key: 'ci',
      render: (_, record) => (
        <span >
          {record.ci ?
            <CheckOutlined style={{ color: "green" }} />
            :
            <CloseCircleOutlined style={{ color: 'red' }} />
          }
        </span>
      ),
    },
    {
      title: 'CD',
      key: 'cd',
      render: (_, record) => (
        <span >
          {record.cd ?
            <CheckOutlined style={{ color: "green" }} />
            :
            <CloseCircleOutlined style={{ color: 'red' }} />
          }
        </span>
      ),
    },
    {
      title: 'Frontend',
      dataIndex: 'frontend_tecnology',
      key: 'frontend_tecnology',
      render: (_, record) => {
        const items = record.frontend_tecnology.split('|');
        return (
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )
      },
    },
    {
      title: 'Backend',
      dataIndex: 'backend_tecnology',
      key: 'backend_tecnology',
      render: (_, record) => {
        const items = record.backend_tecnology.split(',');
        return (
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )
      },
    },
    {
      title: 'DB',
      dataIndex: 'databases',
      key: 'databases',
      render: (_, record) => {
        const items = record.databases.split('|');
        return (
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )
      },
    },
    {
      title: 'Alertas',
      key: 'warning_count',
      render: (_, record) => (
        <span style={{ color: '#d4e027' }}>
          {record.warning_count}
        </span>
      ),
    },
    {
      title: 'Errores',
      key: 'errors_count',
      render: (_, record) => (
        <span style={{ color: '#e04327' }}>
          {record.errors_count}
        </span>
      ),
    },
    {
      title: 'Cant. despliegues',
      key: 'deploy_count',
      render: (_, record) => (
        <span style={{ color: '#2777e0' }}>
          {record.deploy_count}
        </span>
      ),
    },
    {
      title: 'Avance',
      key: 'percentage_completion',
      render: (_, record) => (
        <span style={{ color: '#46e027' }}>
          {record.percentage_completion}%
        </span>
      ),
    },
    {
      title: 'Reporte NC',
      key: 'report_nc',
      render: (_, record) => (
        <span style={{ color: '#e02727' }}>
          {record.report_nc}
        </span>
      ),
    },
    {
      title: 'Estado',
      key: 'status',
      render: (_, record) => (
        <p className='inDev'>
          {record.status}
        </p>
      ),
    },
    {
      title: 'Editar/Eliminar',
      key: 'edit-delete',
      render: (_, record: any) => (
        user?.user === "admin" && (
          <div className='flex g-10'>
            <ModalFormProjects project={record} title={<EditOutlined />} />
            <ModalDelete title='Proyecto' project={record} />
          </div>
        )
      ),
    },
  ];

  return (
    <Table<IProjects>
      columns={columns}
      dataSource={listProjects}
      className={`mt-20 Table ${user?.user !== 'admin' && 'Table-admin'}`}
      scroll={{ x: 'max-content' }}
    />
  )
}

export default TableProjects