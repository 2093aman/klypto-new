// "use client";

// import Link from "next/link";
// import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
// import { FaPhoneAlt, FaEnvelope } from "react-icons/fa6"; // ✅ Correct import
// import { FiSearch, FiDownload } from "react-icons/fi";
// import { HiOutlineHeadphones } from "react-icons/hi";

// export default function Header() {
//   return (
//     <header className="w-full border-b">
//       {/* Top Bar */}
//       <div className="bg-black text-white text-sm flex justify-between items-center px-6 py-2">
//         <div className="flex items-center gap-6">
//           <span className="flex items-center gap-2">
//             <FaPhoneAlt /> +91 62398 89759
//           </span>
//           <span className="flex items-center gap-2">
//             <FaEnvelope /> info@klypto.app
//           </span>
//         </div>
//         <div className="flex items-center gap-4 text-lg">
//           <Link href="#"><FaInstagram /></Link>
//           <Link href="#"><FaFacebook /></Link>
//           <Link href="#"><FaLinkedin /></Link>
//           <Link href="#"><FaYoutube /></Link>
//         </div>
//       </div>

//       {/* Main Nav */}
//       <div className="flex items-center justify-between px-6 py-4">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <img src="/logo.png" alt="Klypto Logo" className="h-10" />
//           <span className="text-2xl font-bold">Klypto</span>
//         </div>

//         {/* Crypto Menu */}
//         <div className="hidden md:flex gap-6 text-blue-600 font-medium">
//           <Link href="#">BTC</Link>
//           <Link href="#">XRP</Link>
//           <Link href="#">ETH</Link>
//           <Link href="#">TRX</Link>
//           <Link href="#">EOS</Link>
//           <Link href="#">ZIL</Link>
//         </div>

//         {/* CTA */}
//         <button className="bg-green-500 text-black font-semibold px-4 py-2 rounded">
//           Trade with Klypto
//         </button>
//       </div>

//       {/* Lower Nav */}
//       <div className="flex items-center justify-between bg-black text-white px-6 py-3">
//         {/* Links */}
//         <nav className="flex gap-6">
//           <div className="group relative">
//             <button className="hover:text-green-400">Products ▾</button>
//             {/* Dropdown example */}
//             <div className="absolute hidden group-hover:block bg-white text-black mt-2 shadow-md rounded">
//               <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Product 1</Link>
//               <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Product 2</Link>
//             </div>
//           </div>
//           <button className="hover:text-green-400">Trading ▾</button>
//           <button className="hover:text-green-400">Programs ▾</button>
//           <button className="hover:text-green-400">Resources ▾</button>
//           <button className="hover:text-green-400">Company ▾</button>
//           <button className="hover:text-green-400">Legal ▾</button>
//         </nav>

//         {/* Right Icons */}
//         <div className="flex gap-4 text-xl">
//           <FiSearch />
//           <FiDownload />
//           <HiOutlineHeadphones />
//         </div>
//       </div>
//     </header>
//   );
// }
