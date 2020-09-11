var isShareHidden = true;

function clickShare(){
    isShareHidden = !isShareHidden;
    showShare();
}

function showShare(){
        var x = document.getElementById("share");
        x.style.display= "none";

        if (isShareHidden === false) {
            x.style.display= "block";
        }
    
}