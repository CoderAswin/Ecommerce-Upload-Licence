import { Col, Form } from 'react-bootstrap'
import './ShipmentInfo.scss'

const ShipmentInfo = ({ formValues, handleChange, formErrors }) => {
    return (
        <Col className='shipping'>
            <div className='shippingAddress'>
                <span>Shipping Address</span>
                <div className='checkbox'>
                    <input type="checkbox"
                    />
                    <span style={{ fontSize: 15 }}>set as default Address</span>
                </div>

            </div>
            <hr />

            <div>
                <label htmlFor="">Address Line 1</label><br />
                <input size={50} type="text"
                    value={formValues.address}
                    onChange={handleChange}
                    name="address"
                />
            </div>
            <p style={{ color: 'red' }}>{formErrors?.address}</p>
            <div>
                <label htmlFor="">Address Line 2</label><br />
                <input size={50} type="text" />
            </div>

            <div className='zipCity'>
                <div>
                    <label htmlFor="">Zip Code</label><br />
                    <input type="text"
                        value={formValues.zipCode}
                        onChange={handleChange}
                        name="zipCode"
                    />
                </div>
                <p style={{ color: 'red' }}>{formErrors?.zipCode}</p>

                <div className='city'>
                    <label htmlFor="">City</label><br />
                    <input type="text"
                        value={formValues.city}
                        onChange={handleChange}
                        name="city"
                    />
                </div>
                <p style={{ color: 'red' }}>{formErrors?.city}</p>

            </div>
            <div className='zipCity'>
                <div>
                    <label htmlFor="">State</label><br />
                    <select name="" id="">
                        <option value="">GA</option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                </div>
                <div className='city'>
                    <label htmlFor="">Country</label><br />
                    <input type="text"
                        value={formValues.country}
                        onChange={handleChange}
                        name="country"
                    />
                </div>
                <p style={{ color: 'red' }}>{formErrors?.country}</p>

            </div>
            <div>
                <label htmlFor="">Phone Number</label><br />
                <input size={50} type="text"
                    value={formValues.phoneNumber}
                    onChange={handleChange}
                    name="phoneNumber"
                />
            </div>
            <p style={{ color: 'red' }}>{formErrors?.phoneNumber}</p>
        </Col>
    )
}

export default ShipmentInfo