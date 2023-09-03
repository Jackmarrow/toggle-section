const allModal = document.querySelectorAll('.modal');
const allBtn = document.querySelectorAll('.open-modal');


allBtn.forEach(element => {
    element.addEventListener('click', ()=>{
        allModal.forEach(ele => {
            if(ele.className.includes('show') && element.getAttribute('id') !== ele.getAttribute('id')){
                ele.classList.remove('show');
            }
            else if(element.getAttribute('id') === ele.getAttribute('id')){
                ele.classList.toggle('show')
            }
        })
    })
});



