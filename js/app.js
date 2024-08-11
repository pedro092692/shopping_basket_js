/* JS app
@author Pedro Bastidas <pedro092692@hotmail.com>
@link github
https://github.com/pedro092692
*/

var pc_part;
var grand_total = 0;
const ul_summary = document.getElementById('ul-summary');

function pc_part_moving(event){
    pc_part = event.target;

}

function add_item(event){
    let part_type = event.target.getAttribute('part_type');
    let price = pc_part.getAttribute('price');
    let name = pc_part.getAttribute('name');
    if(part_type == pc_part.getAttribute('part_type')){
        event.target.innerHTML = pc_part.innerHTML;
        if(event.target.getAttribute('active') == 'true'){
            console.log('this element is active');
            remove_summary_item(part_type);
            calc_total(parseInt(price));
            show_total();
            add_summary_item(name, price, part_type);
        }else{
            event.target.setAttribute('active', 'true');
            calc_total(parseInt(price));
            show_total();
            add_summary_item(name, price, part_type);
        }
        
    }

   
}

function change_part(){
    let grid = document.querySelector('.main .grid');
    for(let div of grid.children){
        div.addEventListener('dragover', e=>{e.preventDefault()})
        div.addEventListener('drop', function(event){
            add_item(event);
        });
    }
}

function calc_total(price){
    grand_total += price;
}

function add_summary_item(name, price, part_type){
    let ul_item = document.createElement('li');
    let part_name = document.createElement('p');
    let part_price = document.createElement('p');
    part_name.innerHTML = name;
    part_price.innerHTML = price + '$';
    ul_item.appendChild(part_name);
    ul_item.appendChild(part_price);
    ul_item.setAttribute('class', part_type);
    ul_item.setAttribute('price', price);
    ul_summary.appendChild(ul_item);
   
}

function remove_summary_item(type){
    let li = ul_summary.querySelector('.'+type);
    ul_summary.removeChild(li);
    let price = parseInt(li.getAttribute('price'));
    calc_total(price * -1);
}

function show_total(){
    let li_total = document.getElementById('total');
    li_total.innerHTML = 'Total ' + grand_total + '$';
    
}

show_total();
change_part();