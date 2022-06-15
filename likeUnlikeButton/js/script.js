function changeButton(){
 let likeButton=document.getElementById('like-button');
let buttonText=likeButton.innerHTML;
if (buttonText==='Like') {
    buttonText='Unlike';
}
else{
    buttonText='Like';
}
likeButton.innerHTML=buttonText;
}
let likeButton=document.getElementById('like-button');
likeButton.addEventListener('click',changeButton);