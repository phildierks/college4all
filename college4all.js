function showabt(){
    $("#intro").hide();
    $("#about").fadeIn(2000);
    $("#stats").hide();
    $("#donate").hide();
    $("#res").hide();
    $("#homepage").hide();
}
function showstats(){
    $("#intro").hide();
    $("#stats").fadeIn(2000);
    $("#about").hide();
    $("#donate").hide();
    $("#res").hide();
    $("#homepage").hide();
}
function showres(){
    $("#intro").hide();
    $("#stats").hide();
    $("#about").hide();
    $("#donate").hide();
    $("#res").fadeIn(2000);
    $("#homepage").hide();
}
function showhome(){
    $("#intro").hide();
    $("#about").hide();
    $("#stats").hide();
    $("#res").hide();
    $("#donate").hide();
    $("#homepage").fadeIn(2000);
}

function showdonate(){
    $("#intro").hide();
    $("#about").hide();
    $("#stats").hide();
    $("#res").hide();
    $("#homepage").hide();
    $("#donate").fadeIn(1500);
}

function showres2(){
        if(!$("#graph2").hasClass("show")) {

            $("#graph2").addClass("show");
            $("#resourcepic").hide();

        }else{
            $("#graph2").removeClass("show");
            $("#resourcepic").fadeIn();
        }
}
function showprep (){
    if(!$("#graph1").hasClass("show")) {
        $("#graph1").addClass("show");
        $("#prep").hide();

    }else{
        $("#graph1").removeClass("show");
        $("#prep").fadeIn();
    }
}


function showav (){
    if(!$("#graph3").hasClass("show")) {
        $("#graph3").addClass("show");
        $("#available").hide();
    }else{
        $("#graph3").removeClass("show");
        $("#available").fadeIn();

    }

}


