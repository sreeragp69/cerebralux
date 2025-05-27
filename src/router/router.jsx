import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Careers from "../pages/Careers.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import Vision from "../pages/Vision.jsx";
import Services from "../pages/Services.jsx";
import PersonalBranding from "../pages/PersonalBranding.jsx";
import SocialMediaManagement from "../pages/SocialMediaManagement.jsx";
import VideoProduction from "../pages/VideoProduction.jsx";
import PublicRelations from "../pages/PublicRelations.jsx";
import CorporatePodcasting from "../pages/CorporatePodcasting.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary>   
        <AppLayout />
      </ErrorBoundary>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "vision", element: <Vision /> },
      { path: "services", element: <Services /> },
      { path: "careers", element: <Careers /> },
      { path: "services/personal-branding", element: <PersonalBranding /> },
      { path: "services/social-media-management", element: <SocialMediaManagement /> },
      { path: "services/video-production", element: <VideoProduction /> },
      { path: "services/public-relations", element: <PublicRelations /> },
      { path: "services/corporate-podcasting", element: <CorporatePodcasting /> },
      {
        path: "*",
        element: <ErrorPage />
      }
    ],
  },
]);

export default router;
