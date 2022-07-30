import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";
import "../style/Layout.css";
import {useState} from "react"
import Categories from "./Categories";

function App() {
  const [cart, updateCart] = useState(MyLocalStorage() ? MyLocalStorage() : [])
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState("Toutes les categories")

  return (
    <div>
      <Banner />
      
      <div className="lmj-layout-inner">
        <Cart cart={cart} updateCart={updateCart} isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className="lmj-layout-categories">
          <Categories inputValue={inputValue} setInputValue={setInputValue} />
          <ShoppingList cart={cart} updateCart={updateCart} setIsOpen={setIsOpen} inputValue={inputValue} setInputValue={setInputValue} />
        </div>
      </div>
    
      <Footer />
    </div>
  )
}

function MyLocalStorage() {
  const JSONCart = JSON.parse(
    localStorage.getItem("cart")
  )

  return JSONCart
}

export default App;
