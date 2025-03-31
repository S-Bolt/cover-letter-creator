"use client";
import LargeGenerator from "@/components/CLGenerator/largeGenerator";
import MobileGenerator from "@/components/CLGenerator/mobileGenerator";
import useWindowSize from "@/lib/hooks/useWindowSize";

export default function CoverLetterGenerator() {
  const width = useWindowSize();
  return width > 640 ? <LargeGenerator /> : <MobileGenerator />;
}
