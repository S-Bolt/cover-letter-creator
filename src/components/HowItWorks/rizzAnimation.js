"use-client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Rizz() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <motion.span
        ref={ref}
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 1 }}
        className="text-primary font-leckerli"
      >
        Rizz
      </motion.span>{" "}
    </>
  );
}
