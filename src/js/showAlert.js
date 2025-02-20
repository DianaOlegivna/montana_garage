export function alertShow() { 
function showAlert() {
  alert("Ви можете зателефонувати нам за номером +380-63-782-91-15 або написати у Viber");
}


document.addEventListener('DOMContentLoaded', function() {
  const orderButton = document.getElementById('orderButton');

  orderButton.addEventListener('click', function(event) {
    if (window.innerWidth >= 1440) {
      event.preventDefault(); 
      showAlert(); 
    }
  });
});

}

