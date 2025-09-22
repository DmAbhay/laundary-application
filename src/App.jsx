import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

export default function App() {
  return (
    <div>
      <Navbar />

      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gray-100"
      >
        <Home />
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100"
      >
        <About />
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-6 py-16"
      >
        <Services />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-black px-6 py-16 "
      >
        <Contact />
      </section>

    </div>
  );
}







// import About from "./components/About";
// import Home from "./components/Home";
// import Navbar from "./components/Navbar";
// import Services from "./components/Services";

// export default function App() {
//   return (
//     <div>
//       <Navbar />

//       {/* Home Section */}
//       <section id="home" className="h-screen flex items-center justify-center bg-gray-100">
//         <Home/>
//       </section>

//       {/* About Section */}
//       <section id="about" className="h-screen flex items-center justify-center from-blue-50 to-blue-100">
//        <About/>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-6 py-12">
//         <Services/>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="h-screen flex items-center justify-center bg-blue-100">
//         <h1 className="text-4xl font-bold">📞 Contact Section</h1>
//       </section>
//     </div>
//   );
// }









// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import About from "./components/About";
// import Services from "./components/Services";
// import Contact from "./components/Contact";

// export default function App() {
//   return (
//     <Router>
//       <Navbar />
//       <div className="mt-4">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }






// import Navbar from "./components/Navbar";

// export default function App() {
//   return (
//     <>
//       <Navbar />
//       <div className="p-6">
//         <h1 className="text-3xl font-bold">Hello Tailwind Navbar 🚀</h1>
//       </div>
//     </>
//   );
// }
