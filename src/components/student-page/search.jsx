import React, { Component } from "react";
//  import Card from '@mui/material/Card';
import CardContent from "@mui/material/Card";
import { CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import "./student.css";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../../redux/actions/jobActions";
import axios from "axios";
import Card1 from "./Card";
import { useStateValue } from "../../stateprovider";
import styled from "styled-components";
import { getProductsByFilter } from "../../redux/actions/filterActions";
function Search() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  const handlesearch = (e) => {
    setText(e.target.value);

    dispatch(getProductsByFilter({ type: "text", query: e.target.value }));
  };
  // const {jobs} = useSelector(state => state.jobs); dont use this rn

  const { jobs } = useSelector((state) => state.jobss); //jobss is the variable used in store.js and const{jobs} is the array used in the reducer

  return (
    <div class="sm pr-4 pl-4">
      <div class="self-center text-2xl font-semibold whitespace-nowrap text-start text-gray-900 pt-8">
        {" "}
        Search Jobs{" "}
      </div>
      <div className="flex space-x-1 mt-4 ml-40 ">
        <input
          type="text"
          name="search"
          value={text}
          className="block w-full px-4 py-5 bg-white border rounded-full focus:border-indigo-500 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Search..."
          onChange={handlesearch}
        />
      </div>
      {/* 
                          <div class="pl-16">
                          {jobs &&
                                jobs?.data.jobs.map((job) => (
                        
                                   
                                  <div class="grid mb-6 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-1">
                                 
                                      <figure class="flex flex-wrap justify-center items-center p-8 text-center rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
              
                                          <img class="w-20 h-20  " src={displayImage} alt="company name" />
                                          <blockquote class="mx-auto max-w-2xl text-gray-500 lg:mb-2 dark:text-gray-400">
                                              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{job.jobTitle}</h3>
                                              <h4 class="text-lg font-normal text-gray-900 dark:text-white">  {job.jobDescription}</h4>
                                          
                                          </blockquote>
                                          <div className="Button">
                                              <Link to="/" class="font-medium text-indigo-600 hover:text-indigo-700"> View Details</Link>
                                          </div>
                                      </figure>
                                      <div class="pb-8"></div>


                              </div>
                              
                                
                                ))}
                          </div> */}

      {/* <p> {JSON.stringify (jobs)}</p> */}

      <div class="container py-3">
        <div className="row">
          {jobs && jobs.map((job) => <Card1 key={job._id} job={job} />)}
        </div>
      </div>
    </div>
  );
}

export default Search;
