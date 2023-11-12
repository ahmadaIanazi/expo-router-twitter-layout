import { createContext, Context } from 'react';
import { ar } from './ar';
import { en } from './en';

type LocalizationData = typeof ar & typeof en

const Localization: Context<LocalizationData> = createContext<LocalizationData>({});

export default Localization;