

export default function modeChange(){
    const light=document.querySelector('.light');
    const dark=document.querySelector('.dark');
    const Elements=document.querySelectorAll('.lightSite');
    console.log(Elements);
    const checkFull=document.querySelector('#checkFull');
    dark.addEventListener('click',function(){
        light.classList.remove('d-none');
        this.classList.add('d-none');
        document.body.classList.add('bgLight');
        document.body.classList.remove('bgDark');
        Elements.forEach(element => {
            element.classList.add('bg-white');
            element.classList.remove('bgFilter');
        });
        checkFull.style.backgroundColor='#E7E7E9'
    })
    
    light.addEventListener('click',function(){
        dark.classList.remove('d-none');
        this.classList.add('d-none');
        document.body.classList.remove('bgLight');
        document.body.classList.add('bgDark');
        Elements.forEach(element => {
            element.classList.remove('bg-white');
            element.classList.add('bgFilter');
        });
        // option.classList.remove('bg-white');
        // option.classList.add('bgFilter');
        checkFull.style.backgroundColor='#303744'
    })
}