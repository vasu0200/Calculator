function on()
{
    document.getElementById('inp').value="0";
    document.getElementById('inp').style.opacity="1";
}
function equal()
{
    var output= eval(document.getElementById('inp').value);
    document.getElementById('inp').value = output;
}
function touch(input)
{
    document.getElementById('inp').value+=input;
}
function off()
{
    document.getElementById('inp').style.opacity=".7";
    document.getElementById('inp').value="";
}