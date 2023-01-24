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
import { getProductsByavailableFilter } from "../../redux/actions/available";
import axios from "axios";
import Card1 from "./Card";
import { useStateValue } from "../../stateprovider";
import styled from "styled-components";
import { getProductsByFilter } from "../../redux/actions/filterActions";
function Search() {
  const [text, setText] = useState("");
  const [availables, setAvailable] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getProductsByavailableFilter());
  // }, [dispatch]);

  const handlesearch = (e) => {
    setText(e.target.value);

    dispatch(getProductsByFilter({ type: "text", query: e.target.value }));
  };

  const handleavailable = (e) => {
    setAvailable(e.target.value);

    dispatch(getProductsByFilter({ type: "type1", query: e.target.value }));
  };
  // const {jobs} = useSelector(state => state.jobs); dont use this rn

  const { jobs } = useSelector((state) => state.jobss); //jobss is the variable used in store.js and const{jobs} is the array used in the reducer
  // const {available} = useSelector(state => state.availablee);

  return (
    <div class="container mx-auto sm:px-4">
      <div class="flex flex-row ">
        <div class="sm:w-4/5 pr-4 pl-4">
          <div className="flex flex-wrap ">
            {jobs && jobs.map((job) => <Card1 key={job._id} job={job} />)}
          </div>
        </div>
        <div class="sm:w-1/5">
          {/* if you remove flex from here the page is responsive but search bar gets disturb */}
          <div class="flex flex-wrap">
            <input
              type="text"
              name="search"
              value={text}
              className=" px-4 py-5 bg-white border rounded-full focus:border-indigo-500 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Search..."
              onChange={handlesearch}
            />

            <input
              type="text"
              name="search"
              value={availables}
              className=" px-4 py-5 bg-white border rounded-full focus:border-indigo-500 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Search..."
              onChange={handleavailable}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
