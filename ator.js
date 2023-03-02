//código do ator
let xAtor = 85
let yAtor = 365
let colisao = false
let larguraAtor = 30
let alturaAtor = 30
let meusPontos = 0

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, larguraAtor, alturaAtor)
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMover()) {
      yAtor += 3
    }
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
      10
    )
    if (colisao) {
      voltaAtorParaPosicaoInicial()
      somDaColisao.play()
      if (pontosMaiorQueZero()) {
        meusPontos--
      }
    }
  }
}

function voltaAtorParaPosicaoInicial() {
  yAtor = 365
}

function incluiPontos() {
  textAlign(CENTER)
  textSize(25)
  fill(color(255, 240, 70))
  text(meusPontos, width / 5, 27)
}

function marcaPontos() {
  if (yAtor < 15) {
    meusPontos++
    voltaAtorParaPosicaoInicial()
    somDoPonto.play()
  }
}

function pontosMaiorQueZero() {
  return meusPontos > 0
}

function podeSeMover() {
  return yAtor < 365
}
