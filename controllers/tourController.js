const fs = require('fs');
const Tour = require('./../models/tourModel')



exports.getAllTours = async (req, res) => {
    try {

        const tours = await Tour.find();
        res.status(200).json({
            status: 'success',
            results: tours.length,
            data: {
                tours
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }

}

exports.getTour = async (req, res) => {
    try {
        const tour = await Tour.findById(req.params.id)
        // const tour = await Tour.findOne({ _id: req.params.id })
        res.status(200).json({
            status: 'success',
            data: {
                tour // ข้อมูลจากการขค้นหา
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail'
        })
    }

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
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
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