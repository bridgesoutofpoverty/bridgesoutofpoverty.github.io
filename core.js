$.ajax({
    url: "BridgesHeader.html"
}).success(function(data){
    $("body").prepend(data);
    setTimeout(function(e){
        $("#cover").hide();
    }, 1);
});

$.ajax({
    url: "BridgesFooter.html"
}).success(function(data){
    $("body").append(data);
});