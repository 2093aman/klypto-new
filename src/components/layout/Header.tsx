"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [coins, setCoins] = useState<any[]>([]);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    async function fetchCoins() {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=1"
        );
        const data = await res.json();
        setCoins(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchCoins();
  }, []);

  if (!mounted) return null;

  return (
    <div>
      {/* Top Contact Bar */}
      <div className="bg-[#2c2c2c] text-white text-sm flex flex-col md:flex-row justify-between px-6 py-2 gap-2 md:gap-0">
        <div className="flex gap-6 flex-wrap justify-center md:justify-start">
          <span className="flex items-center gap-2">
            <FaPhoneAlt className="text-[#8AF499]" />
            +91 62398 89759
          </span>

          <span className="flex items-center gap-2">
            <FaEnvelope className="text-[#8AF499]" />
            info@klypto.app
          </span>
        </div>
        <div className="flex gap-4 justify-center md:justify-end">
          <Link href="#"><FaInstagram className="text-white text-lg hover:text-[#8AF499]" /></Link>
          <Link href="#"><FaFacebookF className="text-white text-lg hover:text-[#8AF499]" /></Link>
          <Link href="#"><FaLinkedinIn className="text-white text-lg hover:text-[#8AF499]" /></Link>
          <Link href="#"><FaYoutube className="text-white text-lg hover:text-[#8AF499]" /></Link>
        </div>
      </div>

      {/* Main Header */}
      <header className="max-w-[1140px] mx-auto w-full px-2">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/images/nav/logo.png" alt="logo" width={150} height={45} />
          </div>

          {/* Crypto Ticker (hidden on small screens) */}
          <div className="overflow-hidden relative hidden md:block w-2/3 bg-[#2c2c2c]">
            <div className="flex animate-marquee gap-6 shadow-md bg-[#2c2c2c] px-3 py-2 rounded ">
              {[...coins, ...coins].map((coin, index) => (
                <div
                  key={index}
                  className="flex items-center px-2 py-1 bg-[#2c2c2c] text-white rounded-md mr-2"
                >
                  <img
                    src={coin.image}
                    alt={coin.symbol}
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  <span className="uppercase font-medium ml-2 text-[#1D81E1]">
                    {coin.symbol}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-4">
              <Image src="/images/nav/search.jpg" alt="search" width={30} height={28} />
              <Image src="/images/nav/download.jpg" alt="download" width={30} height={28} />
              <Image src="/images/nav/search.jpg" alt="support" width={30} height={28} />
            </div>

            {/* Hamburger Icon */}
            <button
              className="md:hidden text-white text-3xl bg-[#8AF499] p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <HiX className="text-[#2c2c2c]" /> : <HiMenu className="text-[#2c2c2c]"/>}
            </button>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex bg-[#2c2c2c] text-white px-6 py-3 items-center justify-between rounded-xl">
          <Link
            href="#"
            className="bg-[#8AF499] text-black font-semibold px-3 rounded-md"
          >
            Trade with Klypto
          </Link>
          <ul className="flex gap-6 text-white">
            <li className="cursor-pointer hover:text-[#8AF499]">Home</li>
            <li className="cursor-pointer hover:text-[#8AF499]">Referral</li>
            <li className="cursor-pointer hover:text-[#8AF499]">Plan & Pricing Page</li>
            <li className="cursor-pointer hover:text-[#8AF499]">FAQ</li>
            <li className="cursor-pointer hover:text-[#8AF499]">About Us</li>
            <li className="cursor-pointer hover:text-[#8AF499]">Contact Us</li>
            <li className="cursor-pointer hover:text-[#8AF499]">Blog</li>
          </ul>
        </nav>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav className="md:hidden bg-[#2c2c2c] text-white px-6 py-4 rounded-xl">
            <Link
              href="#"
              className="block bg-[#8AF499] text-black font-semibold px-3 py-2 rounded-md mb-3 text-center"
            >
              Trade with Klypto
            </Link>
            <ul className="flex flex-col gap-4 text-center">
              <li className="cursor-pointer hover:text-[#8AF499]">Home</li>
              <li className="cursor-pointer hover:text-[#8AF499]">Referral</li>
              <li className="cursor-pointer hover:text-[#8AF499]">Plan & Pricing Page</li>
              <li className="cursor-pointer hover:text-[#8AF499]">FAQ</li>
              <li className="cursor-pointer hover:text-[#8AF499]">About Us</li>
              <li className="cursor-pointer hover:text-[#8AF499]">Contact Us</li>
              <li className="cursor-pointer hover:text-[#8AF499]">Blog</li>
            </ul>
          </nav>
        )}

        {/* Marquee Animation */}
        <style jsx>{`
          .animate-marquee {
            display: flex;
            animation: marquee 25s linear infinite;
          }
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </header>
    </div>
  );
}
