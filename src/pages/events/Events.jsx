import { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export const Events = () => {
  const backgroundLayers = [
    { src: "/2.png.webp", alt: "Stars", zIndex: 1 },
    { src: "/1.png.webp", alt: "Dark Cloud", zIndex: 2 },
    { src: "/0.png.webp", alt: "White cloud", zIndex: 3 },
  ];

  const images = [
    { src: "planet-blue.webp", alt: "Planet Blue", zIndex: 1 },
    { src: "planet-green.webp", alt: "Planet Green", zIndex: 1 },
    { src: "planet-yellow.webp", alt: "Planet Yellow", zIndex: 1 },
    { src: "indica-product.webp", alt: "Event 1", zIndex: 1 },
  ]

  const eventRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    gsap.to(eventRef.current, {
      y: -20,
      x: -20,
      duration: 3,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
      repeatDelay: 0
    });

    gsap.to(textRef.current, {
      x: "100vw",
      duration: 20,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: (x) => {
          const xNum = parseFloat(x);
          return `${(xNum % 100) - 100}vw`;
        }
      }
    });
  });

  return (
    <section
      id="events"
      className="relative w-screen h-screen bg-blue-900 [background:linear-gradient(180deg,#162145_0%,#122D53_35%,#0B4772_55%,#016797_100%)] overflow-hidden"
    >
      <div className="absolute inset-0 z-0" />
      {backgroundLayers.map((layer) => (
        <img
          key={layer.src}
          src={layer.src}
          alt={layer.alt}
          className={`absolute inset-0 w-full h-full object-cover`}
          style={{ zIndex: layer.zIndex }}
        />
      ))}

      <div className="absolute top-50 z-10 w-full overflow-hidden">
        <h1
          ref={textRef}
          className="uppercase text-[220px] font-bold whitespace-nowrap [-webkit-text-stroke:1px_lightblue] [-webkit-text-fill-color:transparent] text-transparent filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
        >
          Technical Events Technical Events Technical Events
        </h1>
      </div>

      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <img className="absolute -bottom-220 transition duration-[10s] ease-in-out" src={images[0].src} alt="" style={{
          animation: 'spin-reverse 180s linear infinite'
        }} />
      </div>

      <div ref={eventRef} className="relative z-30 w-full h-full flex items-center justify-center">
        <img className="absolute bottom-200 h-[60%]" src={images[3].src} alt="" />
      </div>

      <div className="nav-holder" style={{
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'auto',
        maxWidth: '560px',
        margin: 'auto'
      }}>
        <div className="clipped-shape relative w-[90%] h-20">
        </div>
        <div className="absolute inset-0 flex items-center px-2 pointer-events-auto">
          <div className="w-full overflow-hidden h-full flex justify-around items-center text-blue-900 font-bold">
            <button className="px-4 py-2">Home</button>
            <button className="px-4 py-2">Events</button>
            <button className="px-4 py-2">About</button>
            <button className="px-4 py-2">Contact</button>
          </div>
        </div>
      </div>
    </section>
  );
};