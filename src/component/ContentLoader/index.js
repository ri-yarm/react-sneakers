import React from "react";
import ContentLoader from "react-content-loader";

export const MyLoader = (props) => (
  <ContentLoader
    speed={3}
    width={145}
    height={220}
    viewBox="0 0 150 210"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="10" ry="10" width="150" height="115" />
    <rect x="0" y="122" rx="5" ry="5" width="150" height="15" />
    <rect x="0" y="140" rx="4" ry="4" width="92" height="15" />
    <rect x="2" y="176" rx="5" ry="5" width="60" height="8" />
    <rect x="2" y="190" rx="5" ry="5" width="80" height="20" />
    <rect x="116" y="179" rx="7" ry="7" width="32" height="32" />
  </ContentLoader>
);
