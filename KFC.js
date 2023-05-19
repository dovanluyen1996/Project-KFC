function header(){
    window.addEventListener('scroll', cuon);
    function cuon(){
        const y = window.pageYOffset;// đọc vị trí của trang
        const show= document.getElementById("DatMon");
        if(y<100){
            show.classList.add(`an`);
        }
        
        if (y>=100){
            show.classList.remove(`an`);
        }
    }
}
header();