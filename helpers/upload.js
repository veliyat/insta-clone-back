const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split('/')[1]
    cb(null, file.fieldname + '-' + Date.now() + '.' + ext)
  }
})

module.exports = multer({ storage })

// module.exports = multer({
//   dest: './public/uploads/',
//   limits: 2000000,
//   // fileFilter: 
// })