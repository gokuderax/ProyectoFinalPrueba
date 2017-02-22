function getlibers(req, res) {
     res.send('get /liber successfully...');
     	res.end();

}
function insertliber(req,res){
     res.send('post /liber called successfully...');

	res.end();

}
module.exports = {getlibers,insertliber};