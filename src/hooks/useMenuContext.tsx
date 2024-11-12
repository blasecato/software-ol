import { useContext } from 'react';
import MenuContext from '../context/menuContext';

const useMenuContext = () => {
  return useContext(MenuContext);
};

export default useMenuContext;
