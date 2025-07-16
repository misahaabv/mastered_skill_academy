import React from "react";

const logos = [
  {
    src: "/lovable-uploads/af4d12c8-8be0-43da-8572-67088bc7abaf.png",
    alt: "iCEEDS",
    height: 60,
  },
  {
    src: "/lovable-uploads/1afa6961-8272-4210-8fb3-71ac5a1ea6e4.png",
    alt: "Council for Technology & Science Skills",
    height: 60,
  },
  {
    src: "/lovable-uploads/ISO_cert.png",
    alt: "Internation Standard Organization 9001:2015 Logo",
    height: 60,
  },
  {
    src: "/lovable-uploads/IAF_cert.png",
    alt: "International Accreditation Forum Logo",
    height: 60,
  },
  {
    src: "/lovable-uploads/EIAC_cert.png",
    alt: "EIAC Logo",
    height: 60,
  }
];

export default function CertificationsSection() {
  return (
    <section className="w-full bg-white py-12 px-0 md:px-0 border-t pb-10 pt-8">
      <div className="max-w-none mx-auto flex flex-col items-center mb-0 pb-0">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary mb-12">
          Our Certifications & Accreditations
        </h2>
        <div className="relative w-full overflow-x-hidden">
          <div
            className="flex items-center gap-16 min-h-[110px]"
            style={{
              // This gives some side padding so logos don't touch edges
              paddingLeft: "2vw",
              paddingRight: "2vw"
            }}
          >
            <div
              className="marquee-track flex gap-16"
              style={{
                display: "flex",
                width: "max-content",
                animation: "certification-marquee 20s linear infinite"
              }}
            >
              {[...logos, ...logos, ...logos].map((logo, i) => (
                <img
                  key={i}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-[48px] md:h-[60px] w-auto object-contain select-none opacity-90 hover:opacity-100 transition"
                  draggable={false}
                  style={{ maxHeight: logo.height }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
        /* The seamless looping (translateX -50%) on full duplicate set */
        @keyframes certification-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-track {
          animation: certification-marquee 20s linear infinite;
        }
        @media (max-width: 767px) {
          .marquee-track {
            animation-duration: 12s !important;
          }
        }
        `}
      </style>
    </section>
  );
}

