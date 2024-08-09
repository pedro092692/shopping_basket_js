/* JS app
@author Pedro Bastidas <pedro092692@hotmail.com>
@link github
https://github.com/pedro092692
*/


var pc_parts = {

   cpu:{
        img_path: 'img/8666779_cpu_computer_icon.png',
        product_list:[
            {
                name: 'AMD Ryzen 7 5800X',
                price: 184,
                img: 'img'
            },
            {
                name: 'AMD 3200G Ryzen 3',
                price: 85,
                img: 'img 2'
            },
            {
                name: 'Intel Core i9-14900KF',
                price: 550,
                img: 'img 2'
            },
            {
                name: 'Intel Core i3-12100F',
                price: 89,
                img: 'img 2'
            },
        ]
   },
   gpu:{
    img_path: 'img/9041209_gpu_card_icon.png',
    product_list:[
            {
                name: 'AMD',
                price: 184,
                img: 'img'
            },
            {
                name: 'nvidia',
                price: 85,
                img: 'img 2'
            },
            {
                name: 'Intel Core i9-14900KF',
                price: 550,
                img: 'img 2'
            },
            {
                name: 'Intel Core i3-12100F',
                price: 89,
                img: 'img 2'
            },
        ]
    },
    ram:{
        img_path: 'img/2130484_electronic_ram_technology_web_computer_icon.png',
        product_list:[
            {
                name: 'AMD',
                price: 184,
                img: 'img'
            },
            {
                name: 'nvidia',
                price: 85,
                img: 'img 2'
            },
            {
                name: 'Intel Core i9-14900KF',
                price: 550,
                img: 'img 2'
            },
            {
                name: 'Intel Core i3-12100F',
                price: 89,
                img: 'img 2'
            },
        ]
    },      
    hdd:{
        img_path: 'img/8541995_hdd_data_icon.png',
        product_list:[
                {
                    name: 'AMD',
                    price: 184,
                    img: 'img'
                },
                {
                    name: 'nvidia',
                    price: 85,
                    img: 'img 2'
                },
                {
                    name: 'Intel Core i9-14900KF',
                    price: 550,
                    img: 'img 2'
                },
                {
                    name: 'Intel Core i3-12100F',
                    price: 89,
                    img: 'img 2'
                },
            ]
    },   
    psu:{
        img_path: 'img/111006_power_supply_icon.png',
        product_list:[
                {
                    name: 'AMD',
                    price: 184,
                    img: 'img'
                },
                {
                    name: 'nvidia',
                    price: 85,
                    img: 'img 2'
                },
                {
                    name: 'Intel Core i9-14900KF',
                    price: 550,
                    img: 'img 2'
                },
                {
                    name: 'Intel Core i3-12100F',
                    price: 89,
                    img: 'img 2'
                },
            ]
    },
    monitor:{
        img_path: 'img/211865_monitor_icon.png',
        product_list:[
                {
                    name: 'AMD',
                    price: 184,
                    img: 'img'
                },
                {
                    name: 'nvidia',
                    price: 85,
                    img: 'img 2'
                },
                {
                    name: 'Intel Core i9-14900KF',
                    price: 550,
                    img: 'img 2'
                },
                {
                    name: 'Intel Core i3-12100F',
                    price: 89,
                    img: 'img 2'
                },
            ]
    },
    case:{
        img_path: 'img/326558_blank_check_box_icon.png',
        product_list:[
            {
                name: 'AMD',
                price: 184,
                img: 'img'
            },
            {
                name: 'nvidia',
                price: 85,
                img: 'img 2'
            },
            {
                name: 'Intel Core i9-14900KF',
                price: 550,
                img: 'img 2'
            },
            {
                name: 'Intel Core i3-12100F',
                price: 89,
                img: 'img 2'
            },
        ]
    },
    keyboard:{
        img_path: 'img/8664826_keyboard_computer_icon.png',
        product_list:[
            {
                name: 'AMD',
                price: 184,
                img: 'img'
            },
            {
                name: 'nvidia',
                price: 85,
                img: 'img 2'
            },
            {
                name: 'Intel Core i9-14900KF',
                price: 550,
                img: 'img 2'
            },
            {
                name: 'Intel Core i3-12100F',
                price: 89,
                img: 'img 2'
            },
        ]
    },
    mouse:{
        img_path: 'img/3671817_mouse_icon.png',
        product_list:[
            {
                name: 'AMD',
                price: 184,
                img: 'img'
            },
            {
                name: 'nvidia',
                price: 85,
                img: 'img 2'
            },
            {
                name: 'Intel Core i9-14900KF',
                price: 550,
                img: 'img 2'
            },
            {
                name: 'Intel Core i3-12100F',
                price: 89,
                img: 'img 2'
            },
        ]
    },
    misc:{
        img_path: 'img/4733388_basic_menu_other_ui_icon.png',
        product_list:[
                {
                    name: 'AMD',
                    price: 184,
                    img: 'img'
                },
                {
                    name: 'nvidia',
                    price: 85,
                    img: 'img 2'
                },
                {
                    name: 'Intel Core i9-14900KF',
                    price: 550,
                    img: 'img 2'
                },
                {
                    name: 'Intel Core i3-12100F',
                    price: 89,
                    img: 'img 2'
                },
            ]
    },
}

function populate_products(){
    let ul = document.getElementById('main-ul');
    for(let part in pc_parts){
        let li = document.createElement('li');
        li.addEventListener('click', function(){
            show_components(li);
        });
        let div_row = document.createElement('div');
        div_row.classList.add('row');
        let div_1 = document.createElement('div');
        let part_img = document.createElement('img');
        part_img.setAttribute('src', pc_parts[part].img_path)
        part_img.style.width = '20px';
        div_1.appendChild(part_img);
        div_1.innerHTML += part.toUpperCase();
        div_row.appendChild(div_1);
        let chevron_img = document.createElement('img');
        chevron_img.setAttribute('src', 'img/chevron-down-solid (1).svg');
        chevron_img.style.width = '20px';
        chevron_img.classList.add('chevron');
        div_row.appendChild(chevron_img);
        li.appendChild(div_row);
        ul.appendChild(li);

        // grid

        div_grid = document.createElement('div');
        div_grid.classList.add('grid');

        for(let product of pc_parts[part].product_list){
            div_part = document.createElement('div');
            div_part.innerHTML = product.name;
            div_grid.appendChild(div_part);
        }

        li.appendChild(div_grid);
    }

}




populate_products();