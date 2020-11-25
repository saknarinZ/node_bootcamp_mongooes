const fs = require('fs');
const Tour = require('./../models/tourModel')



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

exports.createTour = async (req, res) => {
    try {
        // const newTour = new Tour({})
        // newTour.save();
        const newTour = await Tour.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                tours: newTour
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: 'Invalid data sent!'
        })
    }
}

exports.updateTour = async (req, res) => {
    try {
      const tour = await Tour.findByIdAndUpdate(req.params.id, req.body , {
            new: true,
            rueValidators: true
        });
        res.status(200).json({
            status: 'seccess',
            data: {
                tour
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

exports.deleteTour = (req, res) => {
    // 204 NO Cantent
    res.status(204).json({
        status: 'seccess',
        data: null
    })
}