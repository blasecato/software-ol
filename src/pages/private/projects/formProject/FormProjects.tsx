/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { type IProjects } from '../../../../services/projects/projects.constants';
import { useAppDispatch, useAppSelector } from '../../../../services/_common/hooks';
import { createProject, updateProject } from '../../../../services/projects/projects.thunk';
import { useEffect } from 'react';


interface Props {
  handleCancel: () => void
  project?: IProjects
}

const FormProjects = ({ handleCancel, project }: Props) => {
  const dispatch = useAppDispatch();
  const { loading }: any = useAppSelector(({ projects }) => projects.createProject);
  const { loading: loadUpdate }: any = useAppSelector(({ projects }) => projects.updateProject);

  const onFinish: FormProps<IProjects>['onFinish'] = (values) => {
    const newValues: IProjects = {
      project_name: values.project_name,
      repo_url: values.repo_url,
      client: values.client,
      developers: values.developers,
      ci: values.ci ?? false,
      cd: values.cd ?? false,
      frontend_tecnology: values.frontend_tecnology,
      backend_tecnology: values.backend_tecnology,
      databases: values.databases,
      errors_count: project?.errors_count ?? 0,
      warning_count: project?.warning_count ?? 0,
      deploy_count: project?.deploy_count ?? 0,
      percentage_completion: project?.percentage_completion ?? 0,
      report_nc: project?.report_nc ?? 0,
      status: "En Desarrollo"
    }

    if (project === undefined) {
      dispatch(createProject({ project: newValues }))
    } else {
      newValues.id = project.id
      dispatch(updateProject({ project: newValues }))
    }
  };

  useEffect(() => {
    if (loading === 'success' || loadUpdate === 'success') {
      setTimeout(() => {
        window.location.reload()
      }, 1000);
    }
  }, [loading, loadUpdate])

  const onFinishFailed: FormProps<IProjects>['onFinishFailed'] = () => {
    message.warning('llene el formulario')
  };

  return (
    <Form
      name="formProject"
      initialValues={project}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <div className='camp mt-10'>
        <span className='body-regular'>Nombre del proyecto</span>
        <Form.Item<IProjects>
          name="project_name"
          rules={[{ required: true, message: 'Porfavor ingrese el nombre del proyecto!' }]}
        >
          <Input defaultValue={project?.project_name} placeholder='Nombre del proyecto' className='custom-input' />
        </Form.Item>
      </div>

      <div className='camp mt-10'>
        <span className='body-regular'>Nombre del cliente</span>
        <Form.Item<IProjects>
          name="client"
          rules={[{ required: true, message: 'Porfavor ingrese el nombre del cliente!' }]}
        >
          <Input defaultValue={project?.client} placeholder='Nombre del cliente' className='custom-input' />
        </Form.Item>
      </div>

      <div className='camp mt-10'>
        <span className='body-regular'>Nombre del Repositorio</span>
        <Form.Item<IProjects>
          name="repo_url"
          rules={[{ required: true, message: 'Porfavor ingrese el nombre del Repositorio!' }]}
        >
          <Input defaultValue={project?.repo_url} placeholder='Nombre del repositorio' className='custom-input' />
        </Form.Item>
      </div>

      <Form.Item<IProjects> name="ci" valuePropName="checked" className='mt-10'>
        <Checkbox defaultChecked={project?.ci}>Tiene Integracion Continua</Checkbox>
      </Form.Item>

      <Form.Item<IProjects> name="cd" valuePropName="checked">
        <Checkbox defaultChecked={project?.cd}>Tiene Despliegue Continuo</Checkbox>
      </Form.Item>

      <div className='camp mt-10'>
        <span className='body-regular'>Nombre de los Desarrolladores</span>
        <Form.Item<IProjects>
          name="developers"
          rules={[{ required: true, message: 'Porfavor ingrese el nombre de los desarrolladores!' }]}
        >
          <Input defaultValue={project?.developers} className='custom-input' placeholder='Desarrollador 1 | Desarrollador 2 ...' />
        </Form.Item>
      </div>

      <div className='camp mt-10'>
        <span className='body-regular'>Frontend</span>
        <Form.Item<IProjects>
          name="frontend_tecnology"
          rules={[{ required: true, message: 'Porfavor ingrese la tecnologia!' }]}
        >
          <Input defaultValue={project?.frontend_tecnology} className='custom-input' placeholder='Reactjs... angularjs...' />
        </Form.Item>
      </div>

      <div className='camp mt-10'>
        <span className='body-regular'>Backend</span>
        <Form.Item<IProjects>
          name="backend_tecnology"
          rules={[{ required: true, message: 'Porfavor ingrese la tecnologia!' }]}
        >
          <Input defaultValue={project?.backend_tecnology} className='custom-input' placeholder='.NET... Nestjs...' />
        </Form.Item>
      </div>

      <div className='camp mt-10'>
        <span className='body-regular'>Base de datos</span>
        <Form.Item<IProjects>
          name="databases"
          rules={[{ required: true, message: 'Porfavor ingrese la tecnologia!' }]}
        >
          <Input defaultValue={project?.databases} className='custom-input' placeholder='mySql... Postgresql... mongoDB...' />
        </Form.Item>
      </div>

      <div className="flex g-10 flex-btw btns mt-25">
        <Button className='button button-cancel' onClick={handleCancel}>
          Cancelar
        </Button>
        <Button className='button button-primary' htmlType="submit">
          {project === undefined ? 'Agregar' : 'Editar'}
        </Button>
      </div>
    </Form>
  );
}

export default FormProjects;