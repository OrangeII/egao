import React, { useEffect, useRef, useState } from "react";

export default function EgaoMascot() {
  const mascotRef = useRef<HTMLDivElement>(null);
  const leftArmRef = useRef<HTMLDivElement>(null);
  const rightArmRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (!mascotRef.current || !leftArmRef.current || !rightArmRef.current)
      return;

    // Get mascot center position for flipping
    const mascotRect = mascotRef.current.getBoundingClientRect();
    const mascotCenterX = mascotRect.left + mascotRect.width / 2;
    const mascotCenterY = mascotRect.top + mascotRect.height / 2;

    // Determine if mascot should be flipped based on mouse position
    const shouldFlipHorizontally = mousePosition.x < mascotCenterX;
    const shouldFlipVertically = mousePosition.y > mascotCenterY;

    // Get positions of each arm
    const leftArmRect = leftArmRef.current.getBoundingClientRect();
    const rightArmRect = rightArmRef.current.getBoundingClientRect();

    // Calculate center positions of each arm
    const leftArmCenterX = leftArmRect.left + leftArmRect.width / 2;
    const leftArmCenterY = leftArmRect.top + leftArmRect.height / 2;

    const rightArmCenterX = rightArmRect.left + rightArmRect.width / 2;
    const rightArmCenterY = rightArmRect.top + rightArmRect.height / 2;

    // Calculate angle from each arm to mouse
    const leftDeltaX = mousePosition.x - leftArmCenterX;
    const leftDeltaY = mousePosition.y - leftArmCenterY;
    const leftAngle = Math.atan2(leftDeltaY, leftDeltaX) * (180 / Math.PI);

    const rightDeltaX = mousePosition.x - rightArmCenterX;
    const rightDeltaY = mousePosition.y - rightArmCenterY;
    const rightAngle = Math.atan2(rightDeltaY, rightDeltaX) * (180 / Math.PI);

    const horizontalMultiplier = shouldFlipHorizontally ? -1 : 1;
    const verticalMultiplier = shouldFlipVertically ? -1 : 1;

    //get mouse quadrant with respect to the kaomoji center
    const mouseQuadrant = {
      x: mousePosition.x < mascotCenterX ? "left" : "right",
      y: mousePosition.y < mascotCenterY ? "top" : "bottom",
    };

    // Apply flip transform to entire mascot
    mascotRef.current.style.transform = `scaleX(${horizontalMultiplier})`;

    // Apply individual transforms to arms
    // if mouse is in top left, flip horizontally and vertically
    if (mouseQuadrant.x === "left" && mouseQuadrant.y === "top") {
      leftArmRef.current.style.transform = `rotate(${
        leftAngle * horizontalMultiplier * verticalMultiplier
      }deg) scaleX(${horizontalMultiplier}) scaleY(${verticalMultiplier})`;
      rightArmRef.current.style.transform = `rotate(${
        rightAngle * horizontalMultiplier * verticalMultiplier
      }deg) scaleX(${horizontalMultiplier}) scaleY(${verticalMultiplier})`;
    }
    // if mouse is in bottom left, flip horizontally
    else if (mouseQuadrant.x === "left" && mouseQuadrant.y === "bottom") {
      leftArmRef.current.style.transform = `rotate(${
        leftAngle * horizontalMultiplier
      }deg) scaleX(${horizontalMultiplier}) scaleY(${verticalMultiplier})`;
      rightArmRef.current.style.transform = `rotate(${
        rightAngle * horizontalMultiplier
      }deg) scaleX(${horizontalMultiplier}) scaleY(${verticalMultiplier})`;
    }
    //if mouse is in top right, flip vertically
    else if (mouseQuadrant.x === "right" && mouseQuadrant.y === "top") {
      console.log("test");
      leftArmRef.current.style.transform = `rotate(${leftAngle}deg) scaleY(${verticalMultiplier})`;
      rightArmRef.current.style.transform = `rotate(${rightAngle}deg) scaleY(${verticalMultiplier})`;
    }
    //otherwise only set the angle
    else {
      leftArmRef.current.style.transform = `rotate(${leftAngle}deg)`;
      rightArmRef.current.style.transform = `rotate(${rightAngle}deg)`;
    }
  }, [mousePosition]);

  return (
    <div>
      <div className="kaomoji" ref={mascotRef} style={{ width: "fit-content" }}>
        <div className="body-round-left"></div>
        <div
          className="arms-hugging"
          ref={leftArmRef}
          style={{ transformOrigin: "center left" }}
        ></div>
        <div className="face-happy"></div>
        <div className="body-round-right"></div>
        <div
          className="arms-hugging"
          ref={rightArmRef}
          style={{ transformOrigin: "center left" }}
        ></div>
      </div>
    </div>
  );
}
