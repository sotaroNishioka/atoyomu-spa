import { createContext } from 'react';

const SettingContext = createContext<{ showRead: boolean }>({
  showRead: false,
});

export default SettingContext;
