import React from "react";
import NavBar from "./components/NavBar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import SeatLayout from "./Pages/SeatLayout";
import MyBookings from "./Pages/MyBookings";
import Favorite from "./Pages/Favorite";

import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Moviedetails from "./Pages/MovieDetails";
import Dashboard from "./Pages/admin/Dashboard";
import AddShows from "./Pages/admin/AddShows";
import ListShows from "./Pages/admin/ListShows";
// import ListBooking from "./Pages/admin/ListBooking";
import Layout from "./Pages/admin/Layout";
import ListBookings from "./Pages/admin/ListBookings";

const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith("/admin");
  return (
    <>
      <Toaster />
      {!isAdminRoute && <NavBar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<Moviedetails />} />
        <Route path="/movies/:id/:date" element={<SeatLayout />} />
        <Route path="/my-booking" element={<MyBookings />} />
        <Route path="/favorite" element={<Favorite />} />

        <Route path="/admin/*" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-shows" element={<AddShows />} />
          <Route path="list-shows" element={<ListShows />} />
          <Route path="list-bookings" element={<ListBookings />} />
        </Route>
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;

// import React from "react";
// import NavBar from "./components/NavBar";
// import { Route, Routes, useLocation } from "react-router-dom";
// import Home from "./Pages/Home";
// import Movies from "./Pages/Movies";
// import SeatLayout from "./Pages/SeatLayout";
// import MyBookings from "./Pages/MyBookings";
// import Favorite from "./Pages/Favorite";

// import { Toaster } from "react-hot-toast";
// import Footer from "./components/Footer";
// import Moviedetails from "./Pages/MovieDetails";
// import Dashboard from "./Pages/Dashboard";
// import AddShows from "./Pages/AddShows";
// import ListShows from "./Pages/ListShows";
// import ListBooking from "./Pages/ListBooking";
// import Layout from "./Pages/admin/Layout";

// const App = () => {
//   const isAdminRoute = useLocation().pathname.startsWith("/admin");
//   return (
//     <>
//       <Toaster />
//       {!isAdminRoute && <NavBar />}

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/movies" element={<Movies />} />
//         <Route path="/movies/:id" element={<Moviedetails />} />
//         <Route path="/movies/:id/:date" element={<SeatLayout />} />
//         <Route path="/my-booking" element={<MyBookings />} />
//         <Route path="/favorite" element={<Favorite />} />
//         <Route path="/admin/*" element={<Layout />} />

//         <Route index element={<Dashboard />} />
//         <Route path="/add-shows" element={<AddShows />} />
//         <Route path="/list-shows" element={<ListShows />} />
//         <Route path="/list-bookings" element={<ListBooking />} />
//       </Routes>
//       {!isAdminRoute && <Footer />}
//     </>
//   );
// };

// export default App;
