import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

const PageLayout = () => {
  const [data, setData] = useState([[]]);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    axios.post('http://localhost:3000/webhook')
      .catch(error => console.error('Error:', error));
    const ws = new WebSocket('ws://localhost:8080');

    ws.onmessage = (event) => {
      const allValues = JSON.parse(event.data);
      const values = allValues['Sheet2'];
      setData(values);
      // console.log(values)

      setImageUrl(values[0][4]);
      console.log(data)
    };

    return () => {
      ws.close();
    };
  }, []);
  useEffect(() => {
    console.log(data);
    console.log(imageUrl)
  }, [data]);

  return (

    <body>
      <h1 style={{ fontSize: '50px', fontFamily: 'monospace', color: 'grey', textAlign: 'center' }}>Sheet 2</h1>
      <div class="section-top" id="section-12685">
        <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
          <div class="container">
            <a class="navbar-brand" href="/">KRN</a>
            <form action="#" class="searchform order-sm-start order-lg-last">
              <div class="form-group d-flex">

                <button type="button" placeholder="" class="form-control search"><span class="fa fa-search"></span></button>
              </div>
            </form>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="fa fa-bars"></span> Menu
            </button>
            <div class="collapse navbar-collapse" id="ftco-nav">
              <ul class="navbar-nav m-auto">
                <li class="nav-item"><a href="/" class="nav-link">Home</a></li>

              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div class="section-top" id="section-12686">
        <section class="hero-wrap hero-wrap-2" style={{ backgroundImage: `url(${data[0][4]})` }}>
          <div class="overlay"></div>
          <div class="container">
            <div class="row no-gutters slider-text align-items-end" style={{ position: 'relative', top: '19rem' }}>
              <div className="col-md-9 ftco-animate pb-5 fadeInUp ftco-animated, about-sec">
                <p class="breadcrumbs mb-2" style={{ textDecoration: 'none' }}><span style={{ textDecoration: 'none' }} class="mr-2"><a href="/">Home <i class="ion-ios-arrow-forward"></i></a></span> <span>About us <i class="ion-ios-arrow-forward"></i></span></p>
                <h1 class="mb-0 bread">About Us</h1>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div class="section-top" id="section-12687">
        <section class="ftco-section ftco-no-pt bg-light">
          <div class="container">
            <div class="row d-flex no-gutters">
              <div class="col-md-6 d-flex">
                <div className="test img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-center mb-4 mb-sm-0" style={{ backgroundImage: `url(${data[0][5]})` }}  >
                </div>
              </div>
              <div class="col-md-6 pl-md-5 py-md-5">
                <div class="heading-section pl-md-4 pt-md-5">
                  <span className="subheading">{data[0][0]}</span>
                  <h2 class="mb-4">{data[0][1]}</h2>
                  <p>{data[0][2]}</p>
                  <p>{data[0][3]}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </body>
  );
};

export default PageLayout;