import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import Banner from "./Banner";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Banner />

      {/* 🔹 Transparent Background Wrapper */}
      <div className="sticky top-0 z-50 w-full bg-yellow-200/50 backdrop-blur-sm">
        <nav className="bg-blue-500/80 text-white shadow-md max-w-6xl mx-auto rounded-xl px-6 py-2 mt-[-1.5rem]">
          <div className="flex justify-between items-center h-12">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-xl font-bold tracking-wide">
                ExploreTech
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-5 text-sm">
              <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer hover:text-gray-200">Home</ScrollLink>
              <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer hover:text-gray-200">About</ScrollLink>
              <ScrollLink to="services" smooth={true} duration={500} className="cursor-pointer hover:text-gray-200">Services</ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-gray-200">Contact</ScrollLink>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isOpen && (
            <div className="md:hidden bg-blue-500/90 mt-2 rounded-lg px-3 pt-2 pb-2 space-y-2 shadow-lg">
              <ScrollLink to="home" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="block px-3 py-1 rounded hover:bg-blue-400 cursor-pointer">Home</ScrollLink>
              <ScrollLink to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="block px-3 py-1 rounded hover:bg-blue-400 cursor-pointer">About</ScrollLink>
              <ScrollLink to="services" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="block px-3 py-1 rounded hover:bg-blue-400 cursor-pointer">Services</ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="block px-3 py-1 rounded hover:bg-blue-400 cursor-pointer">Contact</ScrollLink>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}









// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Link as ScrollLink } from "react-scroll";
// import Banner from "./Banner";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <Banner />

//       {/* 🔹 Yellow Background Wrapper */}
//       <div className="sticky top-0 z-50 w-full bg-yellow-400/90 backdrop-blur-md">
//         <nav className="bg-blue-600 text-white shadow-lg max-w-6xl mx-auto rounded-2xl px-4 mt-[-2rem]">
//           <div className="flex justify-between h-16 items-center">
//             {/* Logo */}
//             <div className="flex-shrink-0">
//               <a href="/" className="text-2xl font-bold tracking-wide">
//                 ExploreTech
//               </a>
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex space-x-6">
//               <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer hover:text-gray-200">Home</ScrollLink>
//               <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer hover:text-gray-200">About</ScrollLink>
//               <ScrollLink to="services" smooth={true} duration={500} className="cursor-pointer hover:text-gray-200">Services</ScrollLink>
//               <ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-gray-200">Contact</ScrollLink>
//             </div>

//             {/* Mobile Hamburger */}
//             <div className="md:hidden">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
//               >
//                 {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Menu Dropdown */}
//           {isOpen && (
//             <div className="md:hidden bg-blue-700 mt-2 rounded-xl px-2 pt-2 pb-3 space-y-2 shadow-lg">
//               <ScrollLink to="home" smooth={true} duration={1000} delay={100} onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded hover:bg-blue-500 cursor-pointer">Home</ScrollLink>
//               <ScrollLink to="about" smooth={true} duration={1000} delay={100} onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded hover:bg-blue-500 cursor-pointer">About</ScrollLink>
//               <ScrollLink to="services" smooth={true} duration={1000} delay={100} onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded hover:bg-blue-500 cursor-pointer">Services</ScrollLink>
//               <ScrollLink to="contact" smooth={true} duration={1000} delay={100} onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded hover:bg-blue-500 cursor-pointer">Contact</ScrollLink>
//             </div>
//           )}
//         </nav>
//       </div>
//     </>
//   );
// }







// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Link as ScrollLink } from "react-scroll";
// import Banner from "./Banner";

// export default function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <>
//             <Banner />


//             <div className="w-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 shadow-md backdrop-blur-md">
//                 {/* 🔹 Navbar */}
//                 <nav className="bg-blue-600 text-white shadow-lg sticky top-4 z-50 max-w-6xl mx-auto rounded-2xl px-4">
//                     <div className="flex justify-between h-16 items-center">
//                         {/* Logo */}
//                         <div className="flex-shrink-0">
//                             <a href="/" className="text-2xl font-bold tracking-wide">
//                                 ExploreTech
//                             </a>
//                         </div>

//                         {/* Desktop Menu */}
//                         <div className="hidden md:flex space-x-6">
//                             <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer hover:text-gray-200">Home</ScrollLink>
//                             <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer hover:text-gray-200">About</ScrollLink>
//                             <ScrollLink to="services" smooth={true} duration={500} className="cursor-pointer hover:text-gray-200">Services</ScrollLink>
//                             <ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-gray-200">Contact</ScrollLink>
//                         </div>

//                         {/* Mobile Hamburger */}
//                         <div className="md:hidden">
//                             <button
//                                 onClick={() => setIsOpen(!isOpen)}
//                                 className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
//                             >
//                                 {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//                             </button>
//                         </div>
//                     </div>

//                     {/* Mobile Menu Dropdown */}
//                     {isOpen && (
//                         <div className="md:hidden bg-blue-700 mt-2 rounded-xl px-2 pt-2 pb-3 space-y-2 shadow-lg">
//                             <ScrollLink to="home" smooth={true} duration={1000} delay={100} onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded hover:bg-blue-500 cursor-pointer">Home</ScrollLink>
//                             <ScrollLink to="about" smooth={true} duration={1000} delay={100} onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded hover:bg-blue-500 cursor-pointer">About</ScrollLink>
//                             <ScrollLink to="services" smooth={true} duration={1000} delay={100} onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded hover:bg-blue-500 cursor-pointer">Services</ScrollLink>
//                             <ScrollLink to="contact" smooth={true} duration={1000} delay={100} onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded hover:bg-blue-500 cursor-pointer">Contact</ScrollLink>
//                         </div>
//                     )}
//                 </nav>
//             </div>


//         </>
//     );
// }









// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Link as ScrollLink } from "react-scroll";

// export default function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <nav className="bg-blue-600 text-white shadow-lg fixed w-full top-0 z-50">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex justify-between h-16 items-center">
//                     {/* Logo */}
//                     <div className="flex-shrink-0">
//                         <a href="/" className="text-2xl font-bold tracking-wide">
//                             MyBrand
//                         </a>
//                     </div>

//                     {/* Desktop Menu */}
//                     <div className="hidden md:flex space-x-6">
//                         <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer hover:text-gray-200">Home</ScrollLink>
//                         <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer hover:text-gray-200">About</ScrollLink>
//                         <ScrollLink to="services" smooth={true} duration={500} className="cursor-pointer hover:text-gray-200">Services</ScrollLink>
//                         <ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-gray-200">Contact</ScrollLink>
//                     </div>

//                     {/* Mobile Hamburger */}
//                     <div className="md:hidden">
//                         <button
//                             onClick={() => setIsOpen(!isOpen)}
//                             className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
//                         >
//                             {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Menu Dropdown */}
//             {isOpen && (
//                 <div className="md:hidden bg-blue-700 px-2 pt-2 pb-3 space-y-2">
//                     <ScrollLink to="home" smooth={true} duration={1000} delay={100} onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded hover:bg-blue-500 cursor-pointer">Home</ScrollLink>
//                     <ScrollLink to="about" smooth={true} duration={1000} delay={100} onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded hover:bg-blue-500 cursor-pointer">About</ScrollLink>
//                     <ScrollLink to="services" smooth={true} duration={1000} delay={100} onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded hover:bg-blue-500 cursor-pointer">Services</ScrollLink>
//                     <ScrollLink to="contact" smooth={true} duration={1000} delay={100} onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded hover:bg-blue-500 cursor-pointer">Contact</ScrollLink>
//                 </div>
//             )}
//         </nav>
//     );
// }
