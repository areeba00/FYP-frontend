import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
  Redirect,
  Navigate,
} from "react-router-dom";
import Layout from "./components/layout";
import Display from "./components/home-page/display";
import Jobs from "./components/home-page/job-categories";
import FeaturedJobs from "./components/home-page/job-featured";
import RegisterLayout from "./components/register-page/register";
import PersonalInfo from "./components/register-page/personal-info";
import EducationInfo from "./components/register-page/education-info";
import CompanyMain from "./components/company-page/company";
import CompanyDashboard from "./components/company-page/company-dashboard";
import CompanyProfile from "./components/company-page/company-profile";
import CompanyPost from "./components/company-page/company-post";
import StudentMain from "./components/student-page/student";
import StudentDashboard from "./components/student-page/student-dashboard";
import StudentProfile from "./components/student-page/student-profile";
import EditProfile from "./components/student-page/edit-profile";
import SearchJobs from "./components/student-page/search";
import Messages from "./components/student-page/messages";
import CV from "./components/student-page/create-cv";
import JobPost from "./components/company-page/job-postings";
import ShortListed from "./components/company-page/shortlisted-candidates";
import Search from "./components/student-page/search2";
import Body from "./components/student-page/Body";
import { useDispatch } from "react-redux";
import { getJobs } from "./redux/actions/jobActions";
import { getJobsbtid } from "./redux/actions/jobActions";
import { useEffect } from "react";
import Job from "./components/student-page/job";
import Signup from "./components/register-page/sign_up";
import Signin from "./components/register-page/sign_in";
import Jobroute from "./components/student-page/jobroute";
import ResumeUpload from "./components/student-page/uploadresume";
import CompanyHomePage from "./components/company_home";
import StudentHome from "./components/student_home";
function App() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getJobs());
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getJobsbtid());
  // }, [dispatch]);
  const shouldRedirect = true;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Layout />}>
        <Route
            path=""
            element={
              <>
                <Display /> {" "}
              </>
            }
          />
        </Route>
        
        <Route exact path="/studenthome" element={<StudentHome />}>
          <Route
            path=""
            element={
              <>
                <Display /> <Jobs /> <FeaturedJobs />{" "}
              </>
            }
          />
        </Route>
        <Route exact path="/companyHome" element={<CompanyHomePage />}></Route>
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
        <Route path="register" element={<RegisterLayout />}>
          <Route exact path="" element={<PersonalInfo />} />
          <Route path="education" element={<EducationInfo />} />
          
        </Route>

        <Route path="company" element={<CompanyMain />}>
          <Route exact path="" element={<CompanyDashboard />} />
          <Route path="profile" element={<CompanyProfile />} />
          <Route path="post" element={<CompanyPost />} />
          <Route path="jobposting" element={<JobPost />} />
          <Route path="shortlisted" element={<ShortListed />} />
          
        </Route>

        <Route path="student" element={<StudentMain />}>
          <Route exact path="" element={<StudentProfile />} />
          {/* <Route path="profile" element={<StudentProfile />} /> */}
          <Route path="edit" element={<EditProfile />} />
          <Route path="search" element={<Search />} />
          <Route path="upload" element={<ResumeUpload />} />
          <Route path="body" element={<Body />} />
          {/* <Route path="job" element={<IndividualJob />} /> */}
        </Route>

        <Route path="job/:jobId" element={<Job />} />
      </Routes>
    </Router>
  );
}

export default App;
