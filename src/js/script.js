

export default function modeChange(){
    const light=document.querySelector('.light');
    const dark=document.querySelector('.dark');
    dark.addEventListener('click',function(){
        light.classList.remove('d-none');
        this.classList.add('d-none');
        document.body.classList.add('bgLight');
        document.body.classList.remove('bgDark');
    })
    
    light.addEventListener('click',function(){
        dark.classList.remove('d-none');
        this.classList.add('d-none');
        document.body.classList.remove('bgLight');
        document.body.classList.add('bgDark');
    })
}