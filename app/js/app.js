'use strict';

/* App Module */
var controle = [];
var size = 150;
var matriz = new Array(size);

for (i = 0; i < matriz.length; i++){
	matriz[i] = new Array(27);
}

for(var i = 0; i < 5; i++) {
	for(var j = 0; j < 5; j++){
		matriz[i][j] = '-';
	}
}
//aaa


var vetor = {};

vetor["a"] = 1;
vetor["b"] = 2;
vetor["A"] = 3;
vetor["B"] = 4;

matriz[0][0] = ['0', 'i', 'D'];
matriz[0][1] = ['1', 'A', 'D'];
matriz[1][1] = ['1', 'a', 'D'];
matriz[2][1] = ['2', 'a', 'E'];
matriz[1][2] = ['2', 'B', 'E'];
matriz[2][3] = ['0', 'A', 'D'];
matriz[0][4] = ['3', 'B', 'D'];
matriz[1][4] = ['1', 'B', 'D'];
matriz[2][4] = ['2', 'B', 'E'];
matriz[3][4] = ['3', 'B', 'D'];
matriz[0][5] = ['4', 'f', 'D'];
matriz[3][5] = ['4', 'f', 'D'];


$(document).ready(function(){

	$("#run").on("click", function(){
		var input = $("#input").val();
		isBlank(input);
	});

	$("#input").keyup(function(){
		var input = $("#input").val();
		treatInput(input);
	});
});

/**
* Trata a entrada de dados para verificar se está vazia ou não.
* @input
*/
var treatInput = function(input){
	$("#attention-message").hide(300);
	receiveInput(input);
}

var isBlank = function(input){
	if(input){
		$("#attention-message").hide(300);
		turing();
	} else {
		$("#attention-message").css("background","#8B0000");
		$("#attention-message").css("border","2px solid #B22222");
		$("#attention-message").text("Você deve informar um valor para entrada!");
		$("#attention-message").show(500);
	}
}

/**
* Cria a tabela a ser varrida.
* @input
*/
var receiveInput = function(input){
	$("#fita").empty();
	var length = input.length;
	$("#fita").append("<tr>");
	$("#fita tr").append("<td>&oplus;</td>");
	for(var i = 0; i < length; i++) {
		$("#fita tr").append("<td>"+input[i]+"</td>");
		controle[i] = input[i];
	}
	$("#fita tr").append("<td>&beta;</td>");
	$("#fita").append("</tr>");

}

var turing = function(){
	//var iteration = 0;
	var status = "";
	var ctrl = 0;
	var it = 0;
	var pos = 0;

	var next = matriz[0][0][2];

	if(next == "D") {
		while (status != "OK" && status != "ERRO") {
			if(it == 0){
				controle[0] = matriz[0][1][1];
				pos = matriz[0][1][0];
				next = matriz[0][1][2];
			}

			if(next == "D"){
				ctrl++;
			} else {
				ctrl--;
		    }

console.log(matriz[pos][vetor[controle[ctrl+1]]][1]);

			if(matriz[pos][vetor[controle[ctrl+1]]] != '-') {

				controle[ctrl] = matriz[pos][vetor[controle[ctrl+1]]][1];

				next = matriz[pos][vetor[controle[ctrl+1]]][2];
				pos = matriz[pos][vetor[controle[ctrl+1]]][0];

			} else {
				status = "ERRO";
			}

			if(controle[ctrl] == 'f')
				status = "OK";

			it++;
		}
		console.log(status);

		if(status == "OK")
			receiveInput(controle);
	}

}