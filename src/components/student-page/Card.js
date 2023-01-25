import React from "react";
import { Link } from "react-router-dom";
// redux
import { useDispatch } from "react-redux";
import { getJobs } from "../../redux/actions/jobActions";
//import displayImage from "../../assets/education.png";
import displayImage from "../../assets/logo.jpg";
import logo from "../../assets/logo.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActions } from "@mui/material";

const Card1 = ({ job }) => {
  // job used in this line is the variable job used in search2.jsx {jobs && jobs.map("""job""" =>
  // const dispatch = useDispatch();

  // const handleAddToCart = () => {
  // 	dispatch(getJobs(jobs));
  // };

  return (
    <div class="max-w-sm mx-6 my-4 px-4 py-4 rounded overflow-hidden shadow-lg text-center">
      <img class="rounded" src={displayImage} alt="company logo" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 text-center">{job.jobTitle}</div>
        <p class="text-gray-700 text-base text-center">
          {job.jobDescription.length > 20
            ? job.jobDescription.substring(0, 20) + "....."
            : job.jobDescription.substring(0, 20)}
        </p>
      </div>
      <Link
        to={`/job/${job._id}`}
        type="button"
        class="font-medium text-indigo-600 hover:text-indigo-700 text-center"
      >
        View Details
      </Link>
    </div>
  );
};

export default Card1;
