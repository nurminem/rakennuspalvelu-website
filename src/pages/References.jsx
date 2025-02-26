// src/pages/Contact.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Muista tuoda Link-komponentti
import { Container, Row, Col, Carousel, Modal } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap Icons käyttöön
import before1 from "../assets/before1.jpg"; // Kuvapolut
import after1 from "../assets/after1.jpg";
import before2 from "../assets/before2.jpg"; // Kuvapolut
import after2 from "../assets/after2.jpg";
import keittio from "../assets/keittio.jpg";
import kylpyhuone from "../assets/kylpyhuone.jpg";
import olohuone from "../assets/olohuone.jpg";
import piha from "../assets/piha.jpg";

const imagePairs = [
    { before: before1, after: after1, text: "Kylpyhuone"},
    { before: before2, after: after2, text: "Keittiö"}
]

const galleryImages = [keittio, after1, after2, kylpyhuone, piha, olohuone]

function References() {

  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleShow = (image) => {
    setSelectedImage(image);
    setShow(true);
  };

  return (
    <Container className='references-container'>
      <h1 className="text-white mt-2">Työnäytteitä ja toteutettuja projekteja</h1>
      <h3 className="text-white w-75 mx-auto">
        Tutustu toteuttamiimme rakennusprojekteihin ja remontteihin! 
        Olemme koonneet kuvagallerian, jossa voit nähdä työnjälkemme laadun ja monipuolisuuden.
        </h3>

        <Carousel interval={null} className="mt-4">
  {imagePairs.map((pair, index) => (
    <Carousel.Item key={index}>
      <h4 className="text-white">{pair.text}</h4>
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={5}>
          <p className="text-white mt-3 carousel-text">Ennen</p>
          <img src={pair.before} alt="Ennen" className="img-fluid rounded shadow carousel-img" />
        </Col>
        <Col xs={12} sm={8} md={5}>
          <p className="text-white mt-3 carousel-text">Jälkeen</p>
          <img src={pair.after} alt="Jälkeen" className="img-fluid rounded shadow carousel-img" />
        </Col>
      </Row>
    </Carousel.Item>
  ))}
</Carousel>



        <h2 className='text-white text-center custom-margin-top'>Kuvagalleria</h2>
        {/* Kuvagalleria Gridissä */}
        <Row className="mt-4">
  {galleryImages.map((image, index) => (
    <Col key={index} xs={12} sm={6} md={4} className="mb-4">
      <img 
        src={image} 
        alt={`Valmis työ ${index + 1}`} 
        className="img-fluid rounded shadow gallery-img" 
        onClick={() => handleShow(image)}
        style={{ cursor: 'pointer', height: "300px", objectFit: "cover", width: "100%" }} 
      />
    </Col>
  ))}
</Row>

      {/* Lightbox Modal (avaa kuvan isoksi) */}
      <Modal show={show} onHide={() => setShow(false)} centered>
  <Modal.Body className="text-center position-relative">
  <button
      type="button"
      className="btn-close position-absolute top-0 end-0 m-3 custom-close-btn"
      aria-label="Close"
      onClick={() => setShow(false)}
    ></button>
    <img src={selectedImage} alt="Gallery Enlarged" 
      className="img-fluid rounded"
    />
  </Modal.Body>
</Modal>

    </Container>
  );
}

export default References;
