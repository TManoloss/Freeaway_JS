//código do carro

//carro 1
let xCarro = 600
let yCarro = 40
let velocidadeCarro = 2

// carro 2
let xCarro2 = 600
let yCarro2 = 95
let velocidadeCarro2 = 2.5

// carro 3
let xCarro3 = 600
let yCarro3 = 148
let velocidadeCarro3 = 3.2

function mostraCarro() {
  image(imagemCarro, xCarro, yCarro, 50, 40)
  image(imagemCarro2, xCarro2, yCarro2, 50, 40)
  image(imagemCarro3, xCarro3, yCarro3, 50, 40)
}

function movimentaCarro() {
  xCarro -= velocidadeCarro
  xCarro2 -= velocidadeCarro2
  xCarro3 -= velocidadeCarro3
}
