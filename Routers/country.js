const router = require('express').Router();
const {Countries, Cities}  = require('../Models');

router.get('/', (req, res, next) => res.send('you hit the contries'))

router.get('/cities/:name', (req, res, next) => {
    Countries.findOne({
        where: {name: req.params.name}
    })
    .then(country => {
        return Cities.findAll({
            where: {countryId: country.id}
        })
    })
    .then(cities => res.send(cities))
    .catch(next);
})

router.get('/:id/cities', (req, res, next) => {
    Cities.findAll({
            where: {countryId: Number(req.params.id)}
        })
    .then(cities => res.send(cities))
    .catch(next);
})
    

module.exports = router;