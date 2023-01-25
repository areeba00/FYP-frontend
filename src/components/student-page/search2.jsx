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
      <form>
        <div class="relative pt-4">
          <input
            type="search"
            id="default-search"
            onChange={handlesearch}
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Jobs..."
            required
          />
        </div>
      </form>
      <div class="flex flex-row ">
        <div className="flex flex-wrap ">
          {jobs && jobs.map((job) => <Card1 key={job._id} job={job} />)}
        </div>
      </div>
    </div>
  );
}

export default Search;