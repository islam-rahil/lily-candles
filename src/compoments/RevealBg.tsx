"use client";
import { useInView } from "../hook/useInView";

export default function RevealBg({
  children,
  bgClassName,
  fromClassName = "",
  className = "",
  duration = 1800,
  once = false,
}: {
  children: React.ReactNode;
  /** Fond actuel, révélé au scroll. ex: "bg-[#EDE6D6]" */
  bgClassName: string;
  /** Fond de la section précédente, posé dessous (évite le flash blanc). */
  fromClassName?: string;
  className?: string;
  duration?: number;
  once?: boolean;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ once });

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* Couche permanente = couleur précédente (toujours visible) */}
      {fromClassName && (
        <div aria-hidden className={`absolute inset-0 -z-20 ${fromClassName}`} />
      )}

      {/* Couche révélée = couleur actuelle, en fondu par-dessus */}
      <div
        aria-hidden
        style={{ transitionDuration: `${duration}ms` }}
        className={`absolute inset-0 -z-10 transition-opacity ease-in-out ${bgClassName} ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      />
      {children}
    </div>
  );
}