const express = require('express')
const profileRouter = express.Router()
const protect = require('../middlewares/auth.middleware')
const { updateProfile, uploadResume, addProfile, getProfiles, getProfileById } = require('../controllers/profile.controller')
const { upload } = require('../middlewares/upload.middleware')

profileRouter.get('/', protect(["HR", "Manager", "Admin"]), getProfiles)
profileRouter.get('/:userId', protect(["User", "HR", "Manager", "Admin"]), getProfileById)

profileRouter.post('/add', protect(["User", "HR", "Manager", "Admin"]), addProfile)
profileRouter.put('/update', protect(["User", "HR", "Manager", "Admin"]), updateProfile)

profileRouter.post('/upload-resume', protect(["User"]), upload.single('resume'), uploadResume)

module.exports = profileRouter