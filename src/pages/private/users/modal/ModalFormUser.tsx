
import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import FormUser from '../formUser/FormUser';
import { IUsers } from '../../../../services/users/users.constants';

interface Props {
  user?: IUsers
  title: React.ReactNode
}
const ModalFormUsers = ({ user, title }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <section>
      <Button className="button button-primary" onClick={() => setIsModalOpen(true)}>
        {title}
      </Button>
      <Modal
        title={user === undefined ? "Creemos un usuario" : 'Editar usuario'}
        open={isModalOpen}
        onCancel={handleCancel}
        className='modal-form'
      >
        <FormUser handleCancel={handleCancel} user={user} />
      </Modal>
    </section>
  );
};

export default ModalFormUsers;