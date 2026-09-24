import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function LabsPage() {
  return (
    <>
      <Header />
      <section className={"section"} style={{background:"#0D100D", color:"white", padding:"80px 0"}}>
        <div className={"container"}>
          <h1 style={{fontSize:"clamp(36px, 6vw, 64px)", fontWeight:800, lineHeight:0.95, maxWidth:700}}>Technical risk, taken off the path.</h1>
          <p style={{marginTop:16, maxWidth:600, opacity:0.7, fontSize:16, lineHeight:1.6}}>The Labs exist so the business does not have to bet the quarter on an unproven idea. We spike, measure, write it down, and either promote the work into engineering or stop.</p>
        </div>
      </section>

      <section className={"section"} style={{background:"#0D100D", color:"white", padding:"80px 0", borderTop:"1px solid rgba(255,255,255,0.06)"}}>
        <div className={"container"}>
          <div className={"services-wrapper"} style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))", gap:40}}>
            <div>
              <h2 style={{fontSize:"clamp(24px, 3vw, 32px)", fontWeight:700}}>Three ways the Labs run.</h2>
            </div>
            <div style={{display:"flex", flexDirection:"column"}}>
              <div style={{borderBottom:"1px solid rgba(255,255,255,0.08)", padding:"20px 0"}}>
                <h3 style={{fontWeight:600, fontSize:16}}>Applied research</h3>
                <p style={{opacity:0.7, fontSize:13, lineHeight:1.6, marginTop:8}}>We take papers, open models, and internal hypotheses and put them against your data. The output is a verdict: ship, spike further, or stop.</p>
              </div>
              <div style={{borderBottom:"1px solid rgba(255,255,255,0.08)", padding:"20px 0"}}>
                <h3 style={{fontWeight:600, fontSize:16}}>Product incubation</h3>
                <p style={{opacity:0.7, fontSize:13, lineHeight:1.6, marginTop:8}}>When the shape of the product is still moving, the Labs hold the first versions with a named owner and a date we either promote or kill the work.</p>
              </div>
              <div style={{padding:"20px 0"}}>
                <h3 style={{fontWeight:600, fontSize:16}}>Platform probes</h3>
                <p style={{opacity:0.7, fontSize:13, lineHeight:1.6, marginTop:8}}>New runtimes, evaluation harnesses, retrieval layouts. Infrastructure experiments that the product org should not have to fund on the critical path.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={"section"} style={{background:"#0D100D", color:"white", padding:"80px 0", borderTop:"1px solid rgba(255,255,255,0.06)"}}>
        <div className={"container"}>
          <div className={"services-wrapper"} style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))", gap:40}}>
            <div>
              <h2 style={{fontSize:"clamp(24px, 3vw, 32px)", fontWeight:700}}>How we decide what ships.</h2>
            </div>
            <div style={{display:"flex", flexDirection:"column"}}>
              <div style={{borderBottom:"1px solid rgba(255,255,255,0.08)", padding:"20px 0"}}>
                <h3 style={{fontWeight:600, fontSize:16}}>Production, or it did not happen</h3>
                <p style={{opacity:0.7, fontSize:13, marginTop:8}}>A notebook is research. A service with a contract, an eval, and an owner is a product.</p>
              </div>
              <div style={{borderBottom:"1px solid rgba(255,255,255,0.08)", padding:"20px 0"}}>
                <h3 style={{fontWeight:600, fontSize:16}}>Models are components</h3>
                <p style={{opacity:0.7, fontSize:13, marginTop:8}}>The model is never the product. The product is the system.</p>
              </div>
              <div style={{borderBottom:"1px solid rgba(255,255,255,0.08)", padding:"20px 0"}}>
                <h3 style={{fontWeight:600, fontSize:16}}>Clarity over theater</h3>
                <p style={{opacity:0.7, fontSize:13, marginTop:8}}>We would rather show a thin slice that works than a deck that glows.</p>
              </div>
              <div style={{padding:"20px 0"}}>
                <h3 style={{fontWeight:600, fontSize:16}}>Own the seam</h3>
                <p style={{opacity:0.7, fontSize:13, marginTop:8}}>The hard part is the seam between research and engineering. That seam is our craft.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={"section"} style={{background:"#0D100D", color:"white", padding:"80px 0", borderTop:"1px solid rgba(255,255,255,0.06)"}}>
        <div className={"container"}>
          <div className={"services-wrapper"} style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))", gap:40}}>
            <div>
              <h2 style={{fontSize:"clamp(24px, 3vw, 32px)", fontWeight:700}}>The same four movements.</h2>
              <p style={{opacity:0.6, fontSize:13, marginTop:8}}>Labs work is not a different company. It is the same method, with a higher appetite for being wrong early.</p>
            </div>
            <div style={{display:"flex", flexDirection:"column"}}>
              <div style={{borderBottom:"1px solid rgba(255,255,255,0.08)", padding:"16px 0", display:"flex", gap:16}}>
                <div style={{color:"#9900CC", fontWeight:700, fontSize:12, minWidth:24}}>01</div>
                <div>
                  <div style={{fontWeight:600}}>Discover</div>
                  <div style={{opacity:0.6, fontSize:12, marginTop:4}}>Constraints, data, risk, and the job to be done.</div>
                </div>
              </div>
              <div style={{borderBottom:"1px solid rgba(255,255,255,0.08)", padding:"16px 0", display:"flex", gap:16}}>
                <div style={{color:"#9900CC", fontWeight:700, fontSize:12, minWidth:24}}>02</div>
                <div>
                  <div style={{fontWeight:600}}>Design</div>
                  <div style={{opacity:0.6, fontSize:12, marginTop:4}}>Architecture, workflow, and model contract as one system.</div>
                </div>
              </div>
              <div style={{borderBottom:"1px solid rgba(255,255,255,0.08)", padding:"16px 0", display:"flex", gap:16}}>
                <div style={{color:"#9900CC", fontWeight:700, fontSize:12, minWidth:24}}>03</div>
                <div>
                  <div style={{fontWeight:600}}>Build</div>
                  <div style={{opacity:0.6, fontSize:12, marginTop:4}}>Product, model, backend, and cloud in increments.</div>
                </div>
              </div>
              <div style={{padding:"16px 0", display:"flex", gap:16}}>
                <div style={{color:"#9900CC", fontWeight:700, fontSize:12, minWidth:24}}>04</div>
                <div>
                  <div style={{fontWeight:600}}>Operate</div>
                  <div style={{opacity:0.6, fontSize:12, marginTop:4}}>Evals, observability, handover.</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{marginTop:32, background:"#E8C547", color:"#0D100D", borderRadius:16, padding:20, display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:16}}>
            <div>
              <div style={{fontWeight:700}}>Commission a spike.</div>
              <div style={{fontSize:13, opacity:0.8}}>Two to six weeks. A written verdict. A prototype you can hold or a clear no.</div>
            </div>
            <a href={"#/contact"} style={{background:"#9900CC", color:"white", padding:"10px 18px", borderRadius:999, fontWeight:700, textDecoration:"none"}}>Talk to us</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
