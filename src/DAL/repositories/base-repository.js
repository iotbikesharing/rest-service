class BaseRepository {
    findWithCondition(model, condition) {
        return model.findAll({
            where: condition
        })
    }

    findOne(model, condition) {
        return model.findOne({
            where: condition
        })
    }

    create(model, data) {
        return model.create(data)
    }
}

module.exports = new BaseRepository()