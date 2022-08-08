class Game {
  constructor() {}

  getState() {//método que irá ler o gameState do banco de dados
      var gameStateRef = database.ref("gameState");//me referindo a chave gameState criada no bd
      //criando um ouvinte que fica acompanhando a mudança no valor da variável gameState no bd.
      gameStateRef.on("value", function(data) {        
      
    });
  }

  update(state) {//método que irá atualizar o gameState no bd para um valor passado para ele como parâmetro
    database.ref("/").update({//se refere ao banco de dados principal dentro do qual gameState é criado
      
    });

  }
  start() {//método para obter o gameState e então iniciar o jogo
    //instância de um novo jogador
    player = new Player();
    //inciando a variável playerCount
    form = new Form();
    form.display();

    //criar sprites dos jogadores
    

    //atribuindo os objetos ao vetor cars
   
  }
  
  handleElements(){
    form.hide();
    form.titleImg.position(40,50);
    form.titleImg.class("gameTitleAfterEffects");
  }

  play() {
    //função para esconder os elementos
    this.handleElements();
    //desenhar os sprites
    
  }

}
