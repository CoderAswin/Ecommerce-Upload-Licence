import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import './Form.scss'
import { useState, useEffect } from 'react'
import BusinessInfo from './BusinessInfo/BusinessInfo'
import ShipmentInfo from './ShipmentInfo/ShipmentInfo'


const Form = () => {

    const [show, setShow] = useState(false);
    const [document, setDocument] = useState(false)
    const [documentName, setDocumentName] = useState('')
    const submit = () => {
        setDocument(true)
        handleClose()
    }

    const uploadFile = (e) => {
        setDocumentName(e.target.files[0].name) //getting the filename

    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const initialValues = {
        nickName: "", legalName: "",
        address: "", zipCode: "", city: "", country: "",
        phoneNumber: ""
    }
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
        console.log(formValues);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(formValues))
        setIsSubmit(true)
    }

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors])


    const validate = (values) => {  //form validation
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
        if (!values.nickName) {
            errors.nickName = "nickname is required!"
        }
        if (!values.legalName) {
            errors.legalName = "legalname is required!"
        }
        if (!values.address) {
            errors.address = "Address is required!"
        }
        if (!values.zipCode) {
            errors.zipCode = "zipCode is required!"
        }
        if (!values.city) {
            errors.city = "City is required!"
        }
        if (!values.country) {
            errors.country = "Country is required!"
        }
        if (!values.phoneNumber) {
            errors.phoneNumber = "phoneNumber is required!"
        }

        return errors
    }

    return (
        <Container style={{ marginTop: 20 }} className='formBody'>
            <div>
                <h2>Add Store</h2>
                <h4>Business Information</h4>
            </div>
            <hr />
            {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
            <Container>
                <form onSubmit={handleSubmit} >
                    <BusinessInfo formValues={formValues}
                        handleChange={handleChange}
                        formErrors={formErrors}
                    />
                    <Row style={{ marginTop: 20 }}>
                        <ShipmentInfo formValues={formValues}
                            handleChange={handleChange}
                            formErrors={formErrors}
                        />
                        <Col>
                            <span style={{ fontSize: 30 }}>Licence Details</span>
                            <hr />
                            <div className='licenceBody'>
                                <span>ST-5 SST Exemption certificate</span>
                                <div className='uploadDocument'>
                                    {document ? <span style={{ color: 'red' }}>{documentName}</span> : <span style={{ color: 'red' }}>No file choosen</span>}
                                    {document ? <Button style={{ backgroundColor: '#165C7D', marginLeft: 20 }}>
                                        Delete
                                    </Button> : <Button style={{ backgroundColor: '#165C7D', marginLeft: 20 }} onClick={handleShow}>
                                        Upload Document
                                    </Button>}


                                    <Modal 
                                        show={show}
                                        onHide={handleClose}
                                        backdrop="static"
                                        keyboard={false}
                                    >
                                        <Modal.Header closeButton>
                                            <Modal.Title>
                                                <h2>Add Licence Details</h2>
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body >
                                            <form>
                                                <div>
                                                    <label htmlFor="">Select category</label><br />
                                                    <select name="" id="">
                                                        <option value="">GA</option>
                                                        <option value=""></option>
                                                        <option value=""></option>
                                                        <option value=""></option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label htmlFor="">Licence Number</label><br />
                                                    <input  size={50} type="text" />
                                                </div>
                                                <div className='Expiry Date'>
                                                    <label htmlFor="">Expiry date</label><br />
                                                    <input type="date" />
                                                </div>
                                                <div style={{ marginTop: 10 }}>
                                                    <input type="file" onChange={uploadFile} />
                                                </div>
                                                <Modal.Footer>
                                                    <Button variant="secondary" onClick={handleClose}>
                                                        Close
                                                    </Button>
                                                    <Button onClick={submit} variant="primary">Submit</Button>
                                                </Modal.Footer>
                                            </form>
                                        </Modal.Body>
                                    </Modal>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className='formSubmit'>
                        <button className='submit'>Submit</button>
                        <button className='cancel'>Cancel</button>
                    </div>
                </form>
            </Container>
        </Container>
    )
}

export default Form