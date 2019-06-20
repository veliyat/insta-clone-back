const User = require('../user/models/User')

exports.login = async (creds) => {
  const user = await User.findOne({ username: creds.username })

  if(user && user.comparePassword(creds.password)) {
    return {
      success: true,
      msg: 'Success',
      user: user.genUserObject()
    }
  } else {
    return {
      success: false,
      msg: 'Invalid Credentials'
    }
  }
}

exports.register = async (userData) => {
  const user = await User.findOne({
    $or: [
      { email: userData.email },
      { username: userData.username }
    ]
  })

  return new Promise((resolve, reject) => {    
    if(user === null) {
        const newuser = new User(userData)
        newuser.genPasswordHash(userData.password)

        newuser.save().then(u => {
          resolve({
            id: u._id,
            name: u.name
          })
        }).catch(err => reject(err))
    } else {
      let msg = ''
      
      if(user.email === userData.email) {
        msg = 'Email already in use.'
      } else if(user.username === userData.username) {
        msg = 'Username already in use.'
      }

      reject({
        msg
      })
    }
  })
}

// exports.users = async (pagecount) => {
//   let users = []
//   for(var i = 1; i <= pagecount; i++) {
//     const userspage = await call(i)
//     users = [
//       ...users,
//       ...userspage
//     ]
//   }
//   return users
// }