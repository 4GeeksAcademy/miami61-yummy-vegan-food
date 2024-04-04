import React from "react";

export const LA = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <div
              id="carouselVinhLoiTofu"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/1blQSQRt42H_dFj-n9uKww/348s.jpg"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/-cB1VBHZjiz5y2S8Z20o1A/o.jpg"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/-OVLSGBt7l-0mX1KAzILhQ/o.jpg"
                    alt="Third slide"
                  />
                </div>
                {/* Add more carousel items for additional images */}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#VinhLoiTofu"
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
                data-bs-target="#carouselVinhLoiTofu"
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
              <h2>Vinh Loi Tofu</h2>
              <a
                href="https://www.vinhloitofu.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <i className="fa-solid fa-globe"></i>{" "}
                  https://www.vinhloitofu.com/
                </p>
              </a>
              <a href="tel:+1(818) 996-9779">
                <p>
                  <i className="fa-solid fa-phone"></i> (818) 996-9779
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
              <p>MON: Closed TUES - SUN: 11AM - 7:30PM</p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=18625+Sherman+Way+%23101%2C+Reseda%2C+CA+91335"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-location-dot"></i> 18625 Sherman Way
                #101, Reseda, CA 91335
              </a>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <div
              id="carouselShojinDowntown"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/0DTlNsBy9zXYsgM9nTLv-Q/348s.jpg"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/mtTSFyrs6ouHoenIJp37CQ/348s.jpg"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/rsEuUYKgoeBVyoJwVXULcg/348s.jpg"
                    alt="Third slide"
                  />
                </div>
                {/* Add more carousel items for additional images */}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselShojinDowntown"
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
                data-bs-target="#carouselShojinDowntown"
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
              <h2>Shojin Downtown</h2>
              <a
                href="https://www.theshojin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <i className="fa-solid fa-globe"></i>{" "}
                  https://www.theshojin.com/
                </p>
              </a>
              <a href="tel:+1(213) 617-0305">
                <p>
                  <i className="fa-solid fa-phone"></i> (213) 617-0305
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
                MON - THURS: 11:30AM - 10PM FRI: 11:30AM - 10:30PM SAT: 12PM -
                10:30PM SUN: 12PM - 9PM
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=333+S+Alameda+St+%23310%2C+Los+Angeles%2C+CA+90013"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-location-dot"></i> 333 S Alameda St
                #310, Los Angeles, CA 90013
              </a>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <div
              id="carouselCrossroadsKitchen"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/PbE5gzg5Lnsk1wNjPTaD0A/348s.jpg"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/RZAaB5_HLubbzJt1nbk3dw/348s.jpg"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/91C-1ukXmeAlObM5shgeaA/348s.jpg"
                    alt="Third slide"
                  />
                </div>
                {/* Add more carousel items for additional images */}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselCrossroadsKitchen"
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
                data-bs-target="#carouselCrossroadsKitchen"
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
              <h2>Crossroads Kitchen</h2>
              <a
                href="https://www.crossroadskitchen.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <i className="fa-solid fa-globe"></i>{" "}
                  https://www.crossroadskitchen.com/
                </p>
              </a>
              <a href="tel:+1(323) 782-9245">
                <p>
                  <i className="fa-solid fa-phone"></i> (323) 782-9245
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
                MON - FRI: 11AM - 3PM, 5PM - 11PM SAT: 10AM - 3PM, 5PM - 11PM
                SUN: 10AM - 3PM, 5PM - 10PM
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=4329+Lankershim+Blvd%2C+North+Hollywood%2C+CA+91602"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-location-dot"></i> 4329 Lankershim
                Blvd, North Hollywood, CA 91602
              </a>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <div
              id="carouselNicsOnBeverly"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/89GYFC9ngYInp2LgJ48mig/348s.jpg"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/e_5Oe3kkSthT0K0OsUR_CA/348s.jpg"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/7DEcwWPetpgnCm8qKwrYEQ/348s.jpg"
                    alt="Third slide"
                  />
                </div>
                {/* Add more carousel items for additional images */}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselNicsOnBeverly"
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
                data-bs-target="#carouselNicsOnBeverly"
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
              <h2>Nic's On Beverly</h2>
              <a
                href="https://willownewyork.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <i className="fa-solid fa-globe"></i>{" "}
                  https://willownewyork.com/
                </p>
              </a>
              <a href="tel:+1(323) 746-5130">
                <p>
                  <i className="fa-solid fa-phone"></i> (323) 746-5130
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
                MON - WED: 12PM - 3PM, 5PM - 9PM THURS: 12PM - 3PM, 5PM - 10PM
                FRI: 12PM - 10PM SAT: 10AM - 3PM, 5PM - 10PM SUN: 10AM - 3PM,
                5PM - 8:30PM
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=8284+Melrose+Ave%2C+Los+Angeles%2C+CA+90046"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-location-dot"></i> 8284 Melrose Ave,
                Los Angeles, CA 90046
              </a>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <div
              id="carouselRahelEthiopianVeganCuisine"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/y8gPWgjFxyRc6wxrWPm4wg/348s.jpg"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/rkDDGIJKqToCXOltud6CFA/348s.jpg"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/hOVOpRVSW3T_I1lQ8SQ4Bg/348s.jpg"
                    alt="Third slide"
                  />
                </div>
                {/* Add more carousel items for additional images */}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselRahelEthiopianVeganCuisine"
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
                data-bs-target="#carouselRahelEthiopianVeganCuisine"
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
              <h2>Rahel Ethiopian Vegan Cuisine</h2>
              <a
                href="https://rahelvegancuisine.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <i className="fa-solid fa-globe"></i>{" "}
                  https://rahelvegancuisine.com/
                </p>
              </a>
              <a href="tel:+1(323) 937-8401">
                <p>
                  <i className="fa-solid fa-phone"></i> (323) 937-8401
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
              <p>MON: Closed TUES - THURS: 4PM - 10PM FRI - SUN: 11AM - 10PM</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=8265+Beverly+Blvd%2C+Los+Angeles%2C+CA+90048"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-location-dot"></i> 8265 Beverly Blvd,
                Los Angeles, CA 90048
              </a>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <div
              id="carouselStuffIEat"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/4cE9Kj0hyvrhhonzPWJJxg/348s.jpg"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/3rrAekLuKuyDYQm914diEw/348s.jpg"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/ISRGmxk_EBN1qNtJRQr83w/348s.jpg"
                    alt="Third slide"
                  />
                </div>
                {/* Add more carousel items for additional images */}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselStuffIEat"
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
                data-bs-target="#carouselStuffIEat"
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
              <h2>Stuff I Eat</h2>
              <a
                href="https://www.stuffieat.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <i className="fa-solid fa-globe"></i>{" "}
                  https://www.stuffieat.com/
                </p>
              </a>
              <a href="tel:+1(310) 671-0115">
                <p>
                  <i className="fa-solid fa-phone"></i> (310) 671-0115
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
              <p>MON - TUES: Closed WED - SUN: 12PM - 6PM</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=114+N+Market+St%2C+Inglewood%2C+CA+90301"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-location-dot"></i> 114 N Market St,
                Inglewood, CA 90301
              </a>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <div
              id="carouselVeganAFFoodTruck"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/t2NSrjyRdYbD_5PZZ_Ly1g/348s.jpg"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/wC0FBn-NrUzL5YecGUulLg/348s.jpg"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/IZ8gOvpKDwqcViuY2X8G_w/348s.jpg"
                    alt="Third slide"
                  />
                </div>
                {/* Add more carousel items for additional images */}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselVeganAFFoodTruck"
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
                data-bs-target="#carouselVeganAFFoodTruck"
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
              <h2>Vegan AF Food Truck</h2>
              <a
                href="https://www.instagram.com/veganafoodtruck/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <i className="fa-solid fa-globe"></i>{" "}
                  https://www.instagram.com/veganafoodtruck/?hl=en
                </p>
              </a>
              <a href="tel:+1(323) 347-4970">
                <p>
                  <i className="fa-solid fa-phone"></i> (323) 347-4970
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
              <p>MON - TUES: Closed WED - SAT: 12PM - 6PM SUN: 11AM - 5PM</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=86+Allen+St%2C+New+York%2C+NY"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-location-dot"></i> 86 Allen St, New
                York, NY
              </a>
            </div>
          </div>
        </div>

        {/* Vegan On The Fly */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <div
              id="carouselVeganOnTheFly"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/UA4luk0z-UWv7tzAOtetSw/348s.jpg"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/sBlftAM36GPm-yzU-SR54g/348s.jpg"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/RKdNsSTn62xZL4Ckmx36Mw/348s.jpg"
                    alt="Third slide"
                  />
                </div>
                {/* Add more carousel items for additional images */}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselVeganOnTheFly"
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
                data-bs-target="#carouselVeganOnTheFly"
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
              <h2>Vegan On The Fly</h2>
              <a
                href="https://www.veganontf.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <i className="fa-solid fa-globe"></i>{" "}
                  https://www.veganontf.com/
                </p>
              </a>
              <a href="tel:+18328312856">
                <p>
                  <i className="fa-solid fa-phone"></i> (832) 831-2856
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
                Mon 12:00 PM - 8:30 PM Tue 12:00 PM - 8:30 PM Wed 12:00 PM -
                8:30 PM Thu 12:00 PM - 8:30 PM Fri 12:00 PM - 8:30 PM Sat 12:00
                PM - 8:30 PM Sun Closed
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=24+W+45th+St%2C+New+York%2C+NY"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-location-dot"></i> 24 W 45th St, New
                York, NY
              </a>
            </div>
          </div>
        </div>

        {/* Blossom on Columbus */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <div
              id="carouselBlossomOnColumbus"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/hPCY682KqrmCP_puamgVqQ/348s.jpg"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/dfanP-xoiygVoTRSsK9O8w/348s.jpg"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/MvW5WzruTrq5JhTlDYlzQg/348s.jpg"
                    alt="Third slide"
                  />
                </div>
                {/* Add more carousel items for additional images */}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselBlossomOnColumbus"
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
                data-bs-target="#carouselBlossomOnColumbus"
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
              <h2>Blossom on Columbus</h2>
              <a
                href="Blossom on Columbus"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <i className="fa-solid fa-globe"></i>{" "}
                  https://www.blossomnyc.com/
                </p>
              </a>
              <a href="tel:+17138070101">
                <p>
                  <i className="fa-solid fa-phone"></i> (713) 807-0101
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
              <p>Rating: 4.6 · 109 reviews · Price range: $$</p>
              <p>
                Mon Closed Tue 10:00 AM - 3:00 PM Wed Closed Thu Closed Fri
                Closed Sat Closed Sun Closed
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=507+Columbus+Ave%2C+New+York%2C+NY"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-location-dot"></i> 507 Columbus Ave,
                New York, NY
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
