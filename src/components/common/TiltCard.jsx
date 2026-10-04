import useTilt from "../../hooks/useTilt";
import "./TiltCard.css";

export default function TiltCard({ className = "", children, max = 10, glare = true, ...rest }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt({ max });

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      {...rest}
    >
      <div className="tilt-card-inner">
        {children}
        {glare && <span className="tilt-card-glare" />}
      </div>
    </div>
  );
}
