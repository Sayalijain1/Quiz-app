function openq(){
    document.getElementById("mathq1").style.visibility="visible";
    document.getElementById("home").style.visibility="hidden";
}
function openqs(){
    document.getElementById("scienceq1").style.visibility="visible";
    document.getElementById("home").style.visibility="hidden";
}
function openqh(){
    document.getElementById("historyq1").style.visibility="visible";
    document.getElementById("home").style.visibility="hidden";
}

const quizData=[
    {
        question: "Q1 what is 100+200?",
        a:400,
        b:300,
        c:500,
        d:00,
        correct:"ans2"

    },
    {
        question: "Q2 what is 500/10?",
        a:400,
        b:30,
        c:50,
        d:10,
        correct:"ansc"

    },
    {
        question: "Q3 what is 100x20?",
        a:400,
        b:300,
        c:2000,
        d:700,
        correct:"ans3"

    },
    {
        question: "Q4 what is 234+1?",
        a:400,
        b:235,
        c:5000,
        d:90,
        correct:"ans2"

    },
    {
        question: "Q5 what is 100+2?",
        a:102,
        b:120,
        c:500,
        d:100,
        correct:"ans1"

    },
];
const quiz= document.getElementById('q-body')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('qq')
const a_text = document.getElementById('opt1')
const b_text = document.getElementById('opt2')
const c_text = document.getElementById('opt3')
const d_text = document.getElementById('opt4')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]
    
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++;
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
        document.getElementById("showscore").style.visibility="visible";
        showscore.innerHTML = `
           <h2>You answered ${score+1}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
        //    showscore.classlist.remove('scoreArea');
       }
    }
})
// ------------------------------------------------------------------------------------------------

const quizDatascience=[
    {
        question: "Q1 what is color of egg?",
        a:"white",
        b:"red",
        c:"black",
        d:"green",
        correct:"anss1"


    },
    {
        question: "Q2 what is state of water?",
        a:"solid",
        b:"gas",
        c:"liquid",
        d:"plasma",
        correct:"anss3"

    },
    {
        question: "Q3 What is study of stars called?",
        a:"technology",
        b:"ikebana",
        c:"astronomy",
        d:"astrlogy",
        correct:"anss3"

    },
    {
        question: "Q4 what is the formula for water",
        a:"NA",
        b:"H2O",
        c:"NaBr",
        d:"C",
        correct:"anss2"

    },
    {
        question: "Q5 what is sun?",
        a:"Star",
        b:"planet",
        c:"dwarf planet",
        d:"moon",
        correct:"anss1"

    },
];
const squiz= document.getElementById('qs-body')
const sanswerEls = document.querySelectorAll('.answers')
const squestionEl = document.getElementById('qs')
const sa_text = document.getElementById('opts1')
const sb_text = document.getElementById('opts2')
const sc_text = document.getElementById('opts3')
const sd_text = document.getElementById('opts4')
const ssubmitBtn = document.getElementById('ssubmit')


let scurrentQuiz = 0
let sscore = 0

sloadQuiz()

function sloadQuiz() {

    sdeselectAnswers()

    const scurrentQuizData = quizDatascience[scurrentQuiz]

    squestionEl.innerText = scurrentQuizData.question
    sa_text.innerText = scurrentQuizData.a
    sb_text.innerText = scurrentQuizData.b
    sc_text.innerText = scurrentQuizData.c
    sd_text.innerText = scurrentQuizData.d
}

function sdeselectAnswers() {
    sanswerEls.forEach(sanswerEl => sanswerEl.checked = false)
}

function sgetSelected() {
    let sanswer
    sanswerEls.forEach(sanswerEl => {
        if(sanswerEl.checked) {
            sanswer = sanswerEl.id
        }
    })
    return sanswer
}


ssubmitBtn.addEventListener('click', () => {
    
    const sanswer = sgetSelected()
    if(sanswer) {
       if(sanswer === quizDatascience[scurrentQuiz].correct) {
           sscore++;
       }

    scurrentQuiz++

       if(scurrentQuiz < quizDatascience.length) {
           sloadQuiz()
       } else {
        document.getElementById("showscores").style.visibility="visible";
        showscores.innerHTML = `
           <h2>You answered ${sscore}/${quizDatascience.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
        //    showscore.classlist.remove('scoreArea');
       }
    }
})
// ------------------------------------------------------------------------------------------------
const quizDatahistory=[
    {
        question: "Q1 who established swaraj?",
        a:"shivaji",
        b:"sambhaji",
        c:"jijamata",
        d:"sayali",
        correct:"ansh1"

    },
    {
        question: "Q2 Who is also known as the Iron Man of India?",
        a:"Bhimrao Ambedkar",
        b:"Tony Stark",
        c:"Lal Bahadur Shastri",
        d:"Subhas Chandra Bose",
        correct:"ansh3"

    },
    {
        question: "Q3 Quit India Movement was started by?",
        a:"technology",
        b:"Subhas Chandra Bose",
        c:" Mahatma Gandhi",
        d:"chacha nehru",
        correct:"ansh3"

    },
    {
        question: "Q4 what is the formula for water",
        a:"NA",
        b:"H2O",
        c:"NaBr",
        d:"C",
        correct:"ansh2"

    },
    {
        question: "Q5 The Nation Anthem was composed by?",
        a:" Rabindranath Tagore",
        b:"Subhas Chandra Bose",
        c:" Bankim Chandra",
        d:"Mahatma Gandhi",
        correct:"ansh1"

    },
];
const hquiz= document.getElementById('qh-body')
const hanswerEls = document.querySelectorAll('.answerh')
const hquestionEl = document.getElementById('qh')
const ha_text = document.getElementById('opth1')
const hb_text = document.getElementById('opth2')
const hc_text = document.getElementById('opth3')
const hd_text = document.getElementById('opth4')
const hsubmitBtn = document.getElementById('hsubmit')


let hcurrentQuiz = 0
let hscore = 0

hloadQuiz()

function hloadQuiz() {

    hdeselectAnswers()

    const hcurrentQuizData = quizDatahistory[hcurrentQuiz]

    hquestionEl.innerText = hcurrentQuizData.question
    ha_text.innerText = hcurrentQuizData.a
    hb_text.innerText = hcurrentQuizData.b
    hc_text.innerText = hcurrentQuizData.c
    hd_text.innerText = hcurrentQuizData.d

function hdeselectAnswers() {
    hanswerEls.forEach(hanswerEl => hanswerEl.checked = false)
}

function hgetSelected() {
    let hanswer
    hanswerEls.forEach(hanswerEl => {
        if(hanswerEl.checked) {
            hanswer = hanswerEl.id
        }
    })
    return hanswer
}


hsubmitBtn.addEventListener('click', () => {
    
    const hanswer = hgetSelected()
    if(hanswer) {
       if(hanswer === quizDatahistory[hcurrentQuiz].correct) {
           hscore++;
       }

    hcurrentQuiz++

       if(hcurrentQuiz < quizDatahistory.length) {
           hloadQuiz()
       } else {
        document.getElementById("showscoreh").style.visibility="visible";
        showscoreh.innerHTML = `
           <h1>You answered ${hscore}/${quizDatahistory.length} questions correctly</h1>

           <button onclick="location.reload()">Reload</button>
           `
        //    showscore.classlist.remove('scoreArea');
       }
    }
})}