function showChat() {
    const chatFooter = document.getElementById('chat-footer');
    const chatBody = document.getElementById('chat-body');

    chatBody.className = "card-body";
    chatFooter.className = "card-footer";

    const btn = document.getElementById('btn-chat');
    btn.setAttribute('onclick', 'hideChat()');

    const card = document.getElementById("card");
    card.setAttribute('class', 'card border-blue');

}

function hideChat() {
    const chatFooter = document.getElementById('chat-footer');
    const chatBody = document.getElementById('chat-body');

    chatBody.className = chatBody.className + '  d-none';
    chatFooter.className = chatFooter.className + '  d-none';

    const btn = document.getElementById('btn-chat');
    btn.setAttribute('onclick', 'showChat()');

    const card = document.getElementById("card");
    card.setAttribute('class', 'card border-red');

}

hideChat();

function sum() {
    const a = document.getElementById('leta').value;
    const b = document.getElementById('letb').value;
    let result = Number(a) + Number(b);
    if (numarbun()) {
        alert('numar bun s-a facut');
    }

    // if (result >= 100) {
    //   alert("100+");
    // }
    // else if (result >= 70) {
    //   alert("70+");
    // }
    // else if (result >= 50) {
    //   alert("50+");
    // }
    // else if (result >= 10) {
    //   alert("10+");
    // }
    // else if (result >= 0) {
    //   alert("0+")
    // }

    // 
    function esteParsauImpar(numar) {
        if (numar % 2 === 0) {
            alert("Număr par")
        } else {
            alert("Număr impar")
        }
    }

    function laPutere(num, putere) {
        return Math.pow(num, putere)
    }

    function minMax(num1, num2) {
        if (num1 > num2) {
            return num1
        } else if (num2 > num1) {
            return num2
        }
    }

    function minMax2(num1, num2, num3) {
        if (num1 > num2 && num1 > num3) {
            return num1
        } else if (num2 > num3 && num2 > num1) {
            return num2
        }
    }

    function minMax(min, max, num) {
        if (min > max) {
            return undefined //return undefiend asta e fix return?//return

        }
        if (num < min) {

            return min
        }

        if (num > max) {
            return max
        }
        return num
    }

    const x = minMax(10, 100, 50)



    const arr = [1, 2, undefined, 4, 5, undefined, 7];
    let sum = 0;

    //initializare , conditia, interatia;
    for (let i = 0; i < arr.length; i++) { //i este index

        if (!arr[i]) { //poate fi si  arr[i] = = = undefined
            console.log(arr[i]); //arr[i]=este undefined;
            arr[i] = i + 1 //semnul ! este inversaria valorii


        }

        sum = sum + arr[i];


    }

    const arr = [1, 2, 3, 4, 5];
    const arr2 = [5, 4, 3, 2, 1];

    const rezultat = [];
    for (let i = 0; i < arr.length; i++) {

        rezultat[i] = arr[i] - arr2[i];

    }
    const arr = [1, 2, 3, 4, 5];
    const arr2 = [5, 4, 3, 2, 1];

    const rezultat = [];

    for (let i = 0; i < arr.length; i++) {
        rezultat[i] = arr[i];
    }

    for (let i = 0; i < arr.length; i++) {
        rezultat[i] = arr2[i];
    }

    const arr = [1, 2, 3, 4, 5];
    const arr2 = [5, 4, 3, 2, 1];

    const rezultat = [];

    for (let i = 0; i < arr.length; i++) {
        rezultat[i] = arr[i];
        rezultat[i + arr2.length] = arr2;
    }



    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    // afisati pe ecran doar variabilele pare utilizand for sau forEach
    // ex: 2, 4, 6, 8 
    // afisati pe ecran doar variabilele impare utilizand for sau forEach
    // ex: 1, 3, 5, 7
    // 
    for (let i = 0; i < 8; i++) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i] + '  ' + i + ' ');
        };
    };



    const matematica = [4, 2, 3, 8, 7, 4, 8];
    const fizica = [5, 5, 5, 5, 8, 7];
    const istoria = [8, 8, 7, 10, 9, 10];
    const informatica = [2, 2, 2, 2, 2, 10, 10, 10];

    // calculati media pe fiecare obiect
    // afisati rezultatul pe ecran

    // afisati media finala pe obiecte
    let sum = 0;
    let avg_sum = 0;

    let sum_fizica = 0;
    let avg_fizica = 0;

    let sum_istoria = 0;
    let avg_istoria = 0;

    let sum_informatica = 0;
    let avg_informatica = 0;

    let sum_media_obiecte = 0;


    for (let i = 0; i < matematica.length; i++) {
        if (matematica[i]) {
            sum = sum + matematica[i];
        }
    };

    avg_sum = sum / matematica.length;

    for (let i = 0; i < fizica.length; i++) {
        if (fizica[i]) {
            sum_fizica = sum_fizica + fizica[i];
        };
    };

    avg_fizica = sum_fizica / fizica.length;

    for (let i = 0; i < istoria.length; i++) {
        if (istoria[i]) {
            sum_istoria = sum_istoria + istoria[i];
        };
    };
    avg_istoria = sum_istoria / istoria.length;

    for (let i = 0; i < informatica.length; i++) {
        // sum += parseInt( informatica[i], 10 )
        if (informatica[i]) {
            sum_informatica = sum_informatica + informatica[i];
        };
    };
    avg_informatica = sum_informatica / informatica.length;
    const media_obiecte = [avg_sum, avg_fizica, avg_istoria, avg_informatica];


    for (let i = 0; i < media_obiecte.length; i++) {
        if (media_obiecte[i]) {
            sum_media_obiecte = sum_media_obiecte + media_obiecte[i];
        };
    };
    sum_media_obiecte = sum_media_obiecte / media_obiecte.length;