import React from 'react';
import { useState } from 'react';
import InputField from '../../components/Input';
import styles from './styles.module.css';
import Button from '../../components/Button';

function CreateApplication() {
  const [form, setForm] = useState({
    name: '',
    lastName: '',
    age: '',
    identificationNumber: '',
    reasonForApplication: '',
    address: '',
    attachments: ''
  });

  const handleChange = (event) => {
    setForm({ [event.target.name]: event.target.value });
  };
  return (
    <div>
      <div className={styles.queryContainer}>
        <h2>Application Status</h2>
        <input
          className={styles.queryInput}
          type="number"
          placeholder="Please Enter Your Application Code"
        />
        <button className={styles.buttonQuery}> Check</button>
      </div>
      <div className={styles.formContainer}>
        <h1>Create Your Aplication</h1>
        <div className={styles.inputMoveRight}>
          <InputField
            value={form.name}
            onChange={handleChange}
            label="Name"
            type="text"
            placeholder="Please Enter Your Name"
          />
        </div>

        <InputField
          value={form.lastName}
          onChange={handleChange}
          label="Last Name"
          type="text"
          placeholder="Please Enter Your Last Name"
        />
        <div className={styles.inputMoveRight}>
          <InputField
            value={form.age}
            onChange={handleChange}
            label="Age"
            type="number"
            placeholder="Please Enter Your Age"
          />
        </div>
        <div>
          <InputField
            value={form.identificationNumber}
            onChange={handleChange}
            label="Identification Number"
            type="number"
            placeholder="Please Enter Your Identification Number"
          />
        </div>

        <div className={styles.inputMoveRight}>
          <InputField
            value={form.reasonForApplication}
            onChange={handleChange}
            label="Reason For Application"
            type="text"
            placeholder="Please Enter Your Reason For Application"
          />
        </div>

        <InputField
          value={form.address}
          onChange={handleChange}
          label="Address"
          type="text"
          placeholder="Please Enter Your Adress"
        />
        <div className={styles.fileInput}>
          <input type="file" id="files" className={styles.hidden} />
          <label htmlFor="files">Select File</label>
        </div>
        <Button className={styles.buttonForm} buttonName="Submit" />
      </div>
    </div>
  );
}

export default CreateApplication;
