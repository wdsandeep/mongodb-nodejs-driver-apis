const dbConnect = require('./mongodb');

const deleteData = async () => {
    let data = await dbConnect();
    let result = await data.deleteMany({ name: 'note 2a'})

    console.log(result);
    if(result.acknowledged){
        console.log('Record deleted');
    }
}

deleteData();


