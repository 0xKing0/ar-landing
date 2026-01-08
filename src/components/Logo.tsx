export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer hexagon frame */}
      <path
        d="M24 2L42 13V35L24 46L6 35V13L24 2Z"
        stroke="#8fbc5a"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Inner tactical elements */}
      <path
        d="M24 2L42 13V35L24 46L6 35V13L24 2Z"
        fill="#8fbc5a"
        fillOpacity="0.1"
      />
      
      {/* Crosshair center */}
      <circle
        cx="24"
        cy="24"
        r="8"
        stroke="#8fbc5a"
        strokeWidth="2"
        fill="none"
      />
      
      <circle
        cx="24"
        cy="24"
        r="3"
        fill="#8fbc5a"
      />
      
      {/* Crosshair lines */}
      <line
        x1="24"
        y1="10"
        x2="24"
        y2="16"
        stroke="#8fbc5a"
        strokeWidth="2"
      />
      <line
        x1="24"
        y1="32"
        x2="24"
        y2="38"
        stroke="#8fbc5a"
        strokeWidth="2"
      />
      <line
        x1="10"
        y1="24"
        x2="16"
        y2="24"
        stroke="#8fbc5a"
        strokeWidth="2"
      />
      <line
        x1="32"
        y1="24"
        x2="38"
        y2="24"
        stroke="#8fbc5a"
        strokeWidth="2"
      />
      
      {/* Corner markers */}
      <path
        d="M14 14L18 14L18 18"
        stroke="#8fbc5a"
        strokeWidth="1.5"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M34 14L30 14L30 18"
        stroke="#8fbc5a"
        strokeWidth="1.5"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M14 34L18 34L18 30"
        stroke="#8fbc5a"
        strokeWidth="1.5"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M34 34L30 34L30 30"
        stroke="#8fbc5a"
        strokeWidth="1.5"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
}
