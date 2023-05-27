function header(){
    window.addEventListener('scroll', cuon);
    function cuon(){
        const y = window.pageYOffset;// đọc vị trí của trang
        const show= document.getElementById("oder");
        if(y<100){
            show.classList.add(`hide`);
        }
        if (y>=100){
            show.classList.remove(`hide`);
        }
    }
}
header();

function footer(){
    var icon =document.querySelectorAll(`.footer-icon-link img`)
    icon.forEach(function(item){
        item.addEventListener(`mouseover`, function(){
            item.classList.add(`move`);
        });
        item.addEventListener(`mouseout`, function(){
            item.classList.remove(`move`);
        });
    }); 
}
footer();