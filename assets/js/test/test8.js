/* 
    Test 3 -> test3.html
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
var statusBase = '70';
var statusPlus = '10';
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

    if(document.getElementById('test_opt'+ correctOpt).checked==true)
    {
        console.log('correcto');
        let score=12;
        let score_base = sessionStorage.getItem("score");
        parseInt(score_base)
        score+=parseInt(score_base);
        sessionStorage.setItem("score",score);
        goTo('test9');
        //Save on local storage the same point percent test
    }
    else
    {
        goTo('test9');
    }
}
