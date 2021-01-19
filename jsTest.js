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

var drillSet = [
    {
        id: ""
    }
]

$("#introduction-lessons").show(); //To show the pre introduction page by default

$("#tests-page").hide

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

    if (question.answers.includes(answerInput)) {
        alert("Correct");
    } else {
        alert("Incorrect");
    } 

    $(".close-btn").click();
})
 
$('#exampleModal').on('shown.bs.modal', function () { //alert Box
    $('#myInput').trigger('focus')
}) //alert Box

$(".menu > li").mouseover(function() { //li elements hover effects
    $(this).css("font-weight", "900")
})
 
$(".menu > li").mouseout(function() {
    $(this).css("font-weight", "400")
}) //li elements hover effects end

$(".lesson-button").click(function() {
    let pageId = $(this).data("id");
 
    $(".page").each(function() {
        if ($(this).data("id") === pageId) {
            $(this).show();
        } else {
            $(this).hide();
        }
    })
}) 

$(".drill-button").click(function() {
    let pageId = $(this).data("id");
 
    $(".page-drill").each(function() {
        if ($(this).data("id") === pageId) {
            $(this).show();
        } else {
            $(this).hide();
        }
    })
}) 

$(".button-nav").click(function() {
    let wholePageId = $(this).data("id");
 
    $(".whole-page").each(function() {
        if ($(this).data("id") === wholePageId) {
            $(this).show();
        } else {
            $(this).hide(); 
        }
    })
}) 