const text = "Smarter Solutions";
let index = 0;
let isTyping = true;

function type() {
  if (isTyping) {
    document.querySelector(".typing-text").textContent = text.slice(0, index++);
    if (index > text.length) {
      index = text.length; // Stop at the end of the text
      isTyping = false;
      setTimeout(() => {
        isTyping = true;
        erase();
      }, 2000); // Tiempo de pausa entre ciclos (ms)
    } else {
      setTimeout(type, 100); // Velocidad de escritura (ms)
    }
  }
}

function erase() {
  const textElement = document.querySelector(".typing-text");
  let currentText = textElement.textContent;

  if (currentText.length > 0) {
    setTimeout(() => {
      textElement.textContent = currentText.slice(0, currentText.length - 1);
      index--;
      erase(); // Continue erasing until empty
    }, 100); // Velocidad de borrado (ms)
  } else {
    // Text is empty, start typing again
    type();
  }
}

type(); // Iniciar la animación
