import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import keittio from '../assets/keittio.jpg';
import lattia from '../assets/lattia.jpg';
import profiili from '../assets/profiilikuva.png';



function Home() {
  return (
    <>
    <div className='home-background'>
    <Container className='home-container'>
      <p className="text-white">Rakennuspalvelu Oy</p>
      <h1 className="text-white">Ammattitaitoista <br/> rakentamista</h1>
      <Link to="/yhteystiedot" className="btn btn-light mb-5">
        Ota yhteyttä
      </Link>
      </Container>
      </div>

      <div
        style={{
          backgroundColor: '#4790a4', 
          paddingTop: '20px', 
          paddingBottom: '20px', 
        }}
      >
      <Container className="home-container">
      <Row className="g-5 align-items-center">
        <Col xs={12} md={6} className="text-center text-md-start">
        <h2 className="text-white">Tutustu yrittäjään</h2>
          <p className="text-white">
          Nimeni on ---, ja olen ahkera ja tunnollinen rakennusalan yrittäjä pääkaupunkiseudulla. 
            Pohjakoulutukseltani olen rakennusalan ammattikoulun käynyt ja valmistunut AMK-insinööriksi talotekniikan ja kiinteistöjohtamisen alalta.<br/>
            Lisäksi minulla on vedeneristys-sertifikaatti, joka tukee laajaa osaamistani rakennusprojekteissa.
            <br/><br/>Rakennusalalla minulla on yli 20 vuoden kokemus, ja olen toiminut yrittäjänä vuodesta 2006 alkaen. 
            Koko urani ajan olen ollut mukana monenlaisissa rakennusprojekteissa, ja asiakkaideni tyytyväisyys on ollut aina toimintani ykkösprioriteetti.
          </p>
        </Col>
    
        <Col xs={12} md={6} className='text-center'>
          <img
            src={profiili} 
            alt="Yrittäjä"
            className="img-fluid rounded img-rounded img-home"
            
          />
        </Col>
      </Row>

      <Row className='mt-5 align-items-center'>
        <Col xs={12} md={6} > 
        <img
            src={lattia} 
            alt="Palvelut"
            className="img-fluid img-rounded img-home" style={{marginBottom: '40px'}}
           
          />
        
        </Col>
        <Col xs={12} md={6} className='text-center text-md-start'>
        <h2 className="text-white"> Palvelumme</h2>
          <p className="text-white">
          Tarjoamme monipuolisia rakennuspalveluita niin uudisrakentamiseen kuin remontointiin.<br/>
          Rakennamme omakotitaloja, rivitaloja ja liiketiloja asiakkaan toiveiden mukaan sekä toteutamme laadukkaat remontit, 
          kuten kylpyhuone- ja keittiöuudistukset, kattoremontit ja rakenteiden korjaustyöt. Lue lisää palveluistamme ja 
          löydä ratkaisu juuri sinun tarpeisiisi!
          </p>
          <Link to="/palvelut" className="btn btn-light mb-5">
            Tutustu palveluihin
            </Link>
          </Col>
        </Row>  

    
      <Row className="mt-5 align-items-center">
        <Col xs={12} md={6} className='text-center text-md-start'>
          <h2 className="text-white"> Projektigalleria</h2>
          <p className="text-white">
          Tutustu toteuttamiimme projekteihin ja asiakkaidemme kokemuksiin! <br/>Kuvagalleriassa voit nähdä valmistuneita rakennuskohteita 
          sekä ennen ja jälkeen -kuvia, jotka havainnollistavat työn jälkemme laatua. 
          </p>
          <Link to="/referenssit" className="btn btn-light mb-5">
            Katso kuvat
        </Link>
        </Col>
        <Col xs={12} md={6} className='text-center'>
          <img
            src={keittio} 
            alt="Projektigalleria"
            className="img-fluid img-rounded img-home" 
          />
        </Col>
      </Row>
        </Container>
        </div>
    </>
    
    
  );
}

export default Home;
