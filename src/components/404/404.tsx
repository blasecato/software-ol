import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <aside className="Page404">
      <div className="container">
        <div className="flex">
          <h3 className="text-error">404</h3>
          <div className="flex flex-column justify-center">
            <h3 className="h2">Sorry!</h3>
            <p className="body-regular">Parece que a donde vas no es a donde podemos ir...</p>
          </div>
        </div>
        <Link to='/' className="body-small">Regresar a la sala</Link>
        <p className="body-small">Copyright &copy; 2024 All rights recerved. OLSoftware</p>
      </div>
    </aside>
  );
};

export default Page404;
