const cheek = document.querySelector('.cheek');
const eyes = document.querySelectorAll('.eye');
const look = document.querySelectorAll('.move');
const name = document.getElementById('put-name');
const pass = document.getElementById('put-password')

console.log(name);

function cheng (){
    
    if(name.value.length  < 5 ){
        look[0].style.cssText = 'margin : -2px 2px';
        look[1].style.cssText = 'margin : -2px 2px';
        console.log('lessThan of 5 wors');
    }else if(name.value.length > 10) {
        look[0].style.cssText = 'margin : -2px 6px';
        look[1].style.cssText = 'margin : -2px 6px';
        console.log('more Than of 10 wors');
    } else{
        look[0].style.cssText = 'margin : -2px 5px';
        look[1].style.cssText = 'margin : -2px 5px';
        console.log('more Than of 5 wors');
    }
}
function back (){
    look[0].style.cssText = 'margin : auto 5px';
    look[1].style.cssText = 'margin : auto 5px';
    eyes[0].style.cssText = 'visibility: visible;';
    eyes[1].style.cssText = 'visibility: visible;';
}
cheek.addEventListener('click',()=>{
    if(cheek.checked){
    look[0].style.cssText = 'visibility: visible;';
    eyes[0].style.cssText ='visibility: visible;';
}else{
    look[0].style.cssText = 'visibility: hidden;';
    eyes[0].style.cssText ='visibility: hidden;';
}});
    pass.addEventListener('click',()=>{
look[0].style.cssText = 'visibility: hidden;';
look[1].style.cssText = 'visibility: hidden;';
if(cheek.checked){
    look[0].style.cssText = 'visibility: visible;';
    eyes[0].style.cssText ='visibility: visible;';
}else{
    look[0].style.cssText = 'visibility: hidden;';
    eyes[0].style.cssText ='visibility: hidden;';}
// eyes[0].style.cssText ='visibility: hidden;';
eyes[1].style.cssText ='visibility: hidden;';
});
// look[1].style.cssText ='background-color: yellow;';

