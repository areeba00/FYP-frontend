import React, { Component } from 'react';
 import Card from '@mui/material/Card';
 import CardContent from '@mui/material/Card';
 import { CardActions } from '@mui/material';
import { Link } from "react-router-dom";
import './student.css'
import {useEffect} from "react";
import {useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import{getJobs} from "../../redux/actions/jobActions";
import axios from 'axios';
//import Card from "./Card";
import { useStateValue } from "../../stateprovider";
import styled from "styled-components";
function Search() {
    const [jobs, setJobs] = useState("");
  
    useEffect(() => {
      const fetchdata = async () => {
        const data = await axios.get("/api/company/job");
        console.log("jobs >>>>", data);
        setJobs(data);
      };
      fetchdata();
    }, []);


    // const {jobs} = useSelector(state => state.jobs);
    return (
        <div class="sm pr-4 pl-4">
            <div class="self-center text-2xl font-semibold whitespace-nowrap text-start text-gray-900 pt-8"> Search Jobs </div>
            <div className="flex space-x-1 mt-4 ml-40 ">
                                    <input
                                        type="text"
                                        className="block w-full px-4 py-5 bg-white border rounded-full focus:border-indigo-500 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                        placeholder="Search..."
                                        onChange={e => setJobs(e.target.value)}
                                    />
                                    <button className="px-4 text-white bg-indigo-600 rounded-full ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            />
                                        </svg>
                                    </button>
                          </div>
                              {jobs &&
                                jobs?.data.jobs.map((job) => (

                                  <div class="container mx-auto">
                                    <div class="v">
                                    <div class="w-full sm:w-2/3 p-4">
                                      
                                            <div class="max-w-sm p-6 bg-white text-center border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                                                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{job.jobTitle}</h5>

                                                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">{job.jobDescription}</p>
                                                <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
                                                    View Details
                                                </a>
                                            </div>

                              </div>
                                      </div>
                                    </div>
                                ))}


        </div>
    );
}


const Container = styled.div`
  width: 100%;
  background-color: rgb(234, 237, 237);
  max-width: 1400px;
  margin: auto;
  height: fit-content;
`;

const Main = styled.div`
  display: grid;
  justify-content: center;
  place-items: center;
  width: 100%;
  grid-auto-rows: 420px;
  grid-template-columns: repeat(4, 280px);
  grid-gap: 20px;
  /* Mobile */
  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 50%);
    grid-gap: 0;
  }
  /* Tablets */
  @media only screen and (min-width: 767px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 30%);
  }
  @media only screen and (min-width: 767px) {
    margin-top: -130px;
    padding: 10px 0px;
  }
`;

export default Search;