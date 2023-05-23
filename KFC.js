function header(){
    
    window.addEventListener('scroll', cuon);
    function cuon(){
        const y = window.pageYOffset;// đọc vị trí của trang
    
        const show= document.getElementById("oder");
        // console.log(show);
        if(y<100){
            show.classList.add(`hide`);
        }
        if (y>=100){
            show.classList.remove(`hide`);
        }
    }
}
header();

