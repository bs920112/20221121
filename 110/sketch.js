function setup() {
  createCanvas(windowWidth,  windowHeight);
  background(250,240,245)//顏色範圍(R,G,B)
}

function draw() {
	fill(54,54,54)
	rect(194,210,212,250,30)
	fill(54,54,54)
	ellipse(300,225,212,200)
	fill(255,235,205)
	ellipse(300,250,185,200)//臉皮
	fill(255,182,183);
  ellipse(365, 270, 45,45)
	fill(255,182,183);
  ellipse(235, 270, 45,45)//腮紅
	
	ellipseMode(RADIUS);
  fill(255);
  ellipse(255, 250, 20, 20);
  ellipseMode(CENTER);
  fill(77,31,0);
  ellipse(255, 250, 25, 25);
	fill(255);
  ellipse(255, 248, 10, 10)
	fill(255);
  ellipse(248, 255, 5, 5)
	noFill();
  curve(200, 310, 235, 233, 275, 233, 300, 310)//左眼
	
	ellipseMode(RADIUS);
  fill(255);
  ellipse(345, 250, 20, 20);
  ellipseMode(CENTER);
  fill(77,31,0);
  ellipse(345, 250, 25, 25);
	fill(255);
  ellipse(345, 248, 10, 10)
	fill(255);
  ellipse(352, 255, 5, 5)
	fill(100)
	ellipse(369,225,1,1)
	noFill();
  curve(300, 310, 325, 233, 365, 233, 400, 310)//右眼
	
 
	
	fill(255,218,185);
	triangle(290,280,300,260,310,280);//鼻子
	//noFill();
  //curve(300, 50, 330, 300, 270, 300, 300, 50);//嘴巴
	fill("#A52A2A");
 ellipse(300,318,80,40);//嘴巴
	
	fill(54,54,54)
	curve(100,800,200,250,320,150,500,300)//左瀏海
	fill(54,54,54)
	curve(170,320,320,150,395,250,170,100)//右瀏海

	//身體
	fill(255,235,205)
	rect(275,348,50,30)
	fill(250,182,193)
	rect(180,370,240,270,80)
	fill(255,250,205)
	ellipse(300,400,20,20)
	ellipse(300,450,20,20)
  }
	


