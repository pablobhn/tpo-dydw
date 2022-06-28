

var pathname = window.location.pathname;

function make(){
    if (pathname.includes("/index.html")){
        var element = document.getElementById("menu1");
        element.classList.add("actual");
    }
    if (pathname.includes("/institucional.html")){
        var element = document.getElementById("menu2");
        element.classList.add("actual");
    }
    if (pathname.includes("/novedades.html")){
        var element = document.getElementById("menu3");
        element.classList.add("actual");
    }
    if (pathname.includes("/contacto.html")){
        var element = document.getElementById("menu4");
        element.classList.add("actual");
    }
    if (pathname.includes("/streaming.html")){
        var element = document.getElementById("menu5");
        element.classList.add("actual");
    }

  
}


