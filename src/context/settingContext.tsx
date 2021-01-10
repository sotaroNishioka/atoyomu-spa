import { createContext } from 'react';
import { UserSetting } from '../domain/userSetting';

const SettingContext = createContext<UserSetting | undefined>(undefined);

export default SettingContext;
