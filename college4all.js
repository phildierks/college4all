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


