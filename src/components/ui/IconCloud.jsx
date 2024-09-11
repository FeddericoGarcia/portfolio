"use client";

import { useEffect, useMemo, useState } from "react";
import { useThemeMode }  from "../../hooks/useThemeMode";

import {
  Cloud,
  fetchSimpleIcons,
  renderSimpleIcon,
} from "react-icon-cloud";

const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: false,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

const renderCustomIcon = (icon, theme) => {
  const bgHex = theme.palette.mode === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme.palette.mode === "dark" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme.palette.mode === "light" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      title: icon.name,
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
};

const IconCloud = ({ iconSlugs }) => {
  const [data, setData] = useState(null);
  const { theme } = useThemeMode();

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "light")
    );
  }, [data, theme]);

  return (
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  );
};

export default IconCloud;