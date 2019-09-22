/* 
    Test 1 -> test1.html
*/
//Navigation
document.getElementById('btn_back').onclick = function()
{
    goBack(); //Regresar dentro de la navegacion del navegador
};
// document.getElementById('btn_continue').onclick = function ()
// {
//     goTo('test2');
// };

//Progress-Bar
//Status
var statusBase = '6';
var statusPlus = '7';
var statusGeneral;      //Save or replace on localstorage
statusGeneral= parseInt(statusBase,10) + parseInt(statusPlus,10);
document.getElementById('progressBar').style.width = statusGeneral.toString()+ '%';
document.getElementById('progressBar').innerHTML = statusGeneral.toString()+ '%';

//Form validation
document.getElementById('frm_test').onchange = function ()
{
    
    if (document.getElementsByName('test_opt').value !=='')
    {
        document.getElementById('btn_continue').classList.remove('disabled');
    }
    else
    {
        document.getElementById('btn_continue').classList.add('disabled');
    }

}

document.getElementById('btn_continue').onclick = function ()
{
    var correctOpt;
    correctOpt='2';
    var score=0;
 


    if(document.getElementById('test_opt'+ correctOpt).checked==true)
    {
        console.log('correcto');
        score = 7;
        //Session storage
        sessionStorage.setItem("score",score);
        goTo('test2');
        //Save on local storage the same point percent test
    }
    else
    {
        score = 0;
        //Session storage
        sessionStorage.setItem("score",score);
        goTo('test2');
    }
}
