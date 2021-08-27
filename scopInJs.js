let g= 'global';

function outer(){
    let o='outer';
}

function inner(){
    let i='inner';
    console.log(i)
}
console.log(g)
