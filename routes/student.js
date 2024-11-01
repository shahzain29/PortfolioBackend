const express = require('express')
const studentAct = require('../controller/student')
const router = express.Router()

router.get('/', studentAct.getStudents)
router.get('/:roll', studentAct.getSpecStudent)
router.post('/', studentAct.createStudent)
router.patch('/:roll', studentAct.updateStudent)
router.delete('/:roll', studentAct.removeStudent)

module.exports = router 