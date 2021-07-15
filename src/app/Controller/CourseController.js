const Course = require('../Model/Course')
const { multipleMongooseToObject } = require('../../util/mongoose')
const { mongooseToObject } = require('../../util/mongoose')

class CourseController {

     index(req, res, next) {

        Course.find({})
            .then(courses => {
                res.render('home', { courses: multipleMongooseToObject(courses) })
            })
            .catch(next)
    }

    show(req, res, next) {
         Course.findOne({slug: req.params.slug}).then((course) => {
             res.render('courses/show', {course: mongooseToObject(course)})
         }).catch(next)
    }
}

module.exports = new CourseController();
