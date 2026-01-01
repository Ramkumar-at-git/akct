import { ReactNode } from "react";

interface SectionBlurOverlayProps {
  children: ReactNode;
  className?: string;
}

const SectionBlurOverlay = ({ children, className = "" }: SectionBlurOverlayProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Subtle blur overlay - 3D object visible behind */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/30 z-0" />
      {/* Content layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default SectionBlurOverlay;
