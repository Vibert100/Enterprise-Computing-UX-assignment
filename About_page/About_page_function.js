let All_Accordions = document.querySelectorAll(".Accordion_container");
All_Accordions.forEach(function(Accordion_container){
    Accordion_container.addEventListener("click", function(i){
        let Arrow_icon = Accordion_container.querySelector("button")
        Accordion_container.classList.toggle("active");
        if (Arrow_icon.textContent === "+") {
            Arrow_icon.textContent = "-";
        }
        else {
            Arrow_icon.textContent = "+";
        }
    })
})