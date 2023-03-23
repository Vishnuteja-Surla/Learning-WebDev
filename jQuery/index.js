$('h1').addClass("big-title");

$('button').click(function(){
    if ($('h1').css("color") === "rgb(255, 255, 0)"){
        $('h1').css("color", "purple");
    }
    else{
        $('h1').css("color", "yellow");
    }
})