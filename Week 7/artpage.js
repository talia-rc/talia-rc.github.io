// code heavily inspired from
// https://www.w3schools.com/howto/howto_css_modal_images.asp

var modal = document.getElementById("myModal");

var modalImg = document.getElementById("modal-img");

// instead of creating multiple document.getElementById for each image id,
// document.querySelector selects all the images in img-item class
var imgs = document.querySelectorAll(".img-item img");

for(let i = 0; i < imgs.length; i++){
    imgs[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function(){
    modal.style.display = "none";
}
