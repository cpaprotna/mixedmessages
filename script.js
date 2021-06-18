console.log("hello");
import {Message} from "./message_object.js";
console.log("about to create object");
var myMessage = new Message();
console.log("Mesage Type: " + myMessage.message_type);
console.log(myMessage.get_message());