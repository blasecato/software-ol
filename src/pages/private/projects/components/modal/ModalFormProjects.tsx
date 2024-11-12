
import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import { IProjects } from '../../../../../services/projects/projects.constants';
import FormProjects from '../formProject/FormProjects';

interface Props {
  project?: IProjects
  title: React.ReactNode
}
const ModalFormProjects = ({ project, title }: Props) => {
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
        title={project === undefined ? "Creemos un Proyecto" : 'Editar proyecto'}
        open={isModalOpen}
        onCancel={handleCancel}
        className='modal-form'
      >
        <FormProjects handleCancel={handleCancel} project={project} />
      </Modal>
    </section>
  );
};

export default ModalFormProjects;