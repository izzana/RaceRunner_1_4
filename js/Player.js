class Player {
  constructor() {
   
  }

  //método para obter o playerCount e updateCount() epara atualizar o playerCount no bd
  getCount() {
    //ler os dados e armazenar dentro da função
    var playerCountRef = database.ref('playerCount');//referenciando ao bd
    
  }
  
  //método para atualizar o playerCount no bd
  updateCount(count) {
    database.ref("/").update({
      
    });
  }
}
