//get input


document.querySelector('.js-go').addEventListener('click',()=>{
    let input = document.querySelector("input").value
    console.log(input)
    pushToDom(input);
    
})

document.querySelector('.js-userinput').addEventListener('keyup',function(e){
    let input = document.querySelector("input").value
    if(e.which === 13){
        pushToDom(input)
    }
})



console.log(input)

//do the stuff with api



//showing the giphs
function pushToDom(input){
    let container = document.querySelector(".js-container")
    container.innerHTML = input
}

 
