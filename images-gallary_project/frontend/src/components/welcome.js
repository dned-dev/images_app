import React from "react";
//import { Jumbotron, Button } from 'react-bootstrap'

const Welcome = () => {
  return (
    <div class="container-fluid bg-light text-dark p-5">
      <div class="container bg-light p-5">
        <h1 class="display-4 fw-bold">Images Gallary</h1>
        <p>
          This is a simple web application that retrives photos using unsplash
          API. In order to start enter any search term in the input field.
        </p>
        <a href="https://unsplash.com" class="btn btn-primary">
          Learn more
        </a>
      </div>
    </div>
  );
};

export default Welcome;
