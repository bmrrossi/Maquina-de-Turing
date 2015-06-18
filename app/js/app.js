'use strict';

/* App Module */
var fita = ['i', 'a', 'b', 'A', 'B', 'f'];

$(document).ready(function(){
	$("#run").on("click", function(){
		var input = $("#input").val();
		treatInput(input);
	});
});

/**
* Trata a entrada de dados para verificar se está vazia ou não.
* @input
*/
var treatInput = function(input){
	if(input){
		$("#attention-message").hide(300);
		receiveInput(input);
	} else {
		$("#attention-message").css("background","#8B0000");
		$("#attention-message").css("border","2px solid #B22222");
		$("#attention-message").text("Você deve informar um valor para entrada!");
		$("#attention-message").show(500);
	}
}

/**
* Começa a operação com o input.
* @input
*/
var receiveInput = function(input){

}