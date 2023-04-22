
module.exports=(sequelize,DataTypes)=> {
 // exporting the above function so that we access it other files
const Post = sequelize.define("Posts",{
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

Post.associate=(models)=>{
Post.hasMany(models.Comments,{
        onDelete:"cascade",
})
}

return Post

}


// it was exports not export 