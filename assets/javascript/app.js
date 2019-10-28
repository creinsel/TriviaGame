// quiz object
const quiz=[

    {
        question: "Hawaii was the _____ state admitted to the United States.",
        image:'../images/50th.jpg',
        answers: {
            a: "a: 1st",
            b: "b: 48th",
            c: "c: 30th",
            d: "d: 50th"
        },
        correct: "d"
    },

    {
        question: "What is the state fish?",
        image:'../images/humuhumunukunukuapuaa.jpg',
        answers:{
            a:"a: Humuhumunukunukuapua'a",
            b:"b: Kamapua'a",
            c:"c: Lono",
            d:"d: Kaimana"
        },

        correct: "a"
    },

    {
        question: "The phrase Kamaaina refers to:",
        image:"../images/kamaaina.jpg",
        answers:{
            a:"a: 1983 hurricane",
            b:"b: Queen of Hawaii in1864",
            c:"c: Residents of Hawaii",
            d:"d: Native farming technique"
        },

        correct: "c"
    },

    {
        question: "Who is the Goddess of Fire known for causing volcanic eruptions that form new land?",
        image:"../images/Pele.jpg",
        answers:{
            a:"a: Liliokalani",
            b:"b: Pele",
            c:"c: Tefiti",
            d:"d: Hawaii Ponoi"
        },

        correct: "b"
    },

    {
        question: "Which island has the largest population?",
        image:"../images/oahu.jpg",
        answers:{
            a:"a: Oahu",
            b:"b: Maui",
            c:"c: Big Island",
            d:"d: Kauai"
        },

        correct: "a"
    },

    {
        question: "Which of the following foods is a common dish in Hawaii?",
        image:"../images/all.jpg",
        answers:{
            a:"a: Poke",
            b:"b: Rice",
            c:"c: Mochi",
            d:"d: all of the above"
        },

        correct: "d"
    },

    {
        question: "Which island is geographically the largest?",
        image:"../images/bigisland.jpg",
        answers:{
            a:"a: Oahu",
            b:"b: Maui",
            c:"c: Big Island",
            d:"d: Kauai"
        },

        correct: "c"
    },

    {
        question: "The southern most town in the United States (located in Hawaii) is:",
        image:"../images/naalehu.jpg",
        answers:{
            a:"a: Pahala",
            b:"b: Honolulu",
            c:"c: Naalehu",
            d:"d: Waikiki"
        },

        correct: "c"
    },

    {
        question: "Which of the following is commonly spoken amongst locals of Hawaii?",
        image:"../images/pidgin.jpg",
        answers:{
            a:"a: Pidgin",
            b:"b: Shaka",
            c:"c: Brahda",
            d:"d: Dakine"
        },

        correct: "a"
    },

    {
        question: "When James Cook attempted to kidnap the king of Hawaii in 1779, he was killed by Hawaiians on this holiday:",
        image:"images/mybloodyvalentine.jpg",
        answers:{
            a:"a: Christmas",
            b:"b: Easter",
            c:"c: Thanksgiving",
            d:"d: Valentine's Day"
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
        displaySet();
    }
};

function decrement(){
    number--;

    $(".timer").html("<p>" + number + "</p>");

    if (number===0){
        stop();
        //find cooler way to alert create var correct to add at end of message
        alert("Time's Up! The correct answer is:"+ " "+ toDisplay.correct );
        number=30;
        run();
    }
};

function stop(){
    clearInterval(intervalID);
    intervalID=0;
     
};

run();
//create function based off of timer to display q+a in correct spaces
    //have either correct or incorrect messgae pop up once answer is selected

// choosing random from quiz object to display on screen


 var toDisplay; 


// var toDisplay= quiz[i};
// console.log(toDisplay);

function displaySet(){
    randomIndex = Math.floor(Math.random() * quiz.length);
    console.log(randomIndex);
    toDisplay=quiz[randomIndex];

    
        $(".question-main").html("<p>"+ toDisplay.question +"</p>")
        $(".a").html("<p>"+toDisplay.answers.a + "</p>")
        $(".b").html("<p>"+toDisplay.answers.b + "</p>")
        $(".c").html("<p>"+toDisplay.answers.c + "</p>")
        $(".d").html("<p>"+toDisplay.answers.d + "</p>")
        $(".photo").html("<img src="+ toDisplay.image+ "width='200px'>")

   console.log(toDisplay);
};

