
function consultaCep() {
    $(".progress").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(url);
    
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#cidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#titulo-cep").html("Endereço CEP " + response.cep);
            $(".ceps").show();
            $(".progress").hide();
        }
    })
}


$(function(){
    $(".ceps").hide(); 
    $(".progress").hide(); 
});
