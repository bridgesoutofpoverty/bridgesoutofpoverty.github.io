$.ajax({
    url: "BridgesHeader.html"
}).success(function(data){
    $("body").prepend(data);
    setTimeout(function(e){
        $("#cover").hide();
        var urlPieces = document.location.href.split("/");
        var currentPage = urlPieces[urlPieces.length-1];
        $("nav a[href='"+currentPage+"']").addClass("currentPage");
    }, 1);
});

$.ajax({
    url: "BridgesFooter.html"
}).success(function(data){
    $("body").append(data);
});