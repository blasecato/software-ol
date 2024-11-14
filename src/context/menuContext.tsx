import { createContext, useState } from 'react';

interface MenuContextType {
  isMenuOpen: boolean;
  changeActionMenu: () => void
  // Otros valores o funciones del contexto, si los tienes
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

interface Props {
  children: React.ReactNode;
};

const MenuProvider = ({ children }: Props) => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false)
  const changeActionMenu = () => {
    setMenuOpen(!isMenuOpen)
  }
  return (
    <MenuContext.Provider
      value={{
        isMenuOpen,
        changeActionMenu
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};


export { MenuProvider };
export default MenuContext;
