let ButtonTeory = document.querySelector('.teory');
let ButtonPractice = document.querySelector('.practice');
let ButtonExam = document.querySelector('.exam');

function viewTeory(){
    ButtonTeory.style.backgroundColor = "rgb(44, 173, 66)";    // зеленый
    ButtonPractice.style.backgroundColor = "rgb(138, 47, 47)"; // красный
    ButtonExam.style.backgroundColor = "rgb(138, 47, 47)";     // красный

    document.getElementById("hiddenteory").style.display = "block";                       // видимость блока див 
    document.getElementById("hiddenpractice").style.display = "none";                     // скрыть блок див 
    document.getElementById("hiddenexam").style.display = "none";                         // скрыть блок див 
};
function viewPractice(){
    ButtonTeory.style.backgroundColor = "rgb(138, 47, 47)";    // красный
    ButtonPractice.style.backgroundColor = "rgb(44, 173, 66)"; // зеленый
    ButtonExam.style.backgroundColor = "rgb(138, 47, 47)";     // красный

    document.getElementById("hiddenteory").style.display = "none";                          // скрыть блок див 
    document.getElementById("hiddenpractice").style.display = "block";                      // видимость блока див 
    document.getElementById("hiddenexam").style.display = "none";                           // скрыть блок див 
};

function viewExam(){
    ButtonTeory.style.backgroundColor = "rgb(138, 47, 47)";    // красный
    ButtonPractice.style.backgroundColor = "rgb(138, 47, 47)"; // красный
    ButtonExam.style.backgroundColor = "rgb(44, 173, 66)";     // зеленый

    document.getElementById("hiddenteory").style.display = "none";
    document.getElementById("hiddenpractice").style.display = "none";
    document.getElementById("hiddenexam").style.display = "block";
};