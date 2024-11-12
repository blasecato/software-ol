/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd"
import {
  ApiOutlined,
  DashboardOutlined,
  LayoutOutlined,
  RightOutlined,
  UserOutlined
} from "@ant-design/icons"
import { useLocation, useNavigate } from 'react-router-dom';
import useMenuContext from "../../hooks/useMenuContext";


export const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { changeActionMenu }: any = useMenuContext()

  const itemsMenu = [
    { id: 1, title: 'Dashboard', icon: <DashboardOutlined />, path: '/' },
    { id: 2, title: 'Proyectos', icon: <LayoutOutlined />, path: '/projects' },
    { id: 3, title: 'Usuarios', icon: <UserOutlined />, path: '/users' },
    { id: 4, title: 'Roles', icon: <ApiOutlined />, path: '/' },
  ]

  const handleClick = (rute: string) => {
    changeActionMenu()
    navigate(rute);
  };

  return (
    <aside className="menu-left animate__animated animate__fadeInLeft">
      {itemsMenu?.map((item) => (
        <Button
          key={item.id}
          onClick={() => handleClick(item.path)}
          className={`link-item ${location.pathname === item.path && 'link-item-active'} flex flex-btw mt-5`}
        >
          <div className="flex g-5">
            {item.icon}
            {item.title}
          </div>
          <RightOutlined className="icon-r" />
        </Button>
      ))}
    </aside>
  )
}
