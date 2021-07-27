var myCanvasVar= new fabric.Canvas("myCanvas");
var x_of_player=500;
var y_of_player=500;
var block_height=40; 
var block_width=40;
var player_picture="";
var block_picture="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img)
    {player_picture=Img
    player_picture.scaleToWidth(140);
player_picture.scaleToHeight(140);
player_picture.set({
    top:y_of_player,
    left:x_of_player
});
myCanvasVar.add(player_picture);});

}

function block_update(get_image){
    fabric.Image.fromURL(get_image,function(Img)
    {block_picture=Img
    block_picture.scaleToWidth(140);
block_picture.scaleToHeight(140);
block_picture.set({
    top:y_of_player,
    left:x_of_player
});
myCanvasVar.add(block_picture);});

}

window.addEventListener("keydown", my_Keydown);
function my_Keydown(e){
    var keypressed=e.keyCode;
console.log(keypressed);

if(keypressed=='37'){
    console.log("left");
    left();
}
if(keypressed=='38'){
    console.log("up");
    up();
}
if(keypressed=='39'){
    console.log("right");
    right();
}
if(keypressed=='40'){
    console.log("down");
    down();
}
if(keypressed=='67'){
    console.log("c");
    block_update("cloud.jpg");
}
if(keypressed=='68'){
    console.log("d");
    block_update("dark_green.png");

}
if(keypressed=='71'){
    console.log("g");
    block_update("groung.png");
}
if(keypressed=='76'){
    console.log("l");
    block_update("light_green.png");
}
if(keypressed=='82'){
    console.log("r");
    block_update("roof.jpg");
}
if(keypressed=='84'){
    console.log("t");
    block_update("trunk.jpg");
}
if(keypressed=='85'){
    console.log("u");
    block_update("unique.png");
}
if(keypressed=='87'){
    console.log("w");
    block_update("wall.jpg");
}
if(keypressed=='89'){
    console.log("y");
    block_update("yellow_wall.png");
}
if(keypressed=='80'&&e.shiftKey){
    console.log("Shift and P together getting married!");
    block_height=block_height+10;
    block_width=block_width+10;
    document.getElementById("width").innerHTML=block_width;
    document.getElementById("height").innerHTML=block_height;
}
if(keypressed=='77'&&e.shiftKey){
    console.log("Shift and M together are getting a child!");
    block_height=block_height-10;
    block_width=block_width-10;
    document.getElementById("width").innerHTML=block_width;
    document.getElementById("height").innerHTML=block_height;
}
}
function up(){
    if( y_of_player>0){
        y_of_player= y_of_player-block_height;
        console.log("you just went up by "+block_height);
        console.log("x position is "+x_of_player+"y position is "+y_of_player);
        myCanvasVar.remove(player_picture);
        player_update();
    }
}

function left(){
    if( x_of_player>0){
        x_of_player= x_of_player-block_width;
        console.log("you just went left by "+block_width);
        console.log("x position is "+x_of_player+"y position is "+y_of_player);
        myCanvasVar.removeemove(player_picture);
        player_update();
    }
}

function down(){
    if( y_of_player<500){
        y_of_player= y_of_player+block_height;
        console.log("you just went down by "+block_height);
        console.log("x position is "+x_of_player+"y position is "+y_of_player);
        myCanvasVar.remove(player_picture);
        player_update();
    }
}

function right(){
    if( x_of_player<900){
        x_of_player= x_of_player+block_width;
        console.log("you just went right by "+block_width);
        console.log("x position is "+x_of_player+"y position is "+y_of_player);
        myCanvasVar.remove(player_picture);
        player_update();
    }
}