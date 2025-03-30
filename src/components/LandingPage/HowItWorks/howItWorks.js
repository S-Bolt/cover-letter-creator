"use client";
import DesktopHow from "./desktop-how";
import MobileHow from "./mobile-how";
import useWindowSize from "@/lib/hooks/useWindowSize";

export default function HowItWorks() {
  const width = useWindowSize();
  return <>{width < 768 ? <MobileHow /> : <DesktopHow />}</>;
}
