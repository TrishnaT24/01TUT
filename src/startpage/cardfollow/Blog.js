import React from 'react';
import weddingimage from './card-images/weddingimage.jpeg';
import goa from './card-images/goa1.jpg';
import './Blog.css';

const Blog = () => {
  return (
    <div>
        <h1 className='blog-title'>5 Enchanting Wedding Destinations in India: Where Love Meets Luxury</h1>
      <p className='blog-body'>Are you envisioning a wedding that's as magical as it is memorable?
       Look no further than the diverse and captivating landscapes of India. 
       From palatial forts to serene beaches, India offers a plethora of enchanting destinations that promise
        to turn your special day into a fairy tale affair. 
       Here are five of the best wedding destinations in India that exude charm, luxury, and timeless romance:</p>
       <img src={weddingimage} alt="Wedding Destinations in India" className="blog-image" />  
       <p>Udaipur, Rajasthan: Known as the "City of Lakes" and adorned with majestic palaces, Udaipur is the epitome of regal elegance.
         Exchange your vows amidst the opulent settings of the City Palace or indulge in a lavish 
         celebration at one of the many heritage hotels overlooking Lake Pichola. With its rich history, 
         breathtaking architecture, and romantic ambiance, Udaipur sets the stage for a truly 
         unforgettable wedding experience.</p>
       <img src={goa}  className="blog-image" />  
       <p>Goa: If you dream of a beachside wedding, Goa offers the perfect blend of sun, sand, and celebration. From intimate ceremonies on secluded shores to grand festivities at luxury resorts, Goa caters to every couple's preferences. Imagine saying "I do" against the backdrop of a stunning sunset, with the rhythmic sound of waves as your symphony. With its laid-back vibe and vibrant culture, Goa promises a wedding filled with joy, relaxation, and tropical charm.</p>
    </div>
  )
}
export default Blog;

