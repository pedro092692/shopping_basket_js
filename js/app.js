/* JS app
@author Pedro Bastidas <pedro092692@hotmail.com>
@link github
https://github.com/pedro092692
*/

var pc_part;

function pc_part_moving(event){
    pc_part = event.target;

}

function test(event){
    let part_type = event.target.getAttribute('part_type');
    if(part_type == pc_part.getAttribute('part_type')){
        event.target.innerHTML = pc_part.innerHTML;
    }
   
}

function change_part(){
    let grid = document.querySelector('.main .grid');
    for(let div of grid.children){
        div.addEventListener('dragover', e=>{e.preventDefault()})
        div.addEventListener('drop', function(event){
            test(event);
        });
    }

}

change_part();