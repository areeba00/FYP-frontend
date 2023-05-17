import React, { useEffect, useState, useRef} from "react";
import { ArrowDown } from 'react-feather';
import { ArrowUp } from 'react-feather';
import styles from "./Body.module.css"
import Editor from "./Editor";
import Resume from "./Resume";
import ReactToPrint from "react-to-print";
function Body(){
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
        window.location.href = 'https://7aca-39-59-194-222.ngrok-free.app/upload';
      };
    

    useEffect(()=>{
        console.log(resumeInformation);
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