// quiz object
const quiz=[
    {
        question: "Hawaii was the _____ state admitted to the United States.",
        image:"../images/50th.jpg",
        answers:{
            a: "1st",
            b: "48th",
            c: "30th",
            d: "50th"
        },
        correct: "d"
    },

    {
        question: "What is the state fish?",
        image:"../images/humuhumunukunukuapuaa.jpg",
        answers:{
            a:"Humuhumunukunukuapua'a",
            b:"Kamapua'a",
            c:"Lono",
            d:"Kaimana"
        },

        correct: "a"
    },

    {
        question: "The phrase Kamaaina refers to:",
        image:"../images/kamaaina.jpg",
        answers:{
            a:"1983 hurricane",
            b:"Queen of Hawaii in1864",
            c:"Residents of Hawaii",
            d:"Native farming technique"
        },

        correct: "c"
    },

    {
        question: "Who is the Goddess of Fire known for causing volcanic eruptions that form new land?",
        image:"../images/Pele.jpg",
        answers:{
            a:"Liliokalani",
            b:"Pele",
            c:"Tefiti",
            d:"Hawaii Ponoi"
        },

        correct: "b"
    },

    {
        question: "Which island has the largest population?",
        image:"../images/oahu.jpg",
        answers:{
            a:"Oahu",
            b:"Maui",
            c:"Big Island",
            d:"Kauai"
        },

        correct: "a"
    },

    {
        question: "Which of the following foods is a common dish in Hawaii?",
        image:"../images/all.jpg",
        answers:{
            a:"Poke",
            b:"Rice",
            c:"Mochi",
            d:"all of the above"
        },

        correct: "d"
    },

    {
        question: "Which island is geographically the largest?",
        image:"../images/bigisland.jpg",
        answers:{
            a:"Oahu",
            b:"Maui",
            c:"Big Island",
            d:"Kauai"
        },

        correct: "c"
    },

    {
        question: "The southern most town in the United States (located in Hawaii) is:",
        image:"../images/naalehu.jpg",
        answers:{
            a:"Pahala",
            b:"Honolulu",
            c:"Naalehu",
            d:"Waikiki"
        },

        correct: "c"
    },

    {
        question: "Which of the following is commonly spoken amongst locals of Hawaii?",
        image:"../images/pidgin.jpg",
        answers:{
            a:"Pidgin",
            b:"Shaka",
            c:"Brahda",
            d:"Dakine"
        },

        correct: "a"
    },

    {
        question: "When James Cook attempted to kidnap the king of Hawaii in 1779, he was killed by Hawaiiand on this holiday:",
        image:"../images/mybloodyvalentine.jpg",
        answers:{
            a:"Christmas",
            b:"Easter",
            c:"Thanksgiving",
            d:"Valentine's Day"
        },

        correct: "d"
    },
]


//create timer
var number= 30;
var intervalID

function run(){
    if (!intervalID){

        intervalID=setInterval(decrement, 1000);
    }
};

function decrement(){
    number--;

    $(".timer").html("<p>" + number + "</p>");

    if (number===0){
        stop();
        //find cooler way to alert create var correct to add at end of message
        alert("Time's Up! The correct answer is:");
    }
};

function stop(){
    clearInterval(intervalID);
    intervalID=0;

};
run();
//create function based off of timer to display q+a in correct spaces
    //have either correct or incorrect messgae pop up once answer is selected
    //have out of time pop up if time runs out