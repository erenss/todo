import mongoose from "mongoose";

const conn = () => {
    mongoose.connect(process.env.DB_URI, {
        dbName : 'test',
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log('Db Bağlandı.');
    }).catch((err)=> {
        console.log(`DB bağlantı hatası: ${err} `);
    });
};

export default conn;