/* JS app
@author Pedro Bastidas <pedro092692@hotmail.com>
@link github
https://github.com/pedro092692
*/

var pc_part;
var grand_total = 0;
const original_divs = get_original_div();
const ul_summary = document.getElementById('ul-summary');
const reset_button = document.getElementById('reset');

reset_button.addEventListener('click', reset_all)


function reset_all(){
    let grid = document.querySelector('.main .grid');
    grand_total = 0;
    ul_summary.innerHTML = '<li id="total"></li>';
    grid.innerHTML = original_divs;
    change_part();
    show_total();
}


function pc_part_moving(event){
    pc_part = event.target;
    type = pc_part.getAttribute('part_type');
    let drop_zone = document.querySelector('.main div[part_type="'+ type+ '"]')
    pc_part.addEventListener('dragend', ()=>{
        drop_zone.classList.remove('drop');
    })
    drop_zone.classList.add('drop');

}

function add_item(event){
    event.target.classList.remove('drop');
    let part_type = event.target.getAttribute('part_type');
    let price = pc_part.getAttribute('price');
    let name = pc_part.getAttribute('name');
    if(part_type == pc_part.getAttribute('part_type')){
        event.target.innerHTML = pc_part.innerHTML;
        if(event.target.getAttribute('active') == 'true'){
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

        // save data 
        let main_content = get_main();
        let summary_content = get_summary();

        save_data(main_content, summary_content);
        
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

function get_original_div(){
    let grid = document.querySelector('.main .grid');
    return grid.innerHTML;

}

function get_main(){
    let main_content = document.querySelector('.main .grid');
    return main_content.innerHTML;
}

function get_summary(){
    let summary = document.querySelector('#ul-summary');
    return summary.innerHTML;
}

function save_data(main, summary){
    localStorage.setItem('main_content', main);
    localStorage.setItem('summary', summary);
    localStorage.setItem('total', grand_total);
}

function load_data(){
    let main = localStorage.getItem('main_content');
    let summary = localStorage.getItem('summary');
    let total = localStorage.getItem('total');
    if(main && summary && total){
        let grid = document.querySelector('.main .grid');
        ul_summary.innerHTML = summary;
        grid.innerHTML = main;
        grand_total = parseInt(total);
        change_part();
    }
    
    
}

show_total();
change_part();
load_data();

