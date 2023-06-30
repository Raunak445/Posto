
module.exports=(sequelize,DataTypes)=> {
        // exporting the above function so that we access it other files
       const Users = sequelize.define("Users",{
               username: {
                type:DataTypes.STRING,
                allowNull:false,
               },

               password:{
                type:DataTypes.STRING,
                allowNull:false,
               },

       })
       
       // note the string above in define is name of the table
       
//        Users.associate=(models)=>{
//        Users.hasMany(models.Posts,{
//                onDelete:"cascade",
//        })
//        }
       
       return Users 
               
       }
       
       
       // it was exports not export 