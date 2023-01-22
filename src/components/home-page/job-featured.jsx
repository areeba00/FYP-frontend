import React from "react";
import { Link } from "react-router-dom";
import './card.css';
import displayImage from "../../assets/education.png";

function FeaturedJobs() {
    return (
        <React.Fragment>
            <div class="bg-slate-100">
                <div class="self-center text-2xl font-semibold whitespace-nowrap text-center text-gray-900 pt-8"> Featured Jobs </div>
                <div class="self-center font-normal whitespace-nowrap text-center text-gray-900 pb-8" > Hand-picked jobs featured depending on popularity and benefits.
                </div>

                <div class="grid mb-6 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-3">
                    <Link to="/">
                        <figure class="flex flex-col justify-center items-center p-8 text-center rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">

                            <img class="w-20 h-20  " src={displayImage} alt="company name" />
                            <blockquote class="mx-auto max-w-2xl text-gray-500 lg:mb-2 dark:text-gray-400">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Senior Software Engineering</h3>
                                <h4 class="text-lg font-normal text-gray-900 dark:text-white">Confiz</h4>
                                <p class="my-2 font-light">Lahore, Pakistan (On-site)</p>
                            </blockquote>
                            <div className="Button">
                                <Link to="/" class="font-medium text-indigo-600 hover:text-indigo-700"> View Details</Link>
                            </div>
                        </figure>
                    </Link>
                    <Link to="/">
                        <figure class="flex flex-col justify-center items-center p-8 text-center rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">

                            <img class="w-20 h-20  " src={displayImage} alt="company name" />
                            <blockquote class="mx-auto max-w-2xl text-gray-500 lg:mb-2 dark:text-gray-400">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Senior Software Engineering</h3>
                                <h4 class="text-lg font-normal text-gray-900 dark:text-white">Confiz</h4>
                                <p class="my-2 font-light">Lahore, Pakistan (On-site)</p>
                            </blockquote>
                            <div className="Button">
                                <Link to="/" class="font-medium text-indigo-600 hover:text-indigo-700"> View Details</Link>
                            </div>
                        </figure>
                    </Link>
                    <Link to="/">
                        <figure class="flex flex-col justify-center items-center p-8 text-center rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">

                            <img class="w-20 h-20  " src={displayImage} alt="company name" />
                            <blockquote class="mx-auto max-w-2xl text-gray-500 lg:mb-2 dark:text-gray-400">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Senior Software Engineering</h3>
                                <h4 class="text-lg font-normal text-gray-900 dark:text-white">Confiz</h4>
                                <p class="my-2 font-light">Lahore, Pakistan (On-site)</p>
                            </blockquote>
                            <div className="Button">
                                <Link to="/" class="font-medium text-indigo-600 hover:text-indigo-700"> View Details</Link>
                            </div>
                        </figure>
                    </Link>
                    <Link to="/">
                        <figure class="flex flex-col justify-center items-center p-8 text-center rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">

                            <img class="w-20 h-20  " src={displayImage} alt="company name" />
                            <blockquote class="mx-auto max-w-2xl text-gray-500 lg:mb-2 dark:text-gray-400">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Senior Software Engineering</h3>
                                <h4 class="text-lg font-normal text-gray-900 dark:text-white">Confiz</h4>
                                <p class="my-2 font-light">Lahore, Pakistan (On-site)</p>
                            </blockquote>
                            <div className="Button">
                                <Link to="/" class="font-medium text-indigo-600 hover:text-indigo-700"> View Details</Link>
                            </div>
                        </figure>
                    </Link>
                    <Link to="/">
                        <figure class="flex flex-col justify-center items-center p-8 text-center rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">

                            <img class="w-20 h-20  " src={displayImage} alt="company name" />
                            <blockquote class="mx-auto max-w-2xl text-gray-500 lg:mb-2 dark:text-gray-400">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Senior Software Engineering</h3>
                                <h4 class="text-lg font-normal text-gray-900 dark:text-white">Confiz</h4>
                                <p class="my-2 font-light">Lahore, Pakistan (On-site)</p>
                            </blockquote>
                            <div className="Button">
                                <Link to="/" class="font-medium text-indigo-600 hover:text-indigo-700"> View Details</Link>
                            </div>
                        </figure>
                    </Link>

                    <div class="pb-8"></div>

                </div>
            </div>

        </React.Fragment>
    );
}

export default FeaturedJobs;

