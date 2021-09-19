//Bài 1
var longestString = '';
var lngth = 0;
function allLongestStrings() {
    for (var param of arguments) {
        if(param.length > lngth){
            lngth = param.length;
            longestString = param;
        }
    }
}
    
allLongestStrings('mận', 'lê', 'xoài');
console.log(longestString);

//Bài 2
var team1 = 0;
var team2 = 0;
function alternatingSums() {
    for (let index = 0; index < arguments.length; index++) {
        if (index % 2 === 0) {
            team1 += arguments[index];
        } else {
            team2 += arguments[index];
        }
        
    }
}
alternatingSums(60, 40, 55, 75, 64);
console.log(`team 1: ${team1} và team 2: ${team2}`);

//Bài 3
const random = document.getElementsByClassName('Random');
const colors = ['#000000', '#FF0000', '#00FF00', '#FF00FF', '#000080'];
random[0].addEventListener('click', function() {
    const colorChange = colors[Math.floor(Math.random() * colors.length)]
    document.body.style.backgroundColor = colorChange
})

const pick = ['#000000', '#FF0000', '#00FF00', '#0000FF']
const black = document.getElementsByClassName('#000000');
const orange = document.getElementsByClassName('#FF0000');
const yellow = document.getElementsByClassName('#00FF00');
const blue = document.getElementsByClassName('#0000FF');
black[0].addEventListener('click', function() {
    document.body.style.backgroundColor = pick[0]
})
orange[0].addEventListener('click', function() {
    document.body.style.backgroundColor = pick[1]
})
yellow[0].addEventListener('click', function() {
    document.body.style.backgroundColor = pick[2]
})
blue[0].addEventListener('click', function() {
    document.body.style.backgroundColor = pick[3]
})



