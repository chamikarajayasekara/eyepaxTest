

async function getCarousals(length, dummyData){
    let result = dummyData.slice(0,length)
    const responseData = { slides: result};
    return JSON.stringify(responseData);
}
module.exports = getCarousals