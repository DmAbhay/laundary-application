import { useState, useEffect, useRef } from "react";

const slides = [
  { id: 1, image: "/images/laundry1.jpg", title: "Professional Washing", description: "Get your clothes cleaned with premium washing service." },
  { id: 2, image: "/images/laundry2.jpg", title: "Ironing Service", description: "Wrinkle-free ironing to keep you looking sharp." },
  { id: 3, image: "/images/laundry3.jpg", title: "Dry Cleaning", description: "Perfect dry-cleaning for your delicate fabrics." },
  { id: 4, image: "/images/laundry4.jpg", title: "Premium Care", description: "Best quality fabric care for your clothes." },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slides.length;
      setCurrentIndex(nextIndex);
      scrollToSlide(nextIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const scrollToSlide = (index) => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * window.innerWidth,
        behavior: "smooth",
      });
    }
  };

  const goToPrev = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
    scrollToSlide(newIndex);
  };

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      {/* Carousel */}
      <div
        ref={carouselRef}
        className="flex w-full h-full overflow-x-scroll snap-x snap-mandatory scroll-smooth"
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE 10+
        }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-screen h-screen flex-shrink-0 relative snap-center">
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-6">
              <h2 className="text-4xl md:text-6xl font-bold">{slide.title}</h2>
              <p className="mt-4 text-lg md:text-2xl max-w-2xl">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Hide scrollbar using CSS for Webkit */}
      <style>
        {`
          div::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      {/* Controls */}
      <button onClick={goToPrev} className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
        ❮
      </button>
      <button onClick={goToNext} className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrentIndex(idx);
              scrollToSlide(idx);
            }}
            className={`w-4 h-4 rounded-full ${idx === currentIndex ? "bg-blue-600" : "bg-gray-400"}`}
          />
        ))}
      </div>
    </div>
  );
}













// import { useState, useEffect, useRef } from "react";

// const slides = [
//   {
//     id: 1,
//     image: "/images/laundry1.jpg",
//     title: "Professional Washing",
//     description: "Get your clothes cleaned with premium washing service.",
//   },
//   {
//     id: 2,
//     image: "/images/laundry2.jpg",
//     title: "Ironing Service",
//     description: "Wrinkle-free ironing to keep you looking sharp.",
//   },
//   {
//     id: 3,
//     image: "/images/laundry3.jpg",
//     title: "Dry Cleaning",
//     description: "Perfect dry-cleaning for your delicate fabrics.",
//   },
//   {
//     id: 4,
//     image: "/images/laundry4.jpg",
//     title: "Premium Care",
//     description: "Best quality fabric care for your clothes.",
//   },
// ];

// export default function Home() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const carouselRef = useRef(null);

//   // Auto slide every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const nextIndex = (currentIndex + 1) % slides.length;
//       setCurrentIndex(nextIndex);
//       scrollToSlide(nextIndex);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const scrollToSlide = (index) => {
//     if (carouselRef.current) {
//       carouselRef.current.scrollTo({
//         left: index * window.innerWidth,
//         behavior: "smooth",
//       });
//     }
//   };

//   const goToPrev = () => {
//     const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//     scrollToSlide(newIndex);
//   };

//   const goToNext = () => {
//     const newIndex = (currentIndex + 1) % slides.length;
//     setCurrentIndex(newIndex);
//     scrollToSlide(newIndex);
//   };

//   return (
//     <div className="w-screen h-screen relative overflow-hidden">
//       {/* Carousel */}
//       <div
//         ref={carouselRef}
//         className="flex w-full h-full overflow-x-scroll snap-x snap-mandatory scroll-smooth"
//       >
//         {slides.map((slide) => (
//           <div
//             key={slide.id}
//             className="w-screen h-screen flex-shrink-0 relative snap-center"
//           >
//             {/* Background Image */}
//             <img
//               src={slide.image}
//               alt={slide.title}
//               className="w-full h-full object-cover"
//             />

//             {/* Overlay Content */}
//             <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-6">
//               <h2 className="text-4xl md:text-6xl font-bold">{slide.title}</h2>
//               <p className="mt-4 text-lg md:text-2xl max-w-2xl">
//                 {slide.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Controls */}
//       <button
//         onClick={goToPrev}
//         className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full"
//       >
//         ❮
//       </button>
//       <button
//         onClick={goToNext}
//         className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full"
//       >
//         ❯
//       </button>

//       {/* Dots */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
//         {slides.map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => {
//               setCurrentIndex(idx);
//               scrollToSlide(idx);
//             }}
//             className={`w-4 h-4 rounded-full ${
//               idx === currentIndex ? "bg-blue-600" : "bg-gray-400"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }










// import { useState, useEffect } from "react";

// const slides = [
//   {
//     id: 1,
//     image: "/images/laundry1.jpg",
//     title: "Professional Washing",
//     description: "Get your clothes cleaned with premium washing service.",
//   },
//   {
//     id: 2,
//     image: "/images/laundry2.jpg",
//     title: "Ironing Service",
//     description: "Wrinkle-free ironing to keep you looking sharp.",
//   },
//   {
//     id: 3,
//     image: "/images/laundry3.jpg",
//     title: "Dry Cleaning",
//     description: "Perfect dry-cleaning for your delicate fabrics.",
//   },
// ];

// export default function Home() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto slide every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % slides.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const goToPrev = () => {
//     setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   const goToNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % slides.length);
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-4">🏠 Home Page</h1>
//       <p className="mb-6">Welcome to the Home page!</p>

//       {/* Carousel */}
//       <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg">
//         <div
//           className="flex transition-transform ease-in-out duration-700"
//           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//         >
//           {slides.map((slide) => (
//             <div
//               key={slide.id}
//               className="w-full flex-shrink-0 flex flex-col items-center"
//             >
//               <img
//                 src={slide.image}
//                 alt={slide.title}
//                 className="w-full h-64 object-cover"
//               />
//               <div className="bg-white p-4 text-center w-full">
//                 <h2 className="text-xl font-semibold">{slide.title}</h2>
//                 <p className="text-sm text-gray-600">{slide.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Controls */}
//         <button
//           onClick={goToPrev}
//           className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
//         >
//           ❮
//         </button>
//         <button
//           onClick={goToNext}
//           className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
//         >
//           ❯
//         </button>

//         {/* Dots */}
//         <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
//           {slides.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => setCurrentIndex(idx)}
//               className={`w-3 h-3 rounded-full ${
//                 idx === currentIndex ? "bg-blue-600" : "bg-gray-400"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
