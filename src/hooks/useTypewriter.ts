import { useState, useEffect } from 'react';

export function useTypewriter(words: string[], typingSpeed = 75, deletingSpeed = 40, pauseMs = 2000) {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [pausing, setPausing] = useState(false);

  useEffect(() => {
    if (pausing) return;

    const current = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, charIndex + 1);
        setDisplayed(next);
        if (next === current) {
          setPausing(true);
          setTimeout(() => {
            setPausing(false);
            setDeleting(true);
          }, pauseMs);
        } else {
          setCharIndex(c => c + 1);
        }
      } else {
        const next = current.slice(0, charIndex - 1);
        setDisplayed(next);
        if (next === '') {
          setDeleting(false);
          setCharIndex(0);
          setWordIndex(i => (i + 1) % words.length);
        } else {
          setCharIndex(c => c - 1);
        }
      }
    }, deleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, typingSpeed, deletingSpeed, pauseMs, pausing]);

  return displayed;
}
