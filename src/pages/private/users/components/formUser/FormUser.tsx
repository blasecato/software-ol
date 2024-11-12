/* eslint-disable @typescript-eslint/no-explicit-any */

import type { FormProps, SelectProps } from 'antd';
import { Button, Form, Input, message, Select } from 'antd';
import { useAppDispatch } from '../../../../../services/_common/hooks';
import { IUsers } from '../../../../../services/users/users.constants';
import { createUser, updateUser } from '../../../../../services/users/users.thunk';

interface Props {
  handleCancel: () => void
  user?: IUsers
}

const FormUser = ({ handleCancel, user }: Props) => {
  const dispatch = useAppDispatch();

  const roles: SelectProps['options'] = [
    { value: 1, label: "Admin" },
    { value: 2, label: "Dev" }
  ]
  const areas: SelectProps['options'] = [
    { value: 1, label: "Soporte" },
    { value: 2, label: "Desarrollo" },
    { value: 3, label: "Diseño" },
    { value: 4, label: "RH" },
  ]
  const tecnologies: SelectProps['options'] = [
    { value: "React-Native", label: "React-Native" },
    { value: "Python", label: "Python" },
    { value: ".Net", label: ".Net" },
    { value: "VueJS", label: "VueJS" },
    { value: "React", label: "React" },
    { value: "SQLServer", label: "SQLServer" },
    { value: "Java", label: "Java" },
    { value: "Angular", label: "Angular" },
    { value: "NodeJS", label: "NodeJS" },
    { value: "mySql", label: "mySql" },
    { value: "JAVA", label: "JAVA" },
  ]
  const onFinish: FormProps<IUsers>['onFinish'] = (values) => {
    const namesList: any = values.list;
    const list = namesList?.join(" | ");

    const newValues: IUsers = {
      name: values.name,
      last_name: values.last_name,
      list: list,
      area: `${values.area}`,
      rol: values?.rol,
      url_photo: '',
    }

    if (user === undefined) {
      dispatch(createUser({ user: newValues }))
      handleCancel()
    } else {
      newValues.id = user.id
      dispatch(updateUser({ user: newValues }))
      handleCancel()
    }
  };

  const onFinishFailed: FormProps<IUsers>['onFinishFailed'] = () => {
    message.warning('llene el formulario')
  };

  return (
    <Form
      name="formUser"
      initialValues={user}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <div className='camp mt-10'>
        <span className='body-regular'>Nombre</span>
        <Form.Item<IUsers>
          name="name"
          rules={[{ required: true, message: 'Porfavor ingrese el nombre del usuario!' }]}
        >
          <Input defaultValue={user?.name} placeholder='Nombre' className='custom-input' />
        </Form.Item>
      </div>

      <div className='camp mt-10'>
        <span className='body-regular'>Apellido</span>
        <Form.Item<IUsers>
          name="last_name"
          rules={[{ required: true, message: 'Porfavor ingrese el apellido del usuario!' }]}
        >
          <Input defaultValue={user?.last_name} placeholder='Apellido' className='custom-input' />
        </Form.Item>
      </div>

      <div className='camp mt-10'>
        <span className='body-regular'>Rol</span>
        <Form.Item<IUsers>
          name="rol"
          rules={[{ required: true, message: 'Porfavor seleccione el rol!' }]}
        >
          <Select
            defaultValue={user?.rol}
            style={{ width: '100%' }}
            options={roles}
            placeholder="seleccione"
          />
        </Form.Item>
      </div>

      <div className='camp mt-10'>
        <span className='body-regular'>Tecnologias</span>
        <Form.Item<IUsers>
          name="list"
          rules={[{ required: true, message: 'Porfavor seleccione las tecnologias!' }]}
        >
          {/* <Input defaultValue={user?.list} className='custom-input' placeholder='seleccionar' />
           */}
          <Select
            mode="multiple"
            allowClear
            placeholder="Seleccione"
            options={tecnologies}
          />
        </Form.Item>
      </div>

      <div className='camp mt-10'>
        <span className='body-regular'>Area</span>
        <Form.Item<IUsers>
          name="area"
          rules={[{ required: true, message: 'Porfavor seleccione la Area!' }]}
        >
          <Select
            defaultValue={user?.area}
            style={{ width: '100%' }}
            options={areas}
            placeholder="seleccione"
          />
        </Form.Item>
      </div>

      <div className="flex g-10 flex-btw btns mt-25">
        <Button className='button button-cancel' onClick={handleCancel}>
          Cancelar
        </Button>
        <Button className='button button-primary' htmlType="submit">
          {user === undefined ? 'Agregar' : 'Editar'}
        </Button>
      </div>
    </Form>
  );
}

export default FormUser;