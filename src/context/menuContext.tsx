import { createContext, useState } from 'react';

const MenuContext = createContext({});

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
