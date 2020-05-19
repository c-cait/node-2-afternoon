const express = require('express');
const app = express();
app.use(express.json());

const ctrl = require('./controllers/messages_controller')

//read
app.get('/api/messages', ctrl.getMessages);

//create
app.post('/api/messages/', ctrl.createMessages);

//update
app.put('/api/messages/:msg_id', ctrl.updateMessages);

//delete
app.delete('/api/messages/:msg_id', ctrl.deleteMessages);






app.listen(3001, () => console.log('server is listening on port 3001'))