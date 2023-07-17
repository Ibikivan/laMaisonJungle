import { useEffect } from 'react';
import '../styles/Cart.css'

function totalCalculator(plants) {
    const total = plants.reduce((sum, plant) => {
        return sum += plant.amount * plant.price
    }, 0);

    return total;
}

function Cart({cart, updateCart, isOpen, setIsOpen}) {
    const total = totalCalculator(cart)

    function deleteElement(id) {
        const undeleted = cart.filter((plant) => plant.id !== id);
        updateCart(undeleted);
    }
    
    useEffect(() => {
        document.title = `LMJ: ${total}CAD d'achats`;
    },[total]);

    return isOpen
    ? (
        <div className='lmj-cart'>
            <button
                onClick={() => setIsOpen(false)}
                className='lmj-cart-toggle-button'
            >Fermer</button>

            {cart.length === 0 ? (
                <div className='lmj-cart-empty'>Votre panier est vide !</div>
            ) : (
                <div>
                    <h2>panier</h2>

                    {cart.map((plant) => (
                        <div className='lmj-cart-delete-item'>
                            <button
                                key={plant.id}
                                className='lmj-cart-delete-button'
                                onClick={() => deleteElement(plant.id)}
                            >x</button>

                            <div key={plant.id} className='lmj-cart-delete-element'>
                                {`${plant.name} ${plant.price} CAD x ${plant.amount}`}
                            </div>
                        </div>
                    ))}

                    <div className='lmj-cart-total'>Total : {total} CAD</div>

                    <button
                        onClick={() => updateCart([])}
                        className='lmj-cart-add-button'
                    >vider le panier</button>
                </div>
            )}
        </div>
    )
    : (<div className='lmj-cart-closed'>
        <button
            onClick={() => setIsOpen(true)}
            className='lmj-cart-toggle-button'
        >Ouvrir le panier</button>
    </div>)
}

export default Cart;
