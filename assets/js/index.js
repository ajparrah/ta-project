/*
    Validate to checkbox
*/
document.getElementById('check_instructions').checked = false; //Init

document.getElementById('check_instructions').onclick = function ()
{
    if (document.getElementById('check_instructions').checked == true)
    {
        document.getElementById('startApp').classList.remove('disabled');
    }
    else
    {
        document.getElementById('startApp').classList.add('disabled');
    }
    
}


/*
    Action button to start
*/

document.getElementById('startApp').onclick = function()
{
    goTo('app/app1')
};



