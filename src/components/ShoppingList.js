import { plantList } from '../data/plantList'
import PlantItem from './PlantItem'
import "../style/ShoppingList.css"


function ShoppingList({cart, updateCart, setIsOpen, inputValue, setInputValue}) {
	function addToCart(name, price) {
		const curentPlant = cart.find((plantType) => plantType.name === name)
		
		if (curentPlant) {
			const newFilteredTable = cart.filter((plant) => plant.name !== name)

			updateCart(
				[...newFilteredTable, {name, price, amount: curentPlant.amount + 1}]
			)

			setIsOpen(true)
		} else {
			updateCart([...cart, {name, price, amount: 1}])

			setIsOpen(true)
		}
	}

	// mmon expression à utiliser pour les catégories commence ici, lui ajouter les données issues du state via les props -----------

		function categorisation() {
			let restricted = []
	
			if (inputValue === "Toutes les categories") {
				return restricted = plantList
			} else {
				return (restricted = plantList.filter(
					(plant) => plant.category === inputValue
				))
			}
		}

	// mon expression à utiliser pour les catégories finie ici ----------------------------

	return (
		<div className='lmj-shopping-list'>
			<ul className='lmj-plant-list'>
				{categorisation().map(({ id, cover, name, water, light, price }) => (
					<div key={id} className="lmj-shoppinglist-add">
						<PlantItem
							cover={cover}
							name={name}
							water={water}
							light={light}
							price={price}
						/>

						<button type="button" className="lmj-shoppinglist-add-button btn btn-primary" onClick={() => addToCart(name, price)}>Ajouter</button>
					</div>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList