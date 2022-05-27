//DOM
const touches = document.querySelectorAll('.bouton');
const listeKeycode = (touches.map => touches.dataset.key);
// console.log(listeKeycode)

document.addEventListener('keydown', (e)  => {
    const valeur = e.keycode.toString();


})

document.addEventListener('click' (e)  => {
    const valeur  = e.target.dataset.key;

    
})