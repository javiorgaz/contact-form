const radios = document.querySelectorAll('input[name = "query-type"]');
const options = document.querySelectorAll('.query-type__option');

radios.forEach(radio => {
  radio.addEventListener('change', () =>  {
    //limpiamos la anterior
    options.forEach(opt => opt.classList.remove('selected'));
    const divOption = radio.closest('.query-type__option');
    divOption.classList.add('selected');
  });
});