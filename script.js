document.addEventListener("DOMContentLoaded", function () {
  const inputText = document.getElementById("inputText");
  const outputText = document.getElementById("outputText");
  const encryptButton = document.getElementById("encryptButton");
  const decryptButton = document.getElementById("decryptButton");
  const copyButton = document.getElementById("copyButton");
  
  encryptButton.addEventListener("click", function () {
    const text = inputText.value.toLowerCase();
    if (validarTexto(text)) {
      const encryptedText = encriptar(text);
      outputText.value = encryptedText;
    } else {
      alert("Texto inválido. Solo se permiten letras minúsculas y sin acentos.");
    }
  });

  decryptButton.addEventListener("click", function () {
    const text = inputText.value.toLowerCase();
    if (validarTexto(text)) {
      const decryptedText = desencriptar(text);
      outputText.value = decryptedText;
    } else {
      alert("Texto inválido. Solo se permiten letras minúsculas y sin acentos.");
    }
  });
  outputText.addEventListener("input", function () {
    if (outputText.value.trim() === "") {
        noTextImage.style.display = "block"; 
    } else {
        noTextImage.style.display = "none";
    }
});
outputText.addEventListener("input", function () {
  const noTextImage = document.getElementById("noTextImage");
  if (outputText.value.trim() === "") {
      noTextImage.style.display = "block"; 
  } else {
      noTextImage.style.display = "none"; 
  }
});


  copyButton.addEventListener("click", function () {
    outputText.select();
    document.execCommand("copy");
    copyButton.textContent = "Copiado";
    setTimeout(() => {
      copyButton.textContent = "Copiar";
    }, 1500);
  });
  
  function encriptar(text) {
    const transformations = {
      e: "enter",
      i: "imes",
      a: "ai",
      o: "ober",
      u: "ufat",
    };
    for (const key in transformations) {
      const value = transformations[key];
      text = text.replace(new RegExp(key, "g"), value);
    }
    return text;
  }

  function desencriptar(text) {
    const transformations = {
      enter: "e",
      imes: "i",
      ai: "a",
      ober: "o",
      ufat: "u",
    };
    for (const key in transformations) {
      const value = transformations[key];
      text = text.replace(new RegExp(key, "g"), value);
    }
    return text;
  }
  const clearButton = document.getElementById("clearButton");

    clearButton.addEventListener("click", function () {
        outputText.value = "";
    });
  function validarTexto(text) {
    const pattern = /^[a-z\s]+$/;
    return pattern.test(text);
  }
});
