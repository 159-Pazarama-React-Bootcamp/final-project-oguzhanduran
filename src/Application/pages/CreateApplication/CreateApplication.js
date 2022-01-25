import React from 'react';
import ApplicationForm from '../../components/ApplicationForm';
import StatusForm from '../../components/StatusForm';

function CreateApplication() {
  return (
    <div>
      <div>
        <StatusForm />
      </div>
      <div>
        <ApplicationForm />
      </div>
    </div>
  );
}

export default CreateApplication;
