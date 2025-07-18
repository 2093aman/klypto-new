import Image from "next/image";

const fadeIn = {
  animation: "fadeIn 1s ease forwards",
  animationFillMode: "forwards" as const,
  opacity: 1,
};

const float = {
  animation: "float 3s ease-in-out infinite alternate",
};

const cardFade = (delay: number) => ({
  animation: `cardFade 1s ${delay}s ease forwards`,
  animationFillMode: "forwards" as const,
  opacity: 1,
});

export default function HomePage() {
  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            to { opacity: 1; transform: none; }
            from { opacity: 0; transform: translateY(40px);}
          }
          @keyframes cardFade {
            to { opacity: 1; transform: none; }
            from { opacity: 0; transform: translateY(40px);}
          }
          @keyframes float {
            0% { transform: translateY(0);}
            100% { transform: translateY(-18px);}
          }
        `}
      </style>
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "100vh",
          background: "linear-gradient(90deg, #eaffea 0%, #fff 100%)",
          padding: "0 5vw",
        }}
      >
        {/* Left Side */}
        <div style={{ maxWidth: 600, ...fadeIn }}>
          <div
            style={{
              display: "inline-block",
              background: "#7be495",
              color: "#222",
              fontWeight: 700,
              fontSize: 22,
              borderRadius: 12,
              padding: "8px 24px",
              marginBottom: 32,
            }}
          >
            Decode The Market’s Secrets
          </div>
          <h1 style={{ fontSize: 72, fontWeight: 700, margin: 0, lineHeight: 1.1, color: "#111" }}>
            Join the <span style={{ color: "#2d7ff9" }}>klypto</span>
            <br />
            Movement
          </h1>
          <p style={{ fontSize: 20, margin: "32px 0 40px 0", color: "#222" }}>
            Trade smarter, faster, and more securely on India’s premier digital asset analytics &amp; empower your crypto journey with Klypto.
          </p>
          <button
            style={{
              background: "#7be495",
              color: "#111",
              fontWeight: 700,
              fontSize: 24,
              border: "none",
              borderRadius: 8,
              padding: "16px 36px",
              cursor: "pointer",
              boxShadow: "0 4px 0 #222",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            Start Trading Now
            <span style={{ fontSize: 26 }}>🪙</span>
          </button>
        </div>
        {/* Right Side */}
        <div style={{ position: "relative", width: 400, minWidth: 320, display: "flex", justifyContent: "center" }}>
          <div style={float}>
            <Image
              src="/images/home/mobile.png"
              alt="Klypto Mobile App"
              width={220}
              height={440}
              style={{ zIndex: 2, position: "relative", maxHeight: "80vh", height: "auto", width: "100%" }}
              priority
            />
          </div>
          {/* Floating Cards */}
          <div
            style={{
              position: "absolute",
              top: 40,
              left: 0,
              background: "#fff",
              borderRadius: 16,
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
              padding: 18,
              width: 140,
              textAlign: "center",
              fontSize: 14,
              zIndex: 1,
              ...cardFade(0.5),
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: 8 }}>40%</div>
            <div style={{ color: "#888" }}>Growth &amp; Stats</div>
          </div>
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              background: "#fff",
              borderRadius: 16,
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
              padding: 18,
              width: 180,
              fontSize: 14,
              zIndex: 1,
              ...cardFade(0.8),
            }}
          >
            <div style={{ fontWeight: 700, color: "#222" }}>Ethereum (ETH)</div>
            <div style={{ color: "#888", fontSize: 12, margin: "6px 0" }}>Market Online</div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
              <span>Height</span>
              <span style={{ fontWeight: 700 }}>1233968</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
              <span>Availability</span>
              <span style={{ fontWeight: 700, color: "#2d7ff9" }}>97.6%</span>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 60,
              left: 0,
              background: "#fff",
              borderRadius: 16,
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
              padding: 18,
              width: 180,
              fontSize: 14,
              zIndex: 1,
              ...cardFade(1.1),
            }}
          >
            <div style={{ fontWeight: 700, color: "#222" }}>Bitcoin (BTC)</div>
            <div style={{ color: "#888", fontSize: 12, margin: "6px 0" }}>Market Online</div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
              <span>Height</span>
              <span style={{ fontWeight: 700 }}>793968</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
              <span>Availability</span>
              <span style={{ fontWeight: 700, color: "#2d7ff9" }}>99.3%</span>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              background: "#2d1fff",
              color: "#fff",
              borderRadius: 16,
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
              padding: 18,
              width: 150,
              fontSize: 14,
              zIndex: 1,
              ...cardFade(1.4),
            }}
          >
            <div style={{ fontWeight: 700 }}>klypto (+1.2)</div>
            <div style={{ fontSize: 12, margin: "6px 0" }}>Date: Feb 24, 2019</div>
            <div style={{ fontSize: 12 }}>Price: 423.8</div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section
        style={{
          background: "#262626",
          color: "#fff",
          padding: "48px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          marginLeft: "calc(-1 * (100vw - 100%)/2)", // full bleed
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
            maxWidth: 1600,
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          <div style={{ textAlign: "center", minWidth: 200 }}>
            <div style={{ fontSize: 72, fontWeight: 700, marginBottom: 8 }}>500+</div>
            <div style={{ fontSize: 28, fontWeight: 600 }}>Automated AI Insights</div>
          </div>
          <div style={{ textAlign: "center", minWidth: 200 }}>
            <div style={{ fontSize: 72, fontWeight: 700, marginBottom: 8 }}>99%</div>
            <div style={{ fontSize: 28, fontWeight: 600 }}>Platform Uptime</div>
          </div>
          <div style={{ textAlign: "center", minWidth: 200 }}>
            <div style={{ fontSize: 72, fontWeight: 700, marginBottom: 8 }}>150+</div>
            <div style={{ fontSize: 28, fontWeight: 600 }}>Listed Coins &amp; Tokens</div>
          </div>
          <div style={{ textAlign: "center", minWidth: 200 }}>
            <div style={{ fontSize: 72, fontWeight: 700, marginBottom: 8 }}>$5 M</div>
            <div style={{ fontSize: 28, fontWeight: 600 }}>Daily Trading Volume</div>
          </div>
        </div>
      </section>
      {/* Science Section */}
      <section className="py-20 bg-white">
        <div className="flex flex-col items-center mb-10">
          <span className="bg-[#7be495] text-[#1b5e20] font-semibold text-xl px-6 py-2 rounded-xl mb-4">
            A New Era Of Intelligent Trading
          </span>
          <h2 className="text-5xl font-bold text-center text-[#222]">
            The Science Behind Your <span className="text-[#2d7ff9]">Profits</span>
          </h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#b6f5c6] rounded-3xl flex flex-col items-center p-10 shadow-lg">
            <div className="bg-white rounded-full p-4 mb-6">
              <img src="/images/icons/rl.png" alt="Reinforcement Learning" className="w-16 h-16" />
            </div>
            <h3 className="text-3xl font-bold mb-2 text-center text-[#1b5e20]">Reinforcement Learning</h3>
            <p className="text-lg text-center mb-6 text-[#222]">
              Our bots use <b>Reinforcement Learning</b> to continuously <b>learn from the market environment</b>, adapting strategies based on rewards and penalties.
            </p>
            <div className="bg-white rounded-2xl px-6 py-4 text-center text-lg font-medium text-[#222]">
              "The more it trades, the smarter it becomes."
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-[#b6f5c6] rounded-3xl flex flex-col items-center p-10 shadow-lg">
            <div className="bg-white rounded-full p-4 mb-6">
              <img src="/images/icons/wavelet.png" alt="Wavelet Analysis" className="w-16 h-16" />
            </div>
            <h3 className="text-3xl font-bold mb-2 text-center text-[#1b5e20]">Wavelet Analysis</h3>
            <p className="text-lg text-center mb-6 text-[#222]">
              This allows the AI to detect <b>hidden trends, sudden spikes, and underlying cycles</b> that traditional models miss — giving a <b>tactical edge</b> in both short-term and long-term trades.
            </p>
            <div className="bg-white rounded-2xl px-6 py-4 text-center text-lg font-medium text-[#222]">
              "Uncovering market signals hidden beneath the noise."
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-[#b6f5c6] rounded-3xl flex flex-col items-center p-10 shadow-lg">
            <div className="bg-white rounded-full p-4 mb-6">
              <img src="/images/icons/chaos.png" alt="Chaos Fractal Theory" className="w-16 h-16" />
            </div>
            <h3 className="text-3xl font-bold mb-2 text-center text-[#1b5e20]">Chaos Fractal Theory</h3>
            <p className="text-lg text-center mb-6 text-[#222]">
              Using <b>Chaos Fractal algorithms</b>, our system identifies <b>self-similar patterns</b> across timeframes, enabling the AI bot to predict <b>probabilistic behaviors</b> and take pre-emptive action before major market shifts.
            </p>
            <div className="bg-white rounded-2xl px-6 py-4 text-center text-lg font-medium text-[#222]">
              "Predicting order within apparent randomness."
            </div>
          </div>
        </div>
      </section>
      {/* Action Section */}
      <section className="flex flex-col items-center w-full mt-10">
        {/* Top Button */}
        <button className="bg-[#7be495] text-[#1b5e20] font-bold text-xl px-8 py-2 rounded-xl shadow mb-8 hover:scale-105 transition">
          See Klypto AI Bot in Action <span className="ml-2">🤖</span>
        </button>

        {/* Main Card with Overlapping Image */}
        <div className="relative w-full flex justify-center z-10">
          <div className="relative w-full max-w-5xl bg-[#222] rounded-3xl p-10 md:p-16 shadow-lg flex items-center min-h-[420px]">
            {/* Text Content */}
            <div className="flex-1 text-white md:pr-10 z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Built On Quantitative Trading Intelligence
              </h2>
              <p className="text-lg font-medium leading-relaxed">
                Klypto is powered by advanced quantitative trading models that use data, algorithms, and statistical analysis to make smart, emotion-free trading decisions. Our AI-driven systems scan the markets 24/7, execute trades based on logic—not luck—and aim for consistent returns over time.
              </p>
            </div>
            {/* Overlapping Image */}
            <div className="hidden md:block absolute right-0 bottom-0 translate-x-1/4 z-20">
              <img
                src="/images/home/mob-image.png"
                alt="Klypto App"
                className="w-[370px] max-w-none drop-shadow-2xl"
                style={{ height: "480px", objectFit: "contain" }}
              />
            </div>
            {/* Mobile fallback image inside card */}
            <div className="md:hidden flex-1 flex justify-center mt-8">
              <img
                src="./images/home/mob-image.png"
                alt="Klypto App"
                className="w-60 drop-shadow-2xl"
                style={{ maxHeight: 320 }}
              />
            </div>
          </div>
        </div>

        {/* Why Quant-Based Trading Matters */}
        <div className="-mt-8 w-full flex justify-center z-0">
          <div className="w-full max-w-5xl bg-[#7be495] rounded-b-3xl flex flex-col items-center pb-10 pt-16 shadow-lg">
            <h3 className="text-4xl md:text-5xl font-bold text-[#222] mb-8 text-center">
              Why Quant-Based Trading Matters
            </h3>
            <div className="flex flex-wrap justify-center gap-6 w-full px-4">
              <div className="bg-white rounded-2xl px-8 py-4 text-xl font-semibold text-[#222] shadow min-w-[220px] text-center border border-[#222]">
                Emotion-Free Execution
              </div>
              <div className="bg-white rounded-2xl px-8 py-4 text-xl font-semibold text-[#222] shadow min-w-[220px] text-center border border-[#222]">
                Data-Driven Decisions
              </div>
              <div className="bg-white rounded-2xl px-8 py-4 text-xl font-semibold text-[#222] shadow min-w-[220px] text-center border border-[#222]">
                24/7 Market Monitoring
              </div>
              <div className="bg-white rounded-2xl px-8 py-4 text-xl font-semibold text-[#222] shadow min-w-[220px] text-center border border-[#222]">
                Back-Tested Strategies
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="mt-8">
          <span className="bg-[#7be495] text-[#1b5e20] font-bold text-xl px-8 py-2 rounded-xl shadow">
            Built For Traders. Backed By Innovation.
          </span>
        </div>
      </section>
      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row gap-10 items-center">
        {/* Left: App Promo Image */}
        <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
          <img
            src="/images/home/Artboard-1-29.jpg"
            alt="India's Trusted Crypto Platform"
            className="rounded-2xl w-[320px] md:w-[300px] lg:w-[340px] xl:w-[370px] shadow-lg"
            style={{ objectFit: "cover" }}
          />
        </div>
        {/* Right: Features Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {/* Feature 1 */}
          <div className="bg-[#f6fff8] rounded-xl p-6 flex flex-col items-center shadow border">
            <img src="/images/icons/auto-trade.png" alt="" className="w-12 h-12 mb-2" />
            <h4 className="font-bold text-2xl text-center mb-1">Daily Auto-Trades</h4>
            <p className="text-center text-[#222] text-base">
              Earn consistently with smart trades executed on your behalf.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="bg-[#f6fff8] rounded-xl p-6 flex flex-col items-center shadow border">
            <img src="/images/icons/ai-analysis.png" alt="" className="w-12 h-12 mb-2" />
            <h4 className="font-bold text-2xl text-center mb-1">AI-Powered Analysis</h4>
            <p className="text-center text-[#222] text-base">
              Leverages real-time data and market trends to make informed decisions.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="bg-[#f6fff8] rounded-xl p-6 flex flex-col items-center shadow border">
            <img src="/images/icons/risk.png" alt="" className="w-12 h-12 mb-2" />
            <h4 className="font-bold text-2xl text-center mb-1">Built-in Risk Management</h4>
            <p className="text-center text-[#222] text-base">
              Minimizes losses and protects your capital with advanced controls.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="bg-[#f6fff8] rounded-xl p-6 flex flex-col items-center shadow border">
            <img src="/images/icons/handsfree.png" alt="" className="w-12 h-12 mb-2" />
            <h4 className="font-bold text-2xl text-center mb-1">Hands-free analysis</h4>
            <p className="text-center text-[#222] text-base">
              No manual effort required—just set your preferences and let it run.
            </p>
          </div>
          {/* Feature 5 */}
          <div className="bg-[#f6fff8] rounded-xl p-6 flex flex-col items-center shadow border">
            <img src="/images/icons/emotionfree.png" alt="" className="w-12 h-12 mb-2" />
            <h4 className="font-bold text-2xl text-center mb-1">Emotion-Free Trading</h4>
            <p className="text-center text-[#222] text-base">
              Eliminates human errors and impulsive decisions.
            </p>
          </div>
          {/* Feature 6 */}
          <div className="bg-[#f6fff8] rounded-xl p-6 flex flex-col items-center shadow border">
            <img src="/images/icons/profit.png" alt="" className="w-12 h-12 mb-2" />
            <h4 className="font-bold text-2xl text-center mb-1">Profit-Focused Strategy</h4>
            <p className="text-center text-[#222] text-base">
              Designed to maximize returns through precision trading.
            </p>
          </div>
        </div>
      </section>
      {/* New Section - AI Trading Performance */}
      <section className="w-full flex justify-center py-16">
        <div className="w-full max-w-5xl bg-[#222] rounded-3xl px-4 md:px-12 py-10 flex flex-col items-center">
          <span className="bg-[#7be495] text-[#1b5e20] font-semibold text-lg md:text-xl px-6 py-2 rounded-xl mb-6 mt-2">
            Automated AI Trading For Regular Passive Income
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-2 text-white">
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
      </section>
      {/* New Section - AI Trading Performance */}
      <section className="w-full py-14 flex flex-col items-center bg-gradient-to-b from-[#f6fff8] to-white">
        {/* Tagline */}
        <span className="bg-[#7be495] text-[#1b5e20] font-semibold text-lg md:text-xl px-6 py-2 rounded-xl mb-4">
          Your Success. Our Strategy.
        </span>
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
          <span className="text-[#2d7ff9]">AI Vs Human</span> :{" "}
          <span className="text-[#222]">Let The Smarter Trader Win</span>
        </h2>
        {/* Features */}
        <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl">
          {/* Card 1 */}
          <div className="bg-[#98f7b8] rounded-2xl px-8 py-6 flex flex-col items-center min-w-[240px] max-w-xs shadow border">
            <img src="/images/icons/ai-intel.png" alt="" className="w-14 h-14 mb-2" />
            <div className="text-lg font-semibold text-center mt-2">
              AI-Powered Trading
              <br />
              Intelligence
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-[#98f7b8] rounded-2xl px-8 py-6 flex flex-col items-center min-w-[240px] max-w-xs shadow border">
            <img src="/images/icons/strategy.png" alt="" className="w-14 h-14 mb-2" />
            <div className="text-lg font-semibold text-center mt-2">
              Consistent, Automated
              <br />
              Strategies
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-[#98f7b8] rounded-2xl px-8 py-6 flex flex-col items-center min-w-[240px] max-w-xs shadow border">
            <img src="/images/icons/monitoring.png" alt="" className="w-14 h-14 mb-2" />
            <div className="text-lg font-semibold text-center mt-2">
              Real-Time Market
              <br />
              Monitoring
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-[#98f7b8] rounded-2xl px-8 py-6 flex flex-col items-center min-w-[240px] max-w-xs shadow border">
            <img src="/images/icons/security.png" alt="" className="w-14 h-14 mb-2" />
            <div className="text-lg font-semibold text-center mt-2">
              Multi-Layered Security
              <br />
              Protocols
            </div>
          </div>
        </div>
      </section>
      {/* Currency Section - New */}
      <section className="w-full flex justify-center py-16 bg-transparent">
        <div className="bg-[#7be495] rounded-2xl px-4 md:px-12 py-10 flex flex-col items-center w-full max-w-4xl shadow-lg">
          {/* Top Tag */}
          <span className="bg-[#222] text-white font-semibold text-base px-6 py-2 rounded-lg mb-4">
            INR Or USDT – We’ve Got You Covered
          </span>
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-[#222]">
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
                  <span className="text-4xl font-bold text-[#222]">₹</span>
                  <span className="text-3xl text-[#222]">→</span>
                  <img src="/images/delta-exchange-logo.png" alt="Delta Exchange" className="h-10" />
                  <span className="text-lg font-bold text-[#222]">Delta.<span className="font-normal">Exchange</span></span>
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
                  <img src="/images/tether-usdt-logo.png" alt="USDT" className="h-10 w-10" />
                  <span className="text-3xl text-[#222]">→</span>
                  <img src="/images/binance-logo.png" alt="Binance" className="h-10" />
                  <span className="text-lg font-bold text-[#222]">BINANCE</span>
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
      </section>
      <footer className="bg-[#222] pt-8">
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
                    <path fill="#fff" d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2Zm0 7.8A3 3 0 1 1 12 9a3 3 0 0 1 0 6Zm5.25-8.1a1.05 1.05 0 1 1-2.1 0 1.05 1.05 0 0 1 2.1 0ZM21 7.08c-.048-1.02-.27-1.92-.99-2.64-.72-.72-1.62-.942-2.64-.99C16.02 3.36 15.7 3.35 12 3.35s-4.02.01-5.37.048c-1.02.048-1.92.27-2.64.99-.72.72-.942 1.62-.99 2.64C3.36 7.98 3.35 8.3 3.35 12s.01 4.02.048 5.37c.048 1.02.27 1.92.99 2.64.72.72 1.62.942 2.64.99C7.98 20.64 8.3 20.65 12 20.65s4.97-.01 5.99-.048c.6-.03 1.08-.24 1.44-.6.36-.36.57-.84.6-1.44.048-1.02.058-1.32.058-5.37s-.01-4.02-.048-5.37ZM19.44 19.44c-.36.36-.84.57-1.44.6-1.02.048-1.32.058-5.99.058s-4.97-.01-5.99-.058c-.6-.03-1.08-.24-1.44-.6-.36-.36-.57-.84-.6-1.44-.048-1.02-.058-1.32-.058-5.99s.01-4.97.058-5.99c.03-.6.24-1.08.6-1.44.36-.36.84-.57 1.44-.6C7.03 4.36 7.33 4.35 12 4.35s4.97.01 5.99.058c.6.03 1.08.24 1.44.6.36.36.57.84.6 1.44.048 1.02.058 1.32.058 5.99s-.01 4.97-.058 5.99c-.03.6-.24 1.08-.6 1.44Z"/>
                  </svg>
                </span>
                Instagram
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-[#222]">
                  {/* Facebook SVG */}
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <path fill="#fff" d="M17.525 2.273h-3.05c-3.03 0-4.975 1.86-4.975 4.74v2.18H6.475a.475.475 0 0 0-.475.475v2.85c0 .262.213.475.475.475h3.025v7.302c0 .262.213.475.475.475h3.025a.475.475 0 0 0 .475-.475v-7.302h2.713a.475.475 0 0 0 .475-.475l.001-2.85a.475.475 0 0 0-.475-.475h-2.714v-1.85c0-.56.134-.845.865-.845h1.85a.475.475 0 0 0 .475-.475V2.748a.475.475 0 0 0-.475-.475Z"/>
                  </svg>
                </span>
                Facebook
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-[#222]">
                  {/* LinkedIn SVG */}
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <path fill="#fff" d="M19.5 3h-15A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3ZM8.25 17.25h-2.25v-7.5h2.25v7.5Zm-1.125-8.625a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm10.125 8.625h-2.25v-3.75c0-.9-.75-1.5-1.5-1.5s-1.5.6-1.5 1.5v3.75h-2.25v-7.5h2.25v1.05c.3-.6 1.05-1.05 1.8-1.05 1.5 0 2.25 1.05 2.25 2.4v5.1Z"/>
                  </svg>
                </span>
                LinkedIn
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-[#222]">
                  {/* YouTube SVG */}
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <path fill="#fff" d="M21.8 7.2a2.7 2.7 0 0 0-1.9-1.9C18.1 5 12 5 12 5s-6.1 0-7.9.3a2.7 2.7 0 0 0-1.9 1.9C2 9 2 12 2 12s0 3 .3 4.8a2.7 2.7 0 0 0 1.9 1.9C5.9 19 12 19 12 19s6.1 0 7.9-.3a2.7 2.7 0 0 0 1.9-1.9C22 15 22 12 22 12s0-3-.2-4.8ZM10 15V9l6 3-6 3Z"/>
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
      </footer>
    </>
  );
}