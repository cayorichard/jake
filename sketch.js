var path,boy, leftBoundary,rightBoundary;
var path_Img,boyImg;
var i;

function preload(){
  path_Img = loadImage('path.png');
boyImg = loadAnimation('Runner-1.png','Runner-2.png');
}

function setup(){
  
  createCanvas(400,400,400,1000);
 var path= createSprite(400,400,400,1000);//crie um sprite para a pista 
      path.addImage('path.png');//adicione uma imagem para a pista
  path.velocityY =-2;//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.scale=1.2;

    var boy = createSprite(200,300,40,40)//crie um sprite de menino
           boy.addAnimation(boyImg)//adicione uma animação de corrida para ele
boy.scale=0.08;


leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible ('false');//defina visibilidade como falsa para o limite à esquerda


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible('false');//defina visibilidade como falsa para o limite à direita
}

function draw() {
  background('0');
  path.velocityY = 4;
  
  boy.X = World.mouseX;// mover o menino com o mouse usando mouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide('rightBoundary','leftBoundary');// colidir o menino com os limites invisíveis da esquerda e da direita
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
