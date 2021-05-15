const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://om:lwnNq497NTxFpdni@cluster0.8smb8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('DB Connected!')).catch(err => {
    console.log("DB Connection Error: ");
    });



// mongoose.connect(process.env.MONGODB_URL, {useUnifiedTopology: true,  useNewUrlParser: true })
