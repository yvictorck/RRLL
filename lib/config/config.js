module.exports = {
	port: process.env.PORT || 3000,
    db: process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://vic:victor@ds033569.mongolab.com:33569/aaasvictor/'

}