const questionSet = [
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

const drillQustionIntroduction = [
    {
        id: "drill-introduction",
        question: "What is JavaScript?",
        answers: {
            a: "an object-oriented computer programming language commonly used to create interactive effects within web browsers.",
            b: "C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or 'C with Classes'",
            c: "Lua is a lightweight, high-level, multi-paradigm programming language designed primarily for embedded use in applications. Lua is cross-platform, since the interpreter of compiled bytecode is written in ANSI C, and Lua has a relatively simple C API to embed it into applications."
        },
        correctAnswer: "a"
    },
    {
        id: "drill-set-up",
        question: "Who created JavaScript?",
        answers: {
            a: "Guido van Rossum",
            b: "Brendan Eich",
            c: "Bjarne Stroustrup"
        },
        correctAnswer: "b"
    },
    {   
        id: "drill-data-types",
        question: "What is the common acronym for JavaScript?",
        answers: {
            a: "Py",
            b: "Cpp",
            c: "JS"
        },
        correctAnswer: "c"
    },
];

$(".menu > li").mouseover(function() { //li elements hover effects
    $(this).css("font-weight", "900")
})
 
$(".menu > li").mouseout(function() {
    $(this).css("font-weight", "400")
}) //li elements hover effects end

$("#pre-introduction").show(); //To show the pre introduction page by default

$(".drill-page-hide").hide(); //Hide all but pre-intro drill page

$('#exampleModal').on('shown.bs.modal', function () { //alert Box
    $('#myInput').trigger('focus')
}) //alert Box end

$(".open-question-modal").click(function() {//quiz box
    let questionId = $(this).data("id");

    let question = questionSet.find(object => object.id === questionId);
    
    $("#myModal").data("question", questionId);
    $(".modal-header").html(question.question);
    $(".modal-body").html(question.options.join("<br>"));
})//quiz box end

$("#check").click(function() { //Check and cancel buttons
    let questionId = $("#myModal").data("question");
    
    let answerInput = $("#answer").val();

    let question = questionSet.find(object => object.id === questionId);

    if (question.answers.includes(answerInput)) {
        alert("Correct");
    } else {
        alert("Incorrect");
    } 

    $(".close-btn").click();
}) //Check and cancel buttons End
 
$(".button-nav").click(function() { //Nav bar
    let wholePageId = $(this).data("id");
 
    $(".whole-page").each(function() {
        if ($(this).data("id") === wholePageId) {
            $(this).show();
        } else {
            $(this).hide(); 
        }
    })
}); 

$(".lesson-button").click(function() { //Lessons page
    let pageId = $(this).data("id");
 
    $(".page").each(function() {
        if ($(this).data("id") === pageId) {
            $(this).show();
        } else {
            $(this).hide();
        }
    })
}); 

$(".drill-button").click(function() {
    let pageId = $(this).data("id");
 
    $(".drill-page").each(function() {
        if ($(this).data("id") === pageId) {
            $(this).show();
        } else {
            $(this).hide();
        }
    })
});