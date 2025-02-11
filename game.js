let chaptersObj = {
     
    jeu : {
      
            subtitle: "Venez jouer!",
            text:"Veuillez commencer en appuyant sur commencer.",
        img: "./assets/work.jpg",
        options: [
        {texte:"commencer", action: "keyfalse()"},]},
    
    intro : {
        subtitle: 'Réveille',
        text:"Vous vous réveillez en retard pour votre journée de travail. Voulez-vous vous dépêchez ou y allez lentement?",
        img: "./assets/lit.jpg",
        options:[{texte: "se dépêcher", action:"goToChapter('dépêcher')"},
        {texte: "lentement", action:"goToChapter('lentement')"},]},

    dépêcher : {
        subtitle: "C'est le drame",
        text:"Vous trébuchez dans les escaliers et vous mourez.",
        img: "./assets/escaliers.jpeg",
        options: [
        {texte:"se réveiller", action: "goToChapter('intro')"},]},

     lentement : {
        subtitle: "Cuisine",
        text:"Vous arrivez dans la cuisine et vous êtes en retard. Voulez-vous mangez? Ne pas mangez? Voulez-vous partir en même temps que mangez? Que faites-vous?",
        img: "./assets/cuisine.png",
        options:  [{texte:"pas manger", action: "goToChapter('pasmanger')"},
     {texte:"manger", action: "goToChapter('manger')"},
 { texte:"les deux", action: "goToChapter('deux')"},]},

    pasmanger : {
        subtitle: "Famine",
        text:"Vous mourez de faim.",
        img: "./assets/pasmanger.jpeg",
        options: [{texte: "se réveiller", action: "goToChapter('intro')"},]
    },

    manger : {
        subtitle: "Manger",
        text:"Vous vous étouffez.",
        img: "./assets/étouffer.png",
        options: [{texte: "se réveiller", action: "goToChapter('intro')"},]
    },

    deux : {
        subtitle: "Transport",
        text:"Vous partez en même temps que manger et vous décidez de prendre un transport.",
        img: "./assets/transport.jpg",
        options: [{ texte: "autobus", action: "goToChapter('autobus')"},
    { texte:"hélicoptère", action: "goToChapter('hélicoptère')"},
 { texte:"métro", action: "goToChapter('metro')"},
 ]},

    autobus : {
        subtitle: "Autobus",
        text:"L'autobus tombe dans un ravin et vous mourez.",
        img: "./assets/ravin.jpg",
        options:[ {texte:"se réveiller", action: "goToChapter('intro')"},]},

    hélicoptère : {
        subtitle: "Hélicoptère",
        text:"Vous prenez l'hélicoptère et vous arrivez au travail. Vous voyez vos collègues. Que faites-vous?",
        video: "./assets/hélico.mp4",
        img: "./assets/hélico.gif",
        options: [ {texte:"ignorer", action: "goToChapter('ignorer')"},
     {texte:"saluer", action: "goToChapter('saluer')"},]},

    metro : {
        subtitle: "Métro",
        text:"Vous prenez le métro et vous arrivez au travail. Vous voyez vos collègues. Que faites-vous?",
        img: "./assets/métro.jpg",
        options:[{ texte:"ignorer", action: "goToChapter('ignorer')"},
         {texte:"saluer", action: "goToChapter('saluer')"},]
    },

    ignorer : {
        subtitle: "Ignorer",
        text:"Vous allez directement à votre bureau sans saluer votre collègue. Voulez-vous faire des appels ou travailler sur votre ordinateur?",
        img: "./assets/bureau.jpg",
        options: [ {texte:"téléphone", action: "goToChapter('téléphone')"},
     { texte:"ordinateur", action: "goToChapter('ordinateur')"},]
    },

    téléphone : {
        subtitle: "Téléphone",
        text:"Vous prenez le téléphone maladroitement et vous vous étranglez avec le fil du téléphone. Vous n'avez vraiment pas de chance!",
        img: "./assets/fil.jpg",
        options: [{texte: "se réveiller", action: "goToChapter('intro')"},]
    },

    ordinateur : {
        subtitle: "Ordinateur",
        text:"Pendant que vous travaillez sur votre ordinateur, vos collègues vous lance des boules de papiers et vous mourez",
        img: "./assets/papiers.jpg",
        options: [{texte: "se réveiller", action: "goToChapter('intro')"},]
    },

    saluer : {
        subtitle: "Saluer",
        text:"Vous saluez vos collègues et vous vous faites plein d'amis. Vous avez tellement une belle attitude que votre patron vous appel à son bureau. Vous arrivez à son bureau pour parler. Voulez-vous faire une blague ou rester sérieux?",
        img: "./assets/collegue.jpg",
        options:[ {texte:"blague", action: "goToChapter('blague')"},
    {texte:"sérieux", action: "goToChapter('sérieux')"},]
    },

    blague : {
        subtitle: "Gros flop!",
        text:"Vous décidez de commencer la discussion par une blague. C'était tellement pas drôle que vous mourez de malaise.",
        img: "./assets/malaise.jpg",
        options: [{texte: "se réveiller", action: "goToChapter('intro')"},]
    },

    sérieux : {
        subtitle: "Entrevue",
        text:"Vous parlez sérieusement d'affaires, vous avez de très bon argument que votre patron vous donne une promotion. Après le travail vous rentrez chez vous, mais vous trouvez des clés par terre. Voulez-vous les prendre?",
        img: "./assets/promotion.jpg",
        options: [ {texte:"oui", action: "keytrue()"},
        {texte:"partir", action: "keyStatus()"},]
    },

    clé : {
        subtitle: "Prendre les clés",
        text:"Vous prenez les clés.",
        img: "./assets/clé.jpg",
        options: [ {texte:"revenir", action: "goToChapter('partir')"},]
    },

    partir : {
        subtitle: "Entrevue",
        text:"Maintenant vous avez les clés et vous décidez de partir.",
        img: "./assets/promotion.jpg",
        options: [ {texte:"partir", action: "keyStatus()"},]
    },

    hélicoptère2: {
        subtitle: "Crash",
        text:"C'est les clés de l'hélicoptère. Malheureusement, l'hélicoptère manque de carburant et vous vous écrasez",
        img: "./assets/explosion.jpg",
        options: [ {texte:"se réveiller", action: "keyfalse()"},]
    },

    metro2: {
        subtitle: "Maison",
        text:"Vous prenez le métro et vous arrivez chez vous après une longue journée au travail. Vos collègues vous appel pour vous inviter à une fête. Voulez-vous y allez ou vous reposez chez vous?",
        img: "./assets/salon.jpg",
        options: [{texte:"dormir", action: "goToChapter('dormir')"},
     {texte:"aller à la fête", action: "goToChapter('fête')"},]
    },

    dormir: {
        subtitle: "Culpabilité",
        text:"Vous décidez de dormir plus tôt qu'allez à la fête, mais vous culpabilisez et vous mourez.",
        img: "./assets/culpabilise.jpg",
        options: [{texte:"se réveiller", action: "goToChapter('intro')"},]
    },

    fête :{
        subtitle: "Fête",
        text:"Vous décidez d'aller à la fête et vous vous amusez. Ne vous coucher pas trop tard demain vous retravaillez!",
        video: "./assets/giphy.mp4",
        img: "./assets/fête.jpg",
        options: [ { texte:"se réveiller", action: "goToChapter('intro')"},]
    },

};



function goToChapter(chapterName){

    console.log(chaptersObj[chapterName]['subtitle']);
    console.log(chaptersObj[chapterName]["text"]);
    document.querySelector(".titre").innerHTML=chaptersObj[chapterName]["subtitle"];
    document.querySelector(".text").innerHTML= chaptersObj[chapterName]["text"];
    document.querySelector(".imgvideo").innerHTML=`<img src="${chaptersObj[chapterName]["img"]}" class="travail">`;
   
   if(chaptersObj[chapterName]["video"]){
        document.querySelector(".imgvideo").innerHTML=`<video src="${chaptersObj[chapterName]["video"]}" class="video" autoplay loop muted></video>`;
   }
else {
        document.querySelector(".imgvideo").innerHTML=`<img src="${chaptersObj[chapterName]["img"]}" class="travail">`;
}

    let choix = document.querySelector(".choix");
    choix.innerHTML="";



    for(element of chaptersObj[chapterName]['options']) {
        let button = document.createElement("button");
        button.setAttribute("onclick", element["action"]);
        button.setAttribute("type", "button");
        button.getAttribute("type");
        button.appendChild(document.createTextNode(element["texte"]));
        choix.appendChild(button);
        localStorage.setItem("chaptersObj", chapterName);
        
    }

    let son = document.querySelector(".Son");

const btn = document.querySelectorAll('button');
const audio = new Audio('./assets/transition.mp3')
for(element of btn){
element.addEventListener('click', function() {
    if( son.checked == true){
        audio.play();
    }
    
    if( son.checked == false){
        audio.pause();
    }
});
}

let body = document.querySelector("body");

body.setAttribute("class",[chapterName]);


};





if(localStorage.getItem("chaptersObj")){
    goToChapter(localStorage.getItem("chaptersObj"))
}

else{
goToChapter("intro");
}


let key = false;

function keytrue() {
    key = true;
    goToChapter("clé");
    localStorage.setItem("key", key);
};

function keyStatus() {
    if (key == true) {
        goToChapter("hélicoptère2");
    }
    if (key == false){
        goToChapter("metro2");
    }
    localStorage.setItem("key", key);
};

function keyfalse() {
    key = false;
    goToChapter("intro");
    localStorage.setItem("key", key);
};


    

    function reset() {
            localStorage.removeItem("key", key);
            localStorage.clear();
            goToChapter("jeu");
        
    };

    
    let resetArr = document.querySelector(".reset");

    resetArr.addEventListener("click", function(){
        reset();
    });







