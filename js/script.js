const user_info = document.getElementById("user_info")

user_info.addEventListener('click',function(e){
    e.preventDefault();
    document.getElementById("pop_up_nav_links_body").classList.toggle('nav_show')
})


$(document).ready(function(){
    $('#nav_trigger').click(function(){
        $('#toggle').slideToggle(1000);
    })
})


let gallery = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg","images/5.jpg", "images/6.jpg"];

let ImgSelect = document.querySelector("#sliderimg");
let count = 0;

document.getElementById("next").addEventListener("click", function(){
    count++;
    if(count >= gallery.length){
        
        count = 0;
        ImgSelect.src = gallery[count];
    }
    else{
        ImgSelect.src = gallery[count];
    }
})

document.getElementById("prev").addEventListener("click", function(){
    count--;
    if(count < 0){
        count = gallery.length - 1;
        ImgSelect.src = gallery[count];
    }
    else{
        ImgSelect.src = gallery[count];
    }
})