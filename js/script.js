$(function(){
    // Para o index

    $(".grid-imagem").on("mouseover", "div", function(){
        $(this).find("img").css({"-webkit-filter": "blur(1px)", "filter": "blur(1px)"});
        $(this).find("p").css("display", "block");
    });
    $(".grid-imagem").on("mouseout", "div", function(){
        $(this).find("img").css({"-webkit-filter": "blur(0px)", "filter": "blur(0px)"});
        $(this).find("p").css("display", "none");
    });

    // Para a página sobre

    
})

