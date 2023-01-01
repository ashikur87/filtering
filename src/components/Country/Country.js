import React from 'react';
import Styles from './Country.module.css'

const Country = (props) => {
    const{flags,name,population,region,status}=props.country;
    return (
        <div className={Styles.single}>
        <h3>Flag:</h3>
        <img src={flags.png} alt="" />
        
      <h2>Name:{name.common}</h2>
      <h3>population:{population}</h3>
      <h4>Region:{region}</h4>
      <h4>Status:{status}</h4>
        </div>
    );
};

export default Country;