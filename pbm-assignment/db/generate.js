module.exports = function() {
 	var faker = require("faker");
	var _ = require("lodash");
	return {
		bidConfig: _.times(10, function (n) {
			return {
				id : n,
				name : faker.name.findName(),
				price : faker.finance.amount(),
				datetimes: {
					updated: faker.date.past(),
					lastExecuted: faker.date.recent()
				},
				tags : ["saving","current","recurring","fixed"],
			}
		})

	}
}