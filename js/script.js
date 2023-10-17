const personagem = document.querySelector('.personagem')
const obstaculo = document.querySelector('.obstaculo')

const pulo = () => {
  personagem.classList.add('pulo')

  setTimeout(() => {
    personagem.classList.remove('pulo')
  }, 500)
}

const loop = setInterval(() => {

  const posicaoDoObstaculo = obstaculo.offsetLeft
  const posicaoDoPersonagem = +window.getComputedStyle(personagem).bottom.replace('px', '')

  if (posicaoDoObstaculo <= 90 && posicaoDoObstaculo > 0 && posicaoDoPersonagem < 145) {

    obstaculo.style.animation = 'none'
    obstaculo.style.left = `${posicaoDoObstaculo}px`
    obstaculo.src = '/images/goku/troca-obstaculo.png '

    personagem.style.animation = 'none'
    personagem.style.bottom = `${posicaoDoPersonagem}px`
    personagem.src = '/images/goku/fim-de-jogo.png '
    personagem.style.width = '75px'
    personagem.style.marginLeft = '50px'

    clearInterval(loop)
  }
}, 10)

document.addEventListener('keydown', pulo)