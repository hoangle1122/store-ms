import React, { useRef, useEffect, Children, cloneElement } from "react";
import "./CustomFullpage.css";

const CustomFullpage = ({
  children,
  onSectionChange,
  navigationTooltips = [],
}) => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const sectionRefs = useRef([]);
  const isAnimating = useRef(false);
  const currentSectionIndex = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = Array.from(container.querySelectorAll(".cfp-section"));
    sectionRefs.current = sections;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target);
            if (onSectionChange) {
              onSectionChange(index);
            }
            document
              .querySelectorAll(".cfp-navigation-dot")
              .forEach((dot, i) => {
                dot.classList.toggle("active", i === index);
              });
          }
        });
      },
      { threshold: 0.7 }
    );

    sectionRefs.current.forEach((section) => observer.observe(section));

    const handleWheel = (e) => {
      e.preventDefault();
      if (isAnimating.current) return;

      const direction = e.deltaY > 0 ? "down" : "up";
      let nextIndex = currentSectionIndex.current;

      if (direction === "down") {
        nextIndex = Math.min(
          sectionRefs.current.length - 1,
          currentSectionIndex.current + 1
        );
      } else {
        nextIndex = Math.max(0, currentSectionIndex.current - 1);
      }

      if (nextIndex !== currentSectionIndex.current) {
        scrollToSection(nextIndex);
        isAnimating.current = true;
        // Set a cooldown longer than the animation
        setTimeout(() => {
          isAnimating.current = false;
        }, 1200); // 1.2 giây
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
      container.removeEventListener("wheel", handleWheel);
    };
  }, [children, onSectionChange]);

  const scrollToSection = (index) => {
    if (wrapperRef.current) {
      wrapperRef.current.style.transform = `translateY(-${index * 100}vh)`;
      currentSectionIndex.current = index; // Update index immediately
    }
  };

  return (
    <div className="cfp-container" ref={containerRef}>
      <div className="cfp-wrapper" ref={wrapperRef}>
        {Children.map(children, (child, index) =>
          cloneElement(child, {
            className: `${child.props.className || ""} cfp-section`,
          })
        )}
      </div>
      <div className="cfp-navigation">
        {navigationTooltips.map((tooltip, index) => (
          <div
            key={index}
            className="cfp-navigation-dot"
            onClick={() => scrollToSection(index)}
            data-tooltip={tooltip}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CustomFullpage;
