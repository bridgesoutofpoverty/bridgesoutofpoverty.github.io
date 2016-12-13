function scrollToElement(e){
    var idToScroll = $(e.target).attr("href");
    if(idToScroll != "" && idToScroll != "#"){
        $('html, body').animate({
            scrollTop: $(idToScroll).offset().top - $("header").height()
        }, 500);                   
    }
    return false;
}

$.ajax({
    url: "BridgesHeader.html"
}).success(function(data){
    $("body").prepend(data);
    setTimeout(function(e){
        $("#cover").hide();
        var urlPieces = document.location.href.split("/");
        var currentPage = urlPieces[urlPieces.length-1];
        $("nav a[href='"+currentPage+"']").addClass("currentPage");
        $("#mobileMenuWrapper").click(function(e){
            $("#modalCover").show();
            $("nav").css("right", "-35vw");
            $("nav").animate({
                right: "0vw"
            }, 500);
        });
        
        $("#modalCover").click(function(e){
            $("#modalCover").hide();
            $("nav").animate({
                right: "-35vw"
            }, 500, function(){
                $("nav").css("right", "");
            });
        });
    }, 1);
});

$.ajax({
    url: "BridgesFooter.html"
}).success(function(data){
    $("body").append(data);
});


