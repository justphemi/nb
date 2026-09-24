import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function CapabilitiesPage() {
  const caps = [
    {t:"AI-powered products", d:"End-to-end product engineering for software that reasons, retrieves, and acts, not a chatbot bolted onto a form. We design the product surface, the model contract, and the operational loop together."},
    {t:"Mobile app development", d:"Native iOS and Android plus cross-platform apps with backends and realtime sync that stay fast, stable, and store compliant."},
    {t:"Machine learning applications", d:"Custom models, retrieval systems, and applied research that survive contact with production data. From classical pipelines to modern language and vision systems."},
    {t:"Backend systems", d:"Services, data layers, and event pipelines built to carry real load and real change. Durable backends for products that cannot go down at the demo."},
    {t:"APIs and platforms", d:"Public and internal APIs, developer platforms, and the governance that keeps them coherent. A good API is a product."},
    {t:"Cloud solutions", d:"Architecture, migration, and operations on modern cloud, without the lock-in theater. We put workloads where they belong and keep the bill in view."},
    {t:"Automation tools", d:"Software that removes the work nobody should still be doing by hand. We automate with models where judgment is needed and plain software where it is not."},
    {t:"Enterprise platforms", d:"Multi-team systems with identity, audit, and the parts of software that make it last. Roles, tenancy, audit trails, and change management."},
    {t:"Consulting and transformation", d:"Architecture reviews, build versus buy, and the operating model to actually adopt AI. We tell the truth about what to build and what to wait on."},
    {t:"Research and development", d:"Applied R and D with an exit ramp. Prototypes that are honest about what works, then a path to ship. We spike, measure, kill, or promote."},
    {t:"Software integration", d:"Connecting the stack you already have to the systems you are building next. ERPs, data warehouses, identity providers, and legacy platforms."},
  ];
  return (
    <>
      <Header />
      <section className={"section"} style={{background:"#0D100D", color:"white", padding:"80px 0 40px"}}>
        <div className={"container"}>
          <h1 style={{fontSize:"clamp(36px, 6vw, 64px)", fontWeight:800, lineHeight:0.95}}>From model to production.</h1>
          <p style={{marginTop:16, maxWidth:640, opacity:0.7, fontSize:16, lineHeight:1.6}}>Eleven practices. One standard: if it cannot be operated, it is not finished. Nexusbert covers the product, the intelligence, the infrastructure, and the partnership around them.</p>
        </div>
      </section>
      <section className={"section services"} style={{background:"#0D100D", color:"white", padding:"20px 0 60px", borderTop:"1px solid rgba(255,255,255,0.06)"}}>
        <div className={"container"}>
          <div className={"services-wrapper"} style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))", gap:40}}>
            <div>
              <h2 style={{fontSize:"clamp(24px, 3vw, 32px)", fontWeight:800}}>We build AI-powered software for production.</h2>
              <p style={{marginTop:12, opacity:0.6, fontSize:13, lineHeight:1.6}}>Ten practices plus mobile. One standard. Click each to explore.</p>
              <a href={"#/contact"} style={{display:"inline-block", marginTop:16, background:"#9900CC", color:"white", padding:"10px 18px", borderRadius:999, fontWeight:700, textDecoration:"none"}}>Contact Now</a>
            </div>
            <div className={"services-list"} style={{display:"flex", flexDirection:"column"}}>
              {caps.map((c, i) => (
                <div key={c.t} className={"service-item w-dropdown"} data-delay={"0"} data-hover={"false"} style={{borderBottom:"1px solid rgba(255,255,255,0.08)"}}>
                  <div aria-controls={`cap-${i}`} aria-expanded={"false"} aria-haspopup={"menu"} className={"service-title w-dropdown-toggle"} role={"button"} tabIndex={"0"} style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"18px 0", cursor:"pointer"}}>
                    <div style={{fontSize:16, fontWeight:700}}>{c.t}</div>
                    <div className={"chevron-icon"} style={{width:20, height:20, display:"grid", placeItems:"center", opacity:0.7}}>
                      <svg fill={"none"} height={"16"} viewBox={"0 0 24 25"} width={"16"}><path d={"M4 9.27L12 17.27L20 9.27"} stroke={"white"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}></path></svg>
                    </div>
                  </div>
                  <div id={`cap-${i}`} className={"service-desc w-dropdown-list"} style={{paddingBottom:16}}>
                    <p style={{fontSize:13, lineHeight:1.6, opacity:0.6}}>{c.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{marginTop:32, background:"#E8C547", color:"#0D100D", borderRadius:16, padding:20, display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:16}}>
            <div>
              <h3 style={{fontWeight:800}}>Not sure which practice you need?</h3>
              <p style={{opacity:0.7, fontSize:13, marginTop:4}}>Send the problem. We will tell you if it is a product, a model, a platform or all three.</p>
            </div>
            <a href={"/contact"} style={{background:"#9900CC", color:"white", padding:"10px 18px", borderRadius:999, fontWeight:700, textDecoration:"none"}}>Brief us</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
