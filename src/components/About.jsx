export default function About() {
  return (
    <section className={"section stats"} id={"about"}>
      <div className={"container"}>
        <div className={"stats-wrapper"}>
          <div className={"stats-left"}>
            <div className={"stats-left-content"}>
              <p className={"text-large"}>
                {
                  "As an AI and software engineering house, we work closely with teams to define, design and ship intelligent products backends and cloud platforms that survive production."
                }
              </p>
              <div className={"stats-btn"}>
                <a
                  className={"circle-text-btn w-inline-block"}
                  href={"#contact"}
                >
                  <div className={"circle-btn-icon w-embed"}>
                    <svg
                      fill={"currentColor"}
                      height={"40"}
                      viewBox={"0 0 40 40"}
                      width={"40"}
                      xmlns={"http://www.w3.org/2000/svg"}
                    >
                      {"\n"}
                      <path
                        d={
                          "M39.7118 2.38343C39.7118 1.27886 38.8164 0.383431 37.7118 0.38343L19.7118 0.383432C18.6072 0.383431 17.7118 1.27886 17.7118 2.38343C17.7118 3.488 18.6072 4.38343 19.7118 4.38343L35.7118 4.38343L35.7118 20.3834C35.7118 21.488 36.6072 22.3834 37.7118 22.3834C38.8164 22.3834 39.7118 21.488 39.7118 20.3834L39.7118 2.38343ZM3.77066 39.153L39.126 3.79764L36.2976 0.969218L0.942232 36.3246L3.77066 39.153Z"
                        }
                      ></path>
                      {"\n"}
                    </svg>
                  </div>
                  <img
                    alt={"Book A Call"}
                    className={"circle-text"}
                    height={"240"}
                    loading={"lazy"}
                    src={
                      "/res/images/62898f38a920a93141b23acd/6289998aede950fd8e0df7f7_circle-img-f0989ddc.png"
                    }
                    style={{
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-156.024deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                      willChange: "transform",
                    }}
                    width={"240"}
                  />
                </a>
              </div>
            </div>
          </div>
          <div
            className={"stats-right"}
            id={"w-node-c16909a6-eb22-1f72-b0be-641efb5ec11e-73b23ace"}
          >
            <div className={"stat-item"}>
              <div className={"stat-number"}>{"40+"}</div>
              <p className={"text-large"}>{"Systems"}</p>
            </div>
            <div className={"stat-item"}>
              <div className={"stat-number"}>{"12"}</div>
              <p className={"text-large"}>
                {"Products"}
                <br />
                {"shipped"}
              </p>
            </div>
            <div className={"stat-item"}>
              <div className={"stat-number"}>{"99.9%"}</div>
              <p className={"text-large"}>{"Uptime"}</p>
            </div>
            <div className={"stat-item"}>
              <div className={"stat-number"}>{"18"}</div>
              <p className={"text-large"}>
                {"Engineers"}
                <br />
                {"& researchers"}
              </p>
            </div>
            <div className={"stat-item mb-0"}>
              <div className={"stat-number"}>{"2024"}</div>
              <p className={"text-large"}>
                {"Founded"}
                <br />
                {"in Lagos"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
