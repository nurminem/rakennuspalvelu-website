import React from 'react';
import { Link } from 'react-router-dom'; 
import { Container, Row, Col } from 'react-bootstrap';
import remontti from '../assets/kylpyhuone.jpg';
import rakentaminen from '../assets/rakentaminen1.jpg';

function Services() {
  return (
    <Container className='services-container'>
      <h1 className="text-white mt-4">Rakennuspalvelut ammattitaidolla</h1>
      <h3 className="text-white">Tarjoamme kattavat uudisrakentamisen ja remontoinnin palvelut, <br/>
        jotka toteutamme huolellisesti ja laadukkaasti - <br/>aina asiakkaan toiveiden mukaan.</h3>

        <h2 className='text-white mb-4'> Uudisrakentaminen - <br/>Unelmiesi koti alusta loppuun</h2>
        <Row className='mt-5'> 
            <Col md={6}>
            <p className='text-white text-block'> 
            Rakennamme omakotitaloja, rivitaloja ja liiketiloja, jotka vastaavat asiakkaidemme tarpeita ja toiveita.<br/>
            Meiltä saat kokonaisvaltaisen palvelun, joka kattaa:<br/><br/>
            ✅ Pohjaratkaisujen suunnittelu - Teemme käytännöllisiä ja viihtyisiä tilaratkaisuja, joissa huomioimme arjen toimivuuden ja energiatehokkuuden.<br/>
            ✅ Korkealaatuiset materiaalit - Käytämme kestäviä ja ympäristöystävällisiä materiaaleja, jotka takaavat rakennuksen pitkäikäisyyden.<br/>
            ✅ Projektinhallinta alusta loppuun - Huolehdimme aikatauluista, budjetista ja laadusta, jotta rakennusprojekti valmistuu sovitusti.<br/><br/>
            Toteutamme niin yksittäisiä taloja kuin laajempia kokonaisuuksia, räätälöitynä asiakkaan toiveiden mukaan. Ota yhteyttä ja suunnitellaan yhdessä unelmiesi koti tai liiketila!
            </p>
            </Col>
            <Col md={6}>
                <img
                src={rakentaminen} 
                alt="Rakentaminen"
                className="img-fluid rounded img-services"
                />
            </Col>
        </Row>

        <h2 className='text-white mt-5' > Remontit ja saneeraukset - <br/>Uusi ilme kodillesi</h2>
        <Row className='mt-5 mb-5'> 
            <Col md={6}>
                <img
                src={remontti} 
                alt="Kylpyhuone"
                className="img-fluid rounded img-services"
                />
            </Col>
            <Col md={6}> 
            <p className='text-white text-block'> 
            Onko aika uudistaa koti, mökki tai yrityksen toimitilat? Me toteutamme remontit ja saneeraukset huolellisesti ja laadukkaasti, aina asiakkaan toiveiden mukaan.<br/>
            Palvelumme kattavat:<br/><br/>
            🔹 Kylpyhuone- ja keittiöremontit - Modernisoimme kodin tärkeimmät tilat laadukkailla materiaaleilla ja nykyaikaisilla ratkaisuilla.<br/>
            🔹 Rakenteiden korjaustyöt - Kunnostamme vanhat rakenteet ja parannamme niiden kestävyyttä, jotta rakennus pysyy terveenä ja turvallisena.<br/>
            🔹 Kattoremontit ja laajennukset - Suojaamme kotisi säältä ja lisäämme asuinpinta-alaa tarpeidesi mukaan.<br/><br/>
            Olipa kyseessä pieni pintaremontti tai kokonaisvaltainen peruskorjaus, toteutamme sen ammattitaidolla ja sovitussa aikataulussa. Ota yhteyttä ja pyydä tarjous!
            </p>
            </Col>
        </Row>
    </Container>
    
  );
}

export default Services;
