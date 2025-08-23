"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import TestimonialsSwiper from "@/components/layout/testimonial";

export default function HomePage() {
  // Ref for animated image
  const animatedImgRef = useRef<HTMLDivElement>(null);

  // Mouse move handler for hero section
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const section = e.currentTarget;
    const rect = section.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Move image opposite to cursor, max 40px
    if (animatedImgRef.current) {
      animatedImgRef.current.style.transform = `translate(${-x / 20}px, ${-y / 20}px)`;
    }
  }

  function handleMouseLeave() {
    if (animatedImgRef.current) {
      animatedImgRef.current.style.transform = "translate(0,0)";
    }
  }

  // Counter hook for animation
  function useCounter(target: number, duration = 1200) {
    const [count, setCount] = React.useState(0);
    useEffect(() => {
      let start = 0;
      const end = target;
      if (start === end) return;
      let incrementTime = Math.abs(Math.floor(duration / end));
      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
      return () => clearInterval(timer);
    }, [target, duration]);
    return count;
  }

  function StatsCounter() {
    // Animate numbers (adjust targets as needed)
    const aiInsights = useCounter(500, 1200);
    const uptime = useCounter(99, 1200);
    const coins = useCounter(150, 1200);
    const volume = useCounter(5, 1200);

    return (
      <section className="w-full bg-[#2C2C2C] py-10">
        <div className="max-w-[1140px] mx-auto w-full px-2">
          <div className="flex flex-col sm:flex-row justify-around items-center gap-8 sm:gap-0 w-full">
            {/* Automated AI Insights */}
            <div className="text-center min-w-[120px]">
              <div className="font-poppins font-extrabold text-[30px] sm:text-[45px] text-white mb-2">
                {aiInsights}+
              </div>
              <div className="font-poppins font-bold text-[14px] sm:text-[20px] text-white">
                Automated AI Insights
              </div>
            </div>
            {/* Platform Uptime */}
            <div className="text-center min-w-[120px]">
              <div className="font-poppins font-extrabold text-[30px] sm:text-[45px] text-white mb-2">
                {uptime}%
              </div>
              <div className="font-poppins font-bold text-[14px] sm:text-[20px] text-white">
                Platform Uptime
              </div>
            </div>
            {/* Listed Coins & Tokens */}
            <div className="text-center min-w-[120px]">
              <div className="font-poppins font-extrabold text-[30px] sm:text-[45px] text-white mb-2">
                {coins}+
              </div>
              <div className="font-poppins font-bold text-[14px] sm:text-[20px] text-white">
                Listed Coins &amp; Tokens
              </div>
            </div>
            {/* Daily Trading Volume */}
            <div className="text-center min-w-[120px]">
              <div className="font-poppins font-extrabold text-[30px] sm:text-[45px] text-white mb-2">
                ${volume} M
              </div>
              <div className="font-poppins font-bold text-[14px] sm:text-[20px] text-white">
                Daily Trading Volume
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            to { opacity: 1; transform: none; }
            from { opacity: 0; transform: translateY(40px);}
          }
        `}
      </style>
      {/* Hero Section */}
      <section
        className="flex flex-col md:flex-row items-center justify-between min-h-screen px-4 md:px-[5vw] py-10"
        style={{
          background: "linear-gradient(184deg, #FFFFFF 26%, #e3fde7 100%)",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-[1140px] mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Side */}
          <div className="max-w-[600px] w-full opacity-100 animate-fadeIn mb-10 md:mb-0 flex flex-col items-center md:items-start text-center md:text-left">
            {/* <div className="inline-block bg-[#7be495] text-[#222] font-[700] text-[16px] md:text-[19px] rounded-xl px-4 md:px-6 py-2 mb-8 mt-2">
              Decode The Market’s Secrets
            </div> */}
            <h1 className="font-poppins font-[700] text-[32px] md:text-[66px] leading-[1.1] text-[#111] m-0">
              Simplify Crypto Trading With  <span className="text-[#2a82df]">Klypto</span>
              <br />

            </h1>
            <p className="text-[15px] md:text-[16px] font-arial my-8 mb-10 text-[#222]">
              Automate your crypto trades with AI-powered strategies that save time, reduce risk, and work while you sleep.            </p>
            <button className="bg-[#7be495] text-[#2c2c2c] font-[700] text-[17px] md:text-[19px] border-none rounded-lg px-6 md:px-9 py-4 cursor-pointer shadow-[0_4px_0_#222] flex items-center gap-2 hover:scale-[1.08] transition-transform mx-auto md:mx-0">
              Start Trading For Free
              <span className="text-[22px] md:text-[26px]">
                <Image
                  src="/images/home/bit.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              </span>
            </button>
          </div>
          {/* Right Side */}
          <div className="relative flex justify-center items-center w-full md:w-[400px] min-h-[320px]">
            {/* Top Left Image (desktop only) */}
            <div className="hidden md:block absolute top-0 left-0 z-10">
              <Image
                src="/images/home/left-top.png"
                alt="Top Left"
                width={120}
                height={120}
                className="w-20 h-20"
                priority
              />
            </div>
            {/* Top Right Image (desktop only) */}
            <div className="hidden md:block absolute top-0 right-[-16%] z-10">
              <Image
                src="/images/home/top-right.png"
                alt="Top Right"
                width={180}
                height={80}
                className="w-36 h-16"
                priority
              />
            </div>
            {/* Bottom Left Image (desktop only) */}
            <div className="hidden md:block absolute bottom-0 left-[-14%] z-10">
              <Image
                src="/images/home/bottom-left.png"
                alt="Bottom Left"
                width={180}
                height={120}
                className="w-36 h-24"
                priority
              />
            </div>
            {/* Animated Bottom Right Image (desktop only) */}
            <div
              ref={animatedImgRef}
              className="hidden md:block absolute bottom-0 right-[-16%] z-10 transition-transform duration-300"
            >
              <Image
                src="/images/home/bottom-right.png"
                alt="Bottom Right"
                width={180}
                height={120}
                className="w-36 h-24"
                priority
              />
            </div>
            {/* Center Mobile Image */}
            <div className="relative z-20 flex justify-center items-center w-full">
              <Image
                src="/images/home/mobile.png"
                alt="Mobile App"
                width={220}
                height={240}
                className="w-40 sm:w-52 md:w-56 lg:w-52 h-auto drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <StatsCounter />


      {/* Add this section BEFORE "A New Era Of Intelligent Trading" section */}
      <section className="w-full  py-16"
        style={{
          background: "linear-gradient(184deg, #FFFFFF 26%, #e3fde7 100%)",
        }}>
        <div className="max-w-[1140px] mx-auto w-full flex flex-col md:flex-row items-center gap-10 px-4">
          {/* Left Side: Image */}
          <div className="flex-shrink-0 flex justify-center w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src="/images/home/trading.jpg"
              alt="Klypto AI Trading"
              className="rounded-2xl w-[320px] md:w-[400px] lg:w-[440px] xl:w-[480px] shadow-lg object-cover"
            />
          </div>
          {/* Right Side: Content */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">

            <h2 className="font-poppins font-bold text-[32px] md:text-[48px] text-[#222] leading-tight mb-4">
              India’s Leading AI Crypto <span className="text-[#2a82df]">Trading Platform</span>
            </h2>
            <p className="font-arial text-[15px] md:text-[16px] text-[#222] mb-8">
              Klypto is more than just a crypto trading platform; it’s your AI-driven edge in the market, built for investors. It aims to become India’s best cryptocurrency trading software, offering smart crypto trading that’s effortless, intelligent, and secure.

              We believe every trader deserves smarter tools, not more stress. It helps you trade confidently with AI strategies that simplify every move.
            </p>
            <button className="bg-[#7be495] text-[#2c2c2c] font-[700] text-[17px] md:text-[19px] border-none rounded-lg px-6 md:px-9 py-4 cursor-pointer shadow-[0_4px_0_#222] flex items-center gap-2 hover:scale-[1.08] transition-transform mx-auto md:mx-0">
              Inside Klypto
            </button>
          </div>
        </div>
      </section>
      {/* Science Section */}
      <section className="px-5 pt-20 bg-white">
        <div className="max-w-[1140px] mx-auto w-full">
          <div className="flex flex-col items-center mb-10">
            <span className="bg-[#8AF499] text-[#1b5e20] font-semibold text-base md:text-xl px-6 py-2 rounded-xl mb-4">
              A New Era Of Intelligent Trading
            </span>
            <h2 className="font-poppins font-bold text-[32px] md:text-[48px] text-center text-[#222] leading-tight mb-2">
              Smart Crypto Trading Strategies For<span className="text-[#2d7ff9]"> Smarter Profits </span>
            </h2>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#8AF499] rounded-3xl flex flex-col items-center p-8 md:p-10 shadow-lg">
              <div className="bg-white rounded-full p-4 mb-6">
                <img src="/images/home/renforcement.gif" alt="Reinforcement Learning" className="w-16 h-16" />
              </div>
              <h3 className="font-poppins font-bold text-[22px] md:text-[26px] mb-2 text-center text-[#1A1A1A]">
                Reinforcement Learning
              </h3>
              <p className="font-arial text-[15px] md:text-[16px] text-center mb-6 text-[#222]">
                Our bots use Reinforcement Learning to adapt and improve with every trade, powering <b>smart crypto trading</b> strategies that learn from real-time market behavior.
              </p>
              {/* <button className="bg-[#fff] text-[#2c2c2c] font-poppins  text-[17px] md:text-[19px] rounded-xl px-6 py-3 mt-2 shadow hover:scale-[1.08] transition-transform">
                "The more it trades, the smarter it becomes."
              </button> */}
            </div>
            {/* Card 2 */}
            <div className="bg-[#8AF499] rounded-3xl flex flex-col items-center p-8 md:p-10 shadow-lg">
              <div className="bg-white rounded-full p-4 mb-6">
                <img src="/images/home/Wavelet.gif" alt="Wavelet Analysis" className="w-16 h-16" />
              </div>
              <h3 className="font-poppins font-bold text-[22px] md:text-[26px] mb-2 text-center text-[#1A1A1A]">
                Wavelet Analysis
              </h3>
              <p className="font-arial text-[15px] md:text-[16px] text-center mb-6 text-[#222]">
                By spotting hidden spikes and patterns, our AI builds <b>crypto trading strategies </b>  that outperform traditional models across short and long time frames.
              </p>
              {/* <button className="bg-[#fff] text-[#2c2c2c] font-poppins text-[17px] md:text-[19px] rounded-xl px-6 py-3 mt-2 shadow hover:scale-[1.08] transition-transform">
                "Uncovering market signals hidden beneath the noise."
              </button> */}
            </div>
            {/* Card 3 */}
            <div className="bg-[#8AF499] rounded-3xl flex flex-col items-center p-8 md:p-10 shadow-lg">
              <div className="bg-white rounded-full p-4 mb-6">
                <img src="/images/home/chaos.gif" alt="Chaos Fractal Theory" className="w-16 h-16" />
              </div>
              <h3 className="font-poppins font-bold text-[22px] md:text-[26px] mb-2 text-center text-[#1A1A1A]">
                Chaos Fractal Theory
              </h3>
              <p className="font-arial text-[15px] md:text-[16px] text-center mb-6 text-[#222]">
                We apply Chaos Fractal Theory to predict market shifts, driving <b>AI crypto trading strategies </b> that react before trends go mainstream.
              </p>
              {/* <button className="bg-[#fff] text-[#2c2c2c] font-poppins text-[17px] md:text-[19px] rounded-xl px-6 py-3 mt-2 shadow hover:scale-[1.08] transition-transform">
                "Predicting order within apparent randomness."
              </button> */}
            </div>
          </div>
        </div>
      </section>
      {/* Action Section */}
      <section className="flex flex-col items-center w-full mt-10 px-5">
        <div className="max-w-[1140px] mx-auto w-full flex flex-col items-center">
          {/* Top Button */}
          <button className="bg-[#7be495] text-[#2c2c2c] font-[700] text-[17px] md:text-[19px] border-none rounded-lg px-6 md:px-9 py-4 cursor-pointer shadow-[0_4px_0_#222] flex items-center gap-2 hover:scale-[1.08] transition-transform mx-auto md:mx-0">
            See Klypto AI Bot in Action <span className="ml-2">
              <Image
                src="/images/home/btrm.png"
                alt="boatImg"
                width={30}
                height={30}
                priority


              /></span>
          </button>

          {/* Main Card with Overlapping Image */}
          <div className="relative w-full flex justify-center z-10 pt-20 relative md:mt-20">
            <div className="relative w-full max-w-[1140px] bg-[#1A1A1A] rounded-3xl p-6 md:pt-12 shadow-lg flex flex-col md:flex-row items-center pb-10">
              {/* Text Content */}
              <div className="flex-1 text-white md:pr-10 z-10 flex flex-col justify-center">
                <h2 className="font-poppins text-center font-bold text-[30px] md:text-[40] mb-6 leading-tight md:text-left ">
                  Built On Quantitative Trading Intelligence
                </h2>
                <p className="font-arial text-[16px] leading-relaxed text-center md:text-left">
                  Klypto is powered by advanced quantitative trading models that use data, algorithms, and statistical analysis to make smart, emotion-free trading decisions. Our AI-driven systems scan the markets 24/7, execute trades based on logic—not luck—and aim for consistent returns over time.
                </p>
              </div>
              {/* Overlapping Image */}
              <div className="flex-shrink-0 flex justify-center items-center mt-8 md:mt-0 md:ml-8">
                <img
                  src="/images/home/mob-image.png"
                  alt="Klypto App"
                  className="w-[150px] md:w-[180px] max-w-none drop-shadow-2xl lg:mt-[-154px] builtonImage"
                />
              </div>
            </div>
          </div>

          {/* Why Quant-Based Trading Matters */}
          <div className="-mt-8 w-full flex justify-center z-0">
            <div className="w-full max-w-[1140px] bg-[#79E989] rounded-b-3xl flex flex-col items-center pb-10 pt-12 shadow-lg">
              <h3 className="font-poppins font-bold text-[30px] md:text-[40] text-[#1A1A1A] mb-8 text-center">
                Why Quant-Based Trading Matters
              </h3>
              <div className="flex flex-wrap justify-center gap-8 w-full px-4">
                {[
                  "Emotion-Free Execution",
                  "Data-Driven Decisions",
                  "24/7 Market Monitoring",
                  "Back-Tested Strategies"
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-white rounded-2xl px-8 py-6 text-[20px] font-poppins font-semibold text-[#1A1A1A] shadow min-w-[240px] text-center border-b-4 border-[#1A1A1A] mb-4"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Tagline */}
          {/* <div className="mt-8">
            <span className="bg-[#7be495] text-[#1b5e20] font-bold text-xl px-8 py-2 rounded-xl shadow">
              Built For Traders. Backed By Innovation.
            </span>
          </div> */}
        </div>
      </section>
      {/* Features Section */}
      <section className="max-w-[1140px] mx-auto w-full px-4 pt-16 flex flex-col md:flex-row gap-10 items-center">
        <h2 className="font-poppins font-bold text-[32px] md:text-[48px] text-center text-[#222] leading-tight">
          Why Smart Traders Choose Klypto<span className="text-[#2d7ff9]"> Over Guesswork</span>
        </h2>
      </section>

      <section className="max-w-[1140px] mx-auto w-full px-4 py-16 flex flex-col md:flex-row gap-10 items-center">

        {/* Left: App Promo Image */}
        <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
          <img
            src="/images/home/Artboard-1-29.jpg"
            alt="India's Trusted Crypto Platform"
            className="rounded-2xl w-[180px] md:w-[180px] lg:w-[240px] xl:w-[250px] shadow-lg"
            style={{ objectFit: "cover" }}
          />
        </div>
        {/* Right: Features Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 l  g:grid-cols-6 gap-6 w-full">

          {/* Feature 2 */}
          <div className="bg-[#f6fff8] rounded-xl p-6 flex flex-col items-center shadow border border-[#00000080]">
            <img src="/images/home/economy.gif" alt="" className="w-12 h-12 mb-2" />
            <h4 className="font-bold text-2xl text-center mb-1">Emotion-Free Trading</h4>
            <p className="text-center text-[#222] text-base">
              AI removes emotional bias, with no panic, no guesswork, just logic and hands-free execution.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="bg-[#f6fff8] rounded-xl p-6 flex flex-col items-center shadow border">
            <img src="/images/home/analysis.gif" alt="" className="w-12 h-12 mb-2" />
            <h4 className="font-bold text-2xl text-center mb-1">Real-Time Analysis                         </h4>
            <p className="text-center text-[#222] text-base">
              Smart systems read real-time trends to cut losses and avoid hype-driven choices.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="bg-[#f6fff8] rounded-xl p-6 flex flex-col items-center shadow border">
            <img src="/images/home/bell.gif" alt="" className="w-12 h-12 mb-2" />
            <h4 className="font-bold text-2xl text-center mb-1">24/7 Monitoring:</h4>
            <p className="text-center text-[#222] text-base">
              AI bots run daily auto-trades so you profit without checking your phone.
            </p>
          </div>
          {/* Feature 5 */}
          <div className="bg-[#f6fff8] rounded-xl p-6 flex flex-col items-center shadow border">
            <img src="/images/home/databas.gif" alt="" className="w-12 h-12 mb-2" />
            <h4 className="font-bold text-2xl text-center mb-1">Data-Driven Strategies</h4>
            <p className="text-center text-[#222] text-base">
              Smart crypto trading uses tested, profit-focused strategies with built-in risk management based on years of data.
            </p>
          </div>
          {/* Feature 6 */}

        </div>
      </section>

      {/* Start Trading With Klypto In Minutes Section */}
      <section className="max-w-[1140px] mx-auto w-full px-4 py-20">

        <h2 className="font-poppins font-bold text-[32px] md:text-[48px] text-center text-[#222] leading-tight pb-10">
          Start Trading With Klypto In<span className="text-[#2d7ff9]"> Minutes</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Card 1 */}
          <div className="bg-[#8AF499] rounded-3xl flex flex-col items-center p-8 shadow-lg">
            {/* Icon */}
            <span className="mb-4 bg-white p-5 rounded rounded-full">
              {/* Wallet Icon */}
              <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
                <rect x="3" y="7" width="18" height="10" rx="2" stroke="#111" strokeWidth="2" />
                <path d="M21 9V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" stroke="#111" strokeWidth="2" />
                <circle cx="17" cy="12" r="1.5" fill="#111" />
              </svg>
            </span>
            <h3 className="font-poppins font-bold text-[22px] md:text-[26px] mb-2 text-center text-[#1A1A1A]">
              Fund Your Wallet
            </h3>
            <p className="font-arial text-[15px] md:text-[16px] text-center mb-6 text-[#222]">
              Klypto supports secure funding via Binance and Delta Exchange.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-[#8AF499] rounded-3xl flex flex-col items-center p-8 shadow-lg">
            {/* Icon */}
            <span className="mb-4 bg-white p-5 rounded rounded-full">
              {/* Strategy Icon */}
              <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" stroke="#111" strokeWidth="2" />
                <path d="M12 7v5l3 3" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h3 className="font-poppins font-bold text-[22px] md:text-[26px] mb-2 text-center text-[#1A1A1A]">
              Select a Strategy
            </h3>
            <p className="font-arial text-[15px] md:text-[16px] text-center mb-6 text-[#222]">
              Select AI-powered strategies built around your goals and risk preferences.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-[#8AF499] rounded-3xl flex flex-col items-center p-8 shadow-lg">
            {/* Icon */}
            <span className="mb-4 bg-white p-5 rounded rounded-full">
              {/* Auto-Pilot Icon */}
              <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
                <rect x="6" y="6" width="12" height="12" rx="6" stroke="#111" strokeWidth="2" />
                <path d="M12 9v3l2 2" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h3 className="font-poppins font-bold text-[22px] md:text-[26px] mb-2 text-center text-[#1A1A1A]">
              Go Auto-Pilot
            </h3>
            <p className="font-arial text-[15px] md:text-[16px] text-center mb-6 text-[#222]">
              Klypto trades 24/7 with smart automation and zero emotional bias.
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-[#8AF499] rounded-3xl flex flex-col items-center p-8 shadow-lg">
            {/* Icon */}
            <span className="mb-4 bg-white p-5 rounded rounded-full">
              {/* Withdraw Icon */}
              <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
                <rect x="4" y="7" width="16" height="10" rx="2" stroke="#111" strokeWidth="2" />
                <path d="M12 11v4m0 0-2-2m2 2 2-2" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h3 className="font-poppins font-bold text-[22px] md:text-[26px] mb-2 text-center text-[#1A1A1A]">
              Instant Withdrawals Anytime
            </h3>
            <p className="font-arial text-[15px] md:text-[16px] text-center mb-6 text-[#222]">
              Withdraw anytime and track profits easily with zero delays or restrictions.
            </p>
          </div>
        </div>
        {/* Button and info below cards */}
        <div className="flex flex-col items-center mt-2">
          <button className="bg-[#8AF499] text-[#2c2c2c] font-poppins font-bold text-[19px] rounded-xl px-8 py-4 shadow hover:scale-[1.08] transition-transform mb-2">
            Start in Under 5 Minutes
          </button>
          <span className="block text-xs md:text-sm text-[#222] text-center">
            Create your account, fund it, and let Klypto’s AI handle the rest.
          </span>
        </div>
      </section>
      {/* New Section - AI Trading Performance */}
      <section className="w-full flex justify-center py">
        <div className="max-w-[1140px] mx-auto w-full">
          <div className="w-full max-w-[1140px] bg-[#222] rounded-3xl px-4 md:px-12 py-10 flex flex-col items-center">
            <span className="bg-[#7be495] text-[#1b5e20] font-semibold text-lg md:text-xl px-6 py-2 rounded-xl mb-6 mt-2">
              Automated AI Trading For Regular Passive Income
            </span>
            <h2 className="font-poppins font-bold text-[32px] md:text-[48px] text-center text-[#fff] leading-tight pb-1">
              <span className="text-[#2d7ff9]">Trade</span> Smarter,{" "}
              <span className="text-[#2d7ff9]">Earn</span> Steadier
            </h2>


            <div className="text-2xl md:text-3xl text-center text-white mb-8 font-medium">
              Let Our AI Bots Work While You Relax
            </div>
            <img
              src="/images/home/Image-12.png"
              alt="AI Trading Performance"
              className="rounded-xl shadow-lg w-full max-w-2xl"
              style={{ background: "#fff" }}
            />
          </div>
        </div>
      </section>
      {/* New Section - AI Trading Performance */}
      <section className="w-full py-14 flex flex-col items-center bg-gradient-to-b from-[#f6fff8] to-white">
        <div className="max-w-[1140px] mx-auto w-full flex flex-col items-center">
          {/* Tagline */}
          <span className="bg-[#8af499] text-[#1b5e20] font-semibold text-lg md:text-xl px-6 py-2 rounded-xl mb-4">
            Your Success. Our Strategy.
          </span>
          {/* Heading */}

          <h2 className="font-poppins font-bold text-[32px] md:text-[48px] text-center text-[#fff] leading-tight pb-10">
            <span className="text-[#2d7ff9]">AI Vs Human</span> :{" "}
            <span className="text-[#222]">Let The Smarter Trader Win</span>
          </h2>
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl">
            {/* Card 1 */}
            <div className="bg-[#8af499] rounded-2xl px-8 py-6 flex flex-col items-center min-w-[240px] max-w-xs shadow border hover:scale-[1.08] border-[#1010103b]">
              <img src="/images/home/trading.gif" alt="" className="w-14 h-14 mb-2" />
              <div className="text-lg font-semibold text-center mt-2">
                AI-Powered Trading
                <br />
                Intelligence
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-[#8af499] rounded-2xl px-8 py-6 flex flex-col items-center min-w-[240px] max-w-xs shadow border hover:scale-[1.08] border-[#1010103b]">
              <img src="/images/home/revenue.gif" alt="" className="w-14 h-14 mb-2" />
              <div className="text-lg font-semibold text-center mt-2">
                Consistent, Automated
                <br />
                Strategies
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-[#8af499] rounded-2xl px-8 py-6 flex flex-col items-center min-w-[240px] max-w-xs shadow border hover:scale-[1.08] border-[#1010103b]">
              <img src="/images/home/time-management.gif" alt="" className="w-14 h-14 mb-2" />
              <div className="text-lg font-semibold text-center mt-2">
                Real-Time Market
                <br />
                Monitoring
              </div>
            </div>
            {/* Card 4 */}
            <div className="bg-[#8af499] rounded-2xl px-8 py-6 flex flex-col items-center min-w-[240px] max-w-xs shadow border hover:scale-[1.08] border-[#1010103b]">
              <img src="/images/home/safe.gif" alt="" className="w-14 h-14 mb-2" />
              <div className="text-lg font-semibold text-center mt-2">
                Multi-Layered Security
                <br />
                Protocols
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Currency Section - New */}
      <section className="w-full flex justify-center py-16 bg-transparent">
        <div className="max-w-[1140px] mx-auto w-full">
          <div className="bg-[#7be495] rounded-2xl px-4 md:px-12 py-10 flex flex-col items-center w-full max-w-[1140px] shadow-lg">
            {/* Top Tag */}
            <span className="bg-[#222] text-white font-semibold text-base px-6 py-2 rounded-lg mb-4">
              INR Or USDT – We’ve Got You Covered
            </span>
            {/* Heading */}
            <h2 className="font-poppins font-bold text-[32px] md:text-[48px] text-center text-[#222222] leading-tight pb-10">
              Start Trading With Your Preferred <span className="text-[#2d7ff9]">Currency</span>
            </h2>
            {/* Cards */}
            <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
              {/* INR Card */}
              <div className="flex-1 bg-[#222] rounded-xl overflow-hidden flex flex-col min-w-[280px] max-w-md">
                <div className="text-lg md:text-xl font-bold text-white text-center py-3">
                  Use <span className="text-[#7be495]">Delta Exchange</span> To Deposit In INR
                </div>
                <div className="bg-white flex flex-col items-center justify-center py-6 gap-2">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-bold text-[#222]">
                      <img
                        src="/images/home/ruppee.png"
                        alt="rupee"
                        height={50}
                        width={50}

                      />
                    </span>
                    <span className="text-3xl text-[#222]">→</span>
                    <img src="/images/home/delta.png" alt="Delta Exchange" className="h-18" />

                  </div>
                </div>
                <div className="bg-[#222] flex items-center justify-center gap-6 py-2 text-white text-base rounded-b-xl">
                  <span className="flex items-center gap-1">
                    <span className="text-[#7be495] text-lg">₹</span> Fast INR deposits
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-[#7be495] text-lg">💳</span> Instant transfers to Klypto
                  </span>
                </div>
              </div>
              {/* USDT Card */}
              <div className="flex-1 bg-[#222] rounded-xl overflow-hidden flex flex-col min-w-[280px] max-w-md">
                <div className="text-lg md:text-xl font-bold text-white text-center py-3">
                  Use <span className="text-[#7be495]">Binance</span> To Deposit In USDT
                </div>
                <div className="bg-white flex flex-col items-center justify-center py-6 gap-2">
                  <div className="flex items-center gap-4">
                    <img src="/images/home/tether.webp" alt="USDT" className="h-15" />
                    <span className="text-3xl text-[#222]">→</span>
                    <img src="/images/home/bannance.png" alt="Binance" className="h-18 w-45" />

                  </div>
                </div>
                <div className="bg-[#222] flex items-center justify-center gap-6 py-2 text-white text-base rounded-b-xl">
                  <span className="flex items-center gap-1">
                    <span className="text-[#7be495] text-lg">🌐</span> Global liquidity
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-[#7be495] text-lg">💸</span> Low fees
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trade On The Go With The Klypto App Section */}
      <section
        className="w-full py-20"
     
      >
        <div className="max-w-[1140px] mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-10 px-4">
          {/* Left Side: Robot Hand with Phone */}
          <div className="flex-shrink-0 flex justify-center w-full lg:w-1/2 mb-10 lg:mb-0">
            <img
              src="/images/home/4-3.png" // <-- Replace with your image path
              alt="Klypto App Robot Hand"
              className="w-[400px] md:w-[520px] lg:w-[600px] xl:w-[650px] object-contain"
              style={{ maxHeight: "520px" }}
            />
          </div>
          {/* Right Side: Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="font-poppins font-bold text-[32px] md:text-[48px] text-[#222] leading-tight mb-4">
              Trade On The Go With The <span className="text-[#2a82df]">Klypto App</span>
            </h2>
            <p className="font-arial text-[15px] md:text-[16px] text-[#222] mb-8 max-w-xl">
              Analyze and monitor your digital asset portfolio wherever you are—fast, secure, and in real time. Download the app now and never miss a market move.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Download Buttons and QR */}
              <div className="flex flex-col gap-6 items-center">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/images/home/g-pay.png"
                    alt="Google Play"
                    className="w-[220px] h-[60px] object-contain"
                  />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/images/home/ii.png"
                    alt="App Store"
                    className="w-[220px] h-[60px] object-contain"
                  />
                </a>
              </div>
              {/* Arrow and QR */}
              <div className="flex flex-col items-center gap-4">
                
                <img
                  src="/images/home/Klypto.png"
                  alt="Klypto App QR"
                  className="w-[180px] h-[180px] object-contain border-4 border-white rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
  className="w-full py-20"
  // style={{
  //   background: "linear-gradient(184deg, #eaffec 26%, #e3fde7 100%)",
  // }}
>
  <div className="max-w-[1140px] mx-auto w-full flex justify-center items-center">
    <div className="w-full bg-[#222] rounded-3xl flex flex-col lg:flex-row items-center px-8 pt-12 gap-10">
      {/* Left Side: AI Bot Image */}
      <div className="flex-shrink-0 flex justify-center w-full lg:w-1/2 mb-10 lg:mb-0">
        <img
          src="/images/home/robot-img.png" // <-- Replace with your image path
          alt="Klypto AI Bot"
          className="rounded-3xl w-[340px] md:w-[350px] lg:w-[380px] xl:w-[420px] object-cover"
         
        />
      </div>
      {/* Right Side: Content */}
      <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
        <h2 className="font-poppins font-[700] text-[32px] md:text-[55px] text-white leading-tight mb-2">
          Klypto AI Bot
        </h2>
        <div className="font-poppins text-[22px] md:text-[25px] text-white mb-2">
          Your Gateway To Automated Earnings
        </div>
        <div className="font-poppins  text-[32px] md:text-[34px] text-[#7be495] mb-2">
          Earn Daily. Trade Smart.
        </div>
        <p className="font-arial text-[16px] text-white mb-6 max-w-xl">
          Let AI handle the rest — smart analysis, auto-trades, and built-in risk management, all without your intervention.
        </p>
        <div className="flex flex-wrap gap-4 mb-10 justify-center lg:justify-start">
          <span className="bg-[#7be495] text-[#222] font-poppins font-[700] text-[18px] px-4 py-2 rounded-full">
            No Emotions
          </span>
             <span className="bg-[#7be495] text-[#222] font-poppins font-[700] text-[18px] px-4 py-2 rounded-full">
            No Guesswork
          </span>
           <span className="bg-[#7be495] text-[#222] font-poppins font-[700] text-[18px] px-4 py-2 rounded-full">
            Just Profits
          </span>
        </div>
        <button className="bg-white text-[#222] font-poppins font-bold text-[18px] px-8 py-4 rounded-lg shadow hover:scale-[1.08] transition-transform flex items-center gap-2 mx-auto lg:mx-0">
          Activate AI Bot Now
          <span className="text-[26px]">
                <Image
                src="/images/home/btrm.png"
                alt="boatImg"
                width={30}
                height={30}
                priority


              />
          </span>
        </button>
      </div>
    </div>
  </div>
</section>

<section
  className="w-full pb-16"

>
  <div className="max-w-[1140px] mx-auto w-full px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Card 1 */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center justify-center p-0">
        <img
          src="/images/home/remove-it-2.jpg"
          alt="Crypto Was Complicated Until Klypto"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Card 2 */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center justify-center p-0">
        <img
          src="/images/home/remove-it.jpg"
          alt="Klypto Automation"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Card 3 */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center justify-center p-0">
        <img
          src="/images/home/remove-it-3.jpg"
          alt="From Volatility To Victory"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Card 4 */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center justify-center p-0">
        <img
          src="/images/home/reomve-it.jpg"
          alt="Crypto Security With Automation"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</section>
<TestimonialsSwiper/>

      <footer className="bg-[#222] pt-8">
        <div className="max-w-[1140px] mx-auto w-full">
          {/* Top Help Bar */}
          <div className="max-w-6xl mx-auto w-full rounded-2xl bg-gradient-to-r from-[#7be495] to-[#2d7ff9] flex flex-col md:flex-row items-center justify-between px-6 py-6 mb-8">
            <div className="text-3xl font-bold text-white mb-4 md:mb-0">Need Help?</div>
            <div className="flex flex-wrap items-center gap-6 text-lg font-semibold text-white">
              <span className="flex items-center gap-2">
                <span className="text-2xl">📞</span> +91 6239 889759
              </span>
              <span className="flex items-center gap-2">
                <span className="text-2xl">💬</span> WhatsApp
              </span>
              <span className="flex items-center gap-2">
                <span className="text-2xl">✉️</span> info@klypto.app
              </span>
              <button className="bg-[#2d7ff9] text-white font-bold px-6 py-2 rounded-lg ml-2 shadow hover:scale-105 transition">
                <span className="text-xl">🎧</span> Contact
              </button>
            </div>
          </div>
          {/* Main Footer Links */}
          <div className="max-w-6xl mx-auto w-full grid grid-cols-2 md:grid-cols-6 gap-8 px-6 pb-12">
            {/* About Us */}
            <div>
              <div className="text-[#7be495] text-xl font-bold mb-2">About Us</div>
              <ul className="space-y-1 font-semibold text-white">
                <li>About us</li>
                <li>Learn &amp; Earn</li>
                <li>Career</li>
              </ul>
            </div>
            {/* Derivatives */}
            <div>
              <div className="text-[#7be495] text-xl font-bold mb-2">Derivatives</div>
              <ul className="space-y-1 font-semibold text-white">
                <li>Leveraged Tokens</li>
                <li>Futures Perks</li>
                <li>Futures Overview</li>
              </ul>
            </div>
            {/* Trade */}
            <div>
              <div className="text-[#7be495] text-xl font-bold mb-2">Trade</div>
              <ul className="space-y-1 font-semibold text-white">
                <li>Refferal Program</li>
                <li>Rewards hub</li>
                <li>Affiliate program</li>
                <li>VIP</li>
              </ul>
            </div>
            {/* News */}
            <div>
              <div className="text-[#7be495] text-xl font-bold mb-2">News</div>
              <ul className="space-y-1 font-semibold text-white">
                <li>News</li>
                <li>Blogs</li>
              </ul>
            </div>
            {/* Legals */}
            <div>
              <div className="text-[#7be495] text-xl font-bold mb-2">Legals</div>
              <ul className="space-y-1 font-semibold text-white">
                <li>Support</li>
                <li>Terms Of Use</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            {/* Social */}
            <div>
              <div className="text-[#7be495] text-xl font-bold mb-2">Follow Us</div>
              <ul className="space-y-3 font-semibold text-white">
                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-[#222]">
                    {/* Instagram SVG */}
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                      <path fill="#fff" d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2Zm0 7.8A3 3 0 1 1 12 9a3 3 0 0 1 0 6Zm5.25-8.1a1.05 1.05 0 1 1-2.1 0 1.05 1.05 0 0 1 2.1 0ZM21 7.08c-.048-1.02-.27-1.92-.99-2.64-.72-.72-1.62-.942-2.64-.99C16.02 3.36 15.7 3.35 12 3.35s-4.02.01-5.37.048c-1.02.048-1.92.27-2.64.99-.72.72-.942 1.62-.99 2.64C3.36 7.98 3.35 8.3 3.35 12s.01 4.02.048 5.37c.048 1.02.27 1.92.99 2.64.72.72 1.62.942 2.64.99C7.98 20.64 8.3 20.65 12 20.65s4.97-.01 5.99-.048c.6-.03 1.08-.24 1.44-.6.36-.36.57-.84.6-1.44.048-1.02.058-1.32.058-5.37s-.01-4.02-.048-5.37ZM19.44 19.44c-.36.36-.84.57-1.44.6-1.02.048-1.32.058-5.99.058s-4.97-.01-5.99-.058c-.6-.03-1.08-.24-1.44-.6-.36-.36-.57-.84-.6-1.44-.048-1.02-.058-1.32-.058-5.99s.01-4.97.058-5.99c.03-.6.24-1.08.6-1.44.36-.36.84-.57 1.44-.6C7.03 4.36 7.33 4.35 12 4.35s4.97.01 5.99.058c.6.03 1.08.24 1.44.6.36.36.57.84.6 1.44.048 1.02.058 1.32.058 5.99s-.01 4.97-.058 5.99c-.03.6-.24 1.08-.6 1.44Z" />
                    </svg>
                  </span>
                  Instagram
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-[#222]">
                    {/* Facebook SVG */}
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                      <path fill="#fff" d="M17.525 2.273h-3.05c-3.03 0-4.975 1.86-4.975 4.74v2.18H6.475a.475.475 0 0 0-.475.475v2.85c0 .262.213.475.475.475h3.025v7.302c0 .262.213.475.475.475h3.025a.475.475 0 0 0 .475-.475v-7.302h2.713a.475.475 0 0 0 .475-.475l.001-2.85a.475.475 0 0 0-.475-.475h-2.714v-1.85c0-.56.134-.845.865-.845h1.85a.475.475 0 0 0 .475-.475V2.748a.475.475 0 0 0-.475-.475Z" />
                    </svg>
                  </span>
                  Facebook
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-[#222]">
                    {/* LinkedIn SVG */}
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                      <path fill="#fff" d="M19.5 3h-15A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3ZM8.25 17.25h-2.25v-7.5h2.25v7.5Zm-1.125-8.625a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm10.125 8.625h-2.25v-3.75c0-.9-.75-1.5-1.5-1.5s-1.5.6-1.5 1.5v3.75h-2.25v-7.5h2.25v1.05c.3-.6 1.05-1.05 1.8-1.05 1.5 0 2.25 1.05 2.25 2.4v5.1Z" />
                    </svg>
                  </span>
                  LinkedIn
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-[#222]">
                    {/* YouTube SVG */}
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                      <path fill="#fff" d="M21.8 7.2a2.7 2.7 0 0 0-1.9-1.9C18.1 5 12 5 12 5s-6.1 0-7.9.3a2.7 2.7 0 0 0-1.9 1.9C2 9 2 12 2 12s0 3 .3 4.8a2.7 2.7 0 0 0 1.9 1.9C5.9 19 12 19 12 19s6.1 0 7.9-.3a2.7 2.7 0 0 0 1.9-1.9C22 15 22 12 22 12s0-3-.2-4.8ZM10 15V9l6 3-6 3Z" />
                    </svg>
                  </span>
                  Youtube
                </li>
              </ul>
            </div>
          </div>
          {/* Disclaimer & Copyright */}
          <div className="max-w-6xl mx-auto w-full mt-4 mb-6 rounded-2xl bg-gradient-to-b from-[#7be495] to-[#2d7ff9] px-6 py-8 text-center text-white">
            <div className="font-bold text-lg mb-2">
              For any complaints, please email us at <span className="underline">info@klypto.app</span>.
            </div>
            <div className="text-sm mb-2">
              Disclaimer: Klypto Is An AI-Powered Analytics And Algo-Based Tool That Provides Market Insights And Strategy Backtesting. We Do Not Hold User Funds Or Execute Trades Directly. All Investments In Cryptocurrencies And Digital Assets Are Subject To High Market Risk. Klypto Does Not Offer Financial, Investment, Or Trading Advice.
              <br />
              Past Performance Of Any Strategy Or Backtest Is Not Indicative Of Future Results. Users Are Solely Responsible For Their Investment Decisions. Use Of Our Platform Constitutes Acceptance Of Our Terms Of Use And Privacy Policy.
              <br />
              Jurisdiction: These Terms Shall Be Governed By And Construed In Accordance With The Laws Of India, Without Regard To Its Conflict Of Law Provisions.
              <br />
              Promotional Communications: By Signing Up, You Consent To Receive Marketing And Transactional Communication From Us Via Email, SMS, WhatsApp, And Other Channels. You May Opt Out At Any Time. Non-Refundable &amp; Taxes Extra.
            </div>
            <hr className="my-4 border-white/30" />
            <div className="text-sm">
              Klypto Is A Product Owned And Operated By Tabenrix Global Pvt. Ltd., A Company Registered Under The Companies Act, 2013.
              <br />
              CIN: U66120BR2025PTC074439 | GSTIN: 10AALCT7002K1ZI | TM Application No: 6912975
            </div>
            <div className="font-bold text-lg mt-2">
              © 2025 Tabenrix Global Pvt. Ltd. All rights reserved.
            </div>
          </div>
          {/* htfgsd  */}
        </div>
      </footer>
    </>
  );
}