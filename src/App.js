import React, { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./pages/dashboard"));
const Signup = lazy(() => import("./pages/signup"));
const Login = lazy(() => import("./pages/login"));
const Profile = lazy(() => import("./pages/profile"));
const NotFound = lazy(() => import("./pages/not-found"));

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <p>This is where our content will be</p>
    </Suspense>
  );
};

export default App;
