import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function AboutPage() {
  return (
    <>
      <Header />
      <section className={"section"} style={{background:"#0D100D", color:"white", padding:"80px 0"}}>
        <div className={"container"}>
          <h1 style={{fontSize:"clamp(36px, 6vw, 64px)", fontWeight:800, lineHeight:0.95}}>A lab that ships.</h1>
          <p style={{marginTop:16, maxWidth:680, opacity:0.7, fontSize:16, lineHeight:1.6}}>Nexusbert Technology Labs is an artificial intelligence and software engineering company. We design, develop, and deploy AI-powered products, backend systems, cloud solutions, APIs, machine learning applications, automation tools, and enterprise platforms and we consult on the operating model that has to live around them.</p>
        </div>
      </section>
      <section className={"section"} style={{background:"#0D100D", color:"white", padding:"80px 0"}}>
        <div className={"container"}>
          <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))", gap:1, background:"rgba(255,255,255,0.08)", borderRadius:16, overflow:"hidden"}}>
            <div style={{background:"#0D100D", padding:24, textAlign:"center"}}>
              <div style={{fontWeight:700}}>AI and software engineering house</div>
            </div>
            <div style={{background:"#0D100D", padding:24, textAlign:"center"}}>
              <div style={{fontWeight:700}}>Labs and production engineering</div>
            </div>
            <div style={{background:"#0D100D", padding:24, textAlign:"center"}}>
              <div style={{fontWeight:700}}>West Africa, Remote worldwide</div>
            </div>
            <div style={{background:"#0D100D", padding:24, textAlign:"center"}}>
              <div style={{fontWeight:700}}>Build, spike, or advise</div>
            </div>
          </div>
          <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))", gap:1, background:"rgba(255,255,255,0.08)", borderRadius:16, overflow:"hidden", marginTop:16}}>
            <div style={{background:"rgba(255,255,255,0.04)", padding:20, textAlign:"center"}}>
              <div style={{fontSize:28, fontWeight:800, color:"#E8C547"}}>2019</div>
              <div style={{fontSize:11, opacity:0.6, marginTop:4}}>Founded in Lagos</div>
            </div>
            <div style={{background:"rgba(255,255,255,0.04)", padding:20, textAlign:"center"}}>
              <div style={{fontSize:28, fontWeight:800, color:"#E8C547"}}>40+</div>
              <div style={{fontSize:11, opacity:0.6, marginTop:4}}>Systems shipped</div>
            </div>
            <div style={{background:"rgba(255,255,255,0.04)", padding:20, textAlign:"center"}}>
              <div style={{fontSize:28, fontWeight:800, color:"#E8C547"}}>18</div>
              <div style={{fontSize:11, opacity:0.6, marginTop:4}}>Engineers and researchers</div>
            </div>
            <div style={{background:"rgba(255,255,255,0.04)", padding:20, textAlign:"center"}}>
              <div style={{fontSize:28, fontWeight:800, color:"#E8C547"}}>6</div>
              <div style={{fontSize:11, opacity:0.6, marginTop:4}}>Industries in production</div>
            </div>
          </div>
        </div>
      </section>
      <section className={"section"} style={{background:"#0D100D", color:"white", padding:"80px 0", borderTop:"1px solid rgba(255,255,255,0.06)"}}>
        <div className={"container"}>
          <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))", gap:32}}>
            <h2 style={{fontSize:"clamp(24px, 3vw, 36px)", fontWeight:800}}>Intelligence is a systems problem.</h2>
            <div style={{opacity:0.75, fontSize:14, lineHeight:1.6}}>
              <p>The industry is loud about models and quiet about everything else: the API that has to hold, the cloud bill, the eval that nobody wants to own, the integration with last decades system of record.</p>
              <p style={{marginTop:12}}>Nexusbert was founded to do that entire job. We research when the path is unclear. We engineer when the path is known. We tell you which of those you are actually in before you commit the quarter.</p>
            </div>
          </div>
        </div>
      </section>
          <Footer />
    </>
  );
}
