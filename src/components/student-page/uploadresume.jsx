import React, { useState } from 'react';
// import { Button } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';

function ResumeUpload() {
  // const handleClick = () => {
  //   axios.get('https://0423-34-125-92-219.ngrok-free.app')
  //     .then(response => {
  //       // Handle the response data here
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       // Handle the error here
  //       console.error(error);
  //     });
  // };
    const handleRedirect = () => {
    window.location.href = 'https://7aca-39-59-194-222.ngrok-free.app/upload';
  };

  return (
    <div>
      <button onClick={handleRedirect}>Click Me</button>
    </div>
  );
}


export default ResumeUpload;
