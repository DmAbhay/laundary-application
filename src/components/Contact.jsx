export default function Contact() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 
        bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-8">

        {/* Left Side - Info */}
        <div className="space-y-6 text-white">
          <h1 className="text-4xl font-bold">📞 Contact Us</h1>
          <p className="text-gray-300 text-lg">
            We'd love to hear from you! Whether you have a question about our
            services, need help, or just want to say hello.
          </p>

          <div className="space-y-4">
            <p className="text-lg">
              <span className="font-semibold text-blue-300">📍 Address:</span> 123 Laundry Street, Clean City
            </p>
            <p className="text-lg">
              <span className="font-semibold text-blue-300">📧 Email:</span> support@laundry.com
            </p>
            <p className="text-lg">
              <span className="font-semibold text-blue-300">📱 Phone:</span> +91 98765 43210
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <form className="space-y-4">
          <div>
            <label className="block font-medium text-gray-200">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mt-1 p-3 rounded-xl bg-white/20 text-white placeholder-gray-400
              border border-white/30 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-200">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full mt-1 p-3 rounded-xl bg-white/20 text-white placeholder-gray-400
              border border-white/30 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-200">Message</label>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full mt-1 p-3 rounded-xl bg-white/20 text-white placeholder-gray-400
              border border-white/30 focus:ring-2 focus:ring-blue-400 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white py-3 rounded-xl font-semibold shadow-lg transition"
          >
            Send Message
          </button>
        </form>

        

      </div>
    </div>
  );
}









// export default function Contact() {
//   return (
//     <div className="w-full flex items-center justify-center">
//       <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 
//         bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8">
        
//         {/* Contact Info */}
//         <div className="space-y-6 text-white">
//           <h1 className="text-4xl font-bold">📞 Contact Us</h1>
//           <p className="text-gray-200 text-lg">
//             We’d love to hear from you! Whether you have a question about our
//             services, need assistance, or just want to say hello.
//           </p>

//           <div className="space-y-4">
//             <p className="text-lg">
//               <span className="font-semibold text-blue-300">📍 Address:</span> 123 Laundry Street, City
//             </p>
//             <p className="text-lg">
//               <span className="font-semibold text-blue-300">📧 Email:</span> support@laundry.com
//             </p>
//             <p className="text-lg">
//               <span className="font-semibold text-blue-300">📱 Phone:</span> +91 98765 43210
//             </p>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <form className="space-y-4">
//           <div>
//             <label className="block font-medium text-gray-200">Name</label>
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full mt-1 p-3 rounded-xl bg-white/20 text-white placeholder-gray-300
//               border border-white/30 focus:ring-2 focus:ring-blue-400 outline-none"
//             />
//           </div>

//           <div>
//             <label className="block font-medium text-gray-200">Email</label>
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full mt-1 p-3 rounded-xl bg-white/20 text-white placeholder-gray-300
//               border border-white/30 focus:ring-2 focus:ring-blue-400 outline-none"
//             />
//           </div>

//           <div>
//             <label className="block font-medium text-gray-200">Message</label>
//             <textarea
//               rows="4"
//               placeholder="Your Message"
//               className="w-full mt-1 p-3 rounded-xl bg-white/20 text-white placeholder-gray-300
//               border border-white/30 focus:ring-2 focus:ring-blue-400 outline-none"
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600/80 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
