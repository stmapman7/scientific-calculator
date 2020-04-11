var num1,num2;

function AddAChar(inChar)
{
if(document.cmplxcalc.txtbox_area.value == null || document.cmplxcalc.txtbox_area.value == "0")
         document.cmplxcalc.txtbox_area.value=inChar
    else
 document.cmplxcalc.txtbox_area.value +=inChar;
}

function Clear() 
{
document.cmplxcalc.txtbox_area.value="0";
}

function Answer() 
{
    document.cmplxcalc.txtbox_area.value= eval(document.cmplxcalc.txtbox_area.value)
}


function sin()
{
document.cmplxcalc.txtbox_area.value = Math.sin(document.cmplxcalc.txtbox_area.value); 
}


function cos()
{
document.cmplxcalc.txtbox_area.value = Math.cos(document.cmplxcalc.txtbox_area.value); 
}

function tan()
{
document.cmplxcalc.txtbox_area.value = Math.tan(document.cmplxcalc.txtbox_area.value); 
}

function pi() 
{
 document.cmplxcalc.txtbox_area.value = Math.PI ;
}

function acos() 
{
 document.cmplxcalc.txtbox_area.value = Math.acos(document.cmplxcalc.txtbox_area.value); 
}

function asin() 
{
 document.cmplxcalc.txtbox_area.value = Math.asin(document.cmplxcalc.txtbox_area.value); 
}

function atan() 
{
 document.cmplxcalc.txtbox_area.value = Math.atan(document.cmplxcalc.txtbox_area.value); 
}

function rand()
{
   document.cmplxcalc.txtbox_area.value = Math.random(document.cmplxcalc.txtbox_area.value); 
}

function Euler()
{
	document.cmplxcalc.txtbox_area.value= Math.E ; 
}

function sqrt() 
{
	document.cmplxcalc.txtbox_area.value= Math.sqrt(document.cmplxcalc.txtbox_area.value); 
}

function natLog() 
{
	document.cmplxcalc.txtbox_area.value= Math.log(document.cmplxcalc.txtbox_area.value); 
}

function Log() 
{
        document.cmplxcalc.txtbox_area.value=( 1/Math.LN10 ) * Math.log(document.cmplxcalc.txtbox_area.value); 
}

function percent() 
{
        document.cmplxcalc.txtbox_area.value=(document.cmplxcalc.txtbox_area.value)/100 ;
}

function Round() 
{
        document.cmplxcalc.txtbox_area.value=Math.round(document.cmplxcalc.txtbox_area.value); 
}

function square() 
{ 
num1=document.cmplxcalc.txtbox_area.value
num2=document.cmplxcalc.txtbox_area.value
var inChar=num1 * num2 
document.cmplxcalc.txtbox_area.value=inChar
}

function negative()
{
document.cmplxcalc.txtbox_area.value =  0 - document.cmplxcalc.txtbox_area.value;
}