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