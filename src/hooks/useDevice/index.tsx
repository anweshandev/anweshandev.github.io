import { useMediaQuery } from "@uidotdev/usehooks";
import { useMemo } from "react";

// Define the shape of our return object for strict TypeScript support
export interface DeviceState {
  isPhone: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  type: "phone" | "tablet" | "desktop" | "unknown";
}

export default function useDevice(): DeviceState {
  // 1. Define specific media queries
  const isPhonePortrait = useMediaQuery("only screen and (max-width : 767px) and (orientation: portrait)");
  const isPhoneLandscape = useMediaQuery("only screen and (max-height : 767px) and (orientation: landscape)");
  const isTablet = useMediaQuery("only screen and (min-width : 768px) and (max-width : 991px) and (orientation: portrait)");
  const isDesktop = useMediaQuery("only screen and (min-width : 992px)");

  // 2. Compute the object once per change
  return useMemo(() => {
    const isPhone = isPhonePortrait || isPhoneLandscape;
    
    let type: DeviceState["type"] = "unknown";
    if (isPhone) type = "phone";
    else if (isTablet) type = "tablet";
    else if (isDesktop) type = "desktop";

    return {
      isPhone,
      isTablet,
      isDesktop,
      type,
    };
  }, [isPhonePortrait, isPhoneLandscape, isTablet, isDesktop]);
}
