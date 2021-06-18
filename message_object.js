//There are 3 types of messages.  The function get messages will first pick a message type.
//Depending on the message type, it will use one of the 3 other arrays to complete the sentence
//Sign sentence will by "Your sign is ##"" where ## is a random selection from message_sign 
//having sentence will be "You are having ##" where ## is a random selection from message_having
//should sentence will be "You should: '##'" where ## is a random selection from message_should

function Message()  {
    this.message_types = ["sign", "having", "should"];
    this.message_sign = ["sun", "moon", "star", "water", "earth", "lava"];
    this.message_having = ["good luck", "a bad day", "ice cream", "cold feet"];
    this.message_should = ["take a bath", "trust no one", "have some fun", "go skydiving"];
    this.message_type = this.message_types[Math.floor(Math.random()*this.message_types.length)];
    //message_type: 'sign',
    this.get_message_start = function(msg_type) {
        switch (msg_type){
            case "sign":
                return "Your sign is ";
                break;
            case "having":
                return "You are having ";
                break;
            case "should":
                return "You should: ";
                break;
        }
    };
    this.get_message_end = function(msg_type) {
        switch (msg_type){
            case "sign":
                return this.message_sign[Math.floor(Math.random()*this.message_sign.length)]
                break;
            case "having":
                return this.message_having[Math.floor(Math.random()*this.message_having.length)]
                break;
            case "should":
                return this.message_should[Math.floor(Math.random()*this.message_should.length)]
                break;
        }
    };

    this.get_message = function()  { return this.get_message_start(this.message_type) + this.get_message_end(this.message_type); }
};
export  {Message} ;