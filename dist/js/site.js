
let questions = [
  {
    id: 1,
    question: "A beam of unpolarized light of intensity $I_o$ passes through a combination of an ideal polarizer and an idea analyzer with their transmission axes at $60^o$ . What is the intensity of the beam coming out at the other end?",
    queimg:"images/Sprite.png",
    answer: "2",
    exp:"When an unploarized of intensity $I_o$ passes through a polarizer then intensity becomes half i.e I'=$1/2I_o$.<p> Now from Maulus law I=I'$cos^2θ$ where θ=$60^o$</p> <p> ⇒  I=$I_0/2cos^2 60^o = {I_0}/2x(1/2)^2={I_o/8}$</p>",
    img:"",
    options: [
      "$I_o$",
      "$I_o/2$",
      "$I_o/4$",
      "$I_o/8$"
    ],
  },
  {
    id: 2,
    question: "",
    answer: "",
    queimg:"",
    exp:"",
    img:"#",
    math:"",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    id: 3,
    question: "",
    answer: "",
    queimg:"",
    exp:"",
    img:"#",
    math:"",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    id: 3,
    question: "",
    answer: "",
    queimg:"",
    exp:"",
    img:"#",
    math:"",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    id: 4,
    question: "",
    answer: "",
    queimg:"",
    exp:"",
    img:"#",
    math:"",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    id: 5,
    question: "",
    answer: "",
    queimg:"",
    exp:"",
    img:"#",
    math:"",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    id: 6,
    question: "",
    answer: "",
    queimg:"",
    exp:"",
    img:"#",
    math:"",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    id: 7,
    question: "",
    answer: "",
    queimg:"",
    exp:"",
    img:"#",
    math:"",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    id: 8,
    question: "",
    answer: "",
    queimg:"",
    exp:"",
    img:"#",
    math:"",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    id: 9,
    question: "",
    answer: "",
    queimg:"",
    exp:"",
    img:"#",
    math:"",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    id: 10,
    question: "",
    answer: "",
    queimg:"",
    exp:"",
    img:"#",
    math:"",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    id: 11,
    question: "",
    answer: "",
    queimg:"",
    exp:"",
    img:"#",
    math:"",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    id: 12,
    question: "",
    answer: "",
    queimg:"",
    exp:"",
    img:"#",
    math:"",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    id: 13,
    question: "",
    answer: "",
    queimg:"",
    exp:"",
    img:"#",
    math:"",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    id: 14,
    question: "",
    answer: "",
    queimg:"",
    exp:"",
    img:"#",
    math:"",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    id: 15,
    question: "",
    answer: "",
    queimg:"",
    exp:"",
    img:"#",
    math:"",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    id: 16,
    question: "",
    answer: "",
    queimg:"",
    exp:"",
    img:"#",
    math:"",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    id: 17,
    question: "",
    answer: "",
    queimg:"",
    exp:"",
    img:"#",
    math:"",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    id: 18,
    question: "",
    answer: "",
    queimg:"",
    exp:"",
    img:"#",
    math:"",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    id: 19,
    question: "",
    answer: "",
    queimg:"",
    exp:"",
    img:"#",
    math:"",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    id: 20,
    question: "",
    answer: "",
    queimg:"",
    exp:"",
    img:"#",
    math:"",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    
    location.href = "end.html";
  }
  question_count++;
  show(question_count);
}




function previous() {

   
  // if the question is last then redirect to final page
  if (question_count == 0) {
    location.href = "index.html";
  }
  
  question_count--;
  show(question_count);
}


function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;
  let sts=document.querySelector(".state");
  sts.innerHTML=`<h2>${count+1}/20</h2>`;
  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
  <p>
  <img src=${questions[count].queimg} alt="hu" onerror="this.style.display='none'"   style="width:50px;height:60px;">
</p>

   <ul class="option_group">
  <li class="option"><strong>${first}</strong></li>
  <li class="option"><strong>${second}</strong></li>
  <li class="option"><strong>${third}</strong></li>
  <li class="option"><strong>${fourth}</strong></li>
</ul> 
<details>
<summary><strong>Explanation</strong></summary>
<h5>${questions[count].exp}</h5>

<p>
  <img src=${questions[count].img} alt=" " onerror="this.style.display='none'" style="width:500px;height:600px;">
</p>
  `;
  jqMath.parseMath(document.body);

  toggleActive();
}


function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("incorrect")) {
          option[i].classList.remove("incorrect");
        }
      }
     option[i].classList.add("incorrect");

      if(i==questions[question_count].answer-1){
        let x=document.querySelectorAll("li.option.incorrect");
        x[0].classList.remove("incorrect")
        x[0].classList.add("correct") 
      };

    };

  
  }
}


