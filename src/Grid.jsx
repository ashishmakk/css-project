import React from "react";
import react from "./assets/react.svg";
import bars from "./assets/bars-solid.svg";

function Grid() {
  return (
    <section className='container'>
      <div className='welcome'>
        <div className='header'>
          <img src={react} alt='react' />
          <nav>
            <a href='#'>home</a>
            <a href='#'>about</a>
            <a href='#'>portfolio</a>
            <a href='#'>contact</a>
          </nav>
          <div className='bars'>
            <img src={bars} alt='menu' />
          </div>
        </div>

        <div>
          <h1>Let's create!</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque ex
            optio consequuntur architecto? Ullam veritatis perferendis, possimus
            odio quisquam magni sapiente non doloremque esse, nam dolores quae
            nobis eum. Voluptatem.
          </p>
        </div>
        <footer>
          <p>© 2024 ABC. All Rights Reserved</p>
        </footer>
      </div>
      <div className='about'>
        <img
          src='https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_1280.jpg'
          alt='camera'
        />
        <div className='text'>
          <h3>About Me</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            officiis assumenda ipsum fugit corporis quos, debitis a repellendus
            reprehenderit sapiente!
          </p>
        </div>
      </div>
      <div className='photography'>
        <div className='text'>
          <h3>Photography</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            officiis assumenda ipsum fugit corporis quos, debitis a repellendus
            reprehenderit sapiente!
          </p>
        </div>
        <div>
          <img
            src='https://cdn.pixabay.com/photo/2023/11/13/01/30/flower-8384359_960_720.jpg'
            alt='flowers'
          />
        </div>
      </div>
    </section>
  );
}

export default Grid;
