export default function ShineBorder({
  borderWidth = 1.5,
  duration = 14,
  shineColor = "#21A68A",
  className = "",
  style = {},
  ...props
}) {
  return (
    <div
      style={{
        "--border-width": `${borderWidth}px`,
        "--duration": `${duration}s`,
        backgroundImage: `radial-gradient(transparent, transparent, ${
          Array.isArray(shineColor) ? shineColor.join(",") : shineColor
        }, transparent, transparent)`,
        backgroundSize: "300% 300%",
        mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMask:
          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        padding: "var(--border-width)",
        // Add inline animation as fallback
        animation: `shine ${duration}s linear infinite`,
        ...style,
      }}
      className={`motion-safe:animate-shine pointer-events-none absolute inset-0 rounded-[inherit] ${className}`}
      {...props}
    />
  );
}
