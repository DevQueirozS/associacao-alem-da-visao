import { useCallback, useEffect, useState } from "react";
import type { FontSize, Theme } from "../types";

export const useAcessibility = () => {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem("theme") as Theme) || "light-mode"
  );
  const [fontSize, setFontSize] = useState<FontSize>(
    () => (localStorage.getItem("fontSize") as FontSize) || "font-normal"
  );
  const [bgColor, setBgColor] = useState<string>(
    () => localStorage.getItem("bgColor") || "#f0f4f8"
  );
  const [fontColor, setFontColor] = useState<string>(
    () => localStorage.getItem("fontColor") || "#333"
  );

  const applyStyles = useCallback(() => {
    const body = document.body;
    // Remova classes antigas e adicione as novas
    body.className = `${theme} ${fontSize}`;
    body.style.backgroundColor = bgColor;
    body.style.color = fontColor;
  }, [theme, fontSize, bgColor, fontColor]);

  useEffect(() => {
    applyStyles();
    localStorage.setItem("theme", theme);
    localStorage.setItem("fontSize", fontSize);
    localStorage.setItem("bgColor", bgColor);
    localStorage.setItem("fontColor", fontColor);
  }, [applyStyles, theme, fontSize, bgColor, fontColor]);

  const resetColors = () => {
    setBgColor("#f0f4f8");
    setFontColor("#333");
    localStorage.removeItem("bgColor");
    localStorage.removeItem("fontColor");
  };

  return {
    theme,
    setTheme,
    fontSize,
    setFontSize,
    bgColor,
    setBgColor,
    fontColor,
    setFontColor,
    resetColors,
  };
};

export const speakText = (text: string) => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "pt-BR";
  utterance.rate = 1;
  window.speechSynthesis.speak(utterance);
};
