export function dollar() { 
document.querySelector('.paragraph').addEventListener('click', function(event) {
    for (let i = 0; i < 10; i++) {
        let dollar = document.createElement('img');
        dollar.src = './img/dollar.png'; 
        dollar.classList.add('flying-dollar');
        document.body.appendChild(dollar);

         const rect = this.getBoundingClientRect(); 
  flyingDollar.style.top = `${rect.top - 50}px`; 
  flyingDollar.style.left = `${rect.left + Math.random() * rect.width - 50}px`;


        setTimeout(() => {
            dollar.remove();
        }, 1500);
    }
});

}
