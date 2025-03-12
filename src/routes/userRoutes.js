const { register, displayalluser, getUserById, updateUser, deleteUser } = require("../Controllers/userControllerse")
const { validateUser } = require("../Middleware/registerMiddleware")

const userRouter=require("express").Router()

userRouter.post("/register",validateUser,register)
userRouter.get("/displayalluser",displayalluser)
userRouter.get("/getUserById/:id",getUserById)
userRouter.put("/updateUser/:id",updateUser)
userRouter.delete("/deleteUser/:id",deleteUser)

module.exports=userRouter