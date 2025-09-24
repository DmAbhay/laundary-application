// import { FaWhatsapp } from "react-icons/fa";

// export default function FloatingWhatsAppButton() {
//   const phoneNumber = "918757808656";
//   const message = "Hi, I’m interested in your service";

//   return (
//     <a
//       href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg z-50"
//     >
//       <FaWhatsapp size={28} />
//     </a>
//   );
// }



import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsAppButton() {
  const phoneNumber = "918757808656";
  const [locationMessage, setLocationMessage] = useState(
    "Hi, please share your live location 📍"
  );

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocationMessage(
            `Hi, this is my location: https://www.google.com/maps?q=${latitude},${longitude}`
          );
        },
        (error) => {
          console.error("Error fetching location:", error);
        }
      );
    }
  }, []);

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        locationMessage
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg z-50"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
