import React from 'react';
import StatusForm from '../../components/StatusForm';
import styles from './styles.module.css';

function SuccessfulApplication() {
  return (
    <div>
      <div>
        <StatusForm />
      </div>
      <div className={styles.formContainer}>
        <h1>Congratulations 🎉 </h1>
        <h4> Your Application is Successful, Thanks for Your Application 😊 </h4>
        <br />
        <br />
        <h3> Application Details</h3>
        <p>
          name:, lastName:, age:, identificationNumber:, reasonForApplication:, address:,
          attachments:, userName:, userPassword:
        </p>
      </div>
    </div>
  );
}

export default SuccessfulApplication;
