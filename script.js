function slide1(){
    document.getElementById('id').src="/servertec.arthrur-master/section-2-img/img1.jpg";
    setTimeout("slide2()",4000)	
}
function slide2(){
    document.getElementById('id').src="/servertec.arthrur-master/section-2-img/img2.jpg";
    setTimeout("slide3()",4000)
}
function slide3(){
    document.getElementById('id').src="/servertec.arthrur-master/section-2-img/img3.jpg";
    setTimeout("slide1()",4000)
}
