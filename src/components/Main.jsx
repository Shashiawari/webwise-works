import React from "react";

const Main = () => {
  return (
    <div>
      <div className="main">
        <nav class="navbar navbar-expand-sm ">
          <div class="container-fluid">
            <a class="navbar-brand mx-2" href="#">
              <svg
                className="mx-2"
                width="50"
                height="77"
                viewBox="0 0 102 77"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M69.7982 76.5282L57.4999 38.0282H65.6753L71.4848 57.2074L79.59 38.1697H79.7305L87.8122 57.1838L93.5983 38.0282H101.797L89.4989 76.5282H89.0538L79.5666 55.8627L70.2199 76.5282H69.7982Z"
                  fill="black"
                />
                <path
                  d="M31.0767 77L6.48013 0H22.831L34.4499 38.3585L50.6602 0.283088H50.9413L67.1048 38.3113L78.6769 0H95.0746L70.4781 77H69.5879L50.6134 35.6691L31.92 77H31.0767Z"
                  fill="black"
                />
                <path
                  d="M12.2983 74.1691L0 35.6691H8.17543L13.9849 54.8483L22.0901 35.8107H22.2306L30.3123 54.8248L36.0984 35.6691H44.2972L31.999 74.1691H31.5539L22.0666 53.5037L12.7199 74.1691H12.2983Z"
                  fill="black"
                />
              </svg>
              WebWorks
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link " aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " aria-disabled="true">
                    Disabled
                  </a>
                </li>
              </ul>
              <button className="btns mx-2">create</button>
            </div>
          </div>
        </nav>
        <div className="h1 mx-5">
          <img
            src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1714379850/3aa3e7d0-04a5-4b9c-a123-6686dd1b44c1.png"
            className="img-fluid"
          ></img>
          <button className="btnsss">Try now</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
