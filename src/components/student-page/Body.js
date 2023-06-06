import React, { useEffect, useState, useRef} from "react";
import { ArrowDown } from 'react-feather';
import { ArrowUp } from 'react-feather';
import styles from "./Body.module.css"
import Editor from "./Editor";
import Resume from "./Resume";
import ReactToPrint from "react-to-print";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../../redux/actions/jobActions";
import axios from "axios";


function Body(){

    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(getJobs());
    }, [dispatch]);

    const { jobs } = useSelector((state) => state.jobss); //jobss is the variable used in store.js and const{jobs} is the array used in the reducer
    // const {available} = useSelector(state => state.availablee);
    console.log(jobs);


    
    // const queryString = jobs;
    // const result = queryString.reduce((obj, item, index) => {
    //     obj[index] = item;
    //     return obj;
    //   }, {});
    //   console.log("here");
    //   console.log(result);




    // useEffect(() => {
    //     // Function to send the API request
    //     const sendRequest = async () => {
    //       try {
    //         // Make the API request to Ngrok
    //         const response = await axios.post('https://2d81-39-59-198-54.ngrok-free.app/jobdata', result, {
    //             headers: {
    //               'Content-Type': 'application/json'
    //             }
    //           });

    //                   // Handle the response data
    //     console.log("Data sent successfully:");
    //       } catch (error) {
    //         console.error('Error sending API request:', error);
    //       }
    //     };
    
    //     // Call the function when the component is mounted
    //     sendRequest();
    //   }, [jobs]);


    // const queryString = jobs;
    // const result = queryString.reduce((obj, item, index) => {
    //     obj[index] = item;
    //     return obj;
    //   }, {});
    //   console.log("here");
    //   console.log(result);
    // useEffect(() => {
    //     const delay = 2000; // Delay in milliseconds (e.g., 2000 = 2 seconds)
    
    //     const timer = setTimeout(async () => {
    //       // Code to execute after the delay
    // //     // Function to send the API request
    //     const sendRequest = async () => {
    //       try {
    //         // Make the API request to Ngrok
    //         const response = await axios.post('https://2d81-39-59-198-54.ngrok-free.app/jobdata', result, {
    //             headers: {
    //               'Content-Type': 'application/json'
    //             }
    //           });

    //                   // Handle the response data
    //     console.log("Data sent successfully:");
    //       } catch (error) {
    //         console.error('Error sending API request:', error);
    //       }
    //     };
    
    //     // Call the function when the component is mounted
    //     sendRequest();
    //     }, delay);
    
    //     // Cleanup function to cancel the timer if the component unmounts or changes
    //     return () => clearTimeout(timer);
    //   }, [jobs]);

    //   const sendData = async () => {
    //     // Code to send data
    //         //         // Make the API request to Ngrok
    //         const response = await axios.post('https://2d81-39-59-198-54.ngrok-free.app/jobdata', result, {
    //             headers: {
    //               'Content-Type': 'application/json'
    //             }
    //           });
    //     console.log('Sending data...');
    


    // const queryString = jobs;


    // const [queryString, setQueryString] = useState([]);
    // useEffect(() => {
    //     // Set the query string data from the jobs variable
    //     setQueryString(jobs);

    //     console.log("data is shown");
    //     console.log(queryString);
    //   }, [jobs]);

    // useEffect(() => {
    //     // Function to send the API request
    //     const sendRequest = async () => {
    //       try {
    //         if (queryString.length === 3) {
    //           console.log('queryString is empty. Skipping API request.');
    //           return;
    //         }
      
    //         // Compute the result object inside the useEffect hook
    //         const result = queryString.reduce((obj, item, index) => {
    //           obj[index] = item;
    //           return obj;
    //         }, {});
    //         console.log("here");
    //         console.log(result);
      
    //         // Make the API request to Ngrok
    //         const response = await axios.post('https://2d81-39-59-198-54.ngrok-free.app/jobdata', result, {
    //           headers: {
    //             'Content-Type': 'application/json'
    //           }
    //         });
      
    //         // Handle the response data
    //         console.log("Data sent successfully:", response.data);
    //       } catch (error) {
    //         console.error('Error sending API request:', error);
    //       }
    //     };
      
    //     // Call the function when the component is mounted
    //     sendRequest();
    //   }, [queryString]);



    const colors = ["239ce" ,"#48bb78" , "#0bc5ea" , "#a0aec0" , "#ed8936"]
    const sections ={
        basicInfo: "Basic Info",
        workExp: "Work Experience",
        project: "Projects",
        education: "Education",
        achievements: "Achievements",
        summary: "Summary",
        other: "Others",
    };
    const resumeRef=useRef()

    const [resumeInformation, setResumeInformation]= useState({
        [sections.basicInfo]:{
            id:sections.basicInfo,
            sectionTitle: sections.basicInfo,
            detail:{},
        },

        [sections.workExp]:{
            id:sections.workExp,
            sectionTitle: sections.workExp,
            details:[],
        },

        [sections.project]:{
            id:sections.project,
            sectionTitle: sections.project,
            details:[],
        },

        [sections.education]:{
            id:sections.education,
            sectionTitle: sections.education,
            details:[],
        },

        [sections.achievements]:{
            id:sections.achievements,
            sectionTitle: sections.achievements,
            points:[],
        },

        [sections.summary]:{
            id:sections.summary,
            sectionTitle: sections.summary,
            detail:"",
        },

        [sections.other]:{
            id:sections.other,
            sectionTitle: sections.other,
            detail:"",
        },
    });

    const handleRedirect = () => {
        const queryString = jobs;

        const result = queryString.reduce((obj, item, index) => {
            obj[index] = item;
            return obj;
          }, {});
          
          console.log(result);
            // Make an HTTP POST request to the Ngrok API endpoint
            axios.post('https://dc2a-119-160-99-185.ngrok-free.app/upload',{headers:{'Content-Type': 'application/json'}},result)
              
            .then(response => {
                console.log('Data sent successfully');
            })
            .catch(error => {
                console.error('Error sending data:', error);
            });
        // const ngrokURL = 'https://50a6-39-59-167-121.ngrok-free.app/upload'; // Replace with your Ngrok URL

        // window.location.href = `${ngrokURL}/path?${queryString}`;

        window.location.href = 'https://dc2a-119-160-99-185.ngrok-free.app/upload';
      };

      const handleRedirect1 = () => {
        const queryString = jobs;

        const result = queryString.reduce((obj, item, index) => {
            obj[index] = item;
            return obj;
          }, {});
          
          console.log("result data is shown");
          console.log(result);
            // Make an HTTP POST request to the Ngrok API endpoint
            axios.post('https://dc2a-119-160-99-185.ngrok-free.app/jobdata', result, {
                headers: {
                  'Content-Type': 'application/json'
                }
              })
              
            .then(response => {
                console.log('Data sent successfully');
            })
            .catch(error => {
                console.error('Error sending data:', error);
            });
      };
    

    useEffect(()=>{
        // console.log(resumeInformation);
    },[resumeInformation]);
    return(
        <div className={styles.container}>
         <p className={styles.heading}>Resume Builder</p>
         <div className={styles.toolbar}>
            <div className={styles.colors}>
                {colors.map((item)=>(
                    <span 
                      key={item}
                      style={{backgroundColor: item}}
                      className={styles.color}
                    />
                ))}
                    
            </div>
            <ReactToPrint
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <button>Download <ArrowDown /></button>
                <button onClick={handleRedirect}>Upload <ArrowUp /></button>
                <button onClick={handleRedirect1}>Upload <ArrowUp /></button>
                    </div>
                 );
          }}
          content={() => resumeRef.current}
        />
            
        </div>
            <div className={styles.main}>
                <Editor 
                sections={sections} 
                information={resumeInformation} 
                setInformation={setResumeInformation}/>     
                <Resume  
                 ref = {resumeRef}
                 information={resumeInformation}
                 sections={sections} 
                 />      
            </div>
        </div>
    );

}

export default Body;