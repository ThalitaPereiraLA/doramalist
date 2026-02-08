import React from 'react';

const FloatingPetals: React.FC = () => {
  const petals = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 10}s`,
    duration: `${8 + Math.random() * 6}s`,
    size: 10 + Math.random() * 15,
    opacity: 0.3 + Math.random() * 0.4,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-petal-fall"
          style={{
            left: petal.left,
            top: '-20px',
            animationDelay: petal.delay,
            animationDuration: petal.duration,
          }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 24 24"
            fill="none"
            style={{ opacity: petal.opacity }}
          >
            <path
              d="M12 2C12 2 8 6 8 12C8 18 12 22 12 22C12 22 16 18 16 12C16 6 12 2 12 2Z"
              fill="hsl(var(--primary))"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FloatingPetals;