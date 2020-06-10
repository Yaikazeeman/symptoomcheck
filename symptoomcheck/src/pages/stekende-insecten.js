import React, { Component } from 'react'
import './advies.css';

export default class stekendeInsecten extends Component {
    render() {
        return (
            <div className="tekstContainer">
                <h1 className="headText">Stekende insecten of teken</h1>
                <h2>Wat is het?</h2>
                <p>Gebaseerd op de uitkomsten van de vragen van de symptoomcheck over jeuk bij jouw hond is gekomen dat het jeuk probleem bij jouw hond waarschijnlijk veroorzaakt is door een stekend insect (bijvoorbeeld een bij, wesp of mug) of een teek. </p>
                <h2>Waardoor komt het?</h2>
                <p>
                Een stekend insect kan een pijnlijke of jeukende plek veroorzaken op de plek waar het insect jouw hond heeft gestoken. Dit soort jeuk is heel lokaal en de huid op de plek vormt soms een bultje of er is een klein wondje te zien. Daarnaast kan de jeukende plek ook ontstaan door een tekenbeet. Wanneer de teek los laat of wanneer de teek is weggehaald blijft er altijd een klein wondje in de huid van uw huisdier zitten dat kan jeuken. Echter hele deze kleine wondjes vanzelf weer.
                </p>
                <h2>Wat kan ik nu doen?</h2>
                <p>
                Zo’n plek is voor jouw dier meestal niet schadelijk maar is natuurlijk wel vervelend. Je kunt de plek behandelen met een cream of spray om de jeuk te verzachten en het herstel van de plek te stimuleren. De volgende producten zijn daarbij aan te raden. 
                </p>
                <div className="adviesProducten">
                    <a href="https://www.dierenapotheek.nl/hond/huid-vacht/dcp-poederspray.html">
                        <div>
                            <img src="https://www.dierenapotheek.nl/media/catalog/product/cache/1/image/265x/5ea3aa69cbbd6ae8ac2546990e06ed33/s/c/schermafbeelding_2019-03-29_om_16.07.20.png" />
                            <p>DCP Poederspray</p>
                        </div>
                    </a>
                    <a href="https://www.dierenapotheek.nl/dermacool-spray-250-ml-hond-kat.html">
                        <div>
                            <img src="https://www.dierenapotheek.nl/media/catalog/product/cache/1/image/265x/5ea3aa69cbbd6ae8ac2546990e06ed33/d/e/dermacool.jpg" />
                            <p>Dermacool 'hotspot' spray</p>
                        </div>
                    </a>
                
                </div>
                <p>
                Is jouw hond op de jeukende plek gebeten door een teek of weet je niet zeker wat het is geweest? Houdt dan de plek de komende twee weken goed in de gaten. Wanneer er een rode cirkel om de plek vormt is er een kans dat dit de ziekte van Lyme is. Neem in dat geval contact op met uw dierenarts. 
                </p>
                <h2>Wanneer moet ik contact opnemen met mijn dierenarts?</h2>
                <p>
                Ook wanneer de plek dikker wordt of de jeuk zich in de loop van de dagen verergerd is het aan te raden om contact op te nemen met uw dierenarts. Daarnaast is contact met uw dierenarts ook verstandig als de plek dicht bij de ogen, neus of mond zit en de hond er duidelijk meer last van heeft. 
                </p>
            </div>
        )
    }
}
