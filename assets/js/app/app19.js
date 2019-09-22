/* 
    App19 -> app19.html
*/
//Navigation
document.getElementById('btn_back').onclick = function()
{
    goBack(); //Regresar dentro de la navegacion del navegador
};
document.getElementById('btn_continue').onclick = function ()
{
    goTo('../../../index');
};