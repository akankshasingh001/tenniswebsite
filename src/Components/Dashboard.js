import React from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const firstName =
    location.state && location.state.firstName ? location.state.firstName : '';

  return (
    <>
      <div className="container">
        <h2>Dashboard</h2>
        <p>Welcome, {firstName}!</p>
      </div>
    </>
  );
};

export default Dashboard;
