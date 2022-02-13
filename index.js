const pics = [
    {
        pic:'w1.jpg'
    },
    {
        pic:'w2.jpg'
    },
    {
        pic:'w3.jpg'
    },
    {
        pic:'w6.jpg'
    },
    {
        pic:'w4.jpg'
    },
    {
        pic:'w9.jpg'
    },
]
const pis = iterate(pics)
document.getElementById('btn').addEventListener('click', load);
function load() {
    const current = pis.next().value;
    if (current !== undefined) {
        document.getElementById('demo').innerHTML = `<img src="${current.pic}" width="400px" height="500px" id="im">`;
    } else {
        window.location.reload();
   }
}
function iterate(pis) {
    let index = 0;
    return {
        next: function () {
            return index < pis.length ?
                { value: pis[index++], done: false } :
                { done: true };
        }
    }
}

document.getElementById('menu').addEventListener('click', () => {
    const list = document.getElementById('list');
    list.style.display = 'block';
})
document.getElementById('dark').addEventListener('click',()=> {
    document.body.style.backgroundColor = 'black';
    const dark = document.getElementById('dark');
    const list = document.getElementById('list');
    const light = document.getElementById('use');
    light.style.display = 'block';
    document.getElementById('use').innerHTML = `Light Mode`;
    dark.style.display = 'none';
    document.getElementById('nav').style.backgroundColor = 'white';
    document.getElementById('foot').style.backgroundColor = 'white';
    document.getElementById('btn').style.backgroundColor = 'white';
    document.getElementById('btn').style.color = 'black';
})
document.getElementById('use').addEventListener('click', () => {
    document.body.style.backgroundColor = 'white';
    const dark = document.getElementById('dark');
    const light = document.getElementById('use');
    light.style.display = 'none';
    dark.style.display = 'block';
})

document.getElementById('slide').addEventListener('click', remov);

function remov() {
    setInterval(load, 2000);
    document.getElementById('btn').style.display = 'none';
}
document.getElementById('list').addEventListener('mouseleave', () => {
    const list = document.getElementById('list');
    list.style.display = 'none';
})