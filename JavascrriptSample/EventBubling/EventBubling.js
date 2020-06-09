//fasle means Bubling, true means trickling
//false bottom to top, true--top to bottom
document.querySelector("#Superparent").addEventListener('click', (e) => {
    console.log('Superparentrent clicked')
}, false);

document.querySelector("#child").addEventListener('click', (e) => {
    console.log('child clicked')
    e.stopPropagation();
}, false);

document.querySelector("#subchild").addEventListener('click', (e) => {
    console.log('subchild clicked')
}, false);

