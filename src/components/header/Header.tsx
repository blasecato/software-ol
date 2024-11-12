/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Popover, Checkbox } from "antd";
import { useEffect, useState } from "react";
import { relativeTime } from "../../common/utils";
import { useAppDispatch, useAppSelector } from "../../services/_common/hooks";
import { getNotifications, getTasks } from "../../services/notification/notification.thunk";
import { ITasks, type INotification } from "../../services/notification/notification.constants";
import LogoPng from '../../assets/images/logo-OL.png'
import {
  BellOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  CloseOutlined,
  DashOutlined,
  LogoutOutlined,
  MenuOutlined,
  WarningOutlined
} from "@ant-design/icons";
import useMenuContext from "../../hooks/useMenuContext";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { notifications, tasks } = useAppSelector(({ notification }) => notification);
  const { changeActionMenu }: any = useMenuContext()
  const [listNotificatios, setListNotifications] = useState<INotification[]>([])
  const [listTasks, setListTasks] = useState<ITasks[]>([])

  useEffect(() => {
    dispatch(getNotifications());
    dispatch(getTasks());
  }, [dispatch])

  useEffect(() => {
    if (notifications?.data?.length >= 1) {
      setListNotifications(notifications.data)
    }
  }, [notifications])

  useEffect(() => {
    if (tasks?.data?.length >= 1) {
      setListTasks(tasks.data)
    }
  }, [tasks])

  const contentAlerts = (list: INotification[]) => {
    return (
      <div className="popover-alert-item">
        {list?.map((notification) => (
          <div key={`notification-${notification.id}-${notification.time}`} className="notification flex items-center mt-10 g-10">
            <div className={`circle-icon circle-icon-${notification.type}`}>
              {notification.type === 'error' &&
                <CloseCircleOutlined color="#fff" />
              }
              {notification.type === 'info' &&
                <CheckCircleOutlined color="#fff" />
              }
              {notification.type === 'warning' &&
                <WarningOutlined color="#fff" />
              }
            </div>
            <div className="flex flex-column">
              <p>{notification.details}</p>
              <p>{relativeTime(notification.time)}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  const contentTasks = (list: ITasks[]) => {
    return (
      <div className="popover-alert-item">
        <div className="head flex flex-btw items-center">
          <h2>Pendientes</h2>
          <Button className="button button-primary">
            Agregar
          </Button>
        </div>
        {list?.map((task) => (
          <div
            key={`task-${task.id}-${task.description}`}
            className={`task flex items-center flex-btw mt-10 g-10 task-${task.check && 'check'}`}
          >
            <Checkbox defaultChecked={task.check}>{task.description}</Checkbox>
            <Button className="button button-link">
              <CloseOutlined className="close" />
            </Button>
          </div>
        ))}
      </div>
    );
  }

  const contentAvatar = () => {
    const logout = () => {
      navigate('/')
      localStorage.removeItem('Token');
      window.location.reload()
    }
    return (
      <Button
        className="button button-link"
        style={{ width: 200, boxShadow: 'none' }}
        onClick={() => logout()}
      >
        <LogoutOutlined />
        Logout
      </Button>
    )
  }

  return (
    <aside className="Header">
      <div className="container flex flex-btw items-center">
        <div className="flex g-100 items-center">
          <Link to='./'>
            <img src={LogoPng} alt="logo" className="logo" />
          </Link>
          <Button className="button button-link" onClick={() => changeActionMenu()}><MenuOutlined /></Button>
        </div>
        <div className="flex flex-btw items-center g-15">
          <Popover placement="bottomRight" content={contentAlerts(listNotificatios)} title="Notificaciones">
            <div className="alert">
              {notifications?.data?.length >= 1 &&
                <div className="circle" />
              }
              <Button className="button button-link"><BellOutlined /></Button>
            </div>
          </Popover>
          <Popover placement="bottomRight" content={contentAvatar}>
            <img src="https://cdn-icons-png.flaticon.com/512/6858/6858504.png" alt="avatar" className="avatar" />
          </Popover>
          <Popover placement="bottomRight" content={contentTasks(listTasks)}>
            <Button className="button button-link"><DashOutlined /></Button>
          </Popover>
        </div>
      </div>
    </aside>
  );
};

export default Header;
