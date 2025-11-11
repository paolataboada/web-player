import React from "react";

interface Props {
  gradientFrom: string;
  gradientTo: string;
  background: string;
  children: React.ReactNode;
  className?: string;
  color?: string;
  onClick?: () => void;
}

const GradientTextWithBorder = ({
  gradientFrom,
  gradientTo,
  background,
  children,
  className: cn,
  color,
  onClick,
}: Props) => {
  const textStyle: React.CSSProperties = {
    background:
      color ?? `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`, // Gradiente para el texto
    WebkitBackgroundClip: "text",
    color: "transparent",
    WebkitTextFillColor: "transparent",
    position: "relative",
    display: "inline-block",
    padding: "10px",
    zIndex: 1,
  };

  const backgroundStyle: React.CSSProperties = {
    background,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: "8px",
    zIndex: -1,
  };

  const gradientBorderStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(to right, ${gradientTo}, ${gradientFrom})`, // Gradiente para el borde
    zIndex: -1,
    borderRadius: "8px",
    padding: "1.5px",
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", // Truco para bordes gradientes
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
  };

  return (
    <div
      style={{ position: "relative", display: "inline-block", width: "100%" }}
      onClick={onClick}
    >
      <div style={backgroundStyle} />
      <h1 style={textStyle} className={cn}>
        {children}
      </h1>
      <div style={gradientBorderStyle} />
    </div>
  );
};

export default GradientTextWithBorder;