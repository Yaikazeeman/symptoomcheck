import React, { Component } from 'react'

export default class ContactAllergie extends Component {
    render() {
        return (
            <div className="tekstContainer">
            <h1 className="headText">Contactallergie</h1>
            <h2>Wat is het?</h2>
            <p>
            Een contactallergie is een allergische reactie bij uw hond op een stof in de omgeving. Een contactallergie komt maar weinig voor bij honden maar kan wel een rede zijn voor huidirritatie en jeuk bij u hond. De reactie die uw hond krijgt komt voor op de plekken waar de hond met de stof in aanraking is gekomen. Dit zijn vaak de buik, liezen, onderkant van de poten en kin. De huid kleurt op die plek rood en kan jeuk veroorzaken.
            </p>
            <h2>Waardoor komt het?</h2>
            <p>
            Een contactallergie wordt veroorzaakt door een allergische reactie op een stof uit de omgeving. Dit kunnen bijvoorbeeld chemicaliën zijn waarmee een tapijt of mand mee is behandeld. Wanneer de hond hierop gaat staan of liggen kan de huid daarop reageren. 
            </p>
            <h2>Wat kan ik nu doen?</h2>
            <p>
            Een contactallergie kan niet verholpen worden met een zalfje of medicijn. Het is daarom belangrijk dat het product dat de contactallergie veroorzaakt uit de omgeving van de hond verwijderd wordt. Het is wel mogelijk om de geïrriteerde huid te behandelen met een jeukstillende shampoo. Bijvoorbeeld een van de volgende producten:
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
            Wanneer u merkt dat uw hond last blijft houden van een geïrriteerde huid kan er contact opgenomen worden met een dierenarts. Het is dan mogelijk dat een ander probleem de geïrriteerde huid bij uw dier veroorzaakt. 
            </p>
        </div>
        )
    }
}
