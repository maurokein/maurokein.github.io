/* PRIMERAS PRUEBAS */
/* let counter_navbar_icon = 1;
let counter_footer_icon = 1;

document.getElementById("navbar-icon").addEventListener('click', function(){
    counter_navbar_icon++; 
    if(counter_navbar_icon % 2 == 0){
        document.getElementById("navbar-icon").style.backgroundColor = "Aqua";
    }else{
        document.getElementById("navbar-icon").style.backgroundColor = "White";
    }    
});

document.getElementById("footer-icon").addEventListener('click', function(){
    counter_footer_icon++;
    if(counter_footer_icon % 2){
        document.getElementById("footer-icon").style.backgroundColor = "Black";
    }else{
        document.getElementById("footer-icon").style.backgroundColor = "Transparent";
    }
}); */
let counter = 0; 
var image = document.getElementById('navbar-image');
image.onclick = function(){
    counter++;
    if(counter % 2 == 1){
        image.src = "/images/vecteezy-logo-black-background.jpg";
        document.getElementById('navbar-image-slogan').style.color = "White";
    }else{
        image.src = "/images/vecteezy-logo-white-background.jpg"
        document.getElementById('navbar-image-slogan').style.color = "Black";
    }
};

item1 = document.getElementById('nav-item-1');
item1.addEventListener('mouseover', function(){
/*     item1.style.fontSize = "18px"; */
    item1.style.fontWeight = "bold";
});
item1.addEventListener('mouseout', function(){
    item1.style.fontSize = "16px";
    item1.style.fontWeight = "normal";
});

item2 = document.getElementById('nav-item-2');
item2.addEventListener('mouseover', function(){
/*     item2.style.fontSize = "18px"; */
    item2.style.fontWeight = "bold";
});
item2.addEventListener('mouseout', function(){
    item2.style.fontSize = "16px";
    item2.style.fontWeight = "normal";
});

item3 = document.getElementById('nav-item-3');
item3.addEventListener('mouseover', function(){
/*     item3.style.fontSize = "18px"; */
    item3.style.fontWeight = "bold";
});
item3.addEventListener('mouseout', function(){
    item3.style.fontSize = "16px";
    item3.style.fontWeight = "normal";
});

item4 = document.getElementById('nav-item-4');
item4.addEventListener('mouseover', function(){
/*     item4.style.fontSize = "18px"; */
    item4.style.fontWeight = "bold";
});
item4.addEventListener('mouseout', function(){
    item4.style.fontSize = "16px";
    item4.style.fontWeight = "normal";
});

button_1 = document.getElementById('projects-button');
button_1.addEventListener('mouseover', function(){
    button_1.style.fontSize = "20px";
});
button_1.addEventListener('mouseout', function(){
    button_1.style.fontSize = "16px";
})

button_2 = document.getElementById('articles-button');
button_2.addEventListener('mouseover', function(){
    button_2.style.fontSize = "20px";
})
button_2.addEventListener('mouseout', function(){
    button_2.style.fontSize = "16px";
})