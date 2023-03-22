// navbar
function show_nav(){
    document.querySelector('.links').classList.toggle('links-active')
    document.querySelector('.icon').style="color:#01C38D"
}

// animation on scroll
window.addEventListener('scroll',()=>{
    let screenposition=window.innerHeight

    // up
    let upelements=document.querySelectorAll('.uphiden')
    for(var el of upelements){
        let eltop=el.getBoundingClientRect().top
        if(eltop<screenposition){
            el.classList.add('up')
            el.classList.remove('uphiden')
        }
        // else{
        //     el.classList.remove('up')
        //     el.classList.add('uphiden')
        // }
    }
    
    // right
    let rightelements=document.querySelectorAll('.righthiden')
    for(var el of rightelements){
        let eltop=el.getBoundingClientRect().top
        if(eltop<screenposition){
            el.classList.add('rightAn')
            el.classList.remove('righthiden')
        }
        else{
            el.classList.remove('rightAn')
            el.classList.add('righthiden')
        }
    }

    // left
    let leftElements=document.querySelectorAll('.lefthiden')
    for(var el of leftElements){
        let eltop=el.getBoundingClientRect().top
        if(eltop<screenposition){
            el.classList.add('leftAn')
            el.classList.remove('lefthiden')
        }
        else{
            el.classList.remove('leftAn')
            el.classList.add('lefthiden')
        }
    }

    // opacity
    let opElements=document.querySelectorAll('.opacityh')
    for(var el of opElements){
        let eltop=el.getBoundingClientRect().top
        if(eltop<screenposition){
            el.classList.add('opacityAn')
            el.classList.remove('opacityh')
        }
        else{
            el.classList.remove('opacityAn')
            el.classList.add('opacityh')
        }
    }

    // popup
    let popElements=document.querySelectorAll('.popuph')
    for(var el of popElements){
        let eltop=el.getBoundingClientRect().top
        if(eltop<screenposition){
            el.classList.add('popupAn')
            el.classList.remove('popuph')
        }
        else{
            el.classList.remove('popupAn')
            el.classList.add('popuph')
        }
    }
})


