import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function TermsPage() {
  return (
    <>
      <Header />
      <section className={"section"} style={{background:"#0D100D", color:"white", padding:"80px 0 40px"}}>
        <div className={"container"}>
          <h1 style={{fontSize:"clamp(32px, 5vw, 56px)", fontWeight:800, lineHeight:1}}>Terms of Service</h1>
          <p style={{marginTop:12, opacity:0.6, fontSize:13}}>Last updated: January 1, 2026</p>
          <p style={{marginTop:16, maxWidth:720, opacity:0.7, fontSize:15, lineHeight:1.6}}>These terms govern your use of nexusbert.com and our services. By using the site you agree to them.</p>
        </div>
      </section>
      <section className={"section"} style={{background:"#0D100D", color:"white", padding:"20px 0 80px"}}>
        <div className={"container"} style={{display:"grid", gap:24, maxWidth:800}}>
          <div style={{background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:16, padding:24}}>
            <h2 style={{fontSize:18, fontWeight:700}}>Services</h2>
            <p style={{marginTop:8, opacity:0.7, fontSize:14, lineHeight:1.6}}>All proposals, timelines, and fees are provided in writing. Work begins after written acceptance. Estimates are provided in good faith and may change if scope changes.</p>
          </div>
          <div style={{background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:16, padding:24}}>
            <h2 style={{fontSize:18, fontWeight:700}}>Intellectual property</h2>
            <p style={{marginTop:8, opacity:0.7, fontSize:14, lineHeight:1.6}}>You retain ownership of your pre-existing materials. Deliverables are assigned to you upon full payment, except for our pre-existing tools and open source components which remain licensed to you.</p>
          </div>
          <div style={{background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:16, padding:24}}>
            <h2 style={{fontSize:18, fontWeight:700}}>Warranty and liability</h2>
            <p style={{marginTop:8, opacity:0.7, fontSize:14, lineHeight:1.6}}>Services are provided with professional care. To the fullest extent permitted by law, our liability is limited to the fees paid for the relevant services in the 12 months before the claim.</p>
          </div>
          <div style={{background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:16, padding:24}}>
            <h2 style={{fontSize:18, fontWeight:700}}>Governing law</h2>
            <p style={{marginTop:8, opacity:0.7, fontSize:14, lineHeight:1.6}}>These terms are governed by the laws of the Federal Republic of Nigeria. Disputes will be resolved in the courts of Lagos.</p>
          </div>
          <div style={{opacity:0.6, fontSize:13, textAlign:"center", marginTop:12}}>Need a full agreement for your project? We will provide a tailored MSA and SOW.</div>
        </div>
      </section>
      <Footer />
    </>
  );
}
