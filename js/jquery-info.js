// Abre e fecha o box de cadastro.
$(document).ready(function () {
    $("#flip").click(function () {
        $("#panel").slideToggle("slow");
        $("#section-login").slideToggle("slow");
        $("#flip").hide();
    });
});
$(document).ready(function(){
    $("#botao-cadastrar").click(function(){
    $("#form-cadastrar").slideToggle("slow");
    $("#section-login").slideToggle("slow");
    $("#botao-cadastrar").hide();
    });
    });
    

