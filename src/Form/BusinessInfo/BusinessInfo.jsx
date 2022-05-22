import {Row , Col} from 'react-bootstrap'
import "./Business.scss"


const BusinessInfo = ({formValues , handleChange , formErrors}) => {
    return (
        <Row className='business'>
            <Col>
                <div>
                    <label htmlFor="">NickName</label><br />
                    <input 
                    value={formValues.nickName}
                    onChange={handleChange}
                    name="nickName" 
                    size={50} type="text" />
                </div>
                <p style={{color:'red'}}>{formErrors.nickName}</p>
                <div  >
                    <label htmlFor="">Federal tax ID</label><br />
                    <input size={50} type="text" />
                </div>
            </Col>
            <Col  >
                <div>
                    <label htmlFor="">LegalName</label><br />
                    <input 
                    value={formValues.legalName}
                    name="legalName"
                    onChange={handleChange}  
                    size={50} type="text" />
                </div>
                <p style={{color:'red'}}>{formErrors.legalName}</p>
                <div>
                    <label htmlFor="">Business Email</label><br />
                    <input size={50} type="text" />
                </div>
            </Col>
        </Row>
    )
}

export default BusinessInfo