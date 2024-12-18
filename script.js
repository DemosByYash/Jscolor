
const body = document.querySelector('body');
// console.log(body.innerHTML);

const swatches = document.querySelectorAll('.swatches');
// console.log(swatches)
// const swatchesColor = swatches[0].attributes.id.value;


swatches.forEach( (divSwatches) => divSwatches.addEventListener('click', (e) => {
    const divId = (e.target.id);
    switch(divId){
        case divSwatches.attributes.id.value:
            body.style.backgroundColor = `${divId}`;
            break;
    }
} )); 

