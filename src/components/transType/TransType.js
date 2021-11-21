import React,{useState} from 'react';
import styles from './TransType.module.css'


const TransType = () => {
  const [isChecked, setIsChecked] = useState(false);
 const handleChange = ()=> {
  setIsChecked(!isChecked);
 } 

  return (
        <div className={styles.switchWraper}>
          <span className={styles.income} 
          style={{color:isChecked ? "#E0E0E0": "#24CCA7"}}>
            Доход
          </span>
          <label className={styles.switch}>
           <input type="checkbox" className={styles.sliderInput} 
            onChange = {handleChange}/>
             <span className={styles.slider}></span>
          </label>
          <span className={styles.cost} 
          style={{color:isChecked ? "#FF6596": "#E0E0E0"}}>Расход</span>
        </div>
  )
};

export default TransType;
