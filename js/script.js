function timer() {
    let nowDate = new Date();
    let achiveDate = new Date(2019, 8, 28, 17, 0); 
    let result = (achiveDate - nowDate) + 1000;
    if (result < 0) {
        let elmnt = document.getElementById('end-date-sale');
        elmnt.innerHTML = ' - : - - : - -' ;
        return undefined;
    }
    let minutes = Math.floor((result/1000/60)%60);
    let hours = Math.floor((result/1000/60/60)%24);
    let days = Math.floor(result/1000/60/60/24);
    if (minutes < 10) minutes = '0' + minutes;
    if (hours < 10) hours = '0' + hours;
    let elmnt = document.getElementById('end-date-sale');
    elmnt.innerHTML = days + 'd : ' + hours + 'h : ' + minutes + 'm';
    setInterval(timer, 60000);
}
window.onload = timer()
