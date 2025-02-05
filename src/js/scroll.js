export function scrollPhoto () { 
document.querySelector('.circle-down').addEventListener('click', function (event) {
    document.querySelector('#photo').scrollIntoView({
      behavior: 'smooth'
    });
  });
}
