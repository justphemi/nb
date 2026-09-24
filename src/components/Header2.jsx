export default function Header2() {
  return (
    <section className={"section header"} id={"Header"}>
      <div className={"container"}>
        <div className={"header-content"}>
          <h1 className={"header-title"}>{"Intelligence, engineered."}</h1>
          <p
            style={{
              marginTop: 18,
              maxWidth: 620,
              opacity: 0.72,
              fontSize: 18,
              lineHeight: 1.6,
            }}
          >
            We design, develop and deploy AI-powered software, backend systems,
            cloud platforms, machine learning applications then we stay for the
            operational discipline that makes them last.
          </p>
          <div className={"gif-wrapper"}>
            <img
              alt
              className={"arrow-gif"}
              height={"400"}
              loading={"lazy"}
              src={
                "/res/images/62898f38a920a93141b23acd/628aa1e89076f3076893a56b_hero-arrow-18827532.gif"
              }
              width={"400"}
            />
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
}
