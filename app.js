const radios = document.querySelectorAll('input[name = "query-type"]');
const options = document.querySelectorAll('.query-type__option');
const form = document.querySelector('.form'); 
const toast = document.querySelector('.toast');


const clearInputs = function() {

};

radios.forEach(radio => {
  radio.addEventListener('change', () =>  {
    //limpiamos la anterior
    options.forEach(opt => opt.classList.remove('selected'));
    const divOption = radio.closest('.query-type__option');
    divOption.classList.add('selected');
  });
});
form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  form.reset();
  toast.style.display = 'block';
  options.forEach(opt => opt.classList.remove('selected'));
});