var offcanvasNavbar = document.getElementById('offcanvasNavbar')
offcanvasNavbar.addEventListener('show.bs.offcanvas', function () {
    const offcanvas = document.querySelector('.offcanvas');
    const offcanvasBody = document.querySelector('.offcanvas-body');
    // const navbar = document.querySelector('.navbar li a');

    offcanvasBody.style.fontSize = "40px";
    offcanvasBody.style.textAlign = "right";
    // navbar.forEach(() => navbar.style.color = "#E4FF1A");
    $(".navbar li a").css("color","#E4FF1A");
})
offcanvasNavbar.addEventListener('hidden.bs.offcanvas', function () {
    const offcanvas = document.querySelector('.offcanvas');
    const offcanvasBody = document.querySelector('.offcanvas-body');

    offcanvasBody.style.fontSize = "16px";
    $(".navbar li a").css("color","");
})