import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import Vision from "../pages/Vision.jsx";
import Services from "../pages/Services.jsx";
import PersonalBranding from "../pages/PersonalBranding.jsx";
import SocialMediaManagement from "../pages/SocialMediaManagement.jsx";
import VideoProduction from "../pages/VideoProduction.jsx";
import PublicRelations from "../pages/PublicRelations.jsx";
import CorporatePodcasting from "../pages/CorporatePodcasting.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "vision", element: <Vision /> },
      {
        path: "services",
        element: <Services />,
        children: [
          { path: "personal-branding", element: <PersonalBranding /> },
          {
            path: "social-media-management",
            element: <SocialMediaManagement />,
          },
          { path: "video-production", element: <VideoProduction /> },
          { path: "public-relations", element: <PublicRelations /> },
          { path: "corporate-podcasting", element: <CorporatePodcasting /> },
        ],
      },
    ],
  },
]);

export default router;
