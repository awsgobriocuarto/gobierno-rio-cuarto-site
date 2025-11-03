import React from "react";

export default function Icon({ icon }) {
  const name = icon.name ? icon.name : "waves";
  const color = icon.color ? icon.color : "pink";
  const size = icon.size ? icon.size : "50";
  return (
    <>
      {/* eslint-disable-next-line */}
      <img
        src={`/images/icons/${name}-${color}.webp`}
        width={size}
        height={size}
        alt="icon"
      />
    </>
  );
}
