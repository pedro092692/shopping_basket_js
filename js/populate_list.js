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
            },
            {
                name: 'AMD 3200G Ryzen 3',
                price: 85,
            },
            {
                name: 'Intel Core i9-14900KF',
                price: 550,
            },
            {
                name: 'Intel Core i3-12100F',
                price: 89,
            },
        ]
   },
   gpu:{
    img_path: 'img/9041209_gpu_card_icon.png',
    product_list:[
            {
                name: 'RTX 4060 EVO OC Edition 8GB ',
                price: 505,
            },
            {
                name: 'RX 6700 XT CORE 12 GB',
                price: 289,
            },
            {
                name: 'RX 7600 XT 16 GB',
                price: 320,
            },
            {
                name: 'GeForce RTX™ 4090 24 GB',
                price: 1729,
            },
        ]
    },
    ram:{
        img_path: 'img/2130484_electronic_ram_technology_web_computer_icon.png',
        product_list:[
            {
                name: 'KLEVV DDR4 8GB (1x8GB) 3200MHz',
                price: 15,
            },
            {
                name: 'Corsair 16GB DDR4 3200MHz',
                price: 60,
            },
            {
                name: 'Serie DDR4 Owl 3200',
                price: 33,
            },
            {
                name: 'T-Force Vulcan Z (2x8GB) 3200MHz',
                price: 33,
            },
        ]
    },      
    hdd:{
        img_path: 'img/8541995_hdd_data_icon.png',
        product_list:[
                {
                    name: 'Se HDD 4 TB',
                    price: 90,
                },
                {
                    name: 'JPS800 2TB PCIe',
                    price: 99,
                },
                {
                    name: 'S501 1TB NVMe SSD',
                    price: 60,
                },
                {
                    name: 'Sam 870 EVO 1TB',
                    price: 100,
                },
            ]
    },   
    psu:{
        img_path: 'img/111006_power_supply_icon.png',
        product_list:[
                {
                    name: 'ES1000 80+ gold',
                    price: 100,
                },
                {
                    name: 'Redragon PSU007 80+',
                    price: 114,
                },
                {
                    name: 'CORSAIR rm860x 80+ gold',
                    price: 114,
                },
                {
                    name: 'Corsair rm750 80+ gold',
                    price: 100,
                },
            ]
    },
    monitor:{
        img_path: 'img/211865_monitor_icon.png',
        product_list:[
                {
                    name: 'Monitor IPS de 27 pulgadas 75 Hz',
                    price: 100,
                },
                {
                    name: 'Monitor curvo para juegos de 24',
                    price: 88,
                },
                {
                    name: 'Monitor Full HD de 22 pulgadas',
                    price: 70,
                    img: 'img 2'
                },
                {
                    name: 'Gaming Monitor de 43 pulgadas, 144 Hz',
                    price: 651,
                },
            ]
    },
    case:{
        img_path: 'img/326558_blank_check_box_icon.png',
        product_list:[
            {
                name: 'JONSBO D31 MESH',
                price: 145,
            },
            {
                name: 'JONSBO D300 Negro',
                price: 130,
            },
            {
                name: 'Corsair 4000D Airflow',
                price: 93,
            },
            {
                name: 'Cooler Master',
                price: 40,
            },
        ]
    },
    keyboard:{
        img_path: 'img/8664826_keyboard_computer_icon.png',
        product_list:[
            {
                name: 'RedThunder K10 ',
                price: 50,
            },
            {
                name: 'Logitech MK270',
                price: 23,
            },
            {
                name: 'Razer Huntsman V2 ',
                price: 130,
            },
            {
                name: 'HyperX Alloy Origins',
                price: 89,
            },
        ]
    },
    mouse:{
        img_path: 'img/3671817_mouse_icon.png',
        product_list:[
            {
                name: 'Logitech MX Master 3S',
                price: 100,
            },
            {
                name: 'Logitech G502 HERO',
                price: 45,
            },
            {
                name: 'Razer Basilisk V3',
                price: 50,
            },
            {
                name: 'BenQ EC2-C Zowie',
                price: 45,
            },
        ]
    },
    misc:{
        img_path: 'img/4733388_basic_menu_other_ui_icon.png',
        product_list:[
                {
                    name: 'Black Shark Alfombrilla de mouse',
                    price: 39,
                },
                {
                    name: 'ID-COOLING ZOOMFLOW',
                    price: 65,
                },
                {
                    name: 'Cooler Master Hyper 212',
                    price: 18,
                    img: 'img 2'
                },
                {
                    name: 'NZXT Kraken 240 ',
                    price: 130,
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
            let img_product_path = 'img/'+ part + '/' +part+'_' + parseInt(pc_parts[part].product_list.indexOf(product) + 1) + '.jpg';
            div_part = document.createElement('div');
            part_img = document.createElement('img');
            part_img.setAttribute('src', img_product_path);
            div_part.appendChild(part_img);
            div_part.innerHTML += product.name;
            let price = document.createElement('p');
            price.innerHTML = 'Price: ' + product.price + '$';
            div_part.appendChild(price);
            div_grid.appendChild(div_part);
        }

        li.appendChild(div_grid);
    }

}




populate_products();