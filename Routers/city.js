const router = require('express').Router();
const {Cities}  = require('../Models');

router.get('/', (req, res, next) => {
    Cities.findAll()
    .then(cities => res.send(cities))
    .catch(next)
});

router.post('/', (req, res, next) => {
    console.log('we made it!');
    console.log(req.body);
    Cities.create(req.body)
        .then(city => {
            res.status(201).send({
                note: 'City Created!',
                city
            })
        })
        .catch(next);
})

router.get('/:id', (req, res, next) => {
    Cities.findById(Number(req.params.id))
    .then(city => res.send(city))
    .catch(next)
})

module.exports = router;