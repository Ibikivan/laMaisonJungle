import { useState } from "react";
import "../style/Footer.css"

function Footer() {
    const [inputValue, setInputValue] = useState("")
    
    return (
        <footer className="lmj-footer">    
            <div className="lmj-footer-elem">
                Pour les passionnés des plantes 🎄🎋🎍
            </div>
            
            <div className="lmj-footer-elem">Laissez nous votre mail :</div>
                
            <div className="lmj-footer-mail">
                <input value={inputValue}
                    placeholder="Entrez votre mail"
                    onChange={(sendEmail) => setInputValue(sendEmail.target.value)}
                    onBlur={(sendEmail) => blurHandling(sendEmail.target.value)}
                />

                <button onClick={() => alert(`l'adresse ${inputValue} sera bientôt envoyable. Merci !`)}>Envoyer</button>
            </div>
        </footer>
    )
}

function blurHandling(valueTyped) {
    if (!valueTyped.includes("@")) {
        alert(`ATTENTION !!! ${valueTyped} n'est pas une adresse mail valide.`)
    }
}



export default Footer