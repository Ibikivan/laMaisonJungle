import "../style/Cart.css"
import { useEffect } from "react"


function Cart({cart, updateCart, setIsOpen, isOpen}) {
    const total = cart.reduce(
        (acc, plant) => acc + plant.amount * plant.price, 0
    )

    function removeToCard(name) {
        const currentRemove = cart.filter((plant) => plant.name !== name)

        updateCart(
            currentRemove
        )
    }

    useEffect(
        () => {
            if (total !== 0) {
                document.title = `LMJ: ${total} Fcfa d'achats`
            } else {
                document.title = `La Maison Jungle 🎍`
            }
        },
        [total]
    )

    useEffect(
        () => {
            localStorage.setItem(
                "cart",
                JSON.stringify(cart)
            )
        },
        [total]
    )
                    
    return isOpen ? (
        <div className="lmj-cart">
            <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(false)}>Fermer</button>

            <h2>Panier</h2>

            {
                cart.length > 0 ? (
                    <ul className="lmj-cart-items">
                        {
                            cart.map(({name, price, amount}, index) => 
                            <li key={`${name} - ${index}`} className="lmj-cart-items-button">
                                <div>{name} {price} x {amount}</div>
                                <div><button onClick={() => removeToCard(name)}>x</button></div>
                            </li>)
                        }
                    </ul>
                ) : (
                    <h4>votre panier est vide</h4>
                )
            }

            <h4>Total : {total} Fcfa</h4>

            <button onClick={() => updateCart([])}>Vider le panier</button>
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(true)}>Ouvrir le panier</button>
        </div>
    )
}

export default Cart