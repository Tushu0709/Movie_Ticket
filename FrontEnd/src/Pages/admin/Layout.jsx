// import React from "react";
// import AdminNavbar from "../../components/admin/AdminNavbar";
// import AdminSidebar from "../../components/admin/AdminSidebar";
// import { Outlet } from "react-router-dom";

// const Layout = () => {
//   return (
//     <>
//       <AdminNavbar />
//       <div className="flex">
//         <AdminSidebar />
//       </div>
//       <div className="flex-1 px-4 py-10 md:px-10 h-[calc(100vh-64px)] overflow-y-auto">
//         <Outlet />
//       </div>
//     </>
//   );
// };

// export default Layout;


import React from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <AdminNavbar />
      {/* Main wrapper: Sidebar + Content */}
      <div className="flex ">
        {/* Sidebar */}
        <AdminSidebar />

        {/* Main content area */}
        <div className="flex-1 px-4 py-10  overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
