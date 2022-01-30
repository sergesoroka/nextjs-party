import React, { useState } from 'react';
import Vlada from '../icons/icons8-parliament.svg';
import Globe from '../icons/icons8-globe.svg';
import Corruption from '../icons/icons8-bribery.svg';
import Economy from '../icons/icons8-account.svg';
import Business from '../icons/icons8-growing-money.svg';
import Defense from '../icons/icons8-defense.svg';
import Gumanism from '../icons/icons8-save-the-children.svg';
import Safeness from '../icons/icons8-child-safe-zone.svg';
import Energy from '../icons/icons8-transmission-tower.svg';
import Infrastructure from '../icons/icons8-bridge.svg';
import Environment from '../icons/icons8-environment.svg';
import Court from '../icons/icons8-law.svg';
import Social from '../icons/icons8-mommy-and-me-classes.svg';
import Innovation from '../icons/icons8-innovation.svg';
import Education from '../icons/icons8-education.svg';
import Medicine from '../icons/icons8-doctors-bag.svg';
import CategoryItem from './CategoryItem';
import styles from './Table.module.css';

const CATEGORIES = [
  { _id: 1, category: 'vlada', name: 'Влада', icon: <Vlada /> },
  { _id: 2, category: 'corruption', name: 'Корупція', icon: <Corruption /> },
  { _id: 3, category: 'globalization', name: 'Геополітика', icon: <Globe /> },
  { _id: 4, category: 'defense', name: 'Оборона', icon: <Defense /> },
  { _id: 5, category: 'court', name: 'Судова система', icon: <Court /> },
  { _id: 6, category: 'safeness', name: 'Безпека', icon: <Safeness /> },
  { _id: 7, category: 'economy', name: 'Економіка', icon: <Economy /> },
  { _id: 8, category: 'business', name: 'Бізнес', icon: <Business /> },
  { _id: 9, category: 'social', name: 'Соцсфера', icon: <Social /> },
  { _id: 10, category: 'innovation', name: 'Інновації', icon: <Innovation /> },
  { _id: 11, category: 'energy', name: 'Енергетика', icon: <Energy /> },
  {
    _id: 12,
    category: 'infrastructure',
    name: 'Інфраструктура',
    icon: <Infrastructure />
  },
  { _id: 13, category: 'environment', name: 'Довкілля', icon: <Environment /> },
  {
    _id: 14,
    category: 'education',
    name: 'Освіта і наука',
    icon: <Education />
  },
  { _id: 15, category: 'medicine', name: 'Медицина', icon: <Medicine /> },
  {
    _id: 16,
    category: 'gumanism',
    name: 'Гуманітарна політика',
    icon: <Gumanism />
  }
];

function CheckBox({ handleFilters }) {
  const [Checked, setChecked] = useState([]);
  const handleOnChange = value => {
    const currentIndex = Checked.indexOf(value);
    const newChecked = [...Checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    handleFilters(newChecked);
  };

  const renderedCategoryList = CATEGORIES.map((value, index) => {
    return (
      <CategoryItem
        key={value._id}
        Checked={Checked}
        value={value}
        handleOnChange={handleOnChange}
      />
    );
  });

  return <div className={styles.categoryWrapper}>{renderedCategoryList}</div>;
}

export default CheckBox;
