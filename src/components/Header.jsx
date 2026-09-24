export default function Header() {
  return (
    <nav className={"navbar"}>
      <div className={"container nav"}>
        <div className={"navbar-wrapper"}>
          <div className={"nav-menu"}>
            <a className={"nav-link"} href={"#about"}>
              {"About"}
            </a>
            <a className={"nav-link"} href={"#services"}>
              {"Services"}
            </a>
            <a className={"nav-link"} href={"#works"}>
              {"Work"}
            </a>
            <a className={"nav-link"} href={"#contact"}>
              {"Contact"}
            </a>
          </div>
          <a
            className={"logo-wrapper w-inline-block w--current"}
            href={"#Header"}
            style={{ display: "flex", alignItems: "center", gap: 12 }}
          >
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
          </a>
          <div
            className={"menu-wrapper"}
            data-w-id={"970e47b0-f4a6-204c-d73e-d241b75e3428"}
          >
            <img
              alt
              className={"menu-open-icon"}
              height={"25"}
              loading={"lazy"}
              src={
                "/res/assets/62898f38a920a93141b23acd/628a9b795efc216c52a8f307_menu-icon-1c84eae3.svg"
              }
              width={"29"}
            />
            <img
              alt
              className={"menu-close-icon"}
              height={"24"}
              loading={"lazy"}
              src={
                "https://cdn.prod.website-files.com/62898f38a920a93141b23acd/628a9d37ef00fa90dfa4ef53_Close.svg"
              }
              width={"24"}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
