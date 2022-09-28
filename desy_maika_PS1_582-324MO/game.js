let chapterObj = {
    intro: {
        subtitle: "réveille",
        text:"Vous vous réveillez en retard pour votre journée de travail. Voulez-vous vous dépêcher ou y allez lentement?",
        img: "lit.png",
    },
    

    dépêcher: {
        subtitle: "dépêcher",
        text:"",
        img: "escaliers.png",
    },

    lentement: {
        subtitle: "cuisine",
        text:"",
        img: "cuisine.png",
    },

    pasmanger: {
        subtitle: "famine",
        text:"",
        img: "mort.png",
    },

    manger: {
        subtitle: "manger",
        text:"",
        img: "etouffe.png",
    },

    deux: {
        subtitle: "transport1",
        text:"",
        img: "transport.png",
    },

    autobus: {
        subtitle: "autobus",
        text:"",
        img: "autobus.png",
    },

    hélicoptère: {
        subtitle: "hélicoptère",
        text:"",
        img: "helicoptere.png",
    },

    metro: {
        subtitle: "metro",
        text:"",
        img: "metro.png",
    },

    ignorer: {
        subtitle: "ignorer",
        text:"",
        img: "bureau.png",
    },

    téléphone: {
        subtitle: "téléphone",
        text:"",
        img: "fil.png",
    },

    ordinatuer: {
        subtitle: "ordinateur",
        text:"",
        img: "papiers.png",
    },

    saluer: {
        subtitle: "saluer",
        text:"",
        img: "collegue.png",
    },

    blague: {
        subtitle: "blague",
        text:"",
        img: "malaise.png",
    },

    sérieux: {
        subtitle: "sérieux",
        text:"",
        img: "promotion.png",
    },

    autobus2: {
        subtitle: "autobus2",
        text:"",
        img: "ravin.png",
    },

    hélicoptère2: {
        subtitle: "hélicoptère2",
        text:"",
        img: "explosion.png",
    },

    métro2: {
        subtitle: "metro2",
        text:"",
        img: "salon.png",
    },

    dormir: {
        subtitle: "dormir",
        text:"",
        img: "culpabilise.png",
    },

    fête: {
        subtitle: "fête",
        text:"",
        img: "fête.png",
    },

   

}

function goToChapter(chapterObj){
    console.log(chapterObj);
};

console.log(goToChapter(chapterObj.intro))

let intro = ["se dépêcher", "lentement"];
const lentement = ["pas manger", "manger", "les deux"];
const deux = ["hélicoptère", "métro", "autobus"];
const métro = ["saluer", "ignorer"];
const hélicoptère = ["saluer", "ignorer"];
const ignorer = ["téléphoner", "ordinateur"];
const saluer = ["blague", "sérieux"];
const métro2 = ["dormir", "aller à la fête"];