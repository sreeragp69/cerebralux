import React from "react";
import { Link, useLocation } from "react-router-dom";

class ErrorBoundaryBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, prevPath: props.location.pathname };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ hasError: false });
    }
  }

  componentDidCatch(error, errorInfo) {
    console.error("Caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="min-h-screen flex items-center justify-center bg-[hsl(var(--background))] px-4">
          <div className="max-w-xl text-center text-white glass-effect p-8 shadow-lg border border-white/20">
            <h1 className="text-4xl font-playfair font-bold mb-4 text-white">Something Went Wrong</h1>
            <p className="text-white/90 text-base mb-6 leading-relaxed">
              We're sorry, but an unexpected error occurred. <br /> Please try again or return to the homepage.
            </p>
            <Link
              to="/"
              className="inline-block bg-white text-[hsl(var(--background))] font-semibold px-6 py-2 rounded-md shadow-md hover:bg-opacity-90 transition"
            >
              Go to Home
            </Link>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

// HOC to inject location into class component
function ErrorBoundary(props) {
  const location = useLocation();
  return <ErrorBoundaryBase {...props} location={location} />;
}

export default ErrorBoundary;
