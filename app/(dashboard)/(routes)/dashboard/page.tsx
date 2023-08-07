import {UserButton} from '@clerk/nextjs';
import React from 'react'


const DashboardPage = () => {
  return (
    <>
        <div>DashboardPage (protected)</div>
        <UserButton afterSignOutUrl='/' />
    </>
  )
}

export default DashboardPage