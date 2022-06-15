function hideOddRows() {
let rows=document.querySelectorAll('body table tr');
for (let i=0;i<rows.length;i+=2) {
    rows[i].style.display='none';    
    }
}
btnHide=document.getElementById('btnHideOddRows');
btnHide.addEventListener('click',hideOddRows);
