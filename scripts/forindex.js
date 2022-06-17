let greenTeory = document.querySelector('.teory');
function viewTeory(){
    redTeory.style.backgroundColor = "rgb(44, 173, 66)"; 
    document.getElementById("hiddenteory").style.display = "block";
    document.getElementById("hiddenpractice").style.display = "none";
    document.getElementById("hiddenexam").style.display = "none";
};
let redTeory = document.querySelector('.teory');
function viewPractice(){
    document.getElementById("hiddenteory").style.display = "none";
    redTeory.style.backgroundColor = "rgb(138, 47, 47)";    
    document.getElementById("hiddenpractice").style.display = "block";
    document.getElementById("hiddenexam").style.display = "none";
};

function viewExam(){
    document.getElementById("hiddenteory").style.display = "none";
    redTeory.style.backgroundColor = "rgb(138, 47, 47)"; 
    document.getElementById("hiddenpractice").style.display = "none";
    document.getElementById("hiddenexam").style.display = "block";
};