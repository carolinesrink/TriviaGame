// Need document.ready
$(document).ready(function () {

    // Start button function
       $("#startButton").on("click", function() {
           $("#startButton").remove();
           triviaGame.fillQuestions();
       });
   
   });

$(document).on("click", ".answerButton", function(event) {
    triviaGame.answerClicks(event);
})

// Messages after each question
var gameMessages = {
    correct: "You know a little something, Jon Snow! Correct!",
    incorrect: "You know nothing. Wrong!",
    timeUp: "Out of time! You've made Arya's list."
};

// Creating my array of questions and answers.
var questions = [
{ // 1
question: "Who wrote the series of epic fantasy novels which were adapted into the series Game of Thrones? And what were these epic fantasy novels called?",
answers: ["Stephen King. A Clash of Kings.", "J. R. R. Tolkien. A Game of Thrones.", "George R. R. Martin. A Song of Ice and Fire.", "James Patterson. The Winds of Winter."], 
correct: "George R. R. Martin. A Song of Ice and Fire.",
},
{ // 2
question: "Who is king of Westeros when the the series begins?",
answers: ["Robert Baratheon", "Stannis Baratheon", "Aerys II Targaryen", "Tywin Lannister"], 
correct: "Robert Baratheon"
}, 
{ // 3
question: "What is the name of Jon's direwolf?",
answers: ["Summer", "Ghost", "Grey Wind", "Lady"], 
correct: "Ghost",
}, 
{ // 4
question: "What noble house is Catelyn Stark from?",
answers: ["House Lannister", "House Arryn", "House Tully", "House Stark"], 
correct: "House Tully",
}, 
{ // 5
question: "Why could Jon leave the Night's Watch, since his vows were for life?",
answers: ["He died.", "He killed the Commander and left.", "He couldn't, he ran away during the night.", "They let him leave to fight for the King."], 
correct: "He died.",
}, 
{ // 6
question: "The destruction of the Great Sept of Baelor caused many casualties. Which two characters died during the explosion?",
answers: ["Margaery Tyrell and Lancel Lannister", "The High Sparrow and Ramsay Bolton", "Hodor and Loras Tyrell", "Rickon Stark and Grand Maester Pycelle"], 
correct: "Margaery Tyrell and Lancel Lannister",
},
{ // 7
question: "Aside from being Master of Coin and answers member of the King's Small Council, the character of Peter 'Littlefinger' Baelish from King's Landing also runs what kind of business?",
answers: ["Tailor Shop", "Apothecary", "Blacksmith Shop", "Brothel"], 
correct: "Brothel",
}, 
{ // 8
question: "Which chemical was used during the Battle of the Blackwater to destroy Stannis Baratheon's fleet?",
answers: ["Gun Powder", "Wildfire", "Poison", "Gasoline"], 
correct: "Wildfire",
}, 
{ // 9
question: "What is the name of Arya Stark's sword?",
answers: ["Heartsbane", "Needle", "King Slayer", "Oathkeeper"], 
correct: "Needle",
}, 
{ // 10
question: "Which of the following direwolves died in season 1?",
answers: ["Shaggydog", "Nymeria", "Summer", "Lady"], 
correct: "Lady",
}, 
{ // 11
question: "By what name do the Seven Kingdoms refer to the Free Folk who live in north beyond the Wall?",
answers: ["Wildlings", "Northerners", "Canadians", "Nomads"], 
correct: "Wildlings",
}, 
{ // 12
question: "Who was Hand of the King before Eddard Stark?",
answers: ["Tyrion Lannister", "Eddard Stark", "Jon Arryn", "Tywin Lannister"], 
correct: "Jon Arryn",
}, 
{ // 13
question: "How many Starks appeared in the first episode of the series?",
answers: ["6", "7", "8", "9"], 
correct: "8",
}, 
{ // 14
question: "Who created the first White Walker?",
answers: ["The Children of the Mountains", "The Children of the Forest", "The Children North of the Wall", "The Children of the North"], 
correct: "The Children of the Forest",
},
{ // 15
question: "What is Eddard Stark's kinship to Jon Snow?",
answers: ["Father", "Cousin", "Uncle", "Brother"], 
correct: "Uncle",
}, 
{ // 16
question: "Which kings did Jaime Lannister serve as answers Kingsguard?",
answers: ["Joffrey I Baratheon", "Aegon IV, Joffrey Baratheon, Tommen Baratheon", "Aerys I, Robert Baratheon", "Aerys II, Robert Baratheon and Joffrey Baratheon"], 
correct: "Aerys II, Robert Baratheon and Joffrey Baratheon",
}, 
{ // 17
question: "In which battle did Jon Snow and Sansa Stark retake Winterfell from Lord Ramsay Bolton?",
answers: ["The Battle of the Bastards", "The Battle of the Blackwater", "The Battle of Castle Rock", "Red Wedding"],
correct: "The Battle of the Bastards",
},
{ // 18
question: "Who admitted responsibility for Joffrey's death after being forced to take poison?",
answers: ["Olenna Tyrell", "Tyrion Lannister", "Sansa Stark", "Margaery Tyrell"], 
correct: "Olenna Tyrell",
},
{ // 19
question: "What is the name of the form of obsidian that is capable of killing White Walkers?",
answers: ["Dragonstone", "Valyrian Steel", "Kryptonite", "Dragonglass"], 
correct: "Dragonglass",
},
{ // 20
question: "What is the nickname of Sandor Clegane?",
answers: ["The Mountain", "The Hound", "The Wolf", "The Wall"], 
correct: "The Hound",
}];

// Setting global variables in an object.
var triviaGame = {
    currentQuestion: 0,
    numberRight: 0,
    numberWrong: 0, 
    questionCounter: 30,

// Count down function
countDown: function() {
    triviaGame.questionCounter--;
    $("#questionCounter").html(triviaGame.questionCounter);
    if (triviaGame.questionCounter <= 0) {
        console.log(gameMessages.timeUp);
        game.TimesUp();

    }
},

// Fill questions function
fillQuestions: function() {
    timer = setInterval(triviaGame.countDown, 1000);
    $("#questionContent").html("<h2>" + questions[triviaGame.currentQuestion].question + "</h2>")
    for(var i = 0; i < questions[triviaGame.currentQuestion].answers.length; i++) {
        $("#questionContent").append("<button class='answerButtons' id='button-" + i + "' data-name='" + questions[triviaGame.currentQuestion].answers[i] + "'>" + questions[triviaGame.currentQuestion].answers[i] + "</button>");
    }
},

// Register answer clicks function
answerClicks: function() {

}
// Next question function

// Timer function

// Time up function

// Reset function
}