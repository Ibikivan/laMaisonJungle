import ReactModal from "react-modal";
import PlantItemModalContent from "./PlantItemModalContent";
import '../styles/ModalStyle.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    },
};

ReactModal.setAppElement('#root');

function Modal({ modalIsOpen, setModalIsOpen, modalData }) {

    function closeModal() {
        setModalIsOpen(false);
    }

    return (
        <div className="lmj-modal-content">
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel={modalData ? modalData.labal : "Modal label"}
            >
                <PlantItemModalContent
                    setModalIsOpen={setModalIsOpen}
                    modalData={modalData}
                />
            </ReactModal>
        </div>
    );
}

export default Modal;