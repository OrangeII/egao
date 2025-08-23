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

    // Get mascot center position
    const mascotRect = mascotRef.current.getBoundingClientRect();
    const mascotCenterX = mascotRect.left + mascotRect.width / 2;
    const mascotCenterY = mascotRect.top + mascotRect.height / 2;

    // Determine flip states
    const isMouseLeft = mousePosition.x < mascotCenterX;
    const isMouseBelow = mousePosition.y > mascotCenterY;

    // Calculate angles for each arm
    const getArmAngle = (armRef: React.RefObject<HTMLDivElement>) => {
      const armRect = armRef.current!.getBoundingClientRect();
      const armCenterX = armRect.left + armRect.width / 2;
      const armCenterY = armRect.top + armRect.height / 2;
      const deltaX = mousePosition.x - armCenterX;
      const deltaY = mousePosition.y - armCenterY;
      return Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    };

    const leftAngle = getArmAngle(leftArmRef);
    const rightAngle = getArmAngle(rightArmRef);

    // Apply transforms
    const horizontalScale = isMouseLeft ? -1 : 1;
    const verticalScale = isMouseBelow ? -1 : 1;

    mascotRef.current.style.transform = `scaleX(${horizontalScale})`;

    const leftTransform = `
      rotate(${leftAngle * horizontalScale}deg) 
      scaleX(${horizontalScale}) 
      scaleY(${verticalScale * horizontalScale * -1})
    `;
    const rightTransform = `
      rotate(${rightAngle * horizontalScale}deg) 
      scaleX(${horizontalScale}) 
      scaleY(${verticalScale * horizontalScale * -1})
    `;

    leftArmRef.current.style.transform = leftTransform;
    rightArmRef.current.style.transform = rightTransform;
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
