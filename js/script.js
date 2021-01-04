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

    // Para a página Sobre

    $(".frame-sobre").on("click", "div", function(){
        if($(this).hasClass("exibido")){
            $(this).removeClass("exibido");
            $(this).animate({
                        height: "270px"
                    });
            $(this).find("p").fadeOut(300); 
            $(this).find(".but_sobre").css("transform", "rotate(0deg)");
            
        }else{
            $(this).addClass("exibido");
            $(this).animate({
                height: "600px"
            });
            $(this).find("p").fadeIn();
            $(this).find(".but_sobre").css("transform", "rotate(180deg)");
        }
        
        
    });  

})

