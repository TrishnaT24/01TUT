// Blog.js
import React from 'react';
import './Blog.css';
import  cat from './card-images/weddingimage.jpeg'
import dog from './card-images/goa1.jpg'

const Blog = () => {
  return (
    <div className="blog-container">
      <header className="header">
        <h1 className="title">5 Enchanting Wedding Destinations in India: Where Love Meets Luxury</h1>
       
      </header>
      <main className="main">
        <article className="post">
          <h2 className="post-title">Are you envisioning a wedding that's as magical as it is memorable?</h2>
          <img src={dog} alt="Image Description" className="post-image" />
          <p className="post-content">
       Look no further than the diverse and captivating landscapes of India. 
       From palatial forts to serene beaches, India offers a plethora of enchanting destinations that promise
        to turn your special day into a fairy tale affair. 
       Here are five of the best wedding destinations in India that exude charm, luxury, and timeless romance:</p>
        </article>
        <article className="post">
          <h2 className="post-title">Udaipur, Rajasthan: Known as the "City of Lakes" and adorned with majestic palaces</h2>
          <img src={cat} alt="Image Description" className="post-image" />
          <p className="post-content">Exchange your vows amidst the opulent settings of the City Palace or indulge in a lavish 
         celebration at one of the many heritage hotels overlooking Lake Pichola. With its rich history, 
         breathtaking architecture, and romantic ambiance, Udaipur sets the stage for a truly 
         unforgettable wedding experience</p>
        </article>
        {/* Add more articles as needed */}
      </main>
      <footer className="footer">
        <p>&copy; 2024 My Blog</p>
      </footer>
    </div>
  );
};

export default Blog;
