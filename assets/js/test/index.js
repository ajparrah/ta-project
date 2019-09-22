/*
    TEST - Index
*/
//Navigation
document.getElementById('btn_back').onclick = function()
{
    goBack(); //Regresar dentro de la navegacion del navegador
};
document.getElementById('btn_continue').onclick = function ()
{
    //Variables
    var years = document.getElementById('years_test').value;
    sessionStorage.setItem("Years", years);
    goTo('test1');
    
};

//Progress-Bar
//Status
var statusBase = '0';
var statusPlus = '6';
var statusGeneral; //Save or replace on localstorage
statusGeneral= parseInt(statusBase,10) + parseInt(statusPlus,10);
document.getElementById('progressBar').style.width = statusGeneral.toString()+ '%';
document.getElementById('progressBar').innerHTML = statusGeneral.toString()+ '%';

//Form validation
document.getElementById('frm_test').onchange = function ()
{
    
    if (document.getElementById('years_test').value !=="Standard_Input")
    {
        document.getElementById('btn_continue').classList.remove('disabled');
    }
    else
    {
        document.getElementById('btn_continue').classList.add('disabled');
    }



}
