let btn = document.getElementById('tour-btn');
let tour = document.getElementById('tour');
let flag = true;
btn.addEventListener('click',() =>{

    if (flag){
        tour.style.display = 'flex';
        tour.style.height = 'max-content';
        flag = false;
    }else {
        tour.style.display = 'none';
        tour.style.height = '0';
        flag = true;
    }
})
