const allModal = document.querySelectorAll('.modal');
const allBtn = document.querySelectorAll('.open-modal');


allBtn.forEach(element => {
    element.addEventListener('click', ()=>{
        allModal.forEach(ele => {
            if(element.getAttribute('id') === ele.getAttribute('id')){
                ele.classList.toggle('show')
            }
        })
    })
});



