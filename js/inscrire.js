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


/** nen'ny drag-and-drop */
var minirectangle = document.querySelector(".minirecta")

minirectangle.addEventListener("dragover", (e)=>{
    e.preventDefault()
    minirectangle.classList.add("minirectasolid")

})
minirectangle.addEventListener("dragleave", (e)=>{
    e.preventDefault()
    minirectangle.classList.remove("minirectasolid")
})
minirectangle.addEventListener("drop", (e)=>{
    e.preventDefault()
    /*console.log(e) ijerena mombamomba anle dragevent fotsiny (dataTransfer.file en occurence fa mbola tsy
        hita eto ny isan'ny fichier deposé(length) de zay no anton'io console.log ambany io) */
    /*console.log(e.dataTransfer.files) ijerena ny length */
    if(e.dataTransfer.files.length && e.dataTransfer.files[0].type.startsWith("image/")){
        /*raha misy fichier déposé sy we manomboka @ image/ ny type anle fichier refa jerena am console
        files[0] satria genrena tableau le files de ray ihany no ilaina mazava ho azy donc [0]
        fonction efa intégré @Js le startsWith()*/
        
        /*console.log(minirectangle.files=e.dataTransfer.files) ijerena anle file 
@ minirectanle fotsn we nakany ve le fichier avy azo t@ evenement*/
        minirectangle.files=e.dataTransfer.files
        
        $(document).ready(function(){
            $(".misyThumbnail").css("display","block")
            $(".deposer").hide()
        })
        let nyThumbnail = document.querySelector(".misyThumbnail")

        //ny soratra eo amle data-label
        nyThumbnail.dataset.label=minirectangle.files[0].name/*mitov t@ data-key yan we @ dataset.key no
        hiaccederna @ fa dans ce cas fotsiny data-label donc dataset.label,  */

        //le sary eo @ thumbnail
        const reader = new FileReader() /*class fangalana fichier avy ao @ file @le event le izy*/
        reader.readAsDataURL(minirectangle.files[0])/*methode amle class, natokana hamakiana url n image na src n fichier*/
        reader.onload = () => {
            //"load" event ref @ lecture anle fichier
            nyThumbnail.style.backgroundImage = `url(${reader.result})`
        }
    }
})
//raha refa mclique ndray
minirectangle.addEventListener("click", e =>{
    $("#fichi").click()//otrany we en tant que setter zani le click eto
    
})

/** nen'ny drag-and-drop */