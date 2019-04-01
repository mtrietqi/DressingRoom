// Convert JSON OBJECT to OOP
import Room from './Room';
import Item from './Item';
import Data from './Data';

let dressingRoom = new Room();

for(let itemJson of Data){
    
    let id = itemJson.id;
    let type = itemJson.type;
    let name = itemJson.name;
    let desc = itemJson.desc;
    let imgSrc_jpg = itemJson.imgSrc_jpg;
    let imgSrc_png = itemJson.imgSrc_png;

    let item = new Item(id, type, name, desc, imgSrc_jpg, imgSrc_png);
 
    dressingRoom.addItem(item);
}

export default dressingRoom;


