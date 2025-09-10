const WORDS = [
  { text: "FULL.", color: "var(--hero-word-1)" },
  { text: "STACK.", color: "var(--hero-word-2)" },
  { text: "WEB", color: "var(--hero-word-3)" },
  { text: "DEVELOPER.", color: "var(--hero-word-4)" },
  { text: "COMMUNICATION.", color: "var(--hero-word-5)" },
  { text: "PROBLEM", color: "var(--hero-word-6)" },
  { text: "SOLVER.", color: "var(--hero-word-7)" },
  { text: "TECH", color: "var(--hero-word-8)" },
  { text: "PYTHON", color: "var(--hero-word-9)" },
  { text: "AI/ML.", color: "var(--hero-word-10)" },
];

// Shuffle function to randomize word order
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function Row({ reverse = false, isCenter = false, centerWords = [] }) {
  if (isCenter) {
    return (
      <div className={`hero-row center-row ${reverse ? "reverse" : ""}`}>
        {centerWords.map((w, i) => (
          <span 
            key={i} 
            className="hero-word highlighted" 
            style={{ color: w.color }}
          >
            {w.text}
          </span>
        ))}
      </div>
    );
  }
  
  const shuffledWords = shuffleArray([...WORDS, ...WORDS, ...WORDS, ...WORDS]);
  return (
    <div className={`hero-row ${reverse ? "reverse" : ""}`}>
      {shuffledWords.map((w, i) => {
        // Randomly highlight some words for spotlight effect
        const isHighlighted = Math.random() < 0.15; // 15% chance
        return (
          <span 
            key={i} 
            className={`hero-word ${isHighlighted ? 'highlighted' : ''}`} 
            style={{ color: w.color }}
          >
            {w.text}
          </span>
        );
      })}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden min-h-[100svh]">
      <div className="hero-bg">
        {Array.from({ length: 13 }).map((_, i) => {
          // Center rows with exact text from reference image
          if (i === 5) {
            return <Row key={i} isCenter={true} centerWords={[
              { text: "WEBFLOW", color: "var(--hero-word-1)" },
              { text: "DEVELOPER.", color: "var(--hero-word-2)" }
            ]} />;
          }
          if (i === 6) {
            return <Row key={i} isCenter={true} centerWords={[
              { text: "FREELANCE", color: "var(--hero-word-3)" },
              { text: "DESIGNER.", color: "var(--hero-word-4)" }
            ]} />;
          }
          if (i === 7) {
            return <Row key={i} isCenter={true} centerWords={[
              { text: "PROBLEM", color: "var(--hero-word-5)" },
              { text: "SOLVER.", color: "var(--hero-word-6)" }
            ]} />;
          }
          if (i === 8) {
            return <Row key={i} isCenter={true} centerWords={[
              { text: "TECH", color: "var(--hero-word-7)" },
              { text: "GENERALIST.", color: "var(--hero-word-8)" }
            ]} />;
          }
          return <Row key={i} reverse={i % 2 === 1} />;
        })}
      </div>
      <div className="mx-auto max-w-6xl px-4 py-24 grid place-items-center">
        <div className="mt-10 w-full">
          <div className="avatar-wrap">
            <img src="/avatar.png" alt="Avatar" className="avatar-img" />
            <img src="/laptop.png" alt="Laptop" className="laptop-img" />
          </div>
        </div>
      </div>
    </section>
  );
}


