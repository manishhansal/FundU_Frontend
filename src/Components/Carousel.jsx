import React from "react";

const Carousel = () => {
  return (
    <div style={{"marginBottom":"5%"}}>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="true"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" style={{ height: "500px" }}>
            <img src="p1.jpg" class="d-block w-100" alt="p1.jpg" />
            <div class="carousel-caption d-none d-md-block">
              <h1>Learn Stock Market By Playing Games</h1>
              <p>Imbibe the knowledge of stock market on your finger tips.</p>
            </div>
          </div>
          <div class="carousel-item" style={{ height: "500px" }}>
            <img src="p2.jpg" class="d-block w-100" alt="p2.jpg" />
            <div class="carousel-caption d-none d-md-block">
              <h1>Learn Stock Market By Playing Games</h1>
              <p>Imbibe the knowledge of stock market on your finger tips.</p>
            </div>
          </div>
          <div class="carousel-item" style={{ height: "500px" }}>
            <img src="p3.jpg" class="d-block w-100" alt="p3.jpg" />
            <div class="carousel-caption d-none d-md-block">
              <h1>Learn Stock Market By Playing Games</h1>
              <p>Imbibe the knowledge of stock market on your finger tips.</p>
            </div>
          </div>
          <div class="carousel-item" style={{ height: "500px" }}>
            <img src="p4.jpg" class="d-block w-100" alt="p4.jpg" />
            <div class="carousel-caption d-none d-md-block">
              <h1>Learn Stock Market By Playing Games</h1>
              <p>Imbibe the knowledge of stock market on your finger tips.</p>
            </div>
          </div>
          <div class="carousel-item" style={{ height: "500px" }}>
            <img src="p5.jpg" class="d-block w-100" alt="p5.jpg" />
            <div class="carousel-caption d-none d-md-block">
              <h1>Learn Stock Market By Playing Games</h1>
              <p>Imbibe the knowledge of stock market on your finger tips.</p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
