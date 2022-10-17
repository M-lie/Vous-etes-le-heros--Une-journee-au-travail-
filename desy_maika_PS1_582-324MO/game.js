let chaptersObj = {
     
    
    intro : {
        subtitle: 'réveille',
        text:"Vous vous réveillez en retard pour votre journée de travail. Voulez-vous vous dépêcher ou y allez lentement?",
        img: "./assets/lit.jpg",
        options:[{texte: "se dépêcher", action:"goToChapter('dépêcher')"},
        {texte: "lentement", action:"goToChapter('lentement')"},]},

    dépêcher : {
        subtitle: "dépêcher",
        text:"Vous tébuchez dans les escaliers et vous mourrez.",
        img: "./assets/escaliers.jpeg",
        options: [{texte:"boutton qui sert à rien", action: "goToChapter('intro')"},
        {texte:"se réveiller", action: "goToChapter('intro')"},
        {texte:"boutton qui sert à rien", action: "goToChapter('intro')"},]},

     lentement : {
        subtitle: "cuisine",
        text:"vous arrivez dans la cuisine et vous êtes en retard. Voulez-vous mangez? Que faites-vous?",
        img: "./assets/cuisine.png",
        options:  [{texte:"pas manger", action: "goToChapter(pasmanger)"},
     {texte:"manger", action: "goToChapter('manger')"},
 { texte:"les deux", action: "goToChapter(deux)"},
 {texte:"boutton qui sert à rien", action: "goToChapter('intro')"},]},

    pasmanger : {
        subtitle: "famine",
        text:"Vous mourez de faim.",
        img: "./assets/pasmanger.jpeg",
        options: [{texte: "se réveiller", action: "goToChapter('intro')"},]
    },

    manger : {
        subtitle: "manger",
        text:"Vous vous étouffez.",
        img: "./assets/étouffer.png",
        options: [{texte: "se réveiller", action: "goToChapter('intro')"},]
    },

    deux : {
        subtitle: "transport1",
        text:"Vous partez en même temps que manger et vous décidez de prendre un transport.",
        img: "./assets/transport.jpg",
        options: [{ texte: "autobus", action: "goToChapter('autobus')"},
    { texte:"hélicoptère", action: "goToChapter('hélicoptère')"},
 { texte:"métro", action: "goToChapter('metro')"},]},

    autobus : {
        subtitle: "autobus",
        text:"Vous vous faites écrasez par l'autobus.",
        img: "./assets/autobus.jpg",
        options:[ {texte:"se réveiller", action: "goToChapter('intro')"},]},

    hélicoptère : {
        subtitle: "hélicoptère",
        text:"Vous prenez l'hélicoptère et vous arrivez au travail. Vous voyez vos collègues. Que faites-vous?",
        img: "./assets/hélicoptère.jpg",
        options: [ {texte:"ignorer", action: "goToChapter('ignorer')"},
     {texte:"saluer", action: "goToChapter('saluer')"},]},

    metro : {
        subtitle: "métro",
        text:"Vous prenez le métro et vous arrivez au travail. Vous voyez vos collègues. Que faites-vous?",
        img: "./assets/métro.jpg",
        options:[{ texte:"ignorer", action: "goToChapter('ignorer')"},
         {texte:"saluer", action: "goToChapter('saluer')"},]
    },

    ignorer : {
        subtitle: "ignorer",
        text:"Vous allez directement à votre bureau sans saluer votre collègue. Voulez-vous faire des appels ou travaillez sur votre ordinateur?",
        img: "./assets/bureau.jpg",
        options: [ {texte:"téléphone", action: "goToChapter('téléphone')"},
     { texte:"ordinateur", action: "goToChapter('ordinateur')"},]
    },

    téléphone : {
        subtitle: "téléphone",
        text:"Vous prenez le téléphone maladroitement et vous vous étranglez avec le fil du téléphone.",
        img: "./assets/fil.jpg",
        options: [{texte: "se réveiller", action: "goToChapter('intro')"},]
    },

    ordinateur : {
        subtitle: "ordinateur",
        text:"Pendant que vous travaillez sur votre ordinateur, vos collègues vous lance des boules de papiers et vous mourrez",
        img: "./assets/papiers.jpg",
        options: [{texte: "se réveiller", action: "goToChapter('intro')"},]
    },

    saluer : {
        subtitle: "saluer",
        text:"Vous saluez vos collègues et vous vous faites plein d'amis. Vous avez tellement une belle attitude que votre patron vous appel à son bureau. Vous arrivez à son bureau pour parler.",
        img: "./assets/collegue.jpg",
        options:[ {texte:"blague", action: "goToChapter('blague')"},
    {texte:"sérieux", action: "goToChapter('sérieux')"},]
    },

    blague : {
        subtitle: "blague",
        text:"Vous décidez de commencez la discussion par une blague. C'était tellement pas drôle que vous mourez de malaise.",
        img: "./assets/malaise.jpg",
        options: [{texte: "se réveiller", action: "goToChapter('intro')"},]
    },

    sérieux : {
        subtitle: "sérieux",
        text:"Vous parlez sérieusement d'affaires, vous avez de très bon argument que votre patron vous donne une promotion. Après le travail vous renrez chez vous par le même transport que vous avez pris pour venir au travail.",
        img: "./assets/promotion.jpg",
    },

    autobus2: {
        subtitle: "autobus2",
        text:"Vous prenez l'autobus et il tombe dans un ravin",
        img: "./assets/ravin.jpg",
        options: [{texte: "se réveiller", action: "goToChapter('intro')"},]
    },

    hélicoptère2: {
        subtitle: "hélicoptère2",
        text:"L'hélicoptère manque de carburant et vous vous écrasez",
        img: "./assets/explosion.jpg",
        options: [ {texte:"se réveiller", action: "goToChapter('intro')"},]
    },

    métro2: {
        subtitle: "metro2",
        text:"vous prenez le métro et vous arrivez chez vous après une longue journée au travail. Vos collègues vous appel pour vous inviter à une fête. Voulez-vous y allez ou vous reposer chez vous?",
        img: "./assets/salon.jpg",
        options: [{texte:"dormir", action: "goToChapter('dormir')"},
     {texte:"aller à la fête", action: "goToChapter('fête')"},]
    },

    dormir: {
        subtitle: "dormir",
        text:"Vous décidez de dormir plus tôt au lieu d'allez à la fête, mais vous culpabilisez et vous mourez.",
        img: "./assets/culpabilise.jpg",
        options: [{texte:"se réveiller", action: "goToChapter('intro')"},]
    },

    fête :{
        subtitle: "fête",
        text:"Vous décidez d'aller à la fête et vous vous amusez. Ne vous coucher pas trop tard demain vous retravaillez.",
        img: "./assets/fête.jpg",
        options: [ { texte:"se réveiller", action: "goToChapter('intro')"},]
    },

};



function goToChapter(chapterName){

    console.log(chaptersObj[chapterName]['subtitle']);
    console.log(chaptersObj[chapterName]["text"]);
    document.querySelector(".titre").innerHTML=chaptersObj[chapterName]["subtitle"];
    document.querySelector(".text").innerHTML= chaptersObj[chapterName]["text"];
    document.querySelector(".imgchanger").innerHTML=`<img src="${chaptersObj[chapterName]["img"]}" class="travail">`;
    let choix = document.querySelector(".choix .no1").innerHTML= chaptersObj[chapterName]["options"][0]["texte"];
    document.querySelector(".choix .no2").innerHTML= chaptersObj[chapterName]["options"][1]["texte"];
    document.querySelector(".choix .no3").innerHTML= chaptersObj[chapterName]["options"][2]["texte"];

    for(let index = 0; index < chaptersObj[chapterName].options.lenght; index++) {
        choix.onclick[0]= options[index]["action"];
        choix.onclick[1]= options[index]["action"];
        choix.onclick[2]= options[index]["action"];
    }
};

    // for(chaptersObj = 0; chaptersObj <= 2; chaptersObj++) {
    //document.querySelector(".choix .no1").innerHTML.onclick= chaptersObj[chapterName]["options"][0]["texte"]["action"];
    //document.querySelector(".choix .no2").innerHTML.onclick= chaptersObj[chapterName]["options"][1]["texte"]["action"];
    //document.querySelector(".choix .no3").innerHTML.onclick= chaptersObj[chapterName]["options"][2]["texte"]["action"];}
    





