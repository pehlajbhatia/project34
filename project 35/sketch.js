var dog, happyDog, database, foodS, foodStock,dg1,dg2

function preload()
{
dg1=loadImage("images/dogImg.png")
dg2=loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database()
	createCanvas(500, 500);
  dog=createSprite(250,300,20,30)
  dog.addImage(dg1)
  dog.scale=0.15
}


function draw() {  

  drawSprites();
  //add styles here

}



