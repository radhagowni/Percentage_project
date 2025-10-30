//javascript code to make page responsive when user clicks on certain button
const Inter=document.getElementById("Inter");
const SSc=document.getElementById("SSc");
const Btech=document.getElementById("Btech");
const countLabel=document.getElementById("countLabel");
let count=0;
//it is to show the intermediate percentage which the button is clicked
Inter.onclick=function()
{
    count=96.9;
    countLabel.textContent=count;
}
SSc.onclick=function()
{
    count=97.5;
    countLabel.textContent=count;
}
Btech.onclick=function()
{
    count=88.2;
    countLabel.textContent=count;
}
