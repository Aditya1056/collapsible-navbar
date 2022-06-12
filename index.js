// console.log(document);

navbar_head = document.getElementById("itc");

collapsible = document.querySelector(".collapsible");

// console.log(collapsible.classList)

// console.log(navbar_head);

nav_status = false;

function collapseNav() {
    if(nav_status) {
        collapsible.classList.add("nav-collapse");
        collapsible.classList.remove("nav-un-collapse");
        nav_status = false;
    }

    else {
        collapsible.classList.add("nav-un-collapse");
        collapsible.classList.remove("nav-collapse");
        nav_status = true;
    } 
}

navbar_head.addEventListener('click', collapseNav);