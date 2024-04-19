import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const LA = () => {
  const { store, actions } = useContext(Context)
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/12CGuy3lOs26WzcI-ELGiA/348s.jpg"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/XKa68_rvb0ZeyCSavKptPA/348s.jpg"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/Va59NcIjGFh9tld1v-6J-A/348s.jpg"
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
              <button type="button" className="btn btn-outline-warning btn-heart" onClick={() => actions.addFavorite({ name: "Vinh Loi Tofu", "website": "https://www.vinhloitofu.com", phone: "(818) 996-9779" })}>
                <i className="fa-solid fa-heart heartBtn"></i>
              </button>
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
                <i className="fa-solid fa-face-smile"></i>: 4.4{" "}
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star-half-stroke"></i>(1.8K reviews)
              </p>

              <p>
                <i className="fa-solid fa-bowl-rice"></i> Vegan
              </p>
              <table className="w-100 mb-3">
                <tbody>
                  <tr>
                    <td>Friday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Saturday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Sunday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Monday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Tuesday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Wednesday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Thursday</td>
                    <td>11 AM–9 PM</td>
                  </tr>
                </tbody>
              </table>

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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/Am_NX1wjN5C1mbpSfEr_Fg/348s.jpg"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/SVjypyMBWKNg_ZDm6UxHFw/348s.jpg"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/-2uUgrLaYNFrveslJk4TZQ/348s.jpg"
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
                <i className="fa-solid fa-face-smile"></i>: 4.4{" "}
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star-half-stroke"></i>(1.8K reviews)
              </p>

              <p>
                <i className="fa-solid fa-bowl-rice"></i> Vegan
              </p>
              <table className="w-100 mb-3">
                <tbody>
                  <tr>
                    <td>Friday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Saturday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Sunday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Monday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Tuesday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Wednesday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Thursday</td>
                    <td>11 AM–9 PM</td>
                  </tr>
                </tbody>
              </table>
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/Iamb2OGgFlrseklcbL3UmA/348s.jpg"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/BZ3N32Mxvoxn3Ku_5lYxuQ/348s.jpg"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/k2DDehigI5tbI1Edt8L1fA/348s.jpg"
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
                <i className="fa-solid fa-face-smile"></i>: 4.4{" "}
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star-half-stroke"></i>(1.8K reviews)
              </p>

              <p>
                <i className="fa-solid fa-bowl-rice"></i> Vegan
              </p>
              <table className="w-100 mb-3">
                <tbody>
                  <tr>
                    <td>Friday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Saturday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Sunday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Monday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Tuesday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Wednesday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Thursday</td>
                    <td>11 AM–9 PM</td>
                  </tr>
                </tbody>
              </table>
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/euRlhQTtkPcIWwZi61yThg/348s.jpg"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/8RSmVSQW8o68SGdYPMHoyw/348s.jpg"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/0h3hQRxdLcVaDMG77hLJUQ/348s.jpg"
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
                href="https://www.nicsonbeverly.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <i className="fa-solid fa-globe"></i>{" "}
                  https://www.nicsonbeverly.com/
                </p>
              </a>
              <a href="tel:+1(323) 746-5130">
                <p>
                  <i className="fa-solid fa-phone"></i> (323) 746-5130
                </p>
              </a>

              <p>
                <i className="fa-solid fa-face-smile"></i>: 4.4{" "}
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star-half-stroke"></i>(1.8K reviews)
              </p>

              <p>
                <i className="fa-solid fa-bowl-rice"></i> Vegan
              </p>
              <table className="w-100 mb-3">
                <tbody>
                  <tr>
                    <td>Friday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Saturday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Sunday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Monday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Tuesday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Wednesday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Thursday</td>
                    <td>11 AM–9 PM</td>
                  </tr>
                </tbody>
              </table>
              <a
                href="https://www.google.com/maps/search/?api=1&query=8265+Beverly+Blvd%2C+Los+Angeles%2C+CA+90048"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-location-dot"></i>{" "}8265 Beverly Blvd, Los Angeles, CA 90048
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/mGmtnakwu5RprvFeJ7D5OQ/348s.jpg"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/7Xp11vgvTu1xjmFTBjaI8A/348s.jpg"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/z56eAEJVP-UsGHukELjmkQ/348s.jpg"
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
                <i className="fa-solid fa-face-smile"></i>: 4.4{" "}
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star-half-stroke"></i>(1.8K reviews)
              </p>


              <i className="fa-solid fa-bowl-rice"></i> Vegan
              <table className="w-100 mb-3">
                <tbody>
                  <tr>
                    <td>Friday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Saturday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Sunday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Monday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Tuesday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Wednesday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Thursday</td>
                    <td>11 AM–9 PM</td>
                  </tr>
                </tbody>
              </table>
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/A6EDB8hoAkabQmj3k6F5Cg/348s.jpg"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/FM3wwVA-3HZBULrHGVT7eg/348s.jpg"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/xejbgsBtuqzfFvFLlCTz2w/348s.jpg"
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
                <i className="fa-solid fa-face-smile"></i>: 4.4{" "}
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star-half-stroke"></i>(1.8K reviews)
              </p>

              <p>
                <i className="fa-solid fa-bowl-rice"></i> Vegan
              </p>
              <table className="w-100 mb-3">
                <tbody>
                  <tr>
                    <td>Friday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Saturday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Sunday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Monday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Tuesday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Wednesday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Thursday</td>
                    <td>11 AM–9 PM</td>
                  </tr>
                </tbody>
              </table>
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/Qifi95WaBgAdoObIaR3Ckg/348s.jpg"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/_FbsSBibFlnU1TNLNsm9dg/348s.jpg"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/Yw_OtMn5FtZmp_f46Z1MmA/348s.jpg"
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
                <i className="fa-solid fa-face-smile"></i>: 4.4{" "}
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star-half-stroke"></i>(1.8K reviews)
              </p>

              <p>
                <i className="fa-solid fa-bowl-rice"></i> Vegan
              </p>
              <table className="w-100 mb-3">
                <tbody>
                  <tr>
                    <td>Friday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Saturday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Sunday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Monday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Tuesday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Wednesday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Thursday</td>
                    <td>11 AM–9 PM</td>
                  </tr>
                </tbody>
              </table>
              <a
                href="https://www.google.com/maps/search/?api=1&query=114+N+Market+St%2C+Inglewood%2C+CA+90301"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-location-dot"></i>{" "}114 N Market St, Inglewood, CA 90301
              </a>

            </div>
          </div>
        </div>

        {/* Vegan On The Fly */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <div
              id="carouselBulanThaiVegetarianKitchen"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/BjTQT3eTWWib0tyoqqrXog/348s.jpg"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/b4lPjrRw_bhNjFTkKWLiug/348s.jpg"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/Z7tPFuee1SSBM2jQbmp-AQ/348s.jpg"
                    alt="Third slide"
                  />
                </div>
                {/* Add more carousel items for additional images */}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselBulanThaiVegetarianKitchen"
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
                data-bs-target="#carouselBulanThaiVegetarianKitchen"
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
              <h2>Bulan Thai Vegetarian Kitchen</h2>
              <a
                href="https://www.bulanthaikitchen.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <i className="fa-solid fa-globe"></i>{" "}
                  https://www.bulanthaikitchen.com/
                </p>
              </a>
              <a href="tel:+1(323) 913-1488">
                <p>
                  <i className="fa-solid fa-phone"></i> (323) 913-1488
                </p>
              </a>

              <p>
                <i className="fa-solid fa-face-smile"></i>: 4.4{" "}
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star-half-stroke"></i>(1.8K reviews)
              </p>

              <p>
                <i className="fa-solid fa-bowl-rice"></i> Vegan
              </p>
              <table className="w-100 mb-3">
                <tbody>
                  <tr>
                    <td>Friday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Saturday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Sunday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Monday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Tuesday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Wednesday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Thursday</td>
                    <td>11 AM–9 PM</td>
                  </tr>
                </tbody>
              </table>
              <a
                href="https://www.google.com/maps/search/?api=1&query=4114+Santa+Monica+Blvd%2C+Los+Angeles%2C+CA+90029"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-location-dot"></i>{" "}4114 Santa Monica Blvd, Los Angeles, CA 90029
              </a>
            </div>
          </div>
        </div>

        {/* Blossom on Columbus */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <div
              id="carouselDeBuenaPlantaSilverLake"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/fkfb9eJeNXJ0LZcXvYmYog/348s.jpg"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/oShZnHvatCKOmuzJoPURJQ/348s.jpg"
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
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/8OIygIHpbzkXEnrFoak00Q/348s.jpg"
                    alt="Third slide"
                  />
                </div>
                {/* Add more carousel items for additional images */}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselDeBuenaPlantaSilverLake"
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
                data-bs-target="#carouselDeBuenaPlantaSilverLake"
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
              <h2>De Buena Planta Silver Lake</h2>
              <a
                href="https://www.debuenaplanta.us/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <i className="fa-solid fa-globe"></i>{" "}
                  https://www.debuenaplanta.us/
                </p>
              </a>
              <a href="tel:+1(323) 426-9023">
                <p>
                  <i className="fa-solid fa-phone"></i> (323) 426-9023
                </p>
              </a>

              <p>
                <i className="fa-solid fa-face-smile"></i>: 4.4{" "}
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star-half-stroke"></i>(1.8K reviews)
              </p>
              <p>
                <i className="fa-solid fa-bowl-rice"></i> Vegan
              </p>
              <p>Rating: 4.6 · 109 reviews · Price range: $$</p>
              <table className="w-100 mb-3">
                <tbody>
                  <tr>
                    <td>Friday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Saturday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Sunday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Monday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Tuesday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Wednesday</td>
                    <td>11 AM–9 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>Thursday</td>
                    <td>11 AM–9 PM</td>
                  </tr>
                </tbody>
              </table>
              <a
                href="https://www.google.com/maps/search/?api=1&query=2815+W+Sunset+Blvd%2C+Los+Angeles%2C+CA+90026"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-location-dot"></i>{" "}2815 W Sunset Blvd, Los Angeles, CA 90026
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
