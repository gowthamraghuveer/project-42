var hr ;
var sec;
var min;






function setup() {
  createCanvas(400,400);
}

function draw() {
  background("black");  

angleMode(DEGREES);

hr = hour();
min = minute ();
sec = second ();

hrAngle= map(hr%12 , 0 , 12 ,0, 360);
minAngle = map(min , 0 ,60 , 0 ,360);
secAngle = map(sec, 0 , 60 ,0 , 360);

translate(200, 200);
rotate(-90);

push();
rotate(hrAngle);
stroke("purple");
strokeWeight(7);
line(0,0,50,0)
pop();

push();
rotate(minAngle);
stroke("red");
strokeWeight(7); 
line(0,0,75,0);
pop();

push();
rotate(secAngle)
stroke("blue");
strokeWeight(7);
line(0,0,100,0);
pop();


stroke("white");
point(0,0);

strokeWeight(10);
noFill(0,0);

stroke("blue");
arc(0,0,300,300,0,secAngle);

stroke("red");
arc(0,0,280,280,minAngle);

stroke("purple");
arc(0,0,260,260,hrAngle);


console.log(hr+" "+min+" "+sec)

  drawSprites();
}
