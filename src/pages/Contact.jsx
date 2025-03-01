import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        alert('Lomake on lähetetty onnistuneesti!');
        // Tyhjennetään lomakkeen kentät
    setFormData({
        name: '',
        email: '',
        number: '',
        message: ''
      });
    };
    

  return (
    <Container className='contact-container'>
      <h1 className="text-white text-center mt-2">Ota yhteyttä - Autamme mielellämme!</h1>
      <h3 className="text-white w-75 mx-auto text-center">
      Olipa kyseessä rakennusprojekti, remontti tai muu kysymys, olemme valmiina auttamaan. 
      Ota yhteyttä puhelimitse, sähköpostilla tai lomakkeen kautta!
        </h3>

        <Row className='mb-5'>
          <Col xs={12} md={6} className="mb-4"> 
            <div className="contact-box p-4" style={{ 
              backgroundColor: "#286779", 
              borderRadius: "25px", 
              maxWidth: "450px",  
              margin: "0 auto" 
          }}>
      <h4 className="text-white mb-4">Rakennuspalvelu Oy</h4>
      <ul className="text-white">
        <li>📞 Puhelin: <a href="tel:+358401234567" className="text-white">+358 40 123 4567</a></li>
        <li>✉️ Sähköposti: <a href="mailto:info@rakennuspalvelu.fi" className="text-white">info@rakennuspalvelu.fi</a></li>
        <li>📍 Osoite: Rakennuskatu 5, 00100 Helsinki</li>
      </ul>
    </div>
  </Col>

  <Col xs={12} md={6}>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.7454522844744!2d24.953770976841977!3d60.16839274357773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920bcf8657cbcb%3A0x34f5b4f952e7f26!2sPresidentinlinna!5e0!3m2!1sfi!2sfi!4v1740389196761!5m2!1sfi!2sfi" 
   width="80%" 
   height="300" 
   style={{ border: 0, borderRadius: '25px'}} 
   allowFullScreen="" 
   loading="lazy" 
   >
   </iframe>
  </Col>
</Row>

<Row>
  <Col xs={12} className="text-center">
    <h2 className="text-white mb-4">Lähetä meille viesti</h2>
  </Col>
</Row>

<Row>
  <Col xs={12} md={8} lg={6} className="mx-auto contact-test"> 
    <div className="contact-box p-4" style={{ 
            backgroundColor: "#286779", 
            borderRadius: "25px", 
            maxWidth: "500px", 
            margin: "0 auto"   
            }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label className="text-white">Nimi</Form.Label>
          <Form.Control type="text" placeholder="Syötä nimesi" name="name" value={formData.name} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formEmail" className="mt-3">
          <Form.Label className="text-white">Sähköposti</Form.Label>
          <Form.Control type="email" placeholder="Syötä sähköpostisi" name="email" value={formData.email} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formNumber" className="mt-3">
          <Form.Label className="text-white">Puhelinnumero</Form.Label>
          <Form.Control type="text" placeholder="Syötä puhelinnumerosi" name="number" value={formData.number} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formMessage" className="mt-3">
          <Form.Label className="text-white">Viesti</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Kirjoita viestisi" name="message" value={formData.message} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit" className="btn btn-light mt-4 w-100"> 
          Lähetä viesti
        </Button>
      </Form>
    </div>
  </Col>
</Row>


    </Container>
  );
}

export default Contact;
