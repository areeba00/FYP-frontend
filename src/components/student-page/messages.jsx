// import React, { Component } from 'react';
// import { Outlet, Link } from "react-router-dom";
// import { ProgressBar } from 'primereact/progressbar';
// import displayImage from "../../assets/education.png";
// import { BreadCrumb } from 'primereact/breadcrumb';
// import './student.css'
// import './slideover'

// class Messages extends Component {
//     state = {
//         items: [
//             { label: 'Messages' },
//         ],
//         home: { icon: 'pi pi-home', url: 'http://localhost:3000/' },
//     }
    
//     render() {

//         return (
//             <React.Fragment>

//                 {/* <div class="container mx-auto sm:px-4">
//                 <BreadCrumb model={this.state.items} home={this.state.home} />
//                 <div class="self-center text-2xl font-semibold whitespace-nowrap text-start text-gray-900 pt-8"> Messages </div>
//                 <div className="container mx-auto mt-2">

//                         <div className="grid grid-cols-1 gap-1 lg:grid-cols-1 ml-4 mr-4">
//                             <div className="w-full bg-white rounded-lg shadow">
//                                 <Link to="/">
//                                     <figure class="rounded-t-lg border-b border-gray-300 md:rounded-t-none md:rounded-tl-lg md:border-r">
//                                     <div className="text-md font-medium text-gray-700 truncate pt-1 pb-1">
//                                         <i className="pi pi-star pr-2 pl-2 pt-1"></i>
//                                         Devsinc - This is to inform you that you have been selected for the position of Senior Software Engineer.
//                                     </div>
//                                     </figure>
//                                 </Link>

//                             </div>

//                             <div className="w-full bg-white rounded-lg shadow">
//                                 <Link to="/">
//                                 <figure class="rounded-t-lg border-b border-gray-300 md:rounded-t-none md:rounded-tl-lg md:border-r">
//                                     <div className="text-md font-medium text-gray-700 truncate pt-1 pb-1">
//                                         <i className="pi pi-star pr-2 pl-2 pt-1"></i>
//                                         Devsinc - This is to inform you that you have been selected for the position of Senior Software Engineer.
//                                     </div>
//                                     </figure>
//                                 </Link>

//                             </div>

//                             <div className="w-full bg-white rounded-lg shadow">
//                                 <Link to="/">
//                                 <figure class="rounded-t-lg border-b border-gray-300 md:rounded-t-none md:rounded-tl-lg md:border-r">
//                                     <div className="text-md font-medium text-gray-700 truncate pt-1 pb-1">
//                                         <i className="pi pi-star pr-2 pl-2 pt-1"></i>
//                                         Devsinc - This is to inform you that you have been selected for the position of Senior Software Engineer.
//                                     </div>
//                                     </figure>
//                                 </Link>

//                             </div>
//                             <div className="w-full bg-white rounded-lg shadow">
//                                 <Link to="/">
//                                 <figure class="rounded-t-lg border-b border-gray-300 md:rounded-t-none md:rounded-tl-lg md:border-r">
//                                     <div className="text-md font-medium text-gray-700 truncate pt-1 pb-1">
//                                         <i className="pi pi-star pr-2 pl-2 pt-1"></i>
//                                         Devsinc - This is to inform you that you have been selected for the position of Senior Software Engineer.This is to inform you that you have been selected for the position of Senior Software Engineer.
//                                     </div>
//                                     </figure>
//                                 </Link>

//                             </div>
//                             <div className="w-full bg-white rounded-lg shadow">
//                                 <Link to="/">
//                                 <figure class="rounded-t-lg border-b border-gray-300 md:rounded-t-none md:rounded-tl-lg md:border-r">
//                                     <div className="text-md font-medium text-gray-700 truncate pt-1 pb-1">
//                                         <i className="pi pi-star pr-2 pl-2 pt-1"></i>
//                                         Devsinc - This is to inform you that you have been selected for the position of Senior Software Engineer.
//                                     </div>
//                                     </figure>
//                                 </Link>

//                             </div>
//                         </div>
//                 </div>
//                 </div> */}

//             </React.Fragment>
//         );
//     }
// }

// export default Messages;

// import React, { Component } from 'react';
// import { Outlet, Link } from "react-router-dom";
// import { ProgressBar } from 'primereact/progressbar';
// import displayImage from "../../assets/education.png";
// import { BreadCrumb } from 'primereact/breadcrumb';
// import './student.css'
// import './slideover'
// import { Fragment, useState } from 'react'
// import { Dialog, Transition } from '@headlessui/react'
// // import { XMarkIcon } from '@heroicons/react/24/outline'

// export default function Messages() {
//   const [open, setOpen] = useState(true)

//   return (
//     <Transition.Root show={open} as={Fragment}>
      
//       <Dialog as="div" className="relative z-10" onClose={setOpen}>
        
//         {/* <Transition.Child
//           as={Fragment}
//           enter="ease-in-out duration-500"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in-out duration-500"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
//         </Transition.Child> */}

//         <div className="fixed inset-0 overflow-hidden">
//           <div className="absolute inset-0 overflow-hidden">
//             <div className="pointer-events-none fixed inset-y-0 right-0 flex pl-10">
//               <Transition.Child
//                 as={Fragment}
//                 enter="transform transition ease-in-out duration-500 sm:duration-700"
//                 enterFrom="translate-x-full"
//                 enterTo="translate-x-0"
//                 leave="transform transition ease-in-out duration-500 sm:duration-700"
//                 leaveFrom="translate-x-0"
//                 leaveTo="translate-x-full"
//               >
//                 <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
//                   {/* <Transition.Child
//                     as={Fragment}
//                     enter="ease-in-out duration-500"
//                     enterFrom="opacity-0"
//                     enterTo="opacity-100"
//                     leave="ease-in-out duration-500"
//                     leaveFrom="opacity-100"
//                     leaveTo="opacity-0"
//                   >
//                     <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
//                       <button
//                         type="button"
//                         className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
//                         onClick={() => setOpen(false)}
//                       >
//                         <span className="sr-only">Close panel</span>

//                       </button>
                      
//                     </div>
//                   </Transition.Child> */}
                  
//                   <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
//                     <div className="px-4 sm:px-6">
//                       <Dialog.Title className="text-lg font-medium text-gray-900">Panel title</Dialog.Title>
//                     </div> 
//                     <div class="relative mt-6 flex-1 px-4 sm:px-6">
//                       {/* Replace with your content */}
//                       <div className="absolute inset-0 px-4 sm:px-6">
//                       </div>
//                       {/* /End replace */}
//                     </div>
//                   </div>
//                 </Dialog.Panel>
//               </Transition.Child>
//             </div>
//           </div>
//         </div>
//       </Dialog>
//     </Transition.Root>
//   )
// }
