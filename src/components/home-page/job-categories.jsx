import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import "./card.css";
import displayImage from "../../assets/finance.png";

import { getNewArrivals } from "../../redux/actions/homejob";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Card1 from "../student-page/Card";

const Jobs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewArrivals());
  }, [dispatch]);

  const { newArrivals } = useSelector((state) => state.filter);

  return (
    <div class="bg-slate-50">
      <div class="self-center text-2xl font-semibold whitespace-nowrap text-center text-gray-900 pt-8">
        {" "}
        Browse Categories{" "}
      </div>
      <div class="self-center font-normal whitespace-nowrap text-center text-gray-900 pb-8">
        {" "}
        Most popular categories of portal sorted by poularity
      </div>
      {/* {JSON.stringify(newArrivals)} */}
      <div class="container mx-auto">
        <div class="flex flex-wrap">
          <div class="flex flex-row ">
            {newArrivals &&
              newArrivals.map((newArrival) => (
                <Card1 key={newArrivals._id} job={newArrival} />
              ))}
          </div>
        </div>
      </div>

      <div class="pb-8"></div>
    </div>
  );
};

export default Jobs;
