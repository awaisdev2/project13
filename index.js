function toggleMode() {
    if(document.getElementById('navbar').style.backgroundColor === 'black') {
        document.getElementById('navbar').style.backgroundColor = 'lightgray'
        document.getElementById('navbar-li1').style.color = 'black';
        document.getElementById('navbar-li2').style.color = 'black';
        document.getElementById('navbar-li3').style.color = 'black';
        document.getElementById('navbar-li4').style.color = 'black';
        document.getElementById('hero').style.backgroundColor = 'lightgray';
        document.getElementById('hero').style.color = 'black';
        document.getElementById('card1').style.backgroundColor = 'lightgray';
        document.getElementById('card1').style.color = 'black';
        document.getElementById('card2').style.backgroundColor = 'lightgray';
        document.getElementById('card2').style.color = 'black';
        document.getElementById('card3').style.backgroundColor = 'lightgray';
        document.getElementById('card3').style.color = 'black';
        document.getElementById('footer').style.backgroundColor = 'lightgray';
        document.getElementById('footer').style.color = 'black';
    }
    else {
        document.getElementById('navbar').style.backgroundColor = 'black'
        document.getElementById('navbar-li1').style.color = 'lightgray';
        document.getElementById('navbar-li2').style.color = 'lightgray';
        document.getElementById('navbar-li3').style.color = 'lightgray';
        document.getElementById('navbar-li4').style.color = 'lightgray';
        document.getElementById('hero').style.backgroundColor = 'black';
        document.getElementById('hero').style.color = 'lightgray';
        document.getElementById('card1').style.backgroundColor = 'black';
        document.getElementById('card1').style.color = 'lightgray';
        document.getElementById('card2').style.backgroundColor = 'black';
        document.getElementById('card2').style.color = 'lightgray';
        document.getElementById('card3').style.backgroundColor = 'black';
        document.getElementById('card3').style.color = 'lightgray';
        document.getElementById('footer').style.backgroundColor = 'black';
        document.getElementById('footer').style.color = 'lightgray';
    }
}