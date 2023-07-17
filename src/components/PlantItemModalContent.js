import '../styles/PlantItemModalContent.css'
import { addToCart, handleCare } from '../utilities/helpers';
import sun from '../assets/sun.svg'
import water from '../assets/water.svg'

function PlantItemModalContent({ setModalIsOpen, modalData }) {
    function closeModal() {
        setModalIsOpen(false);
    }

    return (
        <div className='modal-content'>
            <button onClick={closeModal} className='modal-close-button'>X</button>

            <img src={modalData.cover} className='modal-content-cover' alt={`${modalData.name} cover`} />

            <div className='modal-content-isSpesial'>
                <h2>{modalData.name}</h2>
                <p>{modalData.isSpecialOffer && <span>En promotion | </span>}<span>{modalData.price} $CAD</span></p>
            </div>

            <div className='modal-content-details'>
                <h3>Détails</h3>
                <p>La plante <strong>{modalData.name}</strong> est un excélent choix de plante ; l'une des meilleure dans notre catalogue pour la maison ou l'extérieur.</p>
                <ul>
                    <li>{handleCare("water", modalData.water)} <img src={water} alt='water' /> pour se developper.</li>
                    <li>{handleCare("light", modalData.light)} <img src={sun} alt='sun' /> pour se developper.</li>
                </ul>
            </div>

            <button
            className='lmj-modal-add'
                onClick={() => addToCart(
                    modalData.id,
                    modalData.name,
                    modalData.price,
                    modalData.cart,
                    modalData.updateCart,
                    modalData.setIsOpen
                )}
            >Ajouter au panier</button>
        </div>
    );
}

export default PlantItemModalContent;
