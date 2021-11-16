const dbConnect = require('./mongodb');

const insert = async () => {
    const db = await dbConnect();
    const result = await db.insert([
        {
        name: 'note 1',
        brand: 'VIVO',
        price: 101,
        category: 'mobile'
        },
        {
            name: 'note 2',
            brand: 'VIVO',
            price: 202,
            category: 'mobile'
        },
        {
            name: 'note 3',
            brand: 'VIVO',
            price: 303,
            category: 'mobile'
        }
    ])
    if(result.acknowledged) {
        console.log(result);
        console.log("Data inserted");
    }
}
insert();



