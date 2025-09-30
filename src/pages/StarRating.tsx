import React, { JSX } from "react";
import Star from "/star.svg"; 

interface StarRatingProps {
    rating: number; 
    maxStars?: number; 
    size?: number; 
}

export default function StarRating({
    rating,
    maxStars = 5,
    size = 24,
}: StarRatingProps) {
    const stars: JSX.Element[] = []; // Explicitly define the type

    for (let i = 0; i < maxStars; i++) {
        const fill = Math.min(Math.max(rating - i, 0), 1); // fraction 0-1

        stars.push(
      <div
        key={i}
        style={{
          position: "relative",
          width: size,
          height: size,
          display: "inline-block",
        }}
      >
        {/* Background gray star */}
        <img
          src={Star}
          alt="star background"
          style={{
            width: size,
            height: size,
            filter: "grayscale(100%) opacity(0.3)", // make it look empty
          }}
        />
        {/* Foreground colored star clipped by fill fraction */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: `${fill * 100}%`,
            overflow: "hidden",
            height: "100%",
          }}
        >
          <img src={Star} alt="star fill" style={{ width: size, height: size }} />
        </div>
      </div>
    );
  }

  return <div className="flex">{stars}</div>;
}