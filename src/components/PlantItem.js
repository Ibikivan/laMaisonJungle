import CareScale from "./CareScale"
import "../style/PlantItem.css"

function handleClick(plantName) {
	alert(`vous voulez acheter 1 ${plantName}, Tres bon choix !`)
}

function PlantItem({ cover, name, water, light, price }) {
	return (
		<li className='lmj-plant-item card'>
			<img className='lmj-plant-item-cover card-img-top' src={cover} alt={`${name} cover`} onClick={() => handleClick(name)} />

			<div className="card-body">
				<span className="card-title">{name} : {price} Fcfa</span>
			

				<div className="card-text">
					<CareScale careType='water' scaleValue={water} />
					<CareScale careType='light' scaleValue={light} />
				</div>
			</div>
		</li>
	)
}

export default PlantItem