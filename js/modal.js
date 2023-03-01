export const Modal = {
  //Variáveis do object literals
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal .close'),

  //Funções do object literals
  open() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}

//Events
// Eventos on click quando repetidos, desconsideram o anterior e só carregam o mais recente, o contrário dos event listeners
Modal.buttonClose.onclick = Modal.close
window.addEventListener('keydown', handleKeyDown)

//Functions
function handleKeyDown(event){
  if(event.key === 'Escape'){
    Modal.close()
  }
}