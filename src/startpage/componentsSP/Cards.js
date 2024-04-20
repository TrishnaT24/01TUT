import React from 'react';
import CardItem from './Carditem';
import './Cards.css';
import jewellery from './imagesSP/jewellery.jpeg';
import bridal from './imagesSP/bridal wear.jpeg';
import mehendi from'./imagesSP/mehendi3.jpeg';
import wedding from './imagesSP/wedding.jpeg';
import couple from './imagesSP/random couple.jpeg';
import hands from './imagesSP/hands.jpeg';
const Cards = () => {
  return (
    <div className='cards'>
    <h1>Popular Searches</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem  src={jewellery}
                    text="Indulge in Elegance: Discover Our Exquisite Jewelry Collection!"
                    label='Jewellery'
                    path='/'/>
                    <CardItem  src={bridal}
                    text="Imagine the Perfect Bridal Ensemble: Your Dream Wedding Attire Awaits!"
                    label='Bridal Wear'
                    path='/'/>
                    <CardItem  src={mehendi}
                    text="Embrace tradition with stunning henna artistry, adding beautiful colors your celebration."
                    label='Mehendi'
                    path='/'/>
                    
                </ul>
                <ul className="cards__items">
                    <CardItem  src={wedding}
                    text="Weddings organised by JODI JUNCTION"
                    label='Wedding'
                    path='/'/>
                    <CardItem  src={couple}
                    text="TOP 9 wedding destinations in India"
                    label='Blog'
                    path='/'/>
                    <CardItem  src={hands}
                    text="Dont Know about Indian Wedding rituals? Click Here to know more"
                    label='Rituals'
                    path='/'/>
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards;
