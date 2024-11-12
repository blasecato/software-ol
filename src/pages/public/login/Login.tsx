import LogoPng from '../../../assets/images/logo-OL.png'
import { FormLogin } from './components/formLogin/FormLogin';


export const Login = () => {
  return (
    <aside className="Login">
      <div className="container flex items-center">
        <div className="card-login">
          <img src={LogoPng} alt="logo" className="logo" />
          <p className="body-bold mt-20">Bienvenido al gestor de proyectos</p>
          <p className="small-detail">Necesitamos tu usuario y contraseña</p>
          <FormLogin />
        </div>
      </div>
    </aside>
  )
}
