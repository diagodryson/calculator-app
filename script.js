//DOM
const touches = document.querySelectorAll('.bouton');
const listeKeycode = (touches.map => touches.dataset.key);
const ecran = document.querySelector('.ecran')

document.addEventListener('keydown', (e)  => {
    const valeur = e.keycode.toString();


})

document.addEventListener('click' (e)  => {
    const valeur  = e.target.dataset.key;

    
})

const calculer = (valeur) => {
    if (listeKeycode.includes(valeur)){
            switch(valeur) {
                case '8':
                    ecran.textContent = "";
                    break;
                case '13':
                    const calcul = eval (ecran.textContent);
                    ecran.textContent = calcul;
                    break;
            
            }
    }
}