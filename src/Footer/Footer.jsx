import { Container, Row, Col } from 'react-bootstrap'
import { Facebook, YouTube, LinkedIn, Twitter, AddCard, Contactless, AttachMoney , AccountBalance} from '@mui/icons-material'
import image from './images.png'
import './Footer.scss'

const Footer = () => {
    return (
        <div style={{marginTop: 30}} className='footerContents'>
            <Container >
                <Row>
                    <Col lg={3} xs={6} >
                        <img src={image}
                            width="60"
                            height="40"
                            alt="" />
                        <p>Got questions ? Call us<br />1-800-532-4427</p>
                        <p>
                            Contact Info<br />
                            5449 Endeavour CT.<br />
                            Moorpark, CA 93021
                        </p>
                        <div className='socialMedia'>
                            <Facebook />
                            <YouTube />
                            <LinkedIn />
                            <Twitter />
                        </div>
                    </Col>
                    <Col  lg={3} xs={6} className='company' >
                        <span>COMPANY</span>
                        <ul>
                            <li>About Us</li>
                            <li>Buyer</li>
                            <li>Sellers</li>
                            <li>Contact Us</li>
                        </ul>
                    </Col>
                    <Col  lg={3} xs={6} className='info'>
                        <span>INFORMATION</span>
                        <ul>
                            <li>Exchange & Returns Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>FAQ</li>
                        </ul>
                    </Col>
                    <Col  lg={3} xs={6} className='payment'>
                        <span>PAYMENT METHODS</span>
                        <div>
                            <AddCard />
                            <Contactless />
                            <AttachMoney />
                            <AccountBalance/>
                        </div>
                        <div className='signUpForEmail' >
                            <span>SIGN UP FOR EMAIL</span>
                            <p>Be the first to hear about promotions, new products,<br />trends, and more</p>
                            <button>
                                SUBSCRIBE NOW!
                            </button>
                        </div>
                    </Col>
                    <hr />
                    <div className='copyright'>
                        <small>Copyrights<span>&copy;</span>2021 company ltd all rights reserved</small>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Footer