/*nen'ny header rehetra */
$(document).ready(function(){
    $(".seconnecter1").mousedown(function(){
        $(".seconnecter1").css({"background-color":"#e9f3e6",
                                "color":"#159133",
                                "border":"1px solid #159133"})
    })
    $(".seconnecter1").mouseup(function(){
        $(".seconnecter1").css({"background-color":"#159133",
                                "color":"#e9f3e6",
                                "border":"0px"})
    })
    $(".sinscrire1").mousedown(function(){
        $(".sinscrire1").css({"background-color":"#159133",
                                "color":"#e9f3e6",
                                "border":"0px"})
    })
    $(".sinscrire1").mouseup(function(){
        $(".sinscrire1").css({"background-color":"#e9f3e6",
                                "color":"#159133",
                                "border":"1px solid #159133"})
    })
    $(".menuburger").mousedown(function(){
        $(".menuburger").css("transform","scale(1.1)")
    })
    $(".menuburger").mouseup(function(){
        $(".menuburger").css("transform","scale(1)")
    })
    $(".menuburger").click(function(){
        $(".a").slideToggle(700)
        $(".a").css("display","flex")
    })
})
/*nen'ny header rehetra */

/*connecter*/
$("#connecter").mousedown(function(){
    $("#connecter").css("transform","scale(1.1)")
 })
 $("#connecter").mouseup(function(){
   $("#connecter").css("transform","scale(1)")
 })
/*connecter */