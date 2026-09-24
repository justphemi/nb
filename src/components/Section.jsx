import { useState } from "react";

export default function Section() {
  const [playing, setPlaying] = useState(false);
  return (
    <section className={"section video"}>
      <div className={"container video-wrapper"}>
        <div
          className={"header-video"}
          data-w-id={"9334b830-af8e-59b2-674e-0c1ae53631f1"}
          style={{position:"relative", aspectRatio:"16 / 9", overflow:"hidden", borderRadius:16, background:"#0D100D"}}
        >
          {!playing ? (
            <>
              <img
                alt={"Header Video Thumbnail"}
                className={"video-thumbnail"}
                height={"700"}
                loading={"lazy"}
                sizes={
                  "(max-width: 479px) 90vw, (max-width: 767px) 92vw, (max-width: 991px) 94vw, (max-width: 1290px) 93vw, 1200px"
                }
                src={
                  "/res/images/62898f38a920a93141b23acd/6289998a90f1891194152964_video-thumbnail-0ea10692.jpg"
                }
                srcSet={
                  "https://cdn.prod.website-files.com/62898f38a920a93141b23acd/6289998a90f1891194152964_video%20thumbnail-p-500.jpeg 500w, https://cdn.prod.website-files.com/62898f38a920a93141b23acd/6289998a90f1891194152964_video%20thumbnail-p-800.jpeg 800w, https://cdn.prod.website-files.com/62898f38a920a93141b23acd/6289998a90f1891194152964_video%20thumbnail-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/62898f38a920a93141b23acd/6289998a90f1891194152964_video%20thumbnail.jpg 1200w"
                }
                width={"1200"}
                style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}}
              />
              <button
                aria-label={"play video"}
                className={"play-btn w-inline-block"}
                onClick={() => setPlaying(true)}
                style={{
                  position:"absolute",
                  left:"50%",
                  top:"50%",
                  transform:"translate(-50%, -50%)",
                  willChange: "transform",
                  border:"none",
                  cursor:"pointer",
                }}
              >
                <div className={"play-btn-icon w-embed"}>
                  <svg
                    fill={"none"}
                    height={"41"}
                    viewBox={"0 0 35 41"}
                    width={"35"}
                    xmlns={"http://www.w3.org/2000/svg"}
                  >
                    {"\n"}
                    <path
                      d={
                        "M34.3975 19.2667C35.1097 19.6779 35.1097 20.7059 34.3975 21.1171L1.60246 40.0513C0.890259 40.4625 0 39.9485 0 39.1261V1.25765C0 0.435266 0.890259 -0.0787241 1.60246 0.332468L34.3975 19.2667Z"
                      }
                      fill={"#0D100D"}
                    ></path>
                    {"\n"}
                  </svg>
                </div>
              </button>
            </>
          ) : (
            <iframe
              src={"https://www.youtube.com/embed/Rl_vsFznVxM?autoplay=1&rel=0&modestbranding=1"}
              title={"Nexusbert video"}
              allow={"autoplay; fullscreen; encrypted-media"}
              allowFullScreen
              style={{position:"absolute", inset:0, width:"100%", height:"100%", border:0}}
            />
          )}
        </div>
      </div>
    </section>
  );
}
