import { plantList } from '../data/plantList'
import "../style/Categories.css"

function Categories({inputValue, setInputValue}) {
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

    return (
        <div className='lmj-categories-items'>
            <select onChange={(e) => setInputValue(e.target.value)}>
                <option>Toutes les categories</option>
				{categories.map((cat, index) => (
					<option key={`${cat} - ${index}`} value={cat}>{cat}</option>
				))}
			</select>

			<button onClick={() => setInputValue(inputValue = "Toutes les categories")}>Tout</button>
        </div>
    )
}

export default Categories