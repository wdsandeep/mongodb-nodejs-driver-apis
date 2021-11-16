const dbConnect = require('./mongodb');


const updateData = async () => {
    let data = await dbConnect();
    let result = await data.updateOne(
        { name: 'note lite 5'},
        {
            $set: { name: 'note lite i 5', price: 299 }
        }
    );
    console.log(result); 
}


updateData();
