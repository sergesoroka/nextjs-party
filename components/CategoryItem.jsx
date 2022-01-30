import React, { useState } from 'react';
import styles from './Table.module.css';

export default function CategoryItem({ Checked, value, handleOnChange }) {
  const [active, setActive] = useState(false);
  return (
    <div
      className={active ? styles.categoryButtonActive : styles.categoryButton}
      key={value._id}
      onClick={() => {
        handleOnChange(value.name);
        setActive(!active);
      }}
    >
      <input
        style={{ display: 'none' }}
        type='checkbox'
        id='topping'
        name='topping'
        value='Paneer'
        checked={Checked.indexOf(value._id) === -1 ? false : true}
        onChange={() => {}}
      />
      <span
        className={active ? styles.categoryIconActive : styles.categoryIcon}
      >
        {value.icon}
      </span>
      <span
        className={active ? styles.categoryNameActive : styles.categoryName}
      >
        {value.name}
      </span>
    </div>
  );
}
