import LogoPng from '../../../assets/images/logo-OL.png'
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { Link } from 'react-router-dom';
import { login as loginAction } from '../../../services/auth/auth.thunk';
import { useAppDispatch } from '../../../services/_common/hooks';

type FieldType = {
  user?: string;
  password?: string;
  remember?: string;
};

export const Login = () => {
  const dispatch = useAppDispatch();
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    dispatch(loginAction(values));
  };
  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = () => {
    message.warning('Llene el formulario porfavor')
  };
  return (
    <aside className="Login">
      <div className="container flex items-center">
        <div className="card-login">
          <img src={LogoPng} alt="logo" className="logo" />
          <p className="body-bold mt-20">Bienvenido al gestor de proyectos</p>
          <p className="small-detail">Necesitamos tu usuario y contraseña</p>
          <Form
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className='form-login'
          >
            <Form.Item<FieldType>
              name="user"
              rules={[{ required: true, message: 'Porfavor ingrese su nombre de usuario!' }]}
            >
              <Input className='custom-input mt-15' placeholder='Nombre de usuario Ej: nombre.apellido' />
            </Form.Item>
            <Form.Item<FieldType>
              name="password"
              rules={[{ required: true, message: 'Porfavor ingrese la contraseña!' }]}
            >
              <Input.Password className='custom-input mt-15' placeholder='Aqui va tu contraseña.' />
            </Form.Item>
            <Form.Item>
              <Button className='button button-primary mt-20' htmlType="submit">
                Ingresar
              </Button>
            </Form.Item>
            <div className='flex flex-btw items-center mt-5'>
              <Form.Item<FieldType>
                name="remember"
                valuePropName="checked"
              >
                <Checkbox>Permanecer conectado</Checkbox>
              </Form.Item>
              <Link to='/' className='button button-link'>Recuperar contraseña</Link>
            </div>
          </Form>
        </div>
      </div>
    </aside>
  )
}
