let chaptersObj = {
     
    
    intro : {
        subtitle: 'réveille',
        text:"Vous vous réveillez en retard pour votre journée de travail. Voulez-vous vous dépêcher ou y allez lentement?",
        img: "./assets/lit.jpg",
        options:{option1 :{optionText: "se dépêcher", action:"goToChapter('dépêcher')"},
        option2 :{optionText: "lentement", action:"goToChapter('lentement')"},},},

    dépêcher : {
        subtitle: "dépêcher",
        text:"Vous tébuchez dans les escaliers et vous mourrez.",
        img: "./assets/escaliers.jpg",
        options: { choix1 :{texte:"se réveiller", action: "goToChapter('intro')"},},
    },

     lentement : {
        subtitle: "cuisine",
        text:"vous arrivez dans la cuisine et vous êtes en retard. Voulez-vous mangez? Que faites-vous?",
        img: "./assets/cuisine.jpg",
        options: { choix1 : {texte:"pas manger", action: "goToChapter(pasmanger)"},
    choix2: {texte:"manger", action: "goToChapter('manger')"},
choix3: { texte:"les deux", action: "goToChapter(deux)"},},
    },

    pasmanger : {
        subtitle: "famine",
        text:"Vous mourez de faim.",
        img: "./assets/famine.jpg",
        options: { choix1 :{texte:"se réveiller", action: "goToChapter('intro')"},},
    },

    manger : {
        subtitle: "manger",
        text:"Vous vous étouffez.",
        img: "./assets/étouffer.jpg",
        options: { choix1 : {texte:"se réveiller", action: "goToChapter('intro')"},},
    },

    deux : {
        subtitle: "transport1",
        text:"Vous partez en même temps que manger et vous décidez de prendre un transport.",
        img: "./assets/transport.jpg",
        options: { choix1 :{ texte: "autobus", action: "goToChapter('autobus')"},
    choix2: { texte:"hélicoptère", action: "goToChapter('hélicoptère')"},
choix3: { texte:"métro", action: "goToChapter('metro')"},},},

    autobus : {
        subtitle: "autobus",
        text:"Vous vous faites écrasez par l'autobus.",
        img: "./assets/autobus.jpg",
        options: { choix1 : {texte:"se réveiller", action: "goToChapter('intro')"},},},

    hélicoptère : {
        subtitle: "hélicoptère",
        text:"Vous prenez l'hélicoptère et vous arrivez au travail. Vous voyez vos collègues. Que faites-vous?",
        img: "./assets/hélicoptère.jpg",
        options: { choix1 : {texte:"ignorer", action: "goToChapter('ignorer')"},
    choix2: {texte:"saluer", action: "goToChapter('saluer')"},},},

    metro : {
        subtitle: "métro",
        text:"Vous prenez le métro et vous arrivez au travail. Vous voyez vos collègues. Que faites-vous?",
        img: "./assets/métro.jpg",
        options: { choix1 :{ texte:"ignorer", action: "goToChapter('ignorer')"},
        choix2: {texte:"saluer", action: "goToChapter('saluer')"},},
    },

    ignorer : {
        subtitle: "ignorer",
        text:"Vous allez directement à votre bureau sans saluer votre collègue. Voulez-vous faire des appels ou travaillez sur votre ordinateur?",
        img: "./assets/bureau.jpg",
        options: { choix1 : {texte:"téléphone", action: "goToChapter('téléphone')"},
    choix2: { texte:"ordinateur", action: "goToChapter('ordinateur')"},},
    },

    téléphone : {
        subtitle: "téléphone",
        text:"Vous prenez le téléphone maladroitement et vous vous étranglez avec le fil du téléphone.",
        img: "./assets/fil.jpg",
        options: { choix1 : {texte:"se réveiller", action: "goToChapter('intro')"},},
    },

    ordinateur : {
        subtitle: "ordinateur",
        text:"Pendant que vous travaillez sur votre ordinateur, vos collègues vous lance des boules de papiers et vous mourrez",
        img: "./assets/papiers.jpg",
        options: { choix1 : {texte:"se réveiller", action: "goToChapter('intro')"},},
    },

    saluer : {
        subtitle: "saluer",
        text:"Vous saluez vos collègues et vous vous faites plein d'amis. Vous avez tellement une belle attitude que votre patron vous appel à son bureau. Vous arrivez à son bureau pour parler.",
        img: "./assets/collegue.jpg",
        options: { choix1 : {texte:"blague", action: "goToChapter('blague')"},
    choix2: {texte:"sérieux", action: "goToChapter('sérieux')"},},
    },

    blague : {
        subtitle: "blague",
        text:"Vous décidez de commencez la discussion par une blague. C'était tellement pas drôle que vous mourez de malaise.",
        img: "./assets/malaise.jpg",
        options: { choix1 : {texte:"se réveiller", action: "goToChapter('intro')"},},
    },

    sérieux : {
        subtitle: "sérieux",
        text:"Vous parlez sérieusement d'affaires, vous avez de très bon argument que votre paton vous donne une promotion. Après le travail vous renrez chez vous par le même transport que vous avez pris pour venir au travail.",
        img: "./assets/promotion.jpg",
    },

    autobus2: {
        subtitle: "autobus2",
        text:"Vous prenez l'autobus et il tombe dans un ravin",
        img: "./assets/ravin.jpg",
        options: { choix1 :{texte: "se réveiller", action: "goToChapter('intro')"},},
    },

    hélicoptère2: {
        subtitle: "hélicoptère2",
        text:"L'hélicoptère manque de carburant et vous vous écrasez",
        img: "./assets/explosion.jpg",
        options: { choix1 : {texte:"se réveiller", action: "goToChapter('intro')"},},
    },

    métro2: {
        subtitle: "metro2",
        text:"vous prenez le métro et vous arrivez chez vous après une longue journée au travail. Vos collègues vous appel pour vous inviter à une fête. Voulez-vous y allez ou vous reposer chez vous?",
        img: "./assets/salon.jpg",
        options: { choix1 :{texte:"dormir", action: "goToChapter('dormir')"},
    choix2: {texte:"aller à la fête", action: "goToChapter('fête')"},},
    },

    dormir: {
        subtitle: "dormir",
        text:"Vous décidez de dormir plus tôt au lieu d'allez à la fête, mais vous culpabilisez et vous mourez.",
        img: "./assets/culpabilise.jpg",
        options: { choix1 : {texte:"se réveiller", action: "goToChapter('intro')"},},
    },

    fête :{
        subtitle: "fête",
        text:"Vous décidez d'aller à la fête et vous vous amusez. Ne vous coucher pas trop tard demain vous retravaillez.",
        img: "./assets/fête.jpg",
        options: { choix1 : { texte:"se réveiller", action: "goToChapter('intro')"},},
    },

};



function goToChapter(chapterName){
    console.log(chaptersObj[chapterName]["subtitle"]);
    console.log(chaptersObj[chapterName]["text"]);
};