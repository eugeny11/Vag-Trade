const catalogueBtn = document.getElementById('catalogue-btn');
const cataloguePopup = document.getElementById('catalogue__popup');

catalogueBtn.addEventListener('click', (e) => {
  e.stopPropagation(); 
  cataloguePopup.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!cataloguePopup.contains(e.target) && !catalogueBtn.contains(e.target)) {
    cataloguePopup.classList.remove('active');
  }
});

document.querySelector('.header__mob__hamburger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.header__mob__menu').classList.toggle('active');
  });

  document.querySelectorAll('.catalogue__select').forEach(select => {
  const selected = select.querySelector('.select__selected');
  const dropdown = select.querySelector('.select__dropdown');
  const options = dropdown.querySelectorAll('span');

 
  selected.addEventListener('click', (e) => {
    e.stopPropagation();
    // Закрыть все остальные
    document.querySelectorAll('.catalogue__select').forEach(s => {
      if (s !== select) s.classList.remove('open');
    });
    
    select.classList.toggle('open');
  });

  
  options.forEach(option => {
    option.addEventListener('click', () => {
      selected.querySelector('span').textContent = option.textContent;
      select.classList.remove('open');
    });
  });
});


document.addEventListener('click', () => {
  document.querySelectorAll('.catalogue__select').forEach(select => {
    select.classList.remove('open');
  });
});

document.querySelectorAll('.card__select').forEach(select => {
  const selected = select.querySelector('.card__selected');

  selected.addEventListener('click', () => {
    select.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!select.contains(e.target)) {
      select.classList.remove('open');
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const selects = document.querySelectorAll(".bid__form__selected");

    selects.forEach(select => {
        const toggle = document.querySelector(".bid__form__selected-img");

        toggle.addEventListener("click", () => {
            select.classList.toggle("active");
            console.log('open');
        });

        document.addEventListener("click", (e) => {
            if (!select.contains(e.target)) {
                select.classList.remove("active");
            }
        });
    });
});