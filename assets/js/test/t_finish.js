/* 
    Test 1 -> test1.html
*/
//Navigation
document.getElementById('btn_back').onclick = function()
{
    goBack(); //Regresar dentro de la navegacion del navegador
};

//Progress-Bar
//Status
var statusBase = '0';
var statusPlus = '100';
var statusGeneral;      //Save or replace on localstorage
statusGeneral= parseInt(statusBase,10) + parseInt(statusPlus,10);
document.getElementById('progressBar').style.width = statusGeneral.toString()+ '%';
document.getElementById('progressBar').innerHTML = statusGeneral.toString()+ '%';

let score_base = sessionStorage.getItem("score");
var v_score_base = parseInt(score_base);
document.getElementById('final_score').innerHTML = score_base;

if(v_score_base<75)
{
    document.getElementById('btn_continue').classList.remove('disabled');
    document.getElementById('message').classList.remove('d-none');
    document.getElementById('btn_continue').onclick=function ()
    {
        goTo('../index2');
    }

}
else
{
    document.getElementById('btn_continue').classList.remove('disabled');
    document.getElementById('message').classList.add('d-none');
    document.getElementById('btn_continue').onclick=function ()
    {
        goTo('index');
    }
}