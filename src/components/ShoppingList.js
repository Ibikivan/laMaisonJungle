import { useState, useEffect } from "react";
import { plantList } from "../datas/plantList";
import '../styles/ShoppingList.css';
import PlantItem from "./PlantItem";
import Categories from "./Categories";
import { addToCart } from "../utilities/helpers";

function showCategory(currentCat, plantList) {
    if (currentCat === "---") {
        return plantList;
    } else {
        return plantList.filter((plant) => plant.category === currentCat);
    };
}

function ShoppingList({cart, updateCart, setIsOpen, setModalData, setModalIsOpen}) {
    const storedCategory = JSON.parse(localStorage.getItem('active_category'));
    const [category, setCategory] = useState(storedCategory ? storedCategory : "---");

    useEffect(() => {
        localStorage.setItem('active_category', JSON.stringify(category));
    },[category]);

    const categories = plantList.reduce((acc, plant) => 
    acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []);

    return (
        <div className="lmj-shoppingList">
            <Categories
                categories={categories}
                category={category}
                setCategory={setCategory}
            />

            <ul className="lmj-plant-list">
                {showCategory(category, plantList).map(({name, cover, id, light, water, price, isSpecialOffer}) => (
                    <div
                        key={id}
                        className="lmj-shoppingList-item"
                    >
                        <PlantItem
                            id={id}
                            name={name}
                            cover={cover}
                            light={light}
                            water={water}
                            price={price}
                            isSpecialOffer={isSpecialOffer}
                            setModalData={setModalData}
                            setModalIsOpen={setModalIsOpen}
                            cart={cart}
                            updateCart={updateCart}
                            setIsOpen={setIsOpen}
                        />
                        <button
                            className="lmj-shopping-list-add"
                            onClick={() => addToCart(id, name, price, cart, updateCart, setIsOpen)}
                        >Ajouter</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList;
