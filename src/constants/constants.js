import { generateRandomId } from '../utils/generateRandomId';

import { ReactComponent as HomeIcon } from '../components/Main/Tabs/img/home.svg';
import { ReactComponent as TopIcon } from '../components/Main/Tabs/img/top.svg';
import { ReactComponent as BestIcon } from '../components/Main/Tabs/img/best.svg';
import { ReactComponent as HotIcon } from '../components/Main/Tabs/img/hot.svg';

export const LIST = [
  { value: 'Главная', Icon: HomeIcon, link: 'rising' },
  { value: 'Топ', Icon: TopIcon, link: 'top' },
  { value: 'Лучшие', Icon: BestIcon, link: 'best' },
  { value: 'Горячие', Icon: HotIcon, link: 'hot' },
].map((item) => ({ ...item, id: generateRandomId() }));
