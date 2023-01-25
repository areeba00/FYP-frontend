import React from 'react';
import { Link } from 'react-router-dom';
// redux
import { useDispatch } from 'react-redux';
import { getJobs } from '../../redux/actions/jobActions';
import displayImage from "../../assets/education.png";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActions } from '@mui/material';

const Card1 = ({ job }) => {   // job used in this line is the variable job used in search2.jsx {jobs && jobs.map("""job""" => 
	// const dispatch = useDispatch();

	// const handleAddToCart = () => {
	// 	dispatch(getJobs(jobs));
	// };

	return (

			<div class="max-w-sm mx-4 my-4 px-4 py-4 rounded overflow-hidden shadow-lg text-center">
					<img class="w-full sm:w-3/4 md:w-3/4 xl:w-3/5 justify-center items-center " src={displayImage}  alt="Sunset in the mountains"/>
					<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2 text-center">{job.jobTitle}</div>
					<p class="text-gray-700 text-base text-center">
					{job.jobDescription.length > 20 ? job.jobDescription.substring(0,20) + '.....' : job.jobDescription.substring(0,20)}
					</p>
			</div>
			 		<Link
 								to={`/job/${job._id}`}
 								type='button'
 								class="font-medium text-indigo-600 hover:text-indigo-700 text-center"
 							>
 								View Details
 							</Link>
			</div>

			// <div class="container mx-auto">
			// <div class="flex flex-col -mx-4">
			// <div class="w-full sm:w-1/4 md:w-1/4 xl:w-1/5 p-4">
            //                 <Card lg={{
            //                     maxWidth: 175,
            //                     maxHeight: 300,
            //                     margin: "0 auto",
            //                     padding: "0.1em",
            //                 }}>

            //                     <div class="flex flex-col items-center">

            //                         <CardMedia
            //                             component="img"
            //                             image={displayImage}
            //                             alt="finance"
            //                             sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
            //                         />

            //                         <CardContent>
            //                             <h5 class="text-2xl text-gray-900 dark:text-white">{job.jobTitle}</h5>
            //                             <p class="font-normal text-gray-700 dark:text-gray-400">
			// 							 		{job.jobDescription.length > 20 ? job.jobDescription.substring(0,20) + '.....' : job.jobDescription.substring(0,20)}
            //                             </p>
            //                         </CardContent>

            //                     </div>
            //                     <CardActions>
            //                         <div className="Button">
            //                             <Link to={`/job/${job._id}`} class="font-medium text-indigo-600 hover:text-indigo-700"> View All</Link>
            //                         </div>
            //                     </CardActions>
            //                 </Card>
            //             </div>
			// 	</div>
			// 	</div>

	);
};

export default Card1;