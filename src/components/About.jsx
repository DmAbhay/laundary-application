import { useState, useEffect } from "react";

export default function About() {
  const images = [
    "/images/about1.jpg",
    "/images/about2.jpg",
    "/images/about3.jpg",
    "/images/about4.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Auto change background every 12s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 15000); // ⬅️ 12 seconds delay
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Images Layer with Fade Transition */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-5000 ease-in-out`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: currentImage === index ? 1 : 0,
            }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-blue-900/60"></div>
          </div>
        ))}
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-5xl text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 flex items-center justify-center gap-2">
            <span role="img" aria-label="info">ℹ️</span> About Us
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-12">
            Welcome to our laundry service platform!  
            We specialize in providing professional washing, ironing, and dry-cleaning 
            services to make your life easier. Our goal is to deliver fresh, clean, 
            and well-pressed clothes so you can always look your best.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg text-center text-gray-800">
              <h3 className="font-semibold text-blue-700 text-lg">✨ Quality</h3>
              <p className="text-sm mt-2">We ensure premium fabric care.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg text-center text-gray-800">
              <h3 className="font-semibold text-blue-700 text-lg">⏱ Fast</h3>
              <p className="text-sm mt-2">Quick turnaround times.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg text-center text-gray-800">
              <h3 className="font-semibold text-blue-700 text-lg">💰 Affordable</h3>
              <p className="text-sm mt-2">Best prices guaranteed.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}






// import { useState, useEffect } from "react";

// export default function About() {
//   const images = [
//     "/images/about1.jpg",
//     "/images/about2.jpg",
//     "/images/about3.jpg",
//     "/images/about4.jpg",
//   ];

//   const [currentImage, setCurrentImage] = useState(0);

//   // Auto change background every 6s
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className="relative min-h-screen w-full overflow-hidden">
//       {/* Background Images Layer with Fade Transition */}
//       <div className="absolute inset-0">
//         {images.map((img, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ease-in-out`}
//             style={{
//               backgroundImage: `url(${img})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat",
//               opacity: currentImage === index ? 1 : 0,
//             }}
//           >
//             {/* Gradient Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-blue-900/60"></div>
//           </div>
//         ))}
//       </div>

//       {/* Foreground Content */}
//       <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
//         <div className="max-w-5xl text-center text-white">
//           <h1 className="text-4xl md:text-6xl font-extrabold mb-6 flex items-center justify-center gap-2">
//             <span role="img" aria-label="info">ℹ️</span> About Us
//           </h1>
//           <p className="text-lg md:text-xl leading-relaxed mb-12">
//             Welcome to our laundry service platform!  
//             We specialize in providing professional washing, ironing, and dry-cleaning 
//             services to make your life easier. Our goal is to deliver fresh, clean, 
//             and well-pressed clothes so you can always look your best.
//           </p>

//           {/* Info Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//             <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg text-center text-gray-800">
//               <h3 className="font-semibold text-blue-700 text-lg">✨ Quality</h3>
//               <p className="text-sm mt-2">We ensure premium fabric care.</p>
//             </div>
//             <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg text-center text-gray-800">
//               <h3 className="font-semibold text-blue-700 text-lg">⏱ Fast</h3>
//               <p className="text-sm mt-2">Quick turnaround times.</p>
//             </div>
//             <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg text-center text-gray-800">
//               <h3 className="font-semibold text-blue-700 text-lg">💰 Affordable</h3>
//               <p className="text-sm mt-2">Best prices guaranteed.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }









// export default function About() {
//     return (


//         <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl">


//             <div>
//                 <h1 className="text-4xl font-extrabold text-blue-700 mb-4 flex items-center justify-center gap-2">
//                     <span role="img" aria-label="info">ℹ️</span> About Us
//                 </h1>
//                 <p className="text-gray-600 leading-relaxed text-lg max-w-3xl text-center">
//                     Welcome to our laundry service platform!
//                     We specialize in providing professional washing, ironing, and dry-cleaning
//                     services to make your life easier. Our goal is to deliver fresh, clean,
//                     and well-pressed clothes so you can always look your best.
//                 </p>

//                 <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl">
//                     <div className="bg-blue-50 p-6 rounded-xl shadow-sm text-center">
//                         <h3 className="font-semibold text-blue-700 text-lg">✨ Quality</h3>
//                         <p className="text-sm text-gray-600 mt-2">We ensure premium fabric care.</p>
//                     </div>
//                     <div className="bg-blue-50 p-6 rounded-xl shadow-sm text-center">
//                         <h3 className="font-semibold text-blue-700 text-lg">⏱ Fast</h3>
//                         <p className="text-sm text-gray-600 mt-2">Quick turnaround times.</p>
//                     </div>
//                     <div className="bg-blue-50 p-6 rounded-xl shadow-sm text-center">
//                         <h3 className="font-semibold text-blue-700 text-lg">💰 Affordable</h3>
//                         <p className="text-sm text-gray-600 mt-2">Best prices guaranteed.</p>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     );
// }
