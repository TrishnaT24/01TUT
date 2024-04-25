import React from 'react';
import './RealWedding.css';
import haldi1 from './wedding-images/haldibig.jpeg';
import haldi2 from './wedding-images/haldidecor.jpeg';
import haldi3 from './wedding-images/yup2.jpeg';
import mehendi1 from './wedding-images/mehendidecor.jpeg';
import mehendi2 from './wedding-images/mehendihuman.jpeg';
import sangeet1 from './wedding-images/entrance.jpeg';
import sangeet3 from './wedding-images/sangeetdecor.jpeg';
import wedding1 from './wedding-images/weddingcouple.jpeg';
import wedding2 from './wedding-images/yup.jpeg';
import wedding3 from './wedding-images/weddingdecor2.jpeg';

const RealWedding = () => {
  return (
    <div className='image-grid'>
      <h1 className='blog-title'>Real Weddings Organised By JODI JUNCTION</h1>
      <h3>Anushka & Raj: A Journey to Forever </h3>
      <p>In the heart of bustling city life, amidst the whispers of love and the promises of forever, Anushka and Raj embarked on their journey to eternal bliss. But their dream wedding wasn't just a mere celebration; it was a testament to love's grandeur, meticulously crafted by none other than the masterminds behind Jodi Junction.

From the very first consultation, Anushka and Raj found themselves enchanted by the visionary approach of Jodi Junction's team. Each detail was carefully considered, every aspect infused with a touch of elegance and sophistication that bespoke of timeless romance.

The haldi ceremony dawned, painting the canvas of their love story with hues of joy and anticipation. As the golden turmeric adorned the couple, the ambiance resonated with laughter and merry melodies, transforming the space into a vibrant tapestry of tradition and celebration.

Mehendi adorned Anushka's delicate hands, weaving tales of love and intricacy. The venue, adorned with blossoms and vibrant colors, resembled a garden of dreams where every corner whispered tales of love and laughter.

The sangeet night unfolded like a fairy tale, with Anushka and Raj dancing under the canopy of stars, their love illuminating the night sky. Jodi Junction's meticulous attention to detail ensured that every note of music, every flicker of light, resonated with the rhythm of their hearts.

Finally, the wedding day arrived, a culmination of dreams and promises exchanged beneath the sacred canopy of love. The venue transformed into a haven of opulence and grandeur, where every glance, every smile, spoke volumes of their eternal bond.

As Anushka and Raj exchanged vows, surrounded by loved ones and the blessings of Jodi Junction's meticulous planning, it was not just a union of two souls but a celebration of love in its purest form.

In the end, as the sun set on their perfect day, Anushka and Raj knew that their journey to forever was made all the more beautiful, all the more memorable, by the magical touch of Jodi Junction.</p>
      <div className='image-container'>
        <img src={haldi1} alt='Haldi Ceremony 1' />
        <img src={haldi2} alt='Haldi Ceremony 2' />
        <img src={haldi3} alt='Haldi Ceremony 3' />
        <img src={mehendi1} alt='Mehendi Decor' />
        <img src={mehendi2} alt='Mehendi Celebration' />
        <img src={sangeet1} alt='Sangeet Couple' />
        <img src={sangeet3} alt='Sangeet Decor' />
        <img src={wedding1} alt='Wedding Couple' />
        <img src={wedding2} alt='Wedding Decor 1' />
        <img src={wedding3} alt='Wedding Decor 2' />
      </div>
    </div>
  )
}

export default RealWedding;
