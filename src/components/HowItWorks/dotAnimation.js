import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Dot() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      className="w-1 h-1 bg-primary my-2"
      animate={isInView ? { opacity: [1, 0.2, 1] } : { opacity: 0 }}
      transition={{ duration: 2 }}
    />
  );
}
