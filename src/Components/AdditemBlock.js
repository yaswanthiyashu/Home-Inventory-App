import React, { useState } from 'react';
import "./Styles.css";
import DatePicker from "react-datepicker";

const AdditemBlock = ({ onItemAdd }) => {
  const [itemName, setItemName] = useState('');
  const [installmentDate, setInstallmentDate] = useState('');
  const [maintenanceDate, setMaintenanceDate] = useState('');
  const [contractorContact, setContractorContact] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const [startDate, setStartDate] = useState(new Date());

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = () => {
    const newItem = {
      itemName,
      installmentDate,
      maintenanceDate,
      contractorContact,
      selectedFile, // Include the selectedFile in the newItem
    };
    onItemAdd(newItem);
  };

  return (
    <div>

    <div className='additem'>
      <h2 className='heading'>Add Item</h2>
      <div className='form'>
        <label className='nametext'>Item Name</label>
        <input className='input' value={itemName} onChange={(e) => handleInputChange(e, setItemName)} /><br />
        <label className='insttext'>Installment Date</label>
        <input className='input' value={installmentDate} onChange={(e) => handleInputChange(e, setInstallmentDate)} placeholder='dd/mm/yyyy'/><br />
        <label className='expectext'>Expected Maintenance Date</label>
        <input className='input' value={maintenanceDate} onChange={(e) => handleInputChange(e, setMaintenanceDate)} placeholder='dd/mm/yyyy'/>
      </div><br />
      <h3 className='text'>Upload / take photo(S) +</h3><br />
      <input type="file" accept="image/*" capture="camera" onChange={handleFileChange} />

      <div className='optional'>
        <label className='contacttext'>Contractor contact</label>
        <span className='opt'>optional</span>
        <input className='input' value={contractorContact} onChange={(e) => handleInputChange(e, setContractorContact)} />
      </div>
      <div className='submit'>
        <button className='btn-1' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
   
    </div>

  );
};

export default AdditemBlock;
