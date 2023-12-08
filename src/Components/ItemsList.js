import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
// import CoffeeImage from "../Images/coffee.jpg"
// import PhoneImage from "../Images/iphone-14.jpg"
// import LaptopImage from "../Images/photography.jpg"
import "./Styles.css"

const ItemsList = ({ items }) => {
  return (
    <div>
      <div className='product' style={{ width: "150%" }}>
        {items.map((item, index) => (
          <div key={index} className='product-1'>
            {/* Check if item.selectedFile is available before rendering the image */}
            {item.selectedFile && (
              <img className='img' src={URL.createObjectURL(item.selectedFile)} alt={item.itemName} />
            )}
            <div className='info'>
              <h3 className='name'>{item.contractorContact}</h3>
              <p>{item.installmentDate}</p>
              <FontAwesomeIcon className='infoicon' icon={faCircleInfo} />
            </div>
          </div>
        ))}

        {/* <div className='product-1'>
    <img className='img' src={CoffeeImage} alt="coffee"/>
    <div className='info'>
      <h3 className='name'>Coffee</h3>
      <FontAwesomeIcon className='infoicon' icon={faCircleInfo} />
    </div>
</div> <br />
<div className='product-1'>
    <img className='img' src={PhoneImage} alt="coffee"/>
    <div className='info'>
      <h3 className='name'>Phone</h3>
      <FontAwesomeIcon className='infoicon' icon={faCircleInfo} />
    </div>
</div> <br />
<div className='product-1'>
    <img className='img' src={LaptopImage} alt="coffee"/>
    <div className='info'>
      <h3 className='name'>Laptop</h3>
      <FontAwesomeIcon className='infoicon' icon={faCircleInfo} />
    </div>
</div> */}

      </div>
    </div>
  )
}

export default ItemsList