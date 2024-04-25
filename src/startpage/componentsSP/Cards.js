import React from 'react';
import CardItem from './Carditem';
import './Cards.css';
import jewellery from './imagesSP/jewellery.jpeg';
import decor from './imagesSP/decoridea.jpeg';
import bridal from './imagesSP/bridal wear.jpeg';
import caterers from './imagesSP/Caterers.jpeg'
import wedding from './imagesSP/wedding.jpeg';
import couple from './imagesSP/random couple.jpeg';


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
                    path='/jewellery'/>
                    <CardItem  src={bridal}
                    text="Imagine the Perfect Bridal Ensemble: Your Dream Wedding Attire Awaits!"
                    label='Bridal Wear'
                    path='/outfit'/>
                    <CardItem  src={caterers}
                    text="Crafting Culinary Bliss for Your Unforgettable Day!"
                    label='Catering'
                    path='/catering'/>
                    
                </ul>
                <ul className="cards__items">
                    <CardItem  src={wedding}
                    text="Weddings organised by JODI JUNCTION"
                    label='Wedding'
                    path='/wedding'/>
                    <CardItem  src={couple}
                    text="TOP 5 wedding destinations in India"
                    label='Blog'
                    path='/blog'/>
                    <CardItem  src={decor}
                    text="Envision the Perfect Venue: Your Dream Wedding Decor Awaits!"
                    label='Decor'
                    path='/shop'/>
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards;
