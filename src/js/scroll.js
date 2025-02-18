export function scrollPhoto() {
  document.querySelector('.circle-down').addEventListener('click', function () {
    document.querySelector('#photo').scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  });
}

