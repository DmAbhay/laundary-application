import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: "💧",
      title: "Dry Cleaning",
      description: "Premium dry cleaning service to keep your clothes fresh and spotless.",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      icon: "🧼",
      title: "Washing",
      description: "Gentle and effective washing for all fabric types.",
      gradient: "from-green-400 to-green-600",
    },
    {
      icon: "🧴",
      title: "Ironing",
      description: "Wrinkle-free ironing to keep you looking sharp.",
      gradient: "from-purple-400 to-purple-600",
    },
    {
      icon: "🚚",
      title: "Pickup & Delivery",
      description: "Convenient doorstep pickup and delivery service.",
      gradient: "from-pink-400 to-pink-600",
    },
    {
      icon: "👕",
      title: "Folding",
      description: "Neatly folded clothes, ready to wear or store.",
      gradient: "from-yellow-400 to-yellow-600",
    },
    {
      icon: "🧽",
      title: "Stain Removal",
      description: "Expert stain removal for even the toughest spots.",
      gradient: "from-red-400 to-red-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-6xl w-full">
        {/* Heading */}
        <motion.h1
          className="text-4xl font-extrabold text-blue-700 mb-6 flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          🛠 Our Services
        </motion.h1>
        <motion.p
          className="text-center text-gray-600 text-lg mb-12 px-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          We provide a range of high-quality laundry services designed to make your life easier.
        </motion.p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-2xl shadow-lg text-center text-white bg-gradient-to-br ${service.gradient}`}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}








// import { motion } from "framer-motion";

// export default function Services() {
//   const services = [
//     {
//       icon: "💧",
//       title: "Dry Cleaning",
//       description: "Premium dry cleaning service to keep your clothes fresh and spotless.",
//       gradient: "from-blue-400 to-blue-600",
//     },
//     {
//       icon: "🧼",
//       title: "Washing",
//       description: "Gentle and effective washing for all fabric types.",
//       gradient: "from-green-400 to-green-600",
//     },
//     {
//       icon: "🧴",
//       title: "Ironing",
//       description: "Wrinkle-free ironing to keep you looking sharp.",
//       gradient: "from-purple-400 to-purple-600",
//     },
//     {
//       icon: "🚚",
//       title: "Pickup & Delivery",
//       description: "Convenient doorstep pickup and delivery service.",
//       gradient: "from-pink-400 to-pink-600",
//     },
//     {
//       icon: "👕",
//       title: "Folding",
//       description: "Neatly folded clothes, ready to wear or store.",
//       gradient: "from-yellow-400 to-yellow-600",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-6 py-12">
//       <div className="max-w-6xl w-full">
//         {/* Heading */}
//         <motion.h1
//           className="text-4xl font-extrabold text-blue-700 mb-6 flex items-center justify-center gap-2"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           🛠 Our Services
//         </motion.h1>
//         <motion.p
//           className="text-center text-gray-600 text-lg mb-12"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//         >
//           We provide a range of high-quality laundry services designed to make your life easier.
//         </motion.p>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               className={`p-6 rounded-2xl shadow-lg text-center text-white bg-gradient-to-br ${service.gradient}`}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2, duration: 0.8 }}
//               whileHover={{ scale: 1.05, rotate: 1 }}
//             >
//               <div className="text-5xl mb-4">{service.icon}</div>
//               <h3 className="text-xl font-semibold">{service.title}</h3>
//               <p className="mt-2 text-sm">{service.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
