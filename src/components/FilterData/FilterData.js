import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import Styles from './FilterData.module.css'

const FilterData = () => {
    const [Countries, setCountries] = useState([]);

    const [filterData, setFilterData] = useState("");
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                setCountries(data);

            })
    }, [])
    
    return (
        <div>
            <h1>Hello from countries.</h1>
            <h4>Available countries:{Countries.length}</h4>
            <input

                // onChange={(e)=>setFilterData(e.target.value)}
                onChange={(e)=>setFilterData(e.target.value)}
                type="text" placeholder='search your country.........' />
            {/* destructuring */}
            <div className={Styles.countryContainer}>
                {
                    Countries.filter((val) => {
                        if (filterData === '') {
                            return val;
                        }else if(val.name.common.toLowerCase().includes(filterData.toLowerCase())){
                            return val
                        }
                    }).map(country =>
                        <Country
                            country={country}
                            key={country.cca3}
                        >

                        </Country>)
                }
            </div>
        </div>
    );
};

export default FilterData;