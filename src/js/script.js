

export default function modeChange(mode,setMode){
    const light=document.querySelector('.light');
    const dark=document.querySelector('.dark');
    const Elements=document.querySelectorAll('.lightSite');
    const checkFull=document.querySelector('#checkFull');
    const filterSmall=document.querySelector('.filterSmall')
    const page=localStorage.getItem('page')
    const setLight=()=>{
        setMode('light');
        light.classList.remove('d-none');
        dark.classList.add('d-none');
        document.body.classList.add('bgLight');
        document.body.classList.remove('bgDark');
        Elements.forEach(element => {
            element.classList.add('bg-white');
            element.classList.remove('bgFilter');
        });
        if(page === 'home') {checkFull.style.backgroundColor='#E7E7E9';filterSmall.style.backgroundColor='rgba(0,0,0,.3)'}
    }

    const setDark=()=>{
        setMode('dark');
        dark.classList.remove('d-none');
        light.classList.add('d-none');
        document.body.classList.remove('bgLight');
        document.body.classList.add('bgDark');
        Elements.forEach(element => {
            element.classList.remove('bg-white');
            element.classList.add('bgFilter');
        });
        if(page === 'home')  {checkFull.style.backgroundColor='#303744' ;filterSmall.style.backgroundColor='rgba(255,255,255,.3)'}

    }

    (mode === 'light')?setLight():setDark();

    dark.addEventListener('click',function(){
     setLight();
    })
    
    light.addEventListener('click',function(){
       setDark();
    })

}