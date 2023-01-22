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
	// 	<div>
			
	// 			<figure class="grid-rows-4 items-center mb-8 bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
	// 			<img class="w-20 h-20  " src={displayImage} alt="company name" />
	// 				<div class="flex flex-col justify-between p-4 leading-normal">
	// 					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{job.jobTitle}</h5>
	// 					<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{job.jobDescription}</p>
	// 				</div>
	// 			</figure>

	// </div>

// 	<div >
// 		<div class="max-w-sm mb-8 px-8 mr-8 my-4 py-4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
//     <a href="#">
//         <img class="w-24 h-24 object-center" src={displayImage} alt="" />
//     </a>
//     <div class="p-5">
//         <a href="#">
//             <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">{job.jobTitle}</h5>
//         </a>
//         <p class="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">{job.jobDescription}</p>

// 		<Link
// 								to={`/job/${job._id}`}
// 								type='button'
// 								class='text-blue-500 ml-12 underline hover:text-blue-700'
// 							>
// 								View Details
// 							</Link>
//     </div>
// </div>
// 	</div>

			<div class="max-w-sm mx-4 my-4 px-4 py-4 rounded overflow-hidden shadow-lg">
					<img class="w-full" src={displayImage} alt="Sunset in the mountains"/>
					<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2 text-center">{job.jobTitle}</div>
					<p class="text-gray-700 text-base text-center">
					{job.jobDescription.length > 20 ? job.jobDescription.substring(0,20) + '.....' : job.jobDescription.substring(0,20)}
					</p>
			</div>
			 		<Link
 								to={`/job/${job._id}`}
 								type='button'
 								class='text-blue-500 pl-16 underline hover:text-blue-700 text-center'
 							>
 								View Details
 							</Link>
			</div>

	);
};

export default Card1;