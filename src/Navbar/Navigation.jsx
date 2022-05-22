import { Navbar, Container, Nav, Row, Col, InputGroup, FormControl } from 'react-bootstrap'
import { Person, ShoppingCart, LocalShippingOutlined, Search } from '@mui/icons-material';
import { Badge } from '@material-ui/core'
import brandImage from './images.png'
import './Navigation.scss'



const Navigation = () => {
    return (
        <Navbar expand="lg" bg="light" variant="light" className='navbarBody' >
            <Container>
                <Navbar.Brand href="#home" className='brandLogo' >
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <img
                        src={brandImage}
                        width="80"
                        height="50"
                        alt="" />
                </Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <div className='delivery'>
                            <LocalShippingOutlined style={{fontSize:40}}/>
                            <span>Delivery to<br />Moorpark store</span>
                        </div>
                    </Nav>
                    <Nav>
                        <div className='search' style={{ marginRight: 150 }}>
                            <input type="text" size={70} placeholder='Search by Product, Category or Brand' />
                            <div className='searchIcon'>
                                <Search />
                            </div>
                        </div>
                    </Nav>
                </Navbar.Collapse>
                <Nav>
                    <Nav.Link className='person'>
                        <Person className='personLogo' />
                        <span >Hello John!</span>
                    </Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link>
                        <Badge badgeContent={5} color="secondary">
                            <ShoppingCart style={{ color: '#2b4c5c' , marginLeft:10 , fontSize:30 }} className='shoppingCartIcon' />
                        </Badge>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation