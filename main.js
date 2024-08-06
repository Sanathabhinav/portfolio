let typed = new Typed(".text", {
    strings:[" Frontend Developer" , "Programmer"],
    typeSpeed: 100,
    backSpeed: 100, 
    backDelay: 1000,
    loop:true
});

let seemore;
function seeMore(){
    seemore = document.getElementById("see-more");
    if(seemore.style.display === 'none' || seemore.style.display === '') {
        seemore.style.display = 'flex';
    } else {
        seemore.style.display = 'none';
    }
}