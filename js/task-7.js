const fontSizeControlRef = document.querySelector("input#font-size-control");
const textRef = document.querySelector("span#text");
textRef.style.fontSize = `${fontSizeControlRef.value}px`;

const fontSizeHandler = () => {
  textRef.style.fontSize = `${fontSizeControlRef.value}px`;
};
fontSizeControlRef.addEventListener("input", fontSizeHandler);
