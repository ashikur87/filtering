import React, { useEffect, useState } from "react";
import Food from "../Foods";
import Item from "../Item/Item";
import Styles from "./Items.module.css";
//single filtering
const Items = () => {
  const [foods, setFoods] = useState(Food);
  const filterItem = (cateItem) => {
    const updateItems = Food.filter((e) => e.category === cateItem);
    setFoods(updateItems);
  };
//multifiltering
  const [foodTypes, setFoodTypes] = useState([]);
  const [it, setIt] = useState([]);

  const handleCheckBox = (e) => {
    const Value = e.target.value;
    const items = Food.filter((e) => e.category === Value);
    console.log("itemsfilter data console", items);

    const checked = e.target.checked;
    console.log(Value, checked);

    if (checked) {
      const filterfood = [...foodTypes, items]
      setFoodTypes(filterfood)

      // setIt(foodTypes);
    } else {
      setFoodTypes(foodTypes.filter((e) => e !== Value));
    }
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log('foodTypes data console',foodTypes);
    // foodTypes.map((item) => {
    // console.log("------------aa", item);
    // <h2>Name:{item.length}</h2>
    // item.map((data) => {

    //   <h2>Name:{data.category}</h2>
    //   console.log("..................", data);
    // });
    // }
    // );
  };

  return (
    <div>
      <h1>Order Your Favourite Dish:</h1>
      <h4>Available FoodItems:{foods.length}</h4>
      {/* //single filtering */}
      <div>
        <div className={Styles.btn}>
          <button className={Styles.all} onClick={() => setFoods(Food)}>
            All
          </button>
          <button
            className={Styles.all}
            onClick={() => filterItem("Breakfast")}
          >
            Breakfast
          </button>
          <button className={Styles.all} onClick={() => filterItem("Lunch")}>
            Lunch
          </button>
          <button className={Styles.all} onClick={() => filterItem("Dinner")}>
            Dinner
          </button>
        </div>
      </div>
      <div className={Styles.items}>
        <form action="" onSubmit={handlesubmit}>
          <div className={Styles.item}>
            <input
              onClick={() => setFoods(Food)}
              type="checkbox"
              name="Breakfast"
              id=""
            />
            <p>All</p>
          </div>
          {/* multifiltering */}
          <div className={Styles.item}>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              name="Breakfast"
              value="Breakfast"
            />
           
            <p>BreakFast</p>
          </div>
          <div className={Styles.item}>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              name="Lunch"
              value="Lunch"
              id=""
            />
           
            <p>Lunch</p>
          </div>
          <div className={Styles.item}>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              name="Dinner"
              value="Dinner"
              id=""
            />
           
            <p>Dinner</p>
          </div>
          <button>submit</button>
        </form>
      </div>
      <div>
       {
        
        foodTypes.map((item)=>{
          console.log('ooooooooooooooooooo',foodTypes)
          console.log('item',item);
          
          item.map((data)=>{
            console.log(data);
          })
        })
       }
      </div>
      {/* {foodTypes.map((item) => {
        item.map((data) => (
          <div >
            <h3>Food Item Image:</h3>
            <img src="" alt="" />

            <h2>Name:</h2>
            <h3>Category:</h3>
            <h4>Price:</h4>
          </div>
        ));
      })} */}



      {/* destructuring */}
      <div className={Styles.foodContainer}>
        {foods.map((food) => (
          <Item food={food} key={food.id}></Item>
        ))}
      </div>

    </div>
  );
};

export default Items;
