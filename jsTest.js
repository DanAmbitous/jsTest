var questionSet = [
    {
        id: "question-introduction-lesson",
        question: "What is JS?",
        options:[
            "(a) JS is a front-end programming language, that is used with HTML, and CSS. It's used for creating dynamic websites, AI, video-games, applications, and things such as these.",

            "(b) JS is a back-end programming language that is used for server side things, such as data management, AI, and other server side related things."
        ],
        answers: [
            "a"
        ]
    }, 
    {
        id: "question-setUp-lesson",
        question: "How do you setup JS externally?",
        options:[
            "(a) You type in the JavaScript keyword inside the head tag",
            "(b) link the JavaScript file by creating script tags and inside the opening script tag write a src tag linking to the JS file"
        ],
        answers: [
            "b",
        ]
    }, 
    {
        id: "question-data-types-lesson",
        question: "How to create a string?",
        options:[
            "(a) Just type it in as it is.",
            "(b) Use single or double quotation marks to enclose the string."
        ],
        answers: [
            "b"
        ]
    }, 
    {
        id: "question-variables-lesson",
        question: "How many different variable types are there?",
        options:[
            "(a) Three",
            "(b) Two", 
            "(c) Four",
            "(d) Five",
            "(e) One"
        ],
        answers: [
            "a",
        ]
    }, 
    {
        id: "question-comments-lesson",
        question: "What are comments used for?",
        options:[
            "(a) Comments are used for typing into the code, but not having it effect the output", 
            "(b) Comments are used to add links", 
            "(c) Comments are used for back-end", 
            "(d) Comments are used for CSS"
        ],
        answers: [
            "a",
        ]
    }, 
    {
        id: "question-arithmetic-operators-lesson",
        question: "What are arithmetic operators?",
        options:[
            "(a) Arithmetic operators are symbols for only working with strings",
            "(b) Arithmetic operators are code to use for package management",
            "(c) Arithmetic operators are for version control only",
            "(d) Arithmetic operators are for using math in code such as by working with numbers, or concatenating strings"
        ],
        answers: [
            "d",
        ]
    }, 
]

$(".open-question-modal").click(function() {//quiz box
    let questionId = $(this).data("id");

    let question = questionSet.find(object => object.id === questionId);
    
    $("#myModal").data("question", questionId);
    $(".modal-header").html(question.question);
    $(".modal-body").html(question.options.join("<br>"));
})//quiz box end



$("#check").click(function() {
    let questionId = $("#myModal").data("question");
    
    let answerInput = $("#answer").val();

    let question = questionSet.find(object => object.id === questionId);

    /*{
        id: "question-arithmetic-operators-lesson",
        question: "What are arithmetic operators?",
        options:[
            "(a) Arithmetic operators are symbols for only working with strings",
            "(b) Arithmetic operators are code to use for package management",
            "(c) Arithmetic operators are for version control only",
            "(d) Arithmetic operators are for using math in code such as by working with numbers, or concatenating strings"
        ],
        answers: [
            "d",
        ]
    }*/


    if (question.answers.includes(answerInput)) {
        alert("Correct")
        $("#myModal").css("background-color", "lime");
    } else {
        alert("Incorrect");
    } 

    $("#myModal .close-btn").click();



    /*let objectAnswer = $(".open-question-modal").data("answer");

    let answer = questionSet.find(object => object.answers === objectAnswer); The problem is here, answer is undefined

    answer = "a"; hard code*/

    /*for (let index = 0; index < questionSet.length; index++) {
        let answer = questionSet[index].answers;

        let input = $("#answer").val();

        if (input == answer) {
        alert("correct");
        } else {
        alert("incorrect");
        }
    }*/
})
 
$('#exampleModal').on('shown.bs.modal', function () { //alert Box
    $('#myInput').trigger('focus')
}) 

$("#introduction-page, #setUp-page, #data-types-page, #variables-page, #comments-page, #arithmetic-operators-page").hide(); //hide lessons' pages

$("#introduction-drills-page, #setUp-drills-page, #data-types-drills-page, #variable-drills-page, #comment-drills-page, #arithmetic-operator-drills-page").hide(); //hide drills' pages

$(".menu > li").mouseover(function() { //li elements hover effects
    $(this).css("font-weight", "900")
})
 
$(".menu > li").mouseout(function() {
    $(this).css("font-weight", "400")
}) //li elements hover effects end

$(".lesson-button").click(function() {
    let pageId = $(this).data("id");
   // $(".page").hide();

//body
//    $(".page-drills").hide(); 
 //   $(".page-test").hide();
    $(".page").each(function() {
        if($(this).data("id") === pageId) {
            $(this).show();
        } else {
            $(this).hide();
        }
    })
}) 

/*How to use find() method
let myArray = [2, 5, 6, 7, 1]

const sixExists = myArray.find((number) => number === 6)

>>> true
*/

/*let myArray = [ How to use find method in an object
    {
        phone: "12",
        name: "dan",
    },
    {
        phone: "14",
        name: "mahdi",
    },
]

const phoneFinder = myArray.find((object) => object.name == "mahdi")

console.log(phoneFinder.phone);

>>> 14
*/


/*function functionName(number) {
    if(number === 6) {
        return true;
    } 
    return false;
} 

console.log(functionName(7))
console.log(functionName(6))

function function_name(Parameter) {

}

const function_name = (name = "Dan") => {
    return myvalue;
}

const a = 2;
const function_name = (name = "Dan") => "a" + name

const function_name = (name = "Dan") => {
    let output = "a" + name;
    return output;
} 

Parameter is variable defined in function declaration. Argument is the actual value of this variable that get passed to the function

ES6 function syntax NOTE
const functionName = (parameter) => returnValue

const function_name = (name = "Dan") => "a" + name


let myArray = [
    {
        phone: "12",
        name: "dan",
    },
    {
        phone: "14",
        name: "mahdi",
    },
]

let myArray = [1, 2]
let myArray = ["dan", "mahdi"]

find ===> if not found ==> undefined 
find ===> if found ==> item in array 


const myVar = myArray.find((item) => item.name == "mahdi")


myVar ==> {
    phone: "14",
    name: "mahdi",
}*/