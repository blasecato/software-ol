
import type { FormProps } from 'antd';
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

  const roles = [
    { value: 1, label: "Admin" },
    { value: 2, label: "Dev" }
  ]
  const onFinish: FormProps<IUsers>['onFinish'] = (values) => {
    const newValues: IUsers = {
      name: values.name,
      last_name: values.last_name,
      list: values.list,
      area: values.area,
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
      name="formProject"
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
          />
        </Form.Item>
      </div>

      <div className='camp mt-10'>
        <span className='body-regular'>Tecnologias</span>
        <Form.Item<IUsers>
          name="list"
          rules={[{ required: true, message: 'Porfavor seleccione las tecnologias!' }]}
        >
          <Input defaultValue={user?.list} className='custom-input' placeholder='seleccionar' />
        </Form.Item>
      </div>

      <div className='camp mt-10'>
        <span className='body-regular'>Area</span>
        <Form.Item<IUsers>
          name="area"
          rules={[{ required: true, message: 'Porfavor seleccione la Area!' }]}
        >
          <Input defaultValue={user?.area} className='custom-input' placeholder='Seleccionar' />
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