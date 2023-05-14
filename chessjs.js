
//import { Chess } from 'chess.js'

function notation(imgx, imgy, x,y)
{
    let sizex=parseInt(imgx/8)
    let sizey=8-parseInt(y/parseInt(imgy/8))
    return String.fromCharCode(97 + x/sizex)+sizey.toString();
}
function notetonum(note,imgx,imgy)
{
    if(note=="cw")
    {
        note="g1"
    }
    else if(note=="cb")
    {
        note="g8"
    }
    else if(note=="qw")
    {
        note="c1"
    }
    else if(note=="qb")
    {
        note="c8"
    }
    else if(note=="pr")
    {
        return [];
    }
    let x=(note.slice(-2,note.length).charCodeAt(0)-97)*imgx/8
    let y=(8-note.slice(-1,note.length))*imgy/8
    let arr=[x,y,x+imgx/8,y+imgy/8];
    return arr;
}
function createrect(note,imgx,imgy)
{
    if(document.getElementsByClassName("canvasID").length==0){
        const ulNode = document.getElementById("picture");
        const liNode = document.createElement("canvas");
        liNode.setAttribute("class", "canvasID");
        liNode.setAttribute("width", imgx);
        liNode.setAttribute("height", imgy);
        ulNode.appendChild(liNode);
    }
    let canvas = document.getElementsByClassName ("canvasID");
    let context = canvas[0].getContext ( "2d" );
    context.clearRect(0,0,imgx,imgy)
    for(let i of note)
    {
        let [x1,y1,x2,y2]=notetonum(i,imgx,imgy)
        context.fillRect(x1,y1,x2-x1,y2-y1)
    }
}
function piecemovex(note)
{
    let x=(note[0].substring(0.1).charCodeAt(0)-96)
    switch(x){
        case 1:
            return "-1%";
        case 2:
            return "11.5%";
        case 3:
            return "23%";
        case 4:
            return "34.5%";
        case 5:
            return "47%";
        case 6:
            return "59%";
        case 7:
            return "71%";
        case 8:
            return "83%";
    }
}
function piecemovey(note)
{
    let y=note.substring(1.2)
    switch(Number(Number(9-y))){
        case 1:
            return "-7%";
        case 2:
            return "4%";
        case 3:
            return "15%";
        case 4:
            return "27%";
        case 5:
            return "40%";
        case 6:
            return "51%";
        case 7:
            return "62%";
        case 8:
            return "74%";
    }
}
function notepiece(xPosition,yPosition,note)
{
    for(let i=0;i<32;i++) {
        if (xPosition[i] == piecemovex(note) && yPosition[i] == piecemovey((note))) {
            return i;
        }
    }
}