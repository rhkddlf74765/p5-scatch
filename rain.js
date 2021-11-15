var audio = new Audio();
var Width=3;
var Height=20;
var change;
var vy;
var size=200;
var lo_Yarray = new Array(size);
var lo_Xarray = new Array(size);
var v_array=new Array(size);
function setup() {
  createCanvas(700, 500);
  loca_x=100;
  loca_y=60;
  change=-1;
  vy=5;
  makeranarr();
}

function draw() {
  background(0,0,0);
  make_rain(size);
  for (let i=0;i<size;i++){
    lo_Yarray[i]=lo_Yarray[i]+v_array[i];
  }
  
}

function make_rain(size){
  for (let i=0;i<size;i++)
    {
      fill(255,255,255);
      rect(lo_Xarray[i],lo_Yarray[i],Width,Height);
  if (lo_Yarray[i]>500)
    {
      lo_Yarray[i]=lo_Yarray[i]=Math.floor(Math.random() * 200)-400;
    }
    }
  
}
function makeranarr(){
  for(let i=0; i<size;i++)
    {
      lo_Xarray[i]=Math.floor(Math.random() * 701);
      lo_Yarray[i]=Math.floor(Math.random() * 200)-400;
      v_array[i]=Math.floor(Math.random() * 5)+6;
    }
}