import Marquee from "react-fast-marquee";

const images = [
  "../skills/html.png",
  "../skills/css.png",
  "../skills/js.png",
  "../skills/react.png",
  "../skills/tailwind.png",
  "../skills/bootstrap.png",
  "../skills/jquery.png",
  "../skills/c++.png",
  "../skills/figma.png",
  "../skills/photoshop.png",
  "../skills/illustrator.png",
  "../skills/php.png",
  "../skills/mysql.png",
];

export default function MarqueeDemo() {
  return (
    <div className="relative flex flex-col items-center justify-center gap-6">
      <Marquee pauseOnHover gradient={false}>
        {images.map((src, idx) => (
          <img key={idx} src={src} alt="carousel" className="h-16 w-16 mx-2" />
        ))}
      </Marquee>
      <Marquee pauseOnHover gradient={false} direction="right">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt="carousel" className="h-16 w-16 mx-2" />
        ))}
      </Marquee>
      <Marquee pauseOnHover gradient={false}>
        {images.map((src, idx) => (
          <img key={idx} src={src} alt="carousel" className="h-16 w-16 mx-2" />
        ))}
      </Marquee>
      <Marquee pauseOnHover gradient={false} direction="right">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt="carousel" className="h-16 w-16 mx-2" />
        ))}
      </Marquee>
    </div>
  );
}
