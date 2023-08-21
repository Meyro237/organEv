function toggelpopup(){
    let popup =  document.querySelector("#orverlay");
    popup.classList.toggle("open");
}
function devis(){
    let popupdevis =  document.querySelector("#popup-devis");
    popupdevis.classList.toggle("open");
}

let mariage = document.querySelector('#tofmariage');

 /* Ma premiere galerie 
    photos animée en JS */ 

            // fonction de chargement de la page web
document.body.onload=function(){
    i=1;
    ang=0;
    setInterval("albumAnniversaire()", 10);
}

function albumAnniversaire(){
        document.getElementById('salle_fête').style.transform="perspective(1000px) translateY("+ang+"deg)";
        ang++;
        if(ang>=360) ang=0;
        if(ang==90 || ang==270) {
            i++;
            if(i>9) i=1;
            document.getElementById("salle_fête").style.backgroundImage="url('../images/mariage/ma"+i+".jpg')";
        }
}
