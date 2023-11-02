function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  //pegar a tag imagem
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver lightmode ligado deixar imagem light
    img.setAttribute("src", "./assets/assets/avatar certo.png")
  } else {
    //se tiver light mode deixar imagem normal
    img.setAttribute("src", "./assets/assets/avatar certo.png")
  }
}
