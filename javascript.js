topLeftInput = document.getElementById("#topLeft");
topRightInput = document.getElementById("#topRight");
bottomLeftInput = document.getElementById("#bottomLeft");
bottomRightInput = document.getElementById("#bottomRight");
document.getElementById("#border");
document.getElementById("#codeCopy");

topLeft.addEventListener("change", () => {
  if (topLeft.value < 0) {
    window.alert("Apenas números maiores que 0.");
  } else {
    border.style.borderTopLeftRadius = `${topLeft.value}px`;
    codeCopy.innerHTML = `border-top-left-radius:${topLeft.value}px \nborder-top-right-radius:${topRight.value}px \nborder-bottom-left-radius:${bottomLeft.value}px \nborder-bottom-right-radius:${bottomRight.value}px \n`;
  }
});

topRight.addEventListener("change", () => {
  if (topRight.value < 0) {
    window.alert("Apenas números maiores que 0.");
  } else {
    border.style.borderTopRightRadius = `${topRight.value}px`;
    codeCopy.innerHTML = `border-top-left-radius:${topLeft.value}px \nborder-top-right-radius:${topRight.value}px \nborder-bottom-left-radius:${bottomLeft.value}px \nborder-bottom-right-radius:${bottomRight.value}px \n`;
  }
});

bottomLeft.addEventListener("change", () => {
  if (bottomLeft.value < 0) {
    window.alert("Apenas números maiores que 0.");
  } else {
    border.style.borderBottomLeftRadius = `${bottomLeft.value}px`;
    codeCopy.innerHTML = `border-top-left-radius:${topLeft.value}px \nborder-top-right-radius:${topRight.value}px \nborder-bottom-left-radius:${bottomLeft.value}px \nborder-bottom-right-radius:${bottomRight.value}px \n`;
  }
});
bottomRight.addEventListener("change", () => {
  if (bottomRight.value < 0) {
    window.alert("Apenas números maiores que 0.");
  } else {
    border.style.borderBottomRightRadius = `${bottomRight.value}px`;
    codeCopy.innerHTML = `border-top-left-radius:${topLeft.value}px \nborder-top-right-radius:${topRight.value}px \nborder-bottom-left-radius:${bottomLeft.value}px \nborder-bottom-right-radius:${bottomRight.value}px \n`;
  }
});

codeCopy.addEventListener("click", () => {
  if (codeCopy.value != 0) {
    codeCopy.select();
    codeCopy.setSelectionRange(0, 99999);
    document.execCommand("copy");
    window.alert("Comando copiado!");
  }
});
