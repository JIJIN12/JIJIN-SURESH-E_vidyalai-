import React from 'react';
import Footer from '../components/Footer';
import TopNavbar from '../components/Navbar';
import UserList from '../components/UserList';
import Index1 from '../components/UserList/Index1';

export default function HomePage() {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <TopNavbar />
      <div
        style={{
          margin: '60px 0px 20px',
        }}
      >
        {/* <UserList /> */}
        <Index1 />
      </div>
      <Footer />
    </div>
  );
}
