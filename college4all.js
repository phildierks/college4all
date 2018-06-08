var num=0;
function showabt(){
    $("#intro").hide();
    $("#about").fadeIn(2000);
    $("#stats").hide();
    $("#donate").hide();
    $("#res").hide();
    $("#tests").hide();
    $("#homepage").hide();
}
function showstats(){
    $("#intro").hide();
    $("#stats").fadeIn(2000);
    $("#about").hide();
    $("#donate").hide();
    $("#res").hide();
    $("#tests").hide();
    $("#homepage").hide();
}
function showres(){
    $("#intro").hide();
    $("#stats").hide();
    $("#about").hide();
    $("#donate").hide();
    $("#tests").hide();
    $("#res").fadeIn(2000);
    $("#homepage").hide();
}
function showhome(){
    $("#intro").hide();
    $("#about").hide();
    $("#stats").hide();
    $("#res").hide();
    $("#donate").hide();
    $("#tests").hide();
    $("#homepage").fadeIn(2000);
}

function showdonate(){
    $("#intro").hide();
    $("#about").hide();
    $("#stats").hide();
    $("#res").hide();
    $("#homepage").hide();
    $("#tests").hide();
    $("#donate").fadeIn(1500);
}

function showtest(){
    $("#intro").hide();
    $("#about").hide();
    $("#stats").hide();
    $("#res").hide();
    $("#homepage").hide();
    $("#donate").hide();
    $("#tests").fadeIn(1500);
}
function showprep (){
    if($("#graph1").hasClass("show")) {
        $("#prep").fadeIn();
        $("#graph1").removeClass("show");
        $("#graph1").html("Hide Graph");
    }else{
        $("#graph1").addClass("show");
        $("#graph1").html("Show Graph");
        $("#prep").hide();
    }
}
function showres2 (){
    if($("#graph2").hasClass("show")) {
        $("#resourcepic").fadeIn();
        $("#graph2").removeClass("show");
        $("#graph2").html("Hide Graph");
    }else{
        $("#graph2").addClass("show");
        $("#graph2").html("Show Graph");
        $("#resourcepic").hide();
    }
}
function showav (){
    if($("#graph3").hasClass("show")) {
        $("#available").fadeIn();
        $("#graph3").removeClass("show");
        $("#graph3").html("Hide Graph");
    }else{
        $("#graph3").addClass("show");
        $("#graph3").html("Show Graph");
        $("#available").hide();
    }
}
function showphil(){
    if($("#philbut").hasClass("show")) {
        $("#philip").fadeIn();
        $("#philbut").removeClass("show");
        $("#philbut").remove();
    }else{
        $("#philbut").addClass("show");
        $("#phil").hide();
}
}
function showjacques (){
    if($("#jacquesbut").hasClass("show")) {
        $("#jacques").fadeIn();
        $("#jacquesbut").removeClass("show");
        $("#jacquesbut").remove();
    }else{
        $("#jacquesbut").addClass("show");
        $("#jacques").hide();
    }
}
function showand (){
    if($("#andrewbut").hasClass("show")) {
        $("#andrew").fadeIn();
        $("#andrewbut").removeClass("show");
        $("#andrewbut").remove();
    }else{
        $("#andrewbut").addClass("show");
        $("#andrew").hide();
    }
}

var questions = [];
function Question(image,correctAnswer,wrongAnswer1,wrongAnswer2,wrongAnswer3){
    this.image = image;
    this.correctAnswer = correctAnswer;
    this.wrongAnswer1 = wrongAnswer1;
    this.wrongAnswer2 = wrongAnswer2;
    this.wrongAnswer3 = wrongAnswer3;
}

questions.push(new Question("q1","Two","One","Three","Four"));
questions.push(new Question("q2","7/92","7/90","77/90","84/92"));
questions.push(new Question("q3","m<19","m>17","m<17","m=17"));
questions.push(new Question("q4","9","3","-51","144"));
console.log(questions);

function getQuestion(){
    num = (Math.floor(Math.random() * Math.floor(4)));
    console.log(num);
    var question = questions[num];
    var display = question.image;
    var a1 = question.correctAnswer;
    var a2 = question.wrongAnswer1;
    var a3 = question.wrongAnswer2;
    var a4 = question.wrongAnswer3;
    console.log(display);
    document.getElementById("collegeB").innerHTML = "<img src='img/"+ display + ".png'>" +
        "<br><button type=\"button\" id='correct' onclick='correct()' class=\"waves-effect waves-grey btn-flat\"><i ></i>"+a1+"</button>" +"<div id='waiting'</div>"+
        "<br><br><button type=\"button\"  id='incorrect1' onclick='incorrect1()' class=\"waves-effect waves-grey btn-flat\" class='incorrect'><i ></i>"+a2+"</button>" +
        "<br><br><button type=\"button\" id='incorrect2' onclick='incorrect2()' class=\"waves-effect waves-grey btn-flat\" class='incorrect'><i ></i>"+a3+"</button>" +
        "<br><br><button type=\"button\"  id='incorrect3' onclick='incorrect3()' class=\"waves-effect waves-grey btn-flat\" class='incorrect'><i ></i>"+a4+"</button>";
}

function correct(){
    document.getElementById('correct').style.background = "green";
    document.getElementById("waiting").innerHTML= "Great Work! Let's try another one...";
    setTimeout(function(){getQuestion()},5000);
}

function incorrect1(){
    document.getElementById("incorrect1").style.background = 'red';
}

function incorrect2(){
    document.getElementById("incorrect2").style.background = 'red';
}
function incorrect3(){
    document.getElementById("incorrect3").style.background = 'red';
}
