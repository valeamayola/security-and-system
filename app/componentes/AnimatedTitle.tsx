import React, { useEffect, useRef, useState } from 'react';

const AnimatedTitle = () => {
  const changingWords = ["de Éxito", "Innovador", "Seguro", "Eficiente", "Creativo"];
  const [currentWord, setCurrentWord] = useState(changingWords[0]);
  const [isTyping, setIsTyping] = useState(false);
  const wordRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const typeWord = () => {
      let i = 0;
      const wordLength = currentWord.length;

      clearInterval(intervalId);
      intervalId = setInterval(() => {
        wordRef.current!.textContent = currentWord.substring(0, i);
        i++;
        if (i > wordLength) {
          clearInterval(intervalId);
          setTimeout(() => {
            deleteWord();
          }, 2000);
        }
      }, 100);
    };

    const deleteWord = () => {
      let i = currentWord.length;

      clearInterval(intervalId);
      intervalId = setInterval(() => {
        wordRef.current!.textContent = currentWord.substring(0, i);
        i--;
        if (i < 0) {
          clearInterval(intervalId);
          const nextIndex = (changingWords.indexOf(currentWord) + 1) % changingWords.length;
          setCurrentWord(changingWords[nextIndex]);
          setTimeout(() => {
            setIsTyping(true);
          }, 2000);
        }
      }, 100);
    };

    if (isTyping) {
      typeWord();
    }
  }, [currentWord, isTyping, changingWords]);

  useEffect(() => {
    if (!isTyping) {
      setTimeout(() => {
        setIsTyping(true);
      }, 2000);
    }
  }, [isTyping]);

  return (
    <h1 ref={wordRef} className="font-bold text-4xl md:text-6xl title-animated px-5 h-10 md:h-16" id="title-animated"></h1>
  );
};

export default AnimatedTitle;

