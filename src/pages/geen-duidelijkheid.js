import React, { Component } from 'react'
import './advies.css';

export default class geenUitkomst extends Component {
    render() {
        return (
            <div className="tekstContainer">
                <h1 className="headText">Geen duidelijke uitkomst</h1>
                <h2>Wat betekent dat?</h2>
                <p>
                Aan de hand van de antwoorden die zijn gegeven is er geen duidelijke oorzaak voor het jeuk probleem bij uw hond. Dit betekent niet dat er geen probleem is. De jeuk kan mogelijk komen door een intern probleem bij uw hond. Voorbeelden van interne problemen die jeuk veroorzaken zijn een voedselovergevoeligheid of een hormoonprobleem. Het is belangrijk om contact op te nemen met uw dierenarts om de oorzaak van het probleem vast te stellen.
                </p>
                <h2>Wat kan ik nu doen?</h2>
                <p>
                Uw hond kan veel last hebben van de geïrriteerde huid. Ondanks dat u de oorzaak niet direct kan behandelen, kunt u wel een jeukstillende shampoo gebruiken om de symptomen te verminderen. Voorbeelden van deze producten zijn:
                </p>
                <div className="adviesProducten">
                    <a href="https://www.dierenapotheek.nl/hond/huid-vacht/allermyl-shampoo-200-ml-hond-kat.html">
                        <div>
                            <img src="https://www.dierenapotheek.nl/media/catalog/product/cache/1/image/265x/5ea3aa69cbbd6ae8ac2546990e06ed33/a/l/allermyl-lr-_1.jpg" />
                            <p>Allermyl SIS shampoo</p>
                        </div>
                    </a>
                    <a href="https://www.dierenapotheek.nl/hond/huid-vacht/sebolytic-shampoo-200-ml-hond-en-kat.html">
                        <div>
                            <img src="https://www.dierenapotheek.nl/media/catalog/product/cache/1/image/265x/5ea3aa69cbbd6ae8ac2546990e06ed33/s/c/schermafbeelding_2019-08-13_om_09.20.47.png" />
                            <p>Sebolitic jeukstillende shampoo</p>
                        </div>
                    </a>
                
                </div>
                <h2>Wanneer moet ik contact opnemen met mijn dierenarts?</h2>
                <p>
                Omdat er geen duidelijk uitwendig probleem vastgesteld kan worden is het verstandig om contact op te nemen met uw dierenarts. De dierenarts zal onderzoek doen naar de oorzaak van de jeuk en aan de hand van de uitslag van het onderzoek een behandelplan opstellen. 
                </p>
            </div>
        )
    }
}
