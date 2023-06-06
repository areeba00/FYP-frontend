

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ResumeUpload() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://26be-39-59-198-54.ngrok-free.app/upload')
    .then(response => {
      // Access the response data
      const responseData = response.data;
      // Process the response data as needed
      console.log(responseData);
    })
  }, []);

  return (
    <div>
      {/* {data ? (
        // Render the data
        <p>{data}</p>
      ) : (
        // Render a loading indicator or other content while data is being fetched
        <p>Loading...</p>
      )} */}
    </div>
  );
}




export default ResumeUpload;
