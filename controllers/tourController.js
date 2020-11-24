// const fs = require('fs');
const Tour = require('./../models/tourModel')

exports.checkBody = (req, res, next) => {
    if(!req.body.name || !req.body.pice) {
        return res.status(400).json({
            status: 'fail',
            message: 'Missing name or price'
        });
    }
    next()
;}

exports.getAllTours = (req, res) => {
    res.status(200).json({
        status: 'success',
        requestedAt: req.requestTime,
        // results: tours.length,
        // data: {
        //     tours
        // }
    });
}

exports.getTour = (req, res) => {
    const id = req.params.id * 1;
    // const tour = tours.find(el => el.id === id);
    // res.status(200).json({
    //     status: 'success',
    //     data: {
    //         tour // ข้อมูลจากการขค้นหา
    //     }
    // });
}

exports.createTour = (req, res) => {
    res.status(201).json({
        status: 'success',
        // data: {
        //     tours: newTour
        // }
    });

}

exports.updateTour = (req, res) => {
    // 204 NO Cantent
    res.status(204).json({
        status: 'seccess',
        data: {
            tour: '<Updated tour here...>'
        }
    })
}

exports.deleteTour = (req, res) => {
    // 204 NO Cantent
    res.status(204).json({
        status: 'seccess',
        data: null
    })
}