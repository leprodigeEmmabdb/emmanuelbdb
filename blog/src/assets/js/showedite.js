//$(".description").click(function(){
    function show(omas){

        var xhr=new XMLHttpRequest();
        xhr.open("POST","index.php?controller=prof&action=edit&id="+omas.id);
        xhr.onload=function(){
        document.querySelector(".offcanvas-body").innerHTML=xhr.responseText;
       // $(".offcanvas-body").apprend(xhr.responseText);
    };
    xhr.send();
    }
    //alert($(this).attr("id"));
    

    
   // offcanvas-body
//});