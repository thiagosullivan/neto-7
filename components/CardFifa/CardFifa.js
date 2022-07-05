import React from 'react';
import Image from 'next/image';
import CardFifaImg from '../../assets/card-neto.webp';
import Atributos from '../../assets/atributos.jpg';
import { CardFifaContainer, CardFifaContent } from './style'

function CardFifa() {
  return (
    <CardFifaContainer>
        <CardFifaContent>
            <div className='card__colOne'>
                <h2>Nilson Neto</h2>
                <Image src={CardFifaImg}/>
            </div>
            <div className='card__colTwo'>
                <h2>Atributos</h2>
                <Image src={Atributos} />
            </div>
        </CardFifaContent>
    </CardFifaContainer>
  )
}

export default CardFifa