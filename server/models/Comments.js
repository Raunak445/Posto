// we are trying to link post to comments as one post may have many comments  
module.exports=(sequelize,DataTypes)=> {
        // exporting the above function so that we access it other files
       const Comments = sequelize.define("Comments",{
               commentBody:{
                type:DataTypes.STRING,
                allowNull:false,
                
               }
               
       })
       
       // note the string above in define is name of the table
       
       
       return Comments
       
       }