import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActions } from '@mui/material';
import { Link } from "react-router-dom";
import './card.css';
import displayImage from "../../assets/finance.png";

function Jobs() {
    return (
        <React.Fragment>
            <div class="bg-slate-50">
                <div class="self-center text-2xl font-semibold whitespace-nowrap text-center text-gray-900 pt-8"> Browse Categories </div>
                <div class="self-center font-normal whitespace-nowrap text-center text-gray-900 pb-8" > Most popular categories of portal sorted by poularity
                </div>
                <div class="container mx-auto">
                    <div class="flex flex-wrap -mx-4">
                        <div class="w-full sm:w-1/4 md:w-1/4 xl:w-1/5 p-4">
                            <Card sx={{
                                maxWidth: 175,
                                maxHeight: 300,
                                margin: "0 auto",
                                padding: "0.1em",
                            }}>

                                <div class="flex flex-col items-center">

                                    <CardMedia
                                        component="img"
                                        image={displayImage}
                                        alt="finance"
                                        sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                                    />

                                    <CardContent>
                                        <h5 class="text-2xl text-gray-900 dark:text-white">Finance</h5>
                                        <p class="font-normal text-gray-700 dark:text-gray-400">
                                            (4228) jobs
                                        </p>
                                    </CardContent>

                                </div>
                                <CardActions>
                                    <div className="Button">
                                        <Link to="/" class="font-medium text-indigo-600 hover:text-indigo-700"> View All</Link>
                                    </div>
                                </CardActions>
                            </Card>
                        </div>
                        <div class="w-full sm:w-1/4 md:w-1/4 xl:w-1/5 p-4">
                            <Card sx={{
                                maxWidth: 175,
                                maxHeight: 300,
                                margin: "0 auto",
                                padding: "0.1em",
                            }}>

                                <div class="flex flex-col items-center">

                                    <CardMedia
                                        component="img"
                                        image={displayImage}
                                        alt="finance"
                                        sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                                    />

                                    <CardContent>
                                        <h5 class="text-2xl text-gray-900 dark:text-white">Finance</h5>
                                        <p class="font-normal text-gray-700 dark:text-gray-400">
                                            (4228) jobs
                                        </p>
                                    </CardContent>

                                </div>
                                <CardActions>
                                    <div className="Button">
                                        <Link to="/" class="font-medium text-indigo-600 hover:text-indigo-700"> View All</Link>
                                    </div>
                                </CardActions>
                            </Card>
                        </div>
                        <div class="w-full sm:w-1/4 md:w-1/4 xl:w-1/5 p-4">
                            <Card sx={{
                                maxWidth: 175,
                                maxHeight: 300,
                                margin: "0 auto",
                                padding: "0.1em",
                            }}>

                                <div class="flex flex-col items-center">

                                    <CardMedia
                                        component="img"
                                        image={displayImage}
                                        alt="finance"
                                        sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                                    />

                                    <CardContent>
                                        <h5 class="text-2xl text-gray-900 dark:text-white">Finance</h5>
                                        <p class="font-normal text-gray-700 dark:text-gray-400">
                                            (4228) jobs
                                        </p>
                                    </CardContent>

                                </div>
                                <CardActions>
                                    <div className="Button">
                                        <Link to="/" class="font-medium text-indigo-600 hover:text-indigo-700"> View All</Link>
                                    </div>
                                </CardActions>
                            </Card>
                        </div>
                        <div class="w-full sm:w-1/4 md:w-1/4 xl:w-1/5 p-4">
                            <Card sx={{
                                maxWidth: 175,
                                maxHeight: 300,
                                margin: "0 auto",
                                padding: "0.1em",
                            }}>

                                <div class="flex flex-col items-center">

                                    <CardMedia
                                        component="img"
                                        image={displayImage}
                                        alt="finance"
                                        sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                                    />

                                    <CardContent>
                                        <h5 class="text-2xl text-gray-900 dark:text-white">Finance</h5>
                                        <p class="font-normal text-gray-700 dark:text-gray-400">
                                            (4228) jobs
                                        </p>
                                    </CardContent>

                                </div>
                                <CardActions>
                                    <div className="Button">
                                        <Link to="/" class="font-medium text-indigo-600 hover:text-indigo-700"> View All</Link>
                                    </div>
                                </CardActions>
                            </Card>
                        </div>
                        <div class="w-full sm:w-1/4 md:w-1/4 xl:w-1/5 p-4">
                            <Card sx={{
                                maxWidth: 175,
                                maxHeight: 300,
                                margin: "0 auto",
                                padding: "0.1em",
                            }}>

                                <div class="flex flex-col items-center">

                                    <CardMedia
                                        component="img"
                                        image={displayImage}
                                        alt="finance"
                                        sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                                    />

                                    <CardContent>
                                        <h5 class="text-2xl text-gray-900 dark:text-white">Finance</h5>
                                        <p class="font-normal text-gray-700 dark:text-gray-400">
                                            (4228) jobs
                                        </p>
                                    </CardContent>

                                </div>
                                <CardActions>
                                    <div className="Button">
                                        <Link to="/" class="font-medium text-indigo-600 hover:text-indigo-700"> View All</Link>
                                    </div>
                                </CardActions>
                            </Card>
                        </div>
                        <div class="w-full sm:w-1/4 md:w-1/4 xl:w-1/5 p-4">
                            <Card sx={{
                                maxWidth: 175,
                                maxHeight: 300,
                                margin: "0 auto",
                                padding: "0.1em",
                            }}>

                                <div class="flex flex-col items-center">

                                    <CardMedia
                                        component="img"
                                        image={displayImage}
                                        alt="finance"
                                        sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                                    />

                                    <CardContent>
                                        <h5 class="text-2xl text-gray-900 dark:text-white">Finance</h5>
                                        <p class="font-normal text-gray-700 dark:text-gray-400">
                                            (4228) jobs
                                        </p>
                                    </CardContent>

                                </div>
                                <CardActions>
                                    <div className="Button">
                                        <Link to="/" class="font-medium text-indigo-600 hover:text-indigo-700"> View All</Link>
                                    </div>
                                </CardActions>
                            </Card>
                        </div>
                    </div>

                    
                </div>
                <div class="pb-8"></div>

            </div>

        </React.Fragment>
    );
}

export default Jobs;

