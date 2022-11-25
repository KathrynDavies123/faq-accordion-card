let accordion = document.getElementsByClassName("faqaccordion");
let arrow = document.getElementsByClassName("arrowbutton");

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        accordion[i].classList.toggle("expanded");
        arrow[i].classList.toggle("arrowrotate");
        let expansion = this.nextElementSibling;
        if (expansion.style.display === "block") {
            expansion.style.display = "none";
        }
        else {
            expansion.style.display = "block";
        }
    })
}