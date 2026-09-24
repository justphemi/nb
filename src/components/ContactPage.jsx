import { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({name:"", email:"", message:""});
  const submit = (e) => {
    e.preventDefault();
    if(!form.name || !form.email || !form.message) return;
    setSent(true);
  };
  return (
    <>
      <Header />
      <section className={"section"} style={{background:"#0D100D", color:"white", padding:"80px 0"}}>
        <div className={"container"}>
          <h1 style={{fontSize:"clamp(36px, 6vw, 64px)", fontWeight:800, lineHeight:0.95}}>Send the hard problem.</h1>
          <p style={{marginTop:16, maxWidth:600, opacity:0.7, fontSize:16, lineHeight:1.6}}>A few sentences are enough. What you are trying to do, what is in the way, and when it has to be real. We reply to every brief.</p>
        </div>
      </section>
      <section className={"section"} style={{background:"#0D100D", color:"white", padding:"80px 0"}}>
        <div className={"container"}>
          <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))", gap:24}}>
            <div style={{background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:16, padding:24}}>
              <h3 style={{fontWeight:700}}>What happens next</h3>
              <div style={{marginTop:16, display:"grid", gap:16, fontSize:13, lineHeight:1.6}}>
                <div style={{display:"flex", gap:12}}>
                  <span style={{color:"#E8C547", fontWeight:700, minWidth:20}}>01</span>
                  <span style={{opacity:0.7}}>We read the brief. If we are the wrong room, we will say so.</span>
                </div>
                <div style={{display:"flex", gap:12}}>
                  <span style={{color:"#E8C547", fontWeight:700, minWidth:20}}>02</span>
                  <span style={{opacity:0.7}}>A short call to pressure-test scope, data, and risk.</span>
                </div>
                <div style={{display:"flex", gap:12}}>
                  <span style={{color:"#E8C547", fontWeight:700, minWidth:20}}>03</span>
                  <span style={{opacity:0.7}}>A written shape of the engagement: spike, build, or advise.</span>
                </div>
              </div>
              <div style={{marginTop:20, paddingTop:16, borderTop:"1px solid rgba(255,255,255,0.08)", fontSize:12, opacity:0.5}}>West Africa and remote worldwide - hello@nexusbert.com</div>
            </div>
            <div style={{background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:16, padding:24}}>
              {!sent ? (
                <form onSubmit={submit} style={{display:"grid", gap:12}}>
                  <input placeholder={"Your name"} value={form.name} onChange={e=>setForm({...form, name:e.target.value})} style={{padding:"14px 16px", borderRadius:10, border:"1px solid rgba(255,255,255,0.12)", background:"rgba(255,255,255,0.06)", color:"white", fontSize:14, outline:"none"}} required />
                  <input placeholder={"Email"} type={"email"} value={form.email} onChange={e=>setForm({...form, email:e.target.value})} style={{padding:"14px 16px", borderRadius:10, border:"1px solid rgba(255,255,255,0.12)", background:"rgba(255,255,255,0.06)", color:"white", fontSize:14, outline:"none"}} required />
                  <textarea placeholder={"What are you trying to do, what is in the way, and when does it have to be real?"} value={form.message} onChange={e=>setForm({...form, message:e.target.value})} rows={5} style={{padding:"14px 16px", borderRadius:10, border:"1px solid rgba(255,255,255,0.12)", background:"rgba(255,255,255,0.06)", color:"white", fontSize:14, resize:"vertical", outline:"none"}} required />
                  <button type={"submit"} style={{background:"#9900CC", color:"white", padding:"14px 20px", borderRadius:999, fontWeight:700, border:"none", cursor:"pointer"}}>Send brief</button>
                  <div style={{fontSize:11, opacity:0.5, textAlign:"center"}}>We read every brief. No spam, no newsletter.</div>
                </form>
              ) : (
                <div style={{textAlign:"center", padding:"20px 0"}}>
                  <div style={{width:48, height:48, borderRadius:999, background:"#E8C547", display:"grid", placeItems:"center", margin:"0 auto", fontWeight:800, color:"#0D100D"}}>✓</div>
                  <h3 style={{marginTop:16, fontWeight:800}}>Brief received.</h3>
                  <p style={{opacity:0.6, fontSize:13, marginTop:8}}>Thanks {form.name.split(" ")[0]}. We will reply to {form.email} within a day.</p>
                  <button onClick={()=>setSent(false)} style={{marginTop:16, background:"white", color:"#0D100D", padding:"10px 16px", borderRadius:999, border:"none", cursor:"pointer", fontWeight:600}}>Send another</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
