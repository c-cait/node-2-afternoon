const messages = [];

let id = 0;

module.exports = {
    getMessages: (req,res) => {
        res.status(200).send(messages)
    },

    createMessages: (req,res) => {
        const { text, time } = req.body;

        const newMessage = {id, text, time};

        id++;

        messages.push(newMessage);

        res.status(200).send(messages);
    },

    updateMessages: (req,res) => {
        const { text, time } = req.body;

        const { msg_id } = req.params;

        const index = messages.findIndex(e => e.id === +msg_id)

        if(index === -1){
            res.status(404).send('can not find message')
        }

        updatedMsg = {
            id: +msg_id,
            text: text || messages[index].text,
            time: time || messages[index].time 
        }

        messages[index] = updatedMsg

        res.status(200).send(messages)
        
    },

    deleteMessages: (req,res) => {
        const { msg_id } = req.params;

        const index = messages.findIndex(e => e.id === +msg_id);

        if(index === -1){
            res.status(404).send('can not find message')
        }

        messages.splice(index, 1)

        res.status(200).send(messages)

    }
}
