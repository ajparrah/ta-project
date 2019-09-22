/* 
    App10 -> app10.html
*/
//Navigation
document.getElementById('btn_back').onclick = function()
{
    goBack(); //Regresar dentro de la navegacion del navegador
};
document.getElementById('btn_continue').onclick = function ()
{
    goTo('app11');
};