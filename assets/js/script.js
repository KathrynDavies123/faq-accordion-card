let accordion = document.getElementsByClassName("faqaccordion");

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        let expansion = this.nextElementSibling;
        if (expansion.style.display === "block") {
            expansion.style.display = "none";
        }
        else {
            expansion.style.display = "block";
        }
    })
}