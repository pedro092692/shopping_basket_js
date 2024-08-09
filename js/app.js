/* JS app
@author Pedro Bastidas <pedro092692@hotmail.com>
@link github
https://github.com/pedro092692
*/

var active = false;
var grid;
var cheron; 

function show_components(li_element){
    console.log(active);
    if(!active){
        chevron = li_element.querySelector('.chevron');
        grid = li_element.querySelector('.grid');
        chevron.classList.add('rotate');
        grid.classList.add('show-grid');
        active = true;
    }else{
        grid.classList.remove('show-grid');
        chevron.classList.remove('rotate');
        active = false;
        
    }
    
}
