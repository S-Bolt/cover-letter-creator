"use client";
import LargeGenerator from "@/components/Generator/largeGenerator";
import MobileGenerator from "@/components/Generator/mobileGenerator";
import useWindowSize from "@/lib/hooks/useWindowSize";

export default function CoverLetterGenerator() {
  const width = useWindowSize();
  return width > 640 ? <LargeGenerator /> : <MobileGenerator />;
}
