import '../styles/PlantItem.css';
import CareScale from "./CareScale";

function PlantItem({name, cover, id, light, water, price, isSpecialOffer, setModalData, setModalIsOpen, cart, updateCart, setIsOpen}) {
    function setModal() {
        const data = {
            id: id,
            name: name,
            cover: cover,
            light: light,
            water: water,
            price: price,
            isSpecialOffer: isSpecialOffer,
            label: `${name} item modal`,
            cart,
            updateCart,
            setIsOpen,
        };

        setModalData(data);
        setModalIsOpen(true);
    }
    
    return (
        <li key={id} className="lmj-plant-item" onClick={setModal}>
            <img src={cover} alt="Plant item cover" className="lmj-plant-item-cover" />
            <div  className="lmj-sales">{isSpecialOffer && <span>Soldes | </span>} {price}$CAD</div>
            {name}
            <div>
                <CareScale type="water" value={water} />
                <CareScale type="light" value={light} />
            </div>
        </li>
    )
}

export default PlantItem;
