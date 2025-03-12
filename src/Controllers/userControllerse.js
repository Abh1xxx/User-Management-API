const { userModel } = require("../Models/userModel");

const register=async(req,res,next)=>{
    try {
        const {name,email,age}=req.body
        const newUser=new userModel({name,email,age})
        await newUser.save()
        console.log("New user created successfully");
        return res.status(201).json({
            message:"New user created successfully"
        })
        
    } catch (error) {
        console.log(error);
        if(error.code==11000)
        {
            const error={
                message:"Email Already exits",
                statusCode:400
            }
            next(error)
        }
        next(error)      
    }
}


const displayalluser = async (req, res, next) => {
    try {
      console.log("🔍 Fetching all users from the database...");
      const users = await userModel.find();
  
      if (!users || users.length === 0) {
        console.log("⚠️ No users found in the database.");
        return res.status(200).json({ message: "No users found." });
      }
  
      console.log(`✅ Retrieved ${users.length} user(s) successfully.`);
      res.status(200).json(users);
    } catch (error) {
      console.error("❌ Error fetching users:", error);
      next(error);
    }
};
  

// Fetch a user by ID
const getUserById = async (req, res, next) => {
    try {
      console.log(`🔍 Searching for user with ID: ${req.params.id}`);
      const user = await userModel.findById(req.params.id);
      
      if (!user) {
        console.warn(`⚠️ User with ID ${req.params.id} not found.`);
        return res.status(404).json({ message: "User not found" });
      }
      
      console.log(`✅ User with ID ${req.params.id} retrieved successfully.`);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
};
  
  // Update a user by ID
  const updateUser = async (req, res, next) => {
    try {
      console.log(`🔍 Attempting to update user with ID: ${req.params.id}`);
      const updatedUser = await userModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      });
      
      if (!updatedUser) {
        console.warn(`⚠️ User with ID ${req.params.id} not found.`);
        return res.status(404).json({ message: "User not found" });
      }
      
      console.log(`✅ User with ID ${req.params.id} updated successfully.`);
      res.status(200).json(updatedUser);
    } catch (error) {
      console.error("❌ Error updating user");
      next(error);
    }
  };
  
  
  // Delete a user by ID
  const deleteUser = async (req, res, next) => {
    try {
      console.log(`🔍 Attempting to delete user with ID: ${req.params.id}`);
      console.log(typeof(req.params.id));
      
      const deletedUser = await userModel.findByIdAndDelete(req.params.id);
      
      if (!deletedUser) {
        console.warn(`⚠️ User with ID ${req.params.id} not found.`);
        return res.status(404).json({ message: "User not found" });
      }
      
      console.log(`✅ User with ID ${req.params.id} deleted successfully.`);
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      console.error("❌ Error deleting user:", error);
      next(error);
    }
  };
  

module.exports={register,displayalluser,getUserById,updateUser,deleteUser
}