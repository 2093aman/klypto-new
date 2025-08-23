import Image from "next/image";

export default function HomePage() {
  return (
    // <section
    //   style={{
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "space-between",
    //     minHeight: "100vh",
    //     background: "linear-gradient(90deg, #eaffea 0%, #fff 100%)",
    //     padding: "0 5vw",
    //   }}
    // >
    //   {/* Left Side */}
    //   <div style={{ maxWidth: 600 }}>
    //     <div
    //       style={{
    //         display: "inline-block",
    //         background: "#7be495",
    //         color: "#222",
    //         fontWeight: 700,
    //         fontSize: 22,
    //         borderRadius: 12,
    //         padding: "8px 24px",
    //         marginBottom: 32,
    //       }}
    //     >
    //       Decode The Market’s Secrets
    //     </div>
    //     <h1 style={{ fontSize: 72, fontWeight: 700, margin: 0, lineHeight: 1.1 }}>
    //       Join the <span style={{ color: "#2d7ff9" }}>klypto</span>
    //       <br />
    //       Movement
    //     </h1>
    //     <p style={{ fontSize: 20, margin: "32px 0 40px 0", color: "#222" }}>
    //       Trade smarter, faster, and more securely on India’s premier digital asset analytics &amp; empower your crypto journey with Klypto.
    //     </p>
    //     <button
    //       style={{
    //         background: "#7be495",
    //         color: "#111",
    //         fontWeight: 700,
    //         fontSize: 24,
    //         border: "none",
    //         borderRadius: 8,
    //         padding: "16px 36px",
    //         cursor: "pointer",
    //         boxShadow: "0 4px 0 #222",
    //         display: "flex",
    //         alignItems: "center",
    //         gap: 10,
    //       }}
    //     >
    //       Start Trading Now
    //       <span style={{ fontSize: 26 }}>🪙</span>
    //     </button>
    //   </div>
    //   {/* Right Side */}
    //   <div style={{ position: "relative", width: 600, minWidth: 320, display: "flex", justifyContent: "center" }}>
    //     <Image
    //       src="/images/home/mobile.png"
    //       alt="Klypto Mobile App"
    //       width={350}
    //       height={700}
    //       style={{ zIndex: 2, position: "relative" }}
    //     />
    //     {/* Floating Cards */}
    //     <div
    //       style={{
    //         position: "absolute",
    //         top: 40,
    //         left: 0,
    //         background: "#fff",
    //         borderRadius: 16,
    //         boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
    //         padding: 18,
    //         width: 140,
    //         textAlign: "center",
    //         fontSize: 14,
    //         zIndex: 1,
    //       }}
    //     >
    //       <div style={{ fontWeight: 700, marginBottom: 8 }}>40%</div>
    //       <div style={{ color: "#888" }}>Growth &amp; Stats</div>
    //     </div>
    //     <div
    //       style={{
    //         position: "absolute",
    //         top: 0,
    //         right: 0,
    //         background: "#fff",
    //         borderRadius: 16,
    //         boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
    //         padding: 18,
    //         width: 180,
    //         fontSize: 14,
    //         zIndex: 1,
    //       }}
    //     >
    //       <div style={{ fontWeight: 700, color: "#222" }}>Ethereum (ETH)</div>
    //       <div style={{ color: "#888", fontSize: 12, margin: "6px 0" }}>Market Online</div>
    //       <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
    //         <span>Height</span>
    //         <span style={{ fontWeight: 700 }}>1233968</span>
    //       </div>
    //       <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
    //         <span>Availability</span>
    //         <span style={{ fontWeight: 700, color: "#2d7ff9" }}>97.6%</span>
    //       </div>
    //     </div>
    //     <div
    //       style={{
    //         position: "absolute",
    //         bottom: 60,
    //         left: 0,
    //         background: "#fff",
    //         borderRadius: 16,
    //         boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
    //         padding: 18,
    //         width: 180,
    //         fontSize: 14,
    //         zIndex: 1,
    //       }}
    //     >
    //       <div style={{ fontWeight: 700, color: "#222" }}>Bitcoin (BTC)</div>
    //       <div style={{ color: "#888", fontSize: 12, margin: "6px 0" }}>Market Online</div>
    //       <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
    //         <span>Height</span>
    //         <span style={{ fontWeight: 700 }}>793968</span>
    //       </div>
    //       <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
    //         <span>Availability</span>
    //         <span style={{ fontWeight: 700, color: "#2d7ff9" }}>99.3%</span>
    //       </div>
    //     </div>
    //     <div
    //       style={{
    //         position: "absolute",
    //         bottom: 0,
    //         right: 0,
    //         background: "#2d1fff",
    //         color: "#fff",
    //         borderRadius: 16,
    //         boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
    //         padding: 18,
    //         width: 150,
    //         fontSize: 14,
    //         zIndex: 1,
    //       }}
    //     >
    //       <div style={{ fontWeight: 700 }}>klypto (+1.2)</div>
    //       <div style={{ fontSize: 12, margin: "6px 0" }}>Date: Feb 24, 2019</div>
    //       <div style={{ fontSize: 12 }}>Price: 423.8</div>
    //     </div>
    //   </div>
    // </section>
  );
}