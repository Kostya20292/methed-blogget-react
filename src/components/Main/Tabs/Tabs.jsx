import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

import { generateRandomId } from '../../../utils/generateRandomId.js';
import { debounceRaf } from '../../../utils/debounce';

import { ReactComponent as HomeIcon } from './img/home.svg';
import { ReactComponent as TopIcon } from './img/top.svg';
import { ReactComponent as BestIcon } from './img/best.svg';
import { ReactComponent as HotIcon } from './img/hot.svg';
import { ReactComponent as ArrowIcon } from './img/arrow.svg';

import style from './Tabs.module.css';

const LIST = [
  { value: 'Главная', Icon: HomeIcon },
  { value: 'Топ', Icon: TopIcon },
  { value: 'Лучшие', Icon: BestIcon },
  { value: 'Горячие', Icon: HotIcon },
].map((item) => ({ ...item, id: generateRandomId() }));

export const Tabs = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isDropDown, setIsDropDown] = useState(true);
  const [dropDownTitle, setDropDownTitle] = useState('Главная');

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropDown(true);
    } else {
      setIsDropDown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);

    debounceResize();

    window.addEventListener('resize', debounceResize);

    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  const handleClick = (e) => {
    setDropDownTitle(e.target.textContent);
    setIsDropDownOpen(false);
  };

  return (
    <div className={style.container}>
      {isDropDown && (
        <div className={style.wrapperBtn}>
          <button className={style.btn} onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
            {dropDownTitle}
            <ArrowIcon width={15} height={15} />
          </button>
        </div>
      )}

      {(isDropDownOpen || !isDropDown) && (
        <ul className={style.list} onClick={handleClick}>
          {LIST.map(({ value, id, Icon }) => (
            <li className={style.item} key={id}>
              <button className={style.btn}>
                {value}
                {Icon && <Icon width={30} height={30} />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
};
