const { Router } = require('express')
const PostsController = require('./controllers/PostsController')
const postValidator = require('./validators/postValidator')
const Authentication = require('../../middlewares/Authentication')
const upload = require('../../helpers/upload')

const router = Router()

router.use(Authentication)

router.get('/', PostsController.getAllPosts)
router.get('/:id', PostsController.getSinglePost)
router.post('/', [postValidator, PostsController.createPost])
router.delete('/:id', PostsController.removePost)
router.post('/upload', [upload.single('image'), PostsController.uploadImage])

module.exports = router