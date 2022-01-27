import React, { useState } from 'react';
import Vlada from '../icons/icons8-parliament.svg'
import Globe from '../icons/icons8-globe.svg'
import Corruption from '../icons/icons8-bribery.svg'
import Economy from '../icons/icons8-account.svg'
import Business from '../icons/icons8-growing-money.svg'
import Defense from '../icons/icons8-defense.svg'
import Gumanism from '../icons/icons8-save-the-children.svg'
import Safeness from '../icons/icons8-child-safe-zone.svg'
import Energy from '../icons/icons8-transmission-tower.svg'
import Infrastructure from '../icons/icons8-bridge.svg'
import Environment from '../icons/icons8-environment.svg'
import styles from './Table.module.css';

const PRODUCTS = [
  { category: "vlada", name: "Влада", icon: <Vlada /> },
  { category: "policy", name: "Глобалізація", icon: <Globe /> },
  { category: "corruption", name: "Корупція",icon: <Corruption /> }
];

export default function SelectCategory() {

const renderedCategory = PRODUCTS.map(cat => {
  return (
    <div className={styles.categoryButton} key={cat.category}>     
        <span className={styles.categoryIcon}>{cat.icon}</span>
        <span className={styles.categoryName}>{cat.name}</span>
      </div>
  )
})

  return (
    <div className={styles.categoryWrapper}>
    {/* {renderedCategory} */}
      <div className={styles.categoryButton}>     
        <Globe className={styles.categoryIcon}/>
        <span className={styles.categoryName}>Глобалізація</span>
      </div>
      <div className={styles.categoryButton}>     
        <Vlada className={styles.categoryIcon}/>
        <span className={styles.categoryName}>Влада</span>
      </div>
      <div className={styles.categoryButton}>     
        <Corruption className={styles.categoryIcon}/>
        <span className={styles.categoryName}>Корупція</span>
      </div>
      <div className={styles.categoryButton}>     
        <Economy className={styles.categoryIcon}/>
        <span className={styles.categoryName}>Экономіка</span>
      </div>
      <div className={styles.categoryButton}>     
        <Business className={styles.categoryIcon}/>
        <span className={styles.categoryName}>Бізнес</span>
      </div>
      <div className={styles.categoryButton}>     
        <Defense className={styles.categoryIcon}/>
        <span className={styles.categoryName}>Оборона</span>
      </div>
      <div className={styles.categoryButton}>     
        <Gumanism className={styles.categoryIcon}/>
        <span className={styles.categoryName}>Гуманітарна політика</span>
      </div>
      <div className={styles.categoryButton}>     
        <Safeness className={styles.categoryIcon}/>
        <span className={styles.categoryName}>Безпека</span>
      </div>
      <div className={styles.categoryButton}>     
        <Energy className={styles.categoryIcon}/>
        <span className={styles.categoryName}>Енергетика</span>
      </div>
      <div className={styles.categoryButton}>     
        <Infrastructure className={styles.categoryIcon}/>
        <span className={styles.categoryName}>Інфраструктура</span>
      </div>
      <div className={styles.categoryButton}>     
        <Environment className={styles.categoryIcon}/>
        <span className={styles.categoryName}>Довкілля</span>
      </div>
    </div>
  );
}
