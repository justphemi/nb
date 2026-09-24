import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <section className={"section"} style={{background:"#0D100D", color:"white", padding:"80px 0 40px"}}>
        <div className={"container"}>
          <h1 style={{fontSize:"clamp(32px, 5vw, 56px)", fontWeight:800, lineHeight:1}}>Privacy Policy</h1>
          <p style={{marginTop:12, opacity:0.6, fontSize:13}}>Last updated: January 1, 2026</p>
          <p style={{marginTop:16, maxWidth:720, opacity:0.7, fontSize:15, lineHeight:1.6}}>Nexusbert Technology Labs respects your privacy. This policy explains what we collect, why we collect it, and how we handle it.</p>
        </div>
      </section>
      <section className={"section"} style={{background:"#0D100D", color:"white", padding:"20px 0 80px"}}>
        <div className={"container"} style={{display:"grid", gap:24, maxWidth:800}}>
          <div style={{background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:16, padding:24}}>
            <h2 style={{fontSize:18, fontWeight:700}}>What we collect</h2>
            <p style={{marginTop:8, opacity:0.7, fontSize:14, lineHeight:1.6}}>Contact details you share via our contact form (name, email, company, message). Basic analytics such as page views and device type if you accept analytics. We do not sell your data.</p>
          </div>
          <div style={{background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:16, padding:24}}>
            <h2 style={{fontSize:18, fontWeight:700}}>How we use it</h2>
            <p style={{marginTop:8, opacity:0.7, fontSize:14, lineHeight:1.6}}>To respond to enquiries, to improve our site and services, and to meet legal obligations. We keep enquiries for up to 24 months unless you ask us to delete them sooner.</p>
          </div>
          <div style={{background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:16, padding:24}}>
            <h2 style={{fontSize:18, fontWeight:700}}>Your rights</h2>
            <p style={{marginTop:8, opacity:0.7, fontSize:14, lineHeight:1.6}}>You can request access, correction, or deletion of your personal data at any time. Contact us at hello@nexusbert.com. If you are in the EU or UK you also have the right to lodge a complaint with your supervisory authority.</p>
          </div>
          <div style={{background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:16, padding:24}}>
            <h2 style={{fontSize:18, fontWeight:700}}>Cookies</h2>
            <p style={{marginTop:8, opacity:0.7, fontSize:14, lineHeight:1.6}}>We use only essential cookies for site operation. No tracking cookies are set without consent.</p>
          </div>
          <div style={{opacity:0.6, fontSize:13, textAlign:"center", marginTop:12}}>Questions? Email hello@nexusbert.com</div>
        </div>
      </section>
      <Footer />
    </>
  );
}
