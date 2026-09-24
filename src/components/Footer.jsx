export default function Footer() {
  return (
    <section className={"footer"}>
      <div className={"container"}>
        <div className={"footer-content"}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                display: "grid",
                placeItems: "center",
                width: 42,
                height: 42,
                borderRadius: 10,
                background: "#9900CC",
                color: "white",
              }}
            >
              <svg
                viewBox="0 0 64 64"
                width="22"
                height="22"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M32 6C35.2 25.4 38.6 28.8 58 32C38.6 35.2 35.2 38.6 32 58C28.8 38.6 25.4 35.2 6 32C25.4 28.8 28.8 25.4 32 6Z" />
              </svg>
            </span>
            <span
              style={{
                fontWeight: 800,
                fontSize: 18,
                color: "white",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              NEXUSBERT
            </span>
          </div>
          <div
            className={"footer-right"}
            id={"w-node-d9a06255-2e7c-8dd9-33e8-20ff00267a6f-73b23ace"}
          >
            <div
              className={"company-links-wrapper"}
              id={"w-node-_5f0467db-8010-87ac-7ae7-1dafabf8ea5e-73b23ace"}
            >
              <a className={"company-link"} href={"/capabilities"}>{"Capabilities"}</a>
              <a className={"company-link"} href={"/labs"}>{"Labs"}</a>
              <a className={"company-link"} href={"/about"}>{"About"}</a>
              <a className={"company-link"} href={"/contact"}>{"Contact"}</a>
            </div>
            <div
              className={"social-link-wrapper"}
              id={"w-node-a1d7b570-bde7-566b-953a-615df996a4d0-73b23ace"}
            >
              <a className={"social-link"} href={"#"} target={"_blank"}>
                {"LinkedIn"}
              </a>
              <a className={"social-link"} href={"https://x.com/nexusbert"} target={"_blank"} rel={"noopener noreferrer"}>
                {"X"}
              </a>
              <a className={"social-link"} href={"mailto:hello@nexusbert.com"}>
                {"Email"}
              </a>
            </div>
          </div>
        </div>
        <div className={"footer-divider"}></div>
        <div className={"copyright-wrapper"}>
          <div className={"copyright-left"}>
            <div className={"legal-link-wrapper"}>
              <a className={"legal-link"} href={"/privacy"}>
                {"Privacy"}
              </a>
              <a className={"legal-link"} href={"/terms"}>
                {"Terms"}
              </a>
              <span className={"legal-link"} style={{ opacity: 0.6 }}>
                {"West Africa - Remote, worldwide"}
              </span>
            </div>
          </div>
          <div className={"copyright-right"}>
            <div className={"text-small copyright-text"}>
              {"©2026 nexusbert"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
