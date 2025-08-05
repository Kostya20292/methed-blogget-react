import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import { debounceRef } from '../../../utils/debounce';

import { LIST } from '../../../constants/constants';

import { ReactComponent as ArrowIcon } from './img/arrow.svg';

import style from './Tabs.module.css';

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
    const debounceResize = debounceRef(handleResize);

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
        <ul className={style.list}>
          {LIST.map(({ value, id, Icon, link }) => (
            <Link
              className={style.item}
              key={id}
              to={`/category/${link}`}
              onClick={(e) => {
                handleClick(e);
              }}
            >
              <button className={style.btn}>
                {value}
                {Icon && <Icon width={30} height={30} />}
              </button>
            </Link>
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
