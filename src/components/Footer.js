import { useState } from "react";
import '../styles/Footer.css';

function handleClick(inputValue) {
    if (inputValue.length !== 0) {
        inputValue.includes("@")
        ? alert(`Votre addresse : "${inputValue}"`)
        : alert("Votre email n'est pas valide !");
    } else {
        alert("Merci de fournir une alerte !");
    };
}

function Footer() {
    const [inputValue, setInputValue] = useState("");
    const isInputWarning = !inputValue.includes("@");

    return (<footer className='lmj-footer'>
        <div className="lmj-footer-elem">
            Pour les passionné·e·s de plantes 🌿🌱🌵
        </div>

        <div className="lmj-footer-elem">Laissez-nous votre mail :</div>

        <div className="lmj-footer-elem">
            <input
                onChange={(event) => setInputValue(event.target.value)}
                value={inputValue}
                placeholder="Entrez votre addresse"
            />

            <button onClick={() => handleClick(inputValue)}>Alertez moi 🚨</button>
        </div>

        {inputValue.length !== 0
        ? isInputWarning && <div className="lmj-footer-elem">!!! Complétez votre email SVP !!!</div>
        : null}
    </footer>)
}

export default Footer;
