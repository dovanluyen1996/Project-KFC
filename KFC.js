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
function Accordion1(){
    let i=0;
    var a = document.getElementById(`stick1`);
    var b = document.getElementById(`text1`);
    a.addEventListener(`click`, down1);
    function down1(){
        i=i+1;
        console.log(i);
        if (i%2==0){
            b.classList.add(`hide`)
            if(i!==0){
                a.classList.remove(`stick`)
            }
        }
        else{
            b.classList.remove(`hide`)
            a.classList.add(`stick`)
        }
    }
}
Accordion1();

function Accordion2(){
    let i=0;
    var a = document.getElementById(`stick2`);
    var b = document.getElementById(`text2`);
    a.addEventListener(`click`, down1);
    function down1(){
        i=i+1;
        console.log(i);
        if (i%2==0){
            b.classList.add(`hide`)
            if(i!==0){
                a.classList.remove(`stick`)
            }
        }
        else{
            b.classList.remove(`hide`)
            a.classList.add(`stick`)
        }
    }
}
Accordion2();

function Accordion3(){
    let i=0;
    var a = document.getElementById(`stick3`);
    var b = document.getElementById(`text3`);
    a.addEventListener(`click`, down1);
    function down1(){
        i=i+1;
        console.log(i);
        if (i%2==0){
            b.classList.add(`hide`)
            if(i!==0){
                a.classList.remove(`stick`)
            }
        }
        else{
            b.classList.remove(`hide`)
            a.classList.add(`stick`)
        }
    }
}
Accordion3();