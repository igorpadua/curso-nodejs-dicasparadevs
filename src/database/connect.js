const mongoose = require('mongoose')

const connectToDatabase = async () => {
	await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejsdicasparadev.r9i0ioy.mongodb.net/database?retryWrites=true&w=majority`, 
		(error) => {
			if (error) {
				return console.log('Ocorreu um erro ao se conectar com o banco de dados: ', error)
			}

			return console.log('conexão ao banco de dados realizado com sucesso!')
		})
}

module.exports = connectToDatabase
