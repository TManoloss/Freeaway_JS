//código do ator
let xAtor = 100
let yAtor = 365
let colisao = false
let larguraAtor = 30
let alturaAtor = 30

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, larguraAtor, alturaAtor)
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3
  }
  if (keyIsDown(DOWN_ARROW)) {
    yAtor += 3
  }
}

function verificaColisao() {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(
      xCarros[i],
      yCarros[i],
      comprimentoCarro,
      alturaCarro,
      xAtor,
      yAtor,
      20
    )
    if (colisao) {
      colidiu()
    }
  }
}

function colidiu() {
  yAtor = 365
}
