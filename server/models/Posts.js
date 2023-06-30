
module.exports=(sequelize,DataTypes)=> {
 // exporting the above function so that we access it other files
const Posts = sequelize.define("Posts",{
        title:{
                type:DataTypes.STRING,
                allowNull:false,


        },

        postText:{
                type:DataTypes.STRING,
                allowNull:false
        },

        usernaame:{
                type:DataTypes.STRING,
                allowNull:false
        },
        
})

// note the string above in define is name of the table

Posts.associate=(models)=>{
Posts.hasMany(models.Comments,{
        onDelete:"cascade",
}
)
// Posts.hasMany(models.Likes, {
//         onDelete: "cascade",
//       });



}
return Posts
        
}


// it was exports not export 