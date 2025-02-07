export function dollar() { 
document.querySelector('.paragraph').addEventListener('click', function(event) {
    for (let i = 0; i < 1; i++) {
        let flyingDollar = document.createElement('img');
        flyingDollar.src = ('./img/dollar.png'); 
        flyingDollar.classList.add('flying-dollar');
        document.body.appendChild(flyingDollar);

         const rect = this.getBoundingClientRect(); 
  flyingDollar.style.top = `${rect.top - 50}px`; 
  flyingDollar.style.left = `${rect.left + Math.random() * 100 - 50}px`;


        setTimeout(() => {
            flyingDollar.remove();
        }, 5000);
    }
});

}
