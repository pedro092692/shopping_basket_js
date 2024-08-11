/* JS app
@author Pedro Bastidas <pedro092692@hotmail.com>
@link github
https://github.com/pedro092692
*/


function show_components(li_element){
    
    let is_active = li_element.getAttribute('active');
    let chevron = li_element.querySelector('.chevron');
    let grid = li_element.querySelector('.grid');
    
    if(is_active == 'true'){
        grid.classList.remove('show-grid');
        chevron.classList.remove('rotate');
        li_element.setAttribute('active', false);
    }else{
        
        chevron.classList.add('rotate');
        grid.classList.add('show-grid');
        li_element.setAttribute('active', true);
    }
       
    
}
