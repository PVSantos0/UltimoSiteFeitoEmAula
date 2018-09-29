var drinks = {

  "coquitel":

  [
    {
      nome: "Blue Sky",
      descricao: "Blue Sky, drink sem alcool",
      preco: 9.50,
      img: 'imgs/1.jpg'
    },

    {
      nome: "Sweet Cream",
      descricao: "Drink super famoso",
      preco: 12.50,
      img: 'imgs/2.jpg'
    },

    {
      nome: "Chapadóvisck",
      descricao: "Muito famoso na irlanda",
      preco: 11.00,
      img: 'imgs/3.jpg'
    }
  ]
}

var total = 0;

$(document).ready(function(){
  $(drinks.coquitel).each(function(index){
    $('#cocktail-list').append("<div class='col-sm-4 mb-3'><div class='card' style='width: 100%;'><img class='card-img-top img-fluid cocktail-img mx-auto' src='" + this.img + "' alt='Card image cap'><div class='card-body'><h5 class='card-title'>" + this.nome + "</h5><p class='card-text'> " + this.descricao + " </p><!-- test --><!-- Button trigger modal --><button class='btn btn-cocktail' data-toggle='modal' data-target='#modal" + index + "'>R$" + this.preco.toFixed(2) + "</button><!-- Modal --><div class='modal fade' id='modal" + index + "' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'><div class='modal-dialog' role='document'><div class='modal-content'><div class='modal-header'><h5 class='modal-title' id='exampleModalLabel'>" + this.nome + "</h5><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div><div class='modal-body mx-auto'><img class='card-img-top img-fluid cocktail-img' src='" + this.img + "' alt='Card image cap'></div><div class='modal-footer'><button type='button' class='btn btn-secondary' data-dismiss='modal'>Cancelar</button><button type='button' class='btn btn-cocktail'>Comprar</button></div></div></div></div><!-- fim test --><br><i>*preço por taça</i></div></div></div>");
    total = total + this.preco;
    $('#total').html('<p>R$: '+ total.toFixed(2)+'</p>')
  });
  

});












