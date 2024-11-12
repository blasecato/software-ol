
import { Button, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { IProjects } from '../../services/projects/projects.constants';
import { IUsers } from '../../services/users/users.constants';
import { DeleteOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../../services/_common/hooks';
import { deleteProject as deleteProjectAction } from '../../services/projects/projects.thunk';
import { deleteUser as deleteUserAction } from '../../services/users/users.thunk';


interface Props {
  project?: IProjects
  user?: IUsers
  title: React.ReactNode
}
const ModalDelete = ({ project, user, title }: Props) => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { deleteProject } = useAppSelector(({ projects }) => projects);
  const { deleteUser } = useAppSelector(({ users }) => users);

  const handleOk = (projectDelete?: IProjects, userDelete?: IUsers) => {
    if (projectDelete?.id !== undefined) {
      dispatch(deleteProjectAction(projectDelete?.id))
    }
    if (userDelete?.id !== undefined) {
      dispatch(deleteUserAction(userDelete.id))
    }
  };

  useEffect(() => {
    if (deleteProject?.loading === 'success' || deleteUser?.loading === 'success') {
      setTimeout(() => {
        window.location.reload()
      }, 1000);
    }
  }, [deleteProject?.loading, deleteUser?.loading])

  return (
    <section>
      <Button
        className='button button-primary'
        style={{ background: 'red' }}
        onClick={() => setIsModalOpen(true)}
      >
        <DeleteOutlined />
      </Button>
      <Modal
        className='modal-form'
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
      >
        <h2 className='h2'>Eliminar este {title}</h2>
        <div className="flex g-10 flex-btw btns mt-25">
          <Button className='button button-cancel' onClick={() => setIsModalOpen(false)}>
            Cancelar
          </Button>
          <Button className='button button-primary' onClick={() => handleOk(project, user)}>
            Aceptar
          </Button>
        </div>
      </Modal>
    </section>
  );
};

export default ModalDelete;