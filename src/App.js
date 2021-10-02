import React, { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./pages/dashboard"));
const Signup = lazy(() => import("./pages/signup"));
const Login = lazy(() => import("./pages/login"));
const Profile = lazy(() => import("./pages/profile"));
const NotFound = lazy(() => import("./pages/not-found"));

const App = () => {
  return <p className="text-red-500">ets</p>;
};

export default App;
