// Need document.ready
$(document).ready(function () {

    // Start button function
       $("#startButton").on("click", function() {
           $("#startButton").remove();
           triviaGame.fillQuestions();
       });
   
   });

$(document).on("click", ".answerButtons", function(event) {
    triviaGame.answerClicks(event);
});

$(document).on("click", "#reset", function() {
    triviaGame.reset();
});

// Messages after each question
var gameMessages = {
    correct: "<h3>You know a little something, Jon Snow! Correct!</h3>",
    incorrect: "<h3>You know nothing. Wrong!</h3>",
    timeUp: "<h3>Out of time! You've made Arya's list.</h3>"
};

// Creating my array of questions and answers.
var questions = [
{ // 1
question: "1.  Who wrote the series of epic fantasy novels which were adapted into the series Game of Thrones? And what were these epic fantasy novels called?",
answers: ["Stephen King. A Clash of Kings.", "J. R. R. Tolkien. A Game of Thrones.", "George R. R. Martin. A Song of Ice and Fire.", "James Patterson. The Winds of Winter."], 
correct: "George R. R. Martin. A Song of Ice and Fire.",
},
{ // 2
question: "2.  Who is king of Westeros when the the series begins?",
answers: ["Robert Baratheon", "Stannis Baratheon", "Aerys II Targaryen", "Tywin Lannister"], 
correct: "Robert Baratheon"
}, 
{ // 3
question: "3.  What is the name of Jon's direwolf?",
answers: ["Summer", "Ghost", "Grey Wind", "Lady"], 
correct: "Ghost",
}, 
{ // 4
question: "4.  What noble house is Catelyn Stark from?",
answers: ["House Lannister", "House Arryn", "House Tully", "House Stark"], 
correct: "House Tully",
}, 
{ // 5
question: "5.  Why could Jon leave the Night's Watch, since his vows were for life?",
answers: ["He died.", "He killed the Commander and left.", "He couldn't, he ran away during the night.", "They let him leave to fight for the King."], 
correct: "He died.",
}, 
{ // 6
question: "6.  The destruction of the Great Sept of Baelor caused many casualties. Which two characters died during the explosion?",
answers: ["Margaery Tyrell and Lancel Lannister", "The High Sparrow and Ramsay Bolton", "Hodor and Loras Tyrell", "Rickon Stark and Grand Maester Pycelle"], 
correct: "Margaery Tyrell and Lancel Lannister",
},
{ // 7
question: "7.  Aside from being Master of Coin and answers member of the King's Small Council, the character of Peter 'Littlefinger' Baelish from King's Landing also runs what kind of business?",
answers: ["Tailor Shop", "Apothecary", "Blacksmith Shop", "Brothel"], 
correct: "Brothel",
}, 
{ // 8
question: "8.  Which chemical was used during the Battle of the Blackwater to destroy Stannis Baratheon's fleet?",
answers: ["Gun Powder", "Wildfire", "Poison", "Gasoline"], 
correct: "Wildfire",
}, 
{ // 9
question: "9.  What is the name of Arya Stark's sword?",
answers: ["Heartsbane", "Needle", "King Slayer", "Oathkeeper"], 
correct: "Needle",
}, 
{ // 10
question: "10.  Which of the following direwolves died in season 1?",
answers: ["Shaggydog", "Nymeria", "Summer", "Lady"], 
correct: "Lady",
}, 
{ // 11
question: "11.  By what name do the Seven Kingdoms refer to the Free Folk who live in north beyond the Wall?",
answers: ["Wildlings", "Northerners", "Canadians", "Nomads"], 
correct: "Wildlings",
}, 
{ // 12
question: "12.  Who was Hand of the King before Eddard Stark?",
answers: ["Tyrion Lannister", "Eddard Stark", "Jon Arryn", "Tywin Lannister"], 
correct: "Jon Arryn",
}, 
{ // 13
question: "13.  How many Starks appeared in the first episode of the series?",
answers: ["6", "7", "8", "9"], 
correct: "8",
}, 
{ // 14
question: "14.  Who created the first White Walker?",
answers: ["The Children of the Mountains", "The Children of the Forest", "The Children North of the Wall", "The Children of the North"], 
correct: "The Children of the Forest",
},
{ // 15
question: "15.  What is Eddard Stark's kinship to Jon Snow?",
answers: ["Father", "Cousin", "Uncle", "Brother"], 
correct: "Uncle",
}, 
{ // 16
question: "16.  Which kings did Jaime Lannister serve as answers Kingsguard?",
answers: ["Joffrey I Baratheon", "Aegon IV, Joffrey Baratheon, Tommen Baratheon", "Aerys I, Robert Baratheon", "Aerys II, Robert Baratheon and Joffrey Baratheon"], 
correct: "Aerys II, Robert Baratheon and Joffrey Baratheon",
}, 
{ // 17
question: "17.  In which battle did Jon Snow and Sansa Stark retake Winterfell from Lord Ramsay Bolton?",
answers: ["The Battle of the Bastards", "The Battle of the Blackwater", "The Battle of Castle Rock", "Red Wedding"],
correct: "The Battle of the Bastards",
},
{ // 18
question: "18.  Who admitted responsibility for Joffrey's death after being forced to take poison?",
answers: ["Olenna Tyrell", "Tyrion Lannister", "Sansa Stark", "Margaery Tyrell"], 
correct: "Olenna Tyrell",
},
{ // 19
question: "19.  What is the name of the form of obsidian that is capable of killing White Walkers?",
answers: ["Dragonstone", "Valyrian Steel", "Kryptonite", "Dragonglass"], 
correct: "Dragonglass",
},
{ // 20
question: "20.  What is the nickname of Sandor Clegane?",
answers: ["The Mountain", "The Hound", "The Wolf", "The Wall"], 
correct: "The Hound",
}];

// Setting global variables in an object.
var triviaGame = {
    currentQuestion: 0,
    numberRight: 0,
    numberWrong: 0, 
    questionCounter: 30,
    unanswered: 0,

// Count down function
countDown: function() {
    triviaGame.questionCounter--;
    $("#questionCounter").html(triviaGame.questionCounter);
    if (triviaGame.questionCounter <= 0) {
        triviaGame.timesUp();
    }
},

// Fill questions function
fillQuestions: function() {
    timer = setInterval(triviaGame.countDown, 1000);
    $("#questionContent").html("<h2>You have <span id='questionCounter'>30</span> seconds remaining.</h2>");
    $("#questionContent").append("<h2>" + questions[triviaGame.currentQuestion].question + "</h2>")
    for(var i = 0; i < questions[triviaGame.currentQuestion].answers.length; i++) {
        $("#questionContent").append("<button class='answerButtons' id='button-" + i + "' data-name='" + questions[triviaGame.currentQuestion].answers[i] + "'>" + questions[triviaGame.currentQuestion].answers[i] + "</button>");
    }
},

// Register right answer clicks function
answerClicks: function() {
    clearInterval(timer);
    if ($(event.target).data("name") == questions[triviaGame.currentQuestion].correct) {
        triviaGame.rightGuess();
    } else {
        triviaGame.wrongGuess();
    }
},

// Right guess function
rightGuess: function() {
    console.log("nailed it");
    clearInterval(timer);
    triviaGame.numberRight++;
    $("#questionContent").html(gameMessages.correct);
    if (triviaGame.currentQuestion == questions.length - 1) {
        setTimeout(triviaGame.results, 3000);
    } else {
        setTimeout(triviaGame.nextQuestion, 3000);
    }
},

// Wrong guess function
wrongGuess: function() {
    console.log("did not nail it");
    clearInterval(timer);
    triviaGame.numberWrong++;
    $("#questionContent").html(gameMessages.incorrect);
    $("#questionContent").append("<h3>The correct answer was: " + questions[triviaGame.currentQuestion].correct + "</h3>");
    if (triviaGame.currentQuestion == questions.length - 1) {
        setTimeout(triviaGame.results, 3000);
    } else {
        setTimeout(triviaGame.nextQuestion, 3000);
    }
},

// Next question function
nextQuestion: function() {
    triviaGame.questionCounter = 30;
    $("#questionCounter").html(triviaGame.questionCounter);
    triviaGame.currentQuestion++;
    triviaGame.fillQuestions();
},

// Time up function
timesUp: function() {
    clearInterval(timer);
    triviaGame.unanswered++;
    $("#questionContent").html(gameMessages.timeUp);
    $("#questionContent").append("<h3>The correct answer was: " + questions[triviaGame.currentQuestion].correct + "</h3>");
    if (triviaGame.currentQuestion == questions.length - 1) {
        setTimeout(triviaGame.results, 3000);
    } else {
        setTimeout(triviaGame.nextQuestion, 3000);
    }
},

// Results function
results: function() {
    clearInterval(timer);
    $("#questionContent").html("<h2>You made it to the end!</h2>");
    $("#questionContent").append("<h3>Right: " + triviaGame.numberRight + "</h3>");
    $("#questionContent").append("<h3>Wrong: " + triviaGame.numberWrong + "</h3>");
    $("#questionContent").append("<h3>Unanswered: " + triviaGame.unanswered + "</h3>");
    $("#questionContent").append("<button id='reset'>Reset Game</button>");
},

// Reset function
reset: function() {
    triviaGame.currentQuestion = 0;
    triviaGame.numberRight = 0;
    triviaGame.numberWrong=  0;
    triviaGame.questionCounter = 30;
    triviaGame.unanswered = 0;
    triviaGame.fillQuestions();

}
}