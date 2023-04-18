$(".img").click(function(){
    $('#files').trigger('click');
});

function showIMG(){
    var file=document.getElementById("files").files[0];
    var chemin=window.URL.createObjectURL(file);
    var myIMG=document.querySelector(".img");

    myIMG.src=chemin;
    console.log(file);
}