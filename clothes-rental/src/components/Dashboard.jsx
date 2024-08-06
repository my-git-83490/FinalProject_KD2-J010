import React from 'react'
import SellerDashboard from './SellerDashboard';
import CustomerDashboard from './CustomerDashboard';


function Dashboard() {
    const userRole = sessionStorage.getItem("userRole"); // retrieving the role of the user from the session storage
    console.log(userRole + " role")
    if (userRole === "CUSTOMER") {
        return <CustomerDashboard />
    } else if (userRole === "SELLER") {
        return <SellerDashboard />
    } else {
        return <div>Invalid User</div>
    }

}

export default Dashboard