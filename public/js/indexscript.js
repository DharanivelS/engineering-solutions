window.addEventListener("scroll",function(){
    let value=1+window.scrollY/-600;
    document.querySelector("video").style.opacity=value;
})
function toggle(){
    document.getElementById("header").classList.toggle("active");
}
$(document).ready(function(){
    $("#h").click(function(){
        $(this).addClass("active");
        $("#s").removeClass("active");
        $("#c").removeClass("active");
        $("#f").removeClass("active");
    });
    $("#s").click(function(){
        $(this).addClass("active");
        $("#h").removeClass("active");
        $("#c").removeClass("active");
        $("#f").removeClass("active");
    });
    $("#c").click(function(){
        $(this).addClass("active");
        $("#s").removeClass("active");
        $("#h").removeClass("active");
        $("#f").removeClass("active");
    });
    $("#f").click(function(){
        $(this).addClass("active");
        $("#s").removeClass("active");
        $("#h").removeClass("active");
        $("#c").removeClass("active");
    })
});
