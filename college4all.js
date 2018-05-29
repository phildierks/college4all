
function showabt(){
    $("#intro").hide();
    $("#about").show();
    $("#stats").hide();
    $("#res").hide();
    $("#donate").hide();
    $("#homepage").hide();
}
function showstats(){
    $("#intro").hide();
    $("#stats").show();
    $("#about").hide();
    $("#res").hide();
    $("#donate").hide();
    $("#homepage").hide();
}
function showres(){
    $("#intro").hide();
    $("#stats").hide();
    $("#about").hide();
    $("#res").show();
    $("#homepage").hide();
    $("#donate").hide();
}
function showhome(){
    $("#intro").hide();
    $("#about").hide();
    $("#stats").hide();
    $("#res").hide();
    $("#homepage").show();
    $("#donate").hide();
}

function showdonate(){
    $("#intro").hide();
    $("#stats").hide();
    $("#about").hide();
    $("#res").hide();
    $("#homepage").hide();
    $("#donate").show();
}