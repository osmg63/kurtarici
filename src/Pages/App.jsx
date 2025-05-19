import React, { useEffect } from 'react';
import { Navbar, Nav, Container, Button, Card, Form, Row, Col } from 'react-bootstrap';
import { FaPhone, FaClock, FaTools, FaShieldAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import AOS from 'aos';
import { services } from './services';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './App.css';
import foto1 from "/Pictures/foto1.jpg";

// Feature Component
const Feature = ({ Icon, title, description }) => {
  return (
    <Col md={4} className="mb-4" data-aos="fade-up">
      <Icon className="feature-icon mb-3" />
      <h3>{title}</h3>
      <p>{description}</p>
    </Col>
  );
};


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" >
  <Container style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <Navbar.Brand 
      href="#home" 
      className="text-silver" 
      style={{ fontSize: '1.5rem', letterSpacing: '1px', }}
    >
      GÜMÜŞ OTO KURTARMA
    </Navbar.Brand>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto text-lg-start text-center">
        <Nav.Link href="#home" className="fw-semibold px-lg-3 py-2">ANA SAYFA</Nav.Link>
        <Nav.Link href="#services" className="fw-semibold px-lg-3 py-2">HİZMETLER</Nav.Link>
        <Nav.Link href="#about" className="fw-semibold px-lg-3 py-2">HAKKIMIZDA</Nav.Link>
        <Nav.Link href="#contact" className="fw-semibold px-lg-3 py-2">İLETİŞİM</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

      {/* Hero Section */}
      <section
            id="home"
            className="hero-section text-white d-flex align-items-center"
            style={{
            }}
            >
        <Container>
        <Row className="text-center">
          <Col data-aos="fade-up">
            {/* Başlıkları Daha Kalın ve Parlak Yap */}
            <h1
              className="display-4 mb-4 "
              style={{
                textShadow: "2px 2px 10px rgba(17, 16, 16, 0.8)",
              }}
            >
              7/24 Oto Kurtarma Hizmeti
            </h1>
            <p
              className="lead mb-4"
              style={{
                textShadow: "1px 1px 5px rgba(8, 8, 8, 0.7)",
                
              }}
            >
              Yolda kaldığınızda güvenebileceğiniz profesyonel çözüm ortağınız
            </p>
            {/* Butonu Daha Belirgin Yap */}
            <Button
              variant="danger"
              size="lg"
              href="tel:+905432071130"
              className="fw-bold"
              style={{
                boxShadow: "0px 4px 15px rgba(255, 0, 0, 0.7)",
                borderRadius: "8px",
                padding: "12px 30px",
                fontSize: "1.2rem",
                
              }}
            >
              <FaPhone className="me-2" />
              Hemen Ara
            </Button>
          </Col>
        </Row>
      </Container>
</section>


     {/* Services */}
<section id="services" className="py-5">
  <Container>
    <h2 className="text-center mb-5">Hizmetlerimiz</h2>
    {/* Add the new description */}
    <Row className="text-center">
      <Col>
        <p>
          Gaziantep şehir içi ve çevresinde, oto kurtarma ve yol yardım ihtiyaçlarınızı en hızlı ve güvenilir şekilde karşılıyoruz. 
          Geniş hizmet ağı ve deneyimli ekibimizle, araç sorunlarınızı en kısa sürede çözmek için buradayız. 
          İster şehir içi acil çekici ihtiyacı, ister Gaziantep ve çevresindeki uzun yol yardımları olsun, 
          profesyonel hizmet anlayışımızla size her zaman en iyi çözümü sunmak için çalışıyoruz.
        </p>
      </Col>
    </Row>
    <Row>
      {services.map((service, index) => (
        <Col md={4} key={index} className="mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
          <Card className="h-100 service-card">
            <Card.Img variant="top" src={service.image} />
            <Card.Body>
              <Card.Title>{service.title}</Card.Title>
              <Card.Text>{service.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    
  </Container>
</section>


      {/* Features */}
      <section className="bg-light py-5">
        <Container>
          <Row className="text-center">
            <Feature 
              Icon={FaClock}
              title="7/24 Hizmet"
              description="Günün her saati yanınızdayız"
            />
            <Feature 
              Icon={FaTools}
              title="Profesyonel Ekip"
              description="Uzman kadromuzla kaliteli hizmet"
            />
            <Feature 
              Icon={FaShieldAlt}
              title="Güvenilir Hizmet"
              description="10 yıllık tecrübe"
            />
          </Row>
        </Container>
      </section>

      {/* About */}
      <section id="about" className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} data-aos="fade-right">
              <h2 className="mb-4">Hakkımızda</h2>
              <p>Gaziantep ve çevresinde, oto kurtarma ve yol yardım hizmetlerini 10 yılı aşkın bir süredir profesyonel bir şekilde sunuyoruz. Gaziantep şehir merkezi ve tüm ilçelerinde, modern ekipmanlarımız ve uzman kadromuzla 7/24 hizmetinizdeyiz.Müşteri memnuniyeti odaklı çalışma prensibimizle, her türlü araç için güvenli ve hızlı çözümler sunuyoruz.</p>
<p> Gaziantep'in yanı sıra, çevre illerde de oto kurtarma ve yol yardım ihtiyaçlarınızı en kısa sürede karşılamak için buradayız. İster şehir içi acil çekici ihtiyacı, ister çevre illerdeki uzun yol yardımları olsun, profesyonel hizmet anlayışımızla her zaman yanınızdayız. Üstelik, uygun fiyatlarla güvenilir hizmet sunarak, sizi hiçbir zaman mağdur etmiyoruz.</p>
            </Col>
            <Col md={6} lg={4} data-aos="fade-left" style={{paddingLeft:'5%'}}>
                <img 
                    src={foto1} 
                    alt="About Us" 
                    className="img-fluid rounded shadow" 
                />
                </Col>
          </Row>
        </Container>
      </section>
            {/* Contact */}
            <section id="contact" className="bg-light py-4">
            <Container>
                <Col md={6} className="mb-4" data-aos="fade-right" style={{ }}>
                    <Card className="h-10 shadow border-0" style={{width: '100%',height:'100%'}}>
                    <Card.Body style={{display:'flex' ,flexDirection:'column',alignItems:'center', justifyContent:'center'}}>
                        <h3 className="mb-4">İletişim Bilgileri</h3>
                        <p className="mb-3">
                        <FaMapMarkerAlt className="me-2 text-danger" />
                      Gaziantep
                        </p>
                        <p className="mb-3">
                        <FaPhone className="me-2 text-danger" />
                        <a href="tel:+905432071130" className="text-decoration-none text-dark">
                            0543 207 11 30
                        </a>
                        </p>
                        <p className="mb-3">
                        <FaEnvelope className="me-2 text-danger" />
                        <a href="mailto:info@otokurtarici.com" className="text-decoration-none text-dark">
                            info@otokurtarici.com
                        </a>
                        </p>
                    </Card.Body>
                    </Card>
                </Col>
            </Container>
            </section>


      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <Container className="text-center">
          <p className="mb-0">&copy; 2025 Gümüş Oto Kurtarma. Tüm hakları saklıdır.</p>
        </Container>
      </footer>
    </>
  );
}

export default App;