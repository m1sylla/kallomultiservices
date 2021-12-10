function showHero() {
    var i;
    var heros = document.querySelectorAll('.large-hero__element');
    var dots = document.querySelectorAll('.large-hero__indicator-dot');
    for (i = 0; i < heros.length; i++) {
        heros[i].style.display = "none";
        //console.log(Array.prototype.indexOf.call(heros, heros[i]));
        //console.log(heros[i].getAttribute("display"));
    }
    heroIndex++;
    if (heroIndex > heros.length) { heroIndex = 1; }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" large-hero__indicator-dot--active", "");
    }
    heros[heroIndex - 1].style.display = "block";
    dots[heroIndex - 1].className += " large-hero__indicator-dot--active";

    setTimeout(showHero, 6000);
}