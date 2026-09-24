export default function Contact() {
  return (
    <section className={"section contact"} id={"contact"}>
      <div className={"container"}>
        <div className={"contact-wrapper"}>
          <div className={"contact-title"}>{"Let's talk!"}</div>
          <a
            className={"contact-email w-inline-block"}
            data-w-id={"215539cb-78c5-b825-0a4f-497d418047f7"}
            href={
              "mailto:hello@nexusbert.com?subject=You%20have%20got%20an%20email"
            }
          >
            <div className={"email-adderss"}>{"hello@nexusbert.com"}</div>
            <div className={"email-underline"}></div>
          </a>
        </div>
      </div>
    </section>
  );
}
