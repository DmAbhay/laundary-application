import laundryIcon from "../assets/laundry.png"; // image inside src/assets/

export default function Banner() {
  return (
    <div className="bg-yellow-200/50 backdrop-blur-sm text-black py-4 px-6 text-base relative mb-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        {/* Left Corner: Logo */}
        <div className="flex items-center gap-3">
          <img 
            src={laundryIcon}
            alt="Laundry" 
            className="h-16 w-16 md:h-14 md:w-14"
          />
        </div>

        {/* Right Corner: Phone Number */}
        <a 
          href="tel:+911234567890" 
          className="text-blue-900 text-lg font-bold hover:underline"
        >
          📞 +91 12345 67890
        </a>
      </div>
    </div>
  );
}








// import laundryIcon from "../assets/laundry.png"; // image inside src/assets/

// export default function Banner() {
//   return (
//     <div className="w-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 shadow-md backdrop-blur-md">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 py-3 px-6">
        
//         {/* 🔹 Left: Logo + Brand Name */}
//         <div className="flex items-center gap-3">
//           <img
//             src={laundryIcon}
//             alt="Laundry"
//             className="h-12 w-12 md:h-14 md:w-14 drop-shadow-lg"
//           />
//           <span className="text-xl md:text-2xl font-extrabold text-blue-900 tracking-wide">
//             LaundryPro
//           </span>
//         </div>

//         {/* 🔹 Right: Phone Number */}
//         <a
//           href="tel:+911234567890"
//           className="flex items-center gap-2 text-blue-900 text-lg md:text-xl font-bold bg-white/40 px-4 py-2 rounded-full shadow-md hover:bg-white/70 transition-all duration-300"
//         >
//           📞 <span>+91 12345 67890</span>
//         </a>
//       </div>
//     </div>
//   );
// }










// import laundryIcon from "../assets/laundry.png"; // image inside src/assets/

// export default function Banner() {
//   return (
//     <div className="bg-yellow-400 text-black py-4 px-6 text-base relative"> {/* increased padding & font size */}
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">

//         {/* Left Corner: Logo */}
//         <div className="flex items-center gap-3">
//           <img 
//             src={laundryIcon}
//             alt="Laundry" 
//             className="h-12 w-12 md:h-14 md:w-14"  // bigger logo
//           />
//         </div>

//         {/* Right Corner: Phone Number */}
//         <a 
//           href="tel:+911234567890" 
//           className="text-blue-900 text-lg font-bold hover:underline" // larger, bold phone
//         >
//           📞 +91 12345 67890
//         </a>
//       </div>
//     </div>
//   );
// }
