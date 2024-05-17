let Search_bar = document.querySelector("#Icon_cont")
Search_bar.onclick = function(){
    Search_bar.style.visibility = "hidden";
    Icon_close.style.display = "inline";
    Searchbox.style.display = "inline"
    document.querySelector(".Searchbox_container").classList.toggle("active");
}
Icon_close.onclick = function(){
    Search_bar.style.visibility = "visible"
    Icon_close.style.display = "none"
    Searchbox.style.display = "none"
}
