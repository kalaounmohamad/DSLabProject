import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import FrameComponent from "./pages/FrameComponent";
import FrameComponent1 from "./pages/FrameComponent1";
import FrameComponent2 from "./pages/FrameComponent2";
import FrameComponent3 from "./pages/FrameComponent3";
import ProfileEmployee from "./pages/ProfileEmployee";
import ProfileCEO from "./pages/ProfileCEO";
import MeetingsCEO from "./pages/MeetingsCEO";
import ProjectsCEO from "./pages/ProjectsCEO";
import EmployeesCEO from "./pages/EmployeesCEO";
import HomeCEO from "./pages/HomeCEO";
import Login from "./pages/Login";
import NavigateCEO from "./pages/NavigateCEO";
import NewPage from "./pages/NewPage";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/signup":
        title = "";
        metaDescription = "";
        break;
      case "/frame-16":
        title = "";
        metaDescription = "";
        break;
      case "/project-summary-employee":
        title = "";
        metaDescription = "";
        break;
      case "/new-meeting":
        title = "";
        metaDescription = "";
        break;
      case "/new-project":
        title = "";
        metaDescription = "";
        break;
      case "/profile-employee":
        title = "";
        metaDescription = "";
        break;
      case "/profile-ceo":
        title = "";
        metaDescription = "";
        break;
      case "/meetings-ceo":
        title = "";
        metaDescription = "";
        break;
      case "/projects-ceo":
        title = "";
        metaDescription = "";
        break;
      case "/employees-ceo":
        title = "";
        metaDescription = "";
        break;
      case "/home-ceo":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/navigate-ceo":
        title = "";
        metaDescription = "";
        break;
      case "/new-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/frame-16" element={<FrameComponent />} />
      <Route path="/project-summary-employee" element={<FrameComponent1 />} />
      <Route path="/new-meeting" element={<FrameComponent2 />} />
      <Route path="/new-project" element={<FrameComponent3 />} />
      <Route path="/profile-employee" element={<ProfileEmployee />} />
      <Route path="/profile-ceo" element={<ProfileCEO />} />
      <Route path="/meetings-ceo" element={<MeetingsCEO />} />
      <Route path="/projects-ceo" element={<ProjectsCEO />} />
      <Route path="/employees-ceo" element={<EmployeesCEO />} />
      <Route path="/home-ceo" element={<HomeCEO />} />
      <Route path="/login" element={<Login />} />
      <Route path="/navigate-ceo" element={<NavigateCEO />} />
      <Route path="/new-page" element={<NewPage />} />
    </Routes>
  );
}
export default App;
