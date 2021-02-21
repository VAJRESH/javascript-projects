// Accessing DOM Elements
const clickButton = document.getElementById('clickButton');
const hoverButton = document.getElementById('hoverButton');
const discoButton = document.getElementById('discoButton');

const para = document.getElementById('colorCodeContainer');
const span = document.createElement('span');

// array for generating color code
const hexCode = [
    '0','1', '2','3','4','5','6','7','8',
    '9','a','b','c','d','e','f'
];

// function which generates random color codes
const generateColor = function (){
    let colorCode = '#';
    for (let i = 0; i < 6; ++i) {
        colorCode += hexCode[random(0,15)];    
    }
    document.body.style.backgroundColor = colorCode;

    span.textContent = 'Color Code: ' + colorCode;
    span.className = 'colorCode';
    para.append(span);
}
let discoEvent;

// event for buttons
clickButton.addEventListener('click', generateColor);

hoverButton.addEventListener('mouseover', generateColor);

discoButton.addEventListener('mouseover', () => {
    discoEvent = setInterval(generateColor, 100);
});
discoButton.addEventListener('mouseout', () => {
    clearInterval(discoEvent);
})


function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}