import React from "react";

export const Houston = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <div
              id="carouselGreenSeedVegan"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    src="data:image/jpeg;base64,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"
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGHlwUMKjb8rkaWL87kGjYfCO3FADqaL8wwg&usqp=CAU"
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp6THxiFkRdj0pfYCIJyyn7EnP-7gQFKR23g&usqp=CAU"
                    alt="Third slide"
                  />
                </div>
                {/* Add more carousel items for additional images */}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselGreenSeedVegan"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselGreenSeedVegan"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="card-body">
              <h2>Green Seed Vegan</h2>
              <a
                href="https://www.greenseedvegan.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <i className="fa-solid fa-globe"></i>{" "}
                  https://www.greenseedvegan.com/
                </p>
              </a>
              <a href="tel:+18325825566">
                <p>
                  <i className="fa-solid fa-phone"></i>{" "}(832) 582-5566
                </p>
              </a>
              <p>
                <i class="fa-solid fa-face-smile"></i>: 4.4{" "}
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star-half-stroke"></i>(1.8K reviews)
              </p>

              <p>
                <i class="fa-solid fa-bowl-rice"></i> Vegan
              </p>
              <p>
                Mon 11:00 AM - 8:00 PM Tue 11:00 AM - 8:00 PM Wed 11:00 AM -
                8:00 PM Thu 11:00 AM - 8:00 PM Fri 11:00 AM - 8:00 PM Sat 11:00
                AM - 8:00 PM Sun 11:00 AM - 8:00 PM
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Green+Seed+Vegan+Houston+TX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-location-dot"></i>{" "}4320 Almeda Rd,
                Houston, TX 77004
              </a>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <div
              id="carouselVeegosVeganEatery"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    src="https://scontent.cdninstagram.com/v/t39.30808-6/434073129_18297288094155886_6430274793584459113_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=SE91W5vxyZgAX-W7Mg6&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzMyODE3NDU2ODM0MjI2OTg0OQ%3D%3D.2-ccb7-5&oh=00_AfBGI_skBLYEI48x70aYtUTFY21rrOkURuPkJa5Y8N4JoQ&oe=660CA2E0&_nc_sid=10d13b"
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    src="https://scontent.cdninstagram.com/v/t39.30808-6/431619452_18296283964155886_6610780574183453033_n.jpg?stp=dst-jpegr_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDEwODUuaGRyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=dMiv1YzVGeUAX-_I_GN&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzMyMTY5NjI1MzkxNzc5NTk0OA%3D%3D.2-ccb7-5&oh=00_AfAzwF_JqbvvPNwb7gp7XEaHk2X6bMmf1k190UAgSKtSLw&oe=660EA607&_nc_sid=10d13b"
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    src="https://scontent.cdninstagram.com/v/t39.30808-6/431680547_18296038648155886_5952756597196242795_n.jpg?stp=dst-jpegr_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDc3eDE0NzcuaGRyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=7CTHsQstK54AX-2NRcq&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzMyMDE1NDcwMTIzNjA2NTU2MQ%3D%3D.2-ccb7-5&oh=00_AfBIieK8hQfv2EbtBAiQ-ouxxx3obVbTpxBmFTZWEDWbVw&oe=660CA4E1&_nc_sid=10d13b"
                    alt="Third slide"
                  />
                </div>
                {/* Add more carousel items for additional images */}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselVeegosVeganEatery"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselVeegosVeganEatery"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="card-body">
              <h2>Veegos Vegan Eatery</h2>
              <a
                href="https://www.veegoshouston.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <i className="fa-solid fa-globe"></i>{" "}
                  https://www.veegoshouston.com/
                </p>
              </a>
              <a href="tel:+17134895323">
                <p>
                  <i className="fa-solid fa-phone"></i> (713) 489-5323
                </p>
                <p>
                  <i class="fa-solid fa-face-smile"></i>: 4.4{" "}
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star-half-stroke"></i>(1.8K reviews)
                </p>

                <p>
                  <i class="fa-solid fa-bowl-rice"></i> Vegan
                </p>
              </a>
              <p>
                Saturday 11 AM–10 PM Sunday 11 AM–7 PM Hours might differ Monday
                11 AM–10 PM Tuesday 11 AM–10 PM Wednesday 11 AM–10 PM Thursday
                11 AM–10 PM Friday 11 AM–10 PM
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Veegos+Vegan+Eatery+Houston+TX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-location-dot"></i>{" "}2435 Times Blvd,
                Houston, TX 77005
              </a>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <div
              id="carouselBabaYegaCafe"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    src="https://www.oubruncher.com/photos1/4370_2.jpg"
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    src="https://www.oubruncher.com/photos1/4370_3.jpg"
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    src="https://pbs.twimg.com/media/Dr6LVYsX0AIOyK_.jpg"
                    alt="Third slide"
                  />
                </div>
                {/* Add more carousel items for additional images */}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselBabaYegaCafe"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselBabaYegaCafe"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="card-body">
              <h2>Baba Yega Cafe</h2>
              <a
                href="http://babayega.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <i className="fa-solid fa-globe"></i>{" "}http://babayega.com/
                </p>
              </a>
              <a href="tel:+17135220042">
                <p>
                  <i className="fa-solid fa-phone"></i> (713) 522-0042
                </p>
                <p>
                  <i class="fa-solid fa-face-smile"></i>: 4.4{" "}
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star-half-stroke"></i>(1.8K reviews)
                </p>

                <p>
                  <i class="fa-solid fa-bowl-rice"></i> Vegan
                </p>
              </a>
              <p>
                Mon 11:00 AM - 8:00 PM Tue 11:00 AM - 8:00 PM Wed 11:00 AM -
                8:00 PM Thu 11:00 AM - 8:00 PM Fri 11:00 AM - 8:00 PM Sat 11:00
                AM - 8:00 PM Sun 11:00 AM - 8:00 PM
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Baba+Yega+Cafe+Houston+TX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-location-dot"></i>{" "}2607 Grant St,
                Houston, TX 77006
              </a>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <div
              id="carouselCafeTH"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/o3IQB8-ikLUS2PQejJ3dwQ/o.jpg"
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/u_iO2lrGUqBuPp76TEfKHw/o.jpg"
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/mFqhGcoHMOubldi78WMBMA/o.jpg"
                    alt="Third slide"
                  />
                </div>
                {/* Add more carousel items for additional images */}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselCafeTH"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselCafeTH"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="card-body">
              <h2>Cafe TH</h2>
              <a
                href="https://www.greenseedvegan.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <i className="fa-solid fa-globe"></i>{" "}
                  https://www.greenseedvegan.com/
                </p>
              </a>
              <a href="tel:+17132254766">
                <p>
                  <i className="fa-solid fa-phone"></i> (713) 225-4766
                </p>
                <p>
                  <i class="fa-solid fa-face-smile"></i>: 4.4{" "}
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star-half-stroke"></i>(1.8K reviews)
                </p>

                <p>
                  <i class="fa-solid fa-bowl-rice"></i> Vegan
                </p>
              </a>
              <p>
                Mon 10:00 AM - 3:00 PM Tue 10:00 AM - 3:00 PM Wed 10:00 AM -
                3:00 PM Thu 10:00 AM - 3:00 PM Fri 10:00 AM - 3:00 PM Sat Closed
                Sun Closed
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Cafe+TH+Houston+TX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-location-dot"></i>{" "}2108 Pease St,
                Houston, TX 77003
              </a>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <div
              id="carouselRipeCuisine"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/mr2vwlfMyxX-A2BL5Uy0yw/o.jpg"
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/6JiKuT2VcXqBshQEOuZujA/o.jpg"
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/C-BLQsVVuUmAdTSKLwKvJw/o.jpg"
                    alt="Third slide"
                  />
                </div>
                {/* Add more carousel items for additional images */}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselRipeCuisine"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselRipeCuisine"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="card-body">
              <h2>Ripe Cuisine</h2>
              <a
                href="https://www.facebook.com/RipeCuisine/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <i className="fa-solid fa-globe"></i>{" "}
                  https://www.facebook.com/RipeCuisine/
                </p>
              </a>
              <a href="tel:+17136374316">
                <p>
                  <i className="fa-solid fa-phone"></i> (713) 637-4316
                </p>
                <p>
                  <i class="fa-solid fa-face-smile"></i> 4.4{" "}
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star-half-stroke"></i>(1.8K reviews)
                </p>

                <p>
                  <i class="fa-solid fa-bowl-rice"></i> Vegan
                </p>
              </a>
              <p>
                Mon 10:00 AM - 3:00 PM Tue 10:00 AM - 3:00 PM Wed 10:00 AM -
                3:00 PM Thu 10:00 AM - 3:00 PM Fri 10:00 AM - 3:00 PM Sat Closed
                Sun Closed
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Ripe+Cuisine+Houston+TX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-location-dot"></i>{" "}2518 Bissonnet St,
                Houston, TX 77005
              </a>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <div
              id="carouselPepperTree"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/99uUE2--lk5Ui2lrMhGGqw/o.jpg"
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/6SbxvCfyYiIV4_HlpO_FSg/o.jpg"
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/289XPFZAXgiEFIAeVlCKRw/o.jpg"
                    alt="Third slide"
                  />
                </div>
                {/* Add more carousel items for additional images */}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselPepperTree"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselPepperTree"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="card-body">
              <h2>Pepper Tree Veggie Cuisine</h2>
              <a
                href="https://www.facebook.com/ilovepeppertree/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <i className="fa-solid fa-globe"></i>{" "}
                  https://www.facebook.com/ilovepeppertree/
                </p>
              </a>
              <a href="tel:+17136219488">
                <p>
                  <i className="fa-solid fa-phone"></i> (713) 621-9488
                </p>
                <p>
                  <i class="fa-solid fa-face-smile"></i>: 4.4{" "}
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star-half-stroke"></i>(1.8K reviews)
                </p>

                <p>
                  <i class="fa-solid fa-bowl-rice"></i> Vegan
                </p>
              </a>
              <p>
                Mon Closed Tue 11:00 AM - 2:30 PM 4:30 PM - 8:00 PM Wed 11:00 AM
                - 2:30 PM 4:30 PM - 8:00 PM Thu 11:00 AM - 2:30 PM ƒƒ4:30 PM -
                8:00 PM Fri 11:00 AM - 2:30 PM 4:30 PM - 8:00 PM Sat 11:30 AM -
                7:00 PM Sun 11:30 AM - 7:00 PM
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Pepper+Tree+Veggie+Cuisine+Houston+TX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-location-dot"></i>{" "}3821 Richmond Ave,
                Houston, TX 77027
              </a>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <div
              id="carouselFieldOfGreens"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/9hJw_NC4OsaZZ2vOxvqXgw/o.jpg"
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/zEdf6LwzswnXC_iMauWepg/o.jpg"
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/nFR19N3mU4gNFjaz4AVR8g/o.jpg"
                    alt="Third slide"
                  />
                </div>
                {/* Add more carousel items for additional images */}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselFieldOfGreens"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselFieldOfGreens"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="card-body">
              <h2>Field of Greens</h2>
              <a
                href="https://www.facebook.com/FieldofGreensVegan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <i className="fa-solid fa-globe"></i>{" "}
                  https://www.facebook.com/FieldofGreensVegan/
                </p>
              </a>
              <a href="tel:+17135330029">
                <p>
                  <i className="fa-solid fa-phone"></i> (713) 533-0029
                </p>
                <p>
                  <i class="fa-solid fa-face-smile"></i>: 4.4{" "}
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star-half-stroke"></i>(1.8K reviews)
                </p>

                <p>
                  <i class="fa-solid fa-bowl-rice"></i> Vegan
                </p>
              </a>
              <p>
                Mon 11:00 AM - 9:00 PM Tue 11:00 AM - 9:00 PM Wed 11:00 AM -
                9:00 PM Thu 11:00 AM - 9:00 PM Fri 11:00 AM - 9:30 PM Sat 11:00
                AM - 9:30 PM Sun 12:00 PM - 5:00 PM
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Field+of+Greens+Houston+TX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-location-dot"></i>{" "}2320 W Alabama St,
                Houston, TX 77098
              </a>
            </div>
          </div>
        </div>

        {/* Soul Food Vegan */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <div
              id="carouselSoulFoodVegan"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/4dOvByB-9I28VHUQzi9H-A/o.jpg"
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/fRQHNKjfGfRvb62D60gPcA/o.jpg"
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/v1HUfQXz3emn-a9m5ovjTA/o.jpg"
                    alt="Third slide"
                  />
                </div>
                {/* Add more carousel items for additional images */}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselSoulFoodVegan"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselSoulFoodVegan"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="card-body">
              <h2>Soul Food Vegan</h2>
              <a
                href="https://www.instagram.com/soul_food_vegan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <i className="fa-solid fa-globe"></i>{" "}
                  https://www.instagram.com/soul_food_vegan/
                </p>
              </a>
              <a href="tel:+18328312856">
                <p>
                  <i className="fa-solid fa-phone"></i> (832) 831-2856
                </p>
                <p>
                  <i class="fa-solid fa-face-smile"></i>: 4.4{" "}
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star-half-stroke"></i>(1.8K reviews)
                </p>

                <p>
                  <i class="fa-solid fa-bowl-rice"></i> Vegan
                </p>
              </a>
              <p>
                Mon 12:00 PM - 8:30 PM Tue 12:00 PM - 8:30 PM Wed 12:00 PM -
                8:30 PM Thu 12:00 PM - 8:30 PM Fri 12:00 PM - 8:30 PM Sat 12:00
                PM - 8:30 PM Sun Closed
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Soul+Food+Vegan+Houston+TX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-location-dot"></i>{" "}2901 Emancipation
                Ave, Houston, TX 77004
              </a>
            </div>
          </div>
        </div>

        {/* Pat Greer's Kitchen */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <div
              id="carouselPatGreersKitchen"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/WO5ffACdQxtRYNV-TK0kZg/o.jpg"
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/-wDHHe8GWagC__GxHXFCGg/o.jpg"
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/tDvPPBTyDvyTyePa5Knz0w/o.jpg"
                    alt="Third slide"
                  />
                </div>
                {/* Add more carousel items for additional images */}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselPatGreersKitchen"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselPatGreersKitchen"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="card-body">
              <h2>Pat Greer's Kitchen</h2>
              <a
                href="https://www.patgreerskitchen.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <i className="fa-solid fa-globe"></i>{" "}
                  https://www.patgreerskitchen.com/
                </p>
              </a>
              <a href="tel:+17138070101">
                <p>
                  <i className="fa-solid fa-phone"></i> (713) 807-0101
                </p>
                <p>
                  <i class="fa-solid fa-face-smile"></i>: 4.4{" "}
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star-half-stroke"></i>(1.8K reviews)
                </p>

                <p>
                  <i class="fa-solid fa-bowl-rice"></i> Vegan
                </p>
              </a>
              <p>
                Mon Closed Tue 10:00 AM - 3:00 PM Wed Closed Thu Closed Fri
                Closed Sat Closed Sun Closed
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Pat+Greer%27s+Kitchen+Houston+TX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-location-dot"></i>{" "}412 W Clay St,
                Houston, TX 77019
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
