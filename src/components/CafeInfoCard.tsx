import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import type { CafeInfo } from "../types";
import { checkIsOpen, formatHour } from "../utils/helpers";
import logo from "../assets/GhahveDar-logo.svg";

interface CafeInfoCardProps {
  info: CafeInfo;
}

// Unique SVG filter ID to avoid conflicts
const FILTER_ID = "liquid-glass-cafe";

export function CafeInfoCard({ info }: CafeInfoCardProps) {
  const isOpen = checkIsOpen(info.openHours.from, info.openHours.to);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isFixed, setIsFixed] = useState(false);
  const [cardTop, setCardTop] = useState(0);

  const { scrollY } = useScroll();

  useEffect(() => {
    const originalTop = cardRef.current?.offsetTop ?? 0;
    setCardTop(originalTop);

    const unsub = scrollY.on("change", (y) => {
      setIsFixed(y > originalTop - 16);
    });
    return () => unsub();
  }, [scrollY]);

  // Blur intensity based on scroll
  const blur = useTransform(scrollY, [0, cardTop], [0, 14]);

  // Liquid distortion intensity (0 → 18 as user scrolls)
  //   const distortion = useTransform(scrollY, [0, cardTop], [0, 18]);

  // Turbulence base frequency animates subtly when fixed
  const [turbulenceAnim, setTurbulenceAnim] = useState(false);
  useEffect(() => {
    if (isFixed) {
      const t = setTimeout(() => setTurbulenceAnim(true), 50);
      return () => clearTimeout(t);
    } else {
      setTurbulenceAnim(false);
    }
  }, [isFixed]);

  return (
    <>
      {/* Hidden SVG filter definition */}
      <svg
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          overflow: "hidden",
        }}
        aria-hidden="true"
      >
        <defs>
          <filter
            id={FILTER_ID}
            x="-10%"
            y="-10%"
            width="120%"
            height="120%"
            colorInterpolationFilters="sRGB"
          >
            {/* Organic noise for liquid glass */}
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.018 0.022"
              numOctaves="3"
              seed="8"
              result="noise"
            >
              {turbulenceAnim && (
                <>
                  <animate
                    attributeName="baseFrequency"
                    values="0.018 0.022; 0.022 0.018; 0.018 0.022"
                    dur="6s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="seed"
                    values="8; 12; 8"
                    dur="9s"
                    repeatCount="indefinite"
                  />
                </>
              )}
            </feTurbulence>

            {/* Displacement creates the liquid lens warp */}
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="0"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            >
              {turbulenceAnim && (
                <animate
                  attributeName="scale"
                  values="0; 14; 10; 14; 0"
                  dur="1.2s"
                  fill="freeze"
                />
              )}
            </feDisplacementMap>

            {/* Slight color matrix to boost glass tint */}
            <feColorMatrix
              in="displaced"
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.04
                      0 0 1 0 0.02
                      0 0 0 1 0"
            />
          </filter>
        </defs>
      </svg>

      {/* Layout placeholder when fixed */}
      {isFixed && <div style={{ height: "96px" }} />}

      <motion.div
        ref={cardRef}
        style={
          isFixed
            ? {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 30,
                maxWidth: "448px",
                margin: "0 auto",
              }
            : {}
        }
        className="mx-4 -mt-24 relative z-10"
      >
        {/* ─── Liquid Glass backdrop layer (only when fixed) ─── */}
        <AnimatePresence>
          {isFixed && (
            <motion.div
              key="liquid-glass"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "1rem",
                margin: "1rem",
                overflow: "hidden",
                zIndex: -1,
                filter: `url(#${FILTER_ID})`,
                // The actual frosted glass stack
                backdropFilter: `blur(${blur.get()}px) saturate(180%) brightness(1.1)`,
                WebkitBackdropFilter: `blur(${blur.get()}px) saturate(180%) brightness(1.1)`,
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.14) 100%)",
                boxShadow:
                  "inset 0 1px 1px rgba(255,255,255,0.35), inset 0 -1px 1px rgba(0,0,0,0.15), 0 8px 32px rgba(0,0,0,0.25)",
              }}
            >
              {/* Specular highlight — the key iOS liquid glass detail */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "10%",
                  right: "10%",
                  height: "40%",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0) 100%)",
                  borderRadius: "0 0 50% 50%",
                  filter: "blur(4px)",
                }}
              />

              {/* Bottom rim shadow for depth */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "5%",
                  right: "5%",
                  height: "30%",
                  background:
                    "linear-gradient(0deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0) 100%)",
                  borderRadius: "50% 50% 0 0",
                  filter: "blur(6px)",
                }}
              />

              {/* Chromatic aberration edge (iOS lens flare feel) */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  border: "1px solid rgba(255,255,255,0.22)",
                  boxShadow: "inset 0 0 0 1px rgba(100,200,255,0.08)",
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── Card content ─── */}
        <motion.div
          style={{
            backdropFilter: isFixed
              ? `blur(${blur.get()}px) saturate(160%)`
              : "none",
            WebkitBackdropFilter: isFixed
              ? `blur(${blur.get()}px) saturate(160%)`
              : "none",
          }}
          className={`bg-[#1b2a1e] rounded-2xl p-4 text-white shadow-xl transition-all duration-300 ${
            isFixed ? "rounded-2xl mx-4 mt-4 shadow-2xl !bg-[#1b2a1ecc]" : ""
          }`}
        >
          <div className="flex items-start gap-3">
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow p-1">
              <img
                src={logo}
                alt="لوگو"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-xl font-black">{info.name}</h1>
              <p className="text-white/70 text-xs mt-0.5 leading-5 line-clamp-2">
                {info.tagline}
              </p>
              <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2">
                <div className="flex items-center gap-1 text-white/80 text-xs">
                  <MapPin size={12} />
                  <span>{info.address}</span>
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <Clock size={12} className="text-white/60" />
                  <span className="text-white/60">
                    {formatHour(info.openHours.from)} –{" "}
                    {formatHour(info.openHours.to)}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 mr-[1px] mt-1 text-xs">
                <span
                  className={`w-2 h-2 rounded-full animate-pulse ${isOpen ? "bg-emerald-400" : "bg-red-400"}`}
                />
                <span className={isOpen ? "text-emerald-400" : "text-red-400"}>
                  {isOpen ? "سفارش می‌پذیریم" : "در حال حاضر بسته"}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
