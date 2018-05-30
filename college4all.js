
function showabt(){
    $("#intro").hide();
    $("#about").fadeIn(2000);
    $("#stats").hide();
    $("#res").hide();
    $("#donate").hide();
    $("#homepage").hide();
}
function showstats(){
    $("#intro").hide();
    $("#stats").fadeIn(2000);
    $("#about").hide();
    $("#res").hide();
    $("#donate").hide();
    $("#homepage").hide();
}
function showres(){
    $("#intro").hide();
    $("#stats").hide();
    $("#about").hide();
    $("#res").fadeIn(2000);
    $("#homepage").hide();
    $("#donate").hide();
}
function showhome(){
    $("#intro").hide();
    $("#about").hide();
    $("#stats").hide();
    $("#res").hide();
    $("#homepage").fadeIn(2000);
    $("#donate").hide();
}

function showdonate(){
    $("#intro").hide();
    $("#stats").hide();
    $("#about").hide();
    $("#res").hide();
    $("#homepage").hide();
    $("#donate").fadeIn(1500);
}