// import React, { useEffect, useState } from "react";
// import { dummyShowsData } from "../../assets/assets";
// import Loading from "../../components/Loading";
// import Title from "../../components/admin/Title";
// import { CheckIcon, DeleteIcon, StarIcon } from "lucide-react";
// import { kConverter } from "../../lib/kConverter";

// const AddShows = () => {
//   const currency = import.meta.env.VITE_CURRENCY;
//   const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
//   const [selectedMovie, setSelectedMovie] = useState(null);
//   const [dateTimeSelection, setDateTimeSelection] = useState({});
//   const [dateTimeInput, setDateTimeInput] = useState("");
//   const [showPrice, setShowPrice] = useState("");

//   const fetchNowPlayingMovies = async () => {
//     setNowPlayingMovies(dummyShowsData);
//   };

//   const handleDateTimeAdd = () => {
//     if (!dateTimeInput) return;

//     const [date, time] = dateTimeInput.split("T");
//     if (!date || !time) return;

//     setDateTimeSelection((prev) => {
//       const times = prev[date] || [];
//       if (!times.includes(time)) {
//         return { ...prev, [date]: [...times, time] };
//       }
//       return prev;
//     });

//     setDateTimeInput(""); // Clear input after adding
//   };

//   const handleRemoveTime = (date, time) => {
//     setDateTimeSelection((prev) => {
//       // Create a copy of the times array for the selected date
//       const filteredTimes = prev[date].filter((t) => t !== time);

//       // If no more times exist for this date, remove the date entirely
//       if (filteredTimes.length === 0) {
//         const { [date]: _, ...rest } = prev;
//         return rest;
//       }

//       // Otherwise return updated times for the date
//       return {
//         ...prev,
//         [date]: filteredTimes,
//       };
//     });
//   };

//   useEffect(() => {
//     fetchNowPlayingMovies();
//   }, []);

//   if (!nowPlayingMovies || nowPlayingMovies.length === 0) {
//     return <Loading />;
//   }

//   return (
//     <>
//       <Title text1="Add" text2="Shows" />
//       <p className="mt-10 text-lg font-medium">Now Playing Movies</p>
//       <div className="overflow-x-auto pb-4">
//         <div className="group flex flex-wrap gap-4 mt-4 w-max">
//           {nowPlayingMovies.map((movie) => (
//             <div
//               onClick={() => setSelectedMovie(movie.id)}
//               key={movie.id ?? movie._id} // prefer id, fall back to _id if necessary
//               className="relative max-w-[160px] cursor-pointer transform transition duration-300 hover:-translate-y-1"
//             >
//               <div className="relative rounded-lg overflow-hidden">
//                 <img
//                   src={movie.poster_path}
//                   alt={movie.title}
//                   className="w-full h-full object-cover brightness-90"
//                 />

//                 <div className="text-sm flex items-center justify-between p-2 bg-black/70 w-full absolute bottom-0 left-0">
//                   <p className="flex items-center gap-1 text-gray-400">
//                     <StarIcon className="w-4 h-4 text-primary fill-primary" />
//                     {movie.vote_average.toFixed(1)}
//                   </p>
//                   <p className="text-gray-300">
//                     {kConverter(movie.vote_count)} Votes
//                   </p>
//                 </div>
//               </div>
//               {selectedMovie?.id === movie.id && (
//                 <div className="absolute top-2 right-2 flex items-center justify-center bg-primary h-6 w-6 rounded-full">
//                   <CheckIcon className="w-4 h-4 text-white" strokeWidth={2.5} />
//                 </div>
//               )}
//               <p className="font-medium truncate mt-2">{movie.title}</p>
//               <p className="text-gray-400 text-sm">
//                 {movie.release_date?.slice(0, 4)}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="mt-8">
//         <label className="block text-sm font-medium mb-2">Show Price</label>
//         <div className="inline-flex items-center gap-2 border border-gray-600 px-3 py-2 rounded-md focus-within:border-primary transition-colors">
//           <p className="text-gray-400 text-sm">{currency}</p>
//           <input
//             min={0}
//             type="number"
//             value={showPrice}
//             onChange={(e) => setShowPrice(e.target.value)}
//             placeholder="Enter show price"
//             className="w-full outline-none bg-transparent"
//           />
//         </div>
//       </div>
//       <div className="mt-6">
//         <label className="block text-sm font-medium mb-2">
//           Select Date and Time
//         </label>
//         <div className="inline-flex items-center gap-2 border border-gray-600 p-1 pl-3 rounded-lg focus-within:border-primary transition-colors">
//           <input
//             type="datetime-local"
//             value={dateTimeInput}
//             onChange={(e) => setDateTimeInput(e.target.value)}
//             className="outline-none bg-transparent w-full py-2"
//           />
//           <button
//             onClick={handleDateTimeAdd}
//             className="bg-primary/80 text-white px-4 py-2 text-sm rounded-lg hover:bg-primary cursor-pointer transition-colors disabled:opacity-50"
//           >
//             Add Time
//           </button>
//         </div>
//       </div>
//       {Object.keys(dateTimeSelection).length > 0 && (
//         <div className="mt-6">
//           <h2 className="mb-2">Selected Date-Time</h2>
//           <ul className="space-y-3">
//             {Object.entries(dateTimeSelection).map(([date, times]) => (
//               <li key={date}>
//                 <div className="font-medium">{date}</div>
//                 <div className="flex flex-wrap gap-2 mt-1 text-sm">
//                   {times.map((time) => (
//                     <div
//                       key={time}
//                       className="border border-primary px-2 py-1 flex items-center rounded"
//                     >
//                       <span>{time}</span>
//                       <DeleteIcon
//                         onClick={() => handleRemoveTime(date, time)}
//                         width={15}
//                         className="ml-2 text-red-500 hover:text-red-700 cursor-pointer"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//       <button className="bg-primary text-white px-8 py-2 mt-6 rounded hover:bg-primary/98 transition-all cursor-pointer">
//         Add Show
//       </button>
//     </>
//   );
// };

// export default AddShows;

// // src/pages/admin/AddShows.jsx
// import React, { useEffect, useState } from "react";
// import { dummyShowsData } from "../../assets/assets";
// import Loading from "../../components/Loading";
// import Title from "../../components/admin/Title";

// /**
//  * AddShows
//  * - Select a movie from now playing
//  * - Pick datetime (datetime-local) and price
//  * - Click "Add Show" to simulate adding (replace with real API call)
//  */
// const AddShows = () => {
//   const currency = import.meta.env.VITE_CURRENCY ?? "";
//   const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
//   const [selectedMovie, setSelectedMovie] = useState(null);
//   const [dateTimeInput, setDateTimeInput] = useState("");
//   const [showPrice, setShowPrice] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [adding, setAdding] = useState(false);
//   const [addedShows, setAddedShows] = useState([]); // preview of added shows
//   const [error, setError] = useState("");

//   // load movies (simulated). Move useEffect outside of fetch function.
//   const fetchNowPlayingMovies = async () => {
//     try {
//       setLoading(true);
//       // simulate network delay if you want:
//       // await new Promise((r) => setTimeout(r, 150));
//       setNowPlayingMovies(dummyShowsData || []);
//     } catch (err) {
//       console.error("Failed to fetch movies", err);
//       setNowPlayingMovies([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchNowPlayingMovies();
//   }, []);

//   const resetForm = () => {
//     setSelectedMovie(null);
//     setDateTimeInput("");
//     setShowPrice("");
//     setError("");
//   };

//   const handleAddShow = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!selectedMovie) {
//       setError("Please select a movie.");
//       return;
//     }
//     if (!dateTimeInput) {
//       setError("Please choose date & time for the show.");
//       return;
//     }
//     const priceNum = Number(showPrice);
//     if (!showPrice || Number.isNaN(priceNum) || priceNum <= 0) {
//       setError("Please enter a valid show price (> 0).");
//       return;
//     }

//     // create show payload (match your backend schema)
//     const newShow = {
//       _id: `local_${Date.now()}`,
//       movie: selectedMovie,
//       showDateTime: new Date(dateTimeInput).toISOString(),
//       showPrice: priceNum,
//       occupiedSeats: {},
//     };

//     try {
//       setAdding(true);
//       // TODO: Replace this with your real API call:
//       // await api.post("/admin/shows", newShow);
//       await new Promise((r) => setTimeout(r, 400)); // simulate network

//       // locally store for preview
//       setAddedShows((s) => [newShow, ...s]);
//       resetForm();
//     } catch (err) {
//       console.error("Failed to add show", err);
//       setError("Failed to add show. See console for details.");
//     } finally {
//       setAdding(false);
//     }
//   };

//   if (loading) return <Loading />;

//   return (
//     <>
//       <Title text1="Add" text2="Shows" />

//       <div className="mt-6 max-w-5xl">
//         <p className="text-lg font-medium">Now Playing Movies</p>

//         {/* Movie list */}
//         <div className="overflow-x-auto pb-4">
//           <div className="flex flex-wrap gap-4 mt-4">
//             {nowPlayingMovies.map((movie) => {
//               const mid = movie.id ?? movie._id ?? movie.title;
//               const isSelected = selectedMovie && (selectedMovie.id ?? selectedMovie._id) === mid;

//               return (
//                 <button
//                   type="button"
//                   key={mid}
//                   onClick={() => setSelectedMovie(movie)}
//                   className={`relative w-40 rounded-md overflow-hidden transform transition duration-200
//                     ${isSelected ? "ring-2 ring-primary scale-105" : "hover:-translate-y-1"}
//                   `}
//                 >
//                   <img
//                     src={movie.poster_path ?? movie.poster ?? ""}
//                     alt={movie.title}
//                     className="w-full h-56 object-cover brightness-90"
//                     onError={(e) => {
//                       // fallback if poster path is invalid
//                       e.currentTarget.src =
//                         "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='450'><rect width='100%' height='100%' fill='%23333'/><text x='50%' y='50%' fill='%23fff' font-size='16' text-anchor='middle'>No Image</text></svg>";
//                     }}
//                   />
//                   <div className="p-2 text-left bg-gradient-to-t from-black/40 to-transparent absolute bottom-0 left-0 right-0">
//                     <p className="text-sm font-medium text-white truncate">{movie.title}</p>
//                   </div>
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleAddShow} className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
//           <div className="md:col-span-1">
//             <label className="block text-sm font-medium mb-1">Selected Movie</label>
//             <div className="p-3 border rounded-md min-h-[72px]">
//               {selectedMovie ? (
//                 <div>
//                   <p className="font-medium">{selectedMovie.title}</p>
//                   <p className="text-xs text-gray-400">{selectedMovie.duration ? `${selectedMovie.duration} min` : null}</p>
//                 </div>
//               ) : (
//                 <p className="text-sm text-gray-400">No movie selected</p>
//               )}
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">Show Date & Time</label>
//             <input
//               type="datetime-local"
//               value={dateTimeInput}
//               onChange={(e) => setDateTimeInput(e.target.value)}
//               className="w-full p-2 border rounded-md bg-transparent"
//             />
//             <p className="text-xs text-gray-400 mt-1">Choose local date & time for the show.</p>
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">Price ({currency || "amount"})</label>
//             <input
//               type="number"
//               step="0.01"
//               min="0"
//               value={showPrice}
//               onChange={(e) => setShowPrice(e.target.value)}
//               className="w-full p-2 border rounded-md bg-transparent"
//               placeholder="e.g. 99"
//             />
//           </div>

//           <div className="md:col-span-3">
//             {error && <p className="text-sm text-red-400 mb-2">{error}</p>}
//             <button
//               type="submit"
//               disabled={adding}
//               className={`px-4 py-2 rounded-md font-medium ${adding ? "opacity-60 cursor-not-allowed" : "bg-primary text-white"}`}
//             >
//               {adding ? "Adding..." : "Add Show"}
//             </button>
//             <button
//               type="button"
//               onClick={resetForm}
//               className="ml-3 px-3 py-2 rounded-md border text-sm"
//             >
//               Reset
//             </button>
//           </div>
//         </form>

//         {/* Preview / Added shows */}
//         <div className="mt-8">
//           <h3 className="text-md font-semibold mb-3">Recently Added Shows (Preview)</h3>
//           {addedShows.length === 0 ? (
//             <p className="text-sm text-gray-400">No shows added yet (this is a local preview).</p>
//           ) : (
//             <div className="grid gap-3">
//               {addedShows.map((s) => (
//                 <div key={s._id} className="p-3 border rounded-md flex items-center justify-between">
//                   <div>
//                     <p className="font-medium">{s.movie.title}</p>
//                     <p className="text-xs text-gray-400">{new Date(s.showDateTime).toLocaleString()}</p>
//                   </div>
//                   <div className="text-sm">
//                     {currency} {Number(s.showPrice).toLocaleString()}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddShows;


import React, { useEffect, useMemo, useState } from "react";
import { dummyShowsData } from "../../assets/assets";
import Loading from "../../components/Loading";
import Title from "../../components/admin/Title";
import { CheckIcon, DeleteIcon, StarIcon } from "lucide-react";
import { kConverter } from "../../lib/kConverter";

const AddShows = () => {
  const currency = import.meta.env.VITE_CURRENCY ?? "₹";

  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [dateTimeSelection, setDateTimeSelection] = useState({}); // { YYYY-MM-DD: ["HH:MM", ...] }
  const [dateTimeInput, setDateTimeInput] = useState(""); // value from datetime-local
  const [showPrice, setShowPrice] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const fetchNowPlayingMovies = async () => {
    // Replace with real API later. For now, use dummy data.
    setNowPlayingMovies(dummyShowsData || []);
  };

  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);

  const selectedMovie = useMemo(
    () => nowPlayingMovies.find((m) => (m.id ?? m._id) === selectedMovieId),
    [nowPlayingMovies, selectedMovieId]
  );

  const handleDateTimeAdd = () => {
    if (!dateTimeInput) return;

    // Expecting "YYYY-MM-DDTHH:MM" (datetime-local). Some browsers include seconds, strip them.
    const [date, rawTime] = dateTimeInput.split("T");
    if (!date || !rawTime) return;

    const time = rawTime.slice(0, 5); // normalize to HH:MM

    setDateTimeSelection((prev) => {
      const times = prev[date] || [];
      if (!times.includes(time)) {
        return { ...prev, [date]: [...times, time] };
      }
      return prev;
    });

    setDateTimeInput("");
  };

  const handleRemoveTime = (date, time) => {
    setDateTimeSelection((prev) => {
      const filteredTimes = (prev[date] || []).filter((t) => t !== time);
      if (filteredTimes.length === 0) {
        const { [date]: _omit, ...rest } = prev;
        return rest;
      }
      return { ...prev, [date]: filteredTimes };
    });
  };

  const hasAnySchedule = Object.keys(dateTimeSelection).some(
    (d) => (dateTimeSelection[d] || []).length > 0
  );

  const isValid = Boolean(selectedMovieId) && Number(showPrice) > 0 && hasAnySchedule;

  const buildPayload = () => {
    // Example shape for backend consumption; adjust as needed.
    const schedule = Object.entries(dateTimeSelection).flatMap(([date, times]) =>
      times.map((time) => ({ date, time }))
    );

    return {
      movieId: selectedMovieId,
      price: Number(showPrice),
      schedule,
    };
  };

  const handleAddShow = async () => {
    if (!isValid || submitting) return;
    setSubmitting(true);
    try {
      const payload = buildPayload();
      // TODO: Replace with your real API call
      // await api.post("/admin/shows", payload)
      console.log("Add Show Payload:", payload);
      alert("Show added successfully! Check console for payload.");

      // Optional: reset state
      setSelectedMovieId(null);
      setDateTimeSelection({});
      setDateTimeInput("");
      setShowPrice("");
    } catch (err) {
      console.error(err);
      alert("Failed to add show. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!nowPlayingMovies || nowPlayingMovies.length === 0) {
    return <Loading />;
  }

  return (
    <>
      <Title text1="Add" text2="Shows" />

      {/* Movie Grid */}
      <p className="mt-10 text-lg font-medium">Now Playing Movies</p>
      <div className="overflow-x-auto pb-4">
        <div className="group flex flex-wrap gap-4 mt-4 w-max">
          {nowPlayingMovies.map((movie) => {
            const id = movie.id ?? movie._id;
            const isSelected = selectedMovieId === id;
            return (
              <div
                onClick={() => setSelectedMovieId(id)}
                key={id}
                className={`relative max-w-[160px] cursor-pointer transform transition duration-300 hover:-translate-y-1 ${
                  isSelected ? "ring-2 ring-primary rounded-lg" : ""
                }`}
                title={movie.title}
              >
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={movie.poster_path}
                    alt={movie.title}
                    className="w-full h-full object-cover brightness-90"
                  />

                  <div className="text-sm flex items-center justify-between p-2 bg-black/70 w-full absolute bottom-0 left-0">
                    <p className="flex items-center gap-1 text-gray-300">
                      <StarIcon className="w-4 h-4 text-primary fill-primary" />
                      {Number(movie.vote_average).toFixed(1)}
                    </p>
                    <p className="text-gray-300">{kConverter(movie.vote_count)} Votes</p>
                  </div>
                </div>

                {isSelected && (
                  <div className="absolute top-2 right-2 flex items-center justify-center bg-primary h-6 w-6 rounded-full">
                    <CheckIcon className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                )}

                <p className="font-medium truncate mt-2">{movie.title}</p>
                <p className="text-gray-400 text-sm">{movie.release_date?.slice(0, 4)}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Price */}
      <div className="mt-8 max-w-xs">
        <label className="block text-sm font-medium mb-2">Show Price</label>
        <div className="inline-flex items-center gap-2 border border-gray-600 px-3 py-2 rounded-md focus-within:border-primary transition-colors w-full">
          <p className="text-gray-400 text-sm">{currency}</p>
          <input
            min={0}
            step="1"
            type="number"
            value={showPrice}
            onChange={(e) => setShowPrice(e.target.value)}
            placeholder="Enter show price"
            className="w-full outline-none bg-transparent"
          />
        </div>
        {Number(showPrice) <= 0 && showPrice !== "" && (
          <p className="text-xs text-red-400 mt-1">Price must be greater than 0.</p>
        )}
      </div>

      {/* Date-Time Picker */}
      <div className="mt-6 max-w-md">
        <label className="block text-sm font-medium mb-2">Select Date and Time</label>
        <div className="inline-flex  gap-5 border border-gray-600 p-1 pl-3 rounded-lg">
          <input
            type="datetime-local"
            value={dateTimeInput}
            onChange={(e) => setDateTimeInput(e.target.value)}
            className="outline-none rounded-md"
          />
          <button
            onClick={handleDateTimeAdd}
            disabled={!dateTimeInput}
            className="bg-primary/80 text-white px-4 py-2 text-sm rounded-lg hover:bg-primary cursor-pointer transition-colors disabled:opacity-50"
          >
            Add Time
          </button>
        </div>
      </div>

      {/* Selected Date-Times */}
      {Object.keys(dateTimeSelection).length > 0 && (
        <div className="mt-6">
          <h2 className="mb-2 font-semibold">Selected Date-Time</h2>
          <ul className="space-y-3">
            {Object.entries(dateTimeSelection).map(([date, times]) => (
              <li key={date}>
                <div className="font-medium">{date}</div>
                <div className="flex flex-wrap gap-2 mt-1 text-sm">
                  {times.map((time) => (
                    <div key={time} className="border border-primary px-2 py-1 flex items-center rounded">
                      <span>{time}</span>
                      <DeleteIcon
                        onClick={() => handleRemoveTime(date, time)}
                        width={15}
                        className="ml-2 text-red-500 hover:text-red-700 cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Submit */}
      <button
        onClick={handleAddShow}
        disabled={!isValid || submitting}
        className="bg-primary text-white px-8 py-2 mt-6 rounded hover:bg-primary/95 transition-all cursor-pointer disabled:opacity-60"
      >
        {submitting ? "Adding..." : "Add Show"}
      </button>

      {/* Context / Debug (optional) */}
      {selectedMovie && (
        <p className="mt-4 text-xs text-gray-400">Selected: {selectedMovie.title}</p>
      )}
    </>
  );
};

export default AddShows;
