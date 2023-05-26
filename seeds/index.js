const sequelize = require("../config/connection")
const {User,Post,Comment} = require("../models")

const users = [
    {
        username: "Davio",
        password: "Daviopassword"
    },
    {
        username: "Pac",
        password: "Pacpassword"
    },
    {
        username: "Legend",
        password: "Legendpassword"
    },

]

const blogs = [
    {
        title: "My first post",
        content: "Don't Do It",
        user_id: 1
    },
    {
        title: "My second post",
        content: "Do It",
        user_id: 1
    },
    {
        title: "Davio's first post",
        content: "hi i'm Davio",
        user_id: 2
    },
    {
        title: "Pac first post",
        content: "hi i'm Pac",
        user_id: 3
    },
]

const comments = [
    {
        body: "great post!",
        post_id: 1,
        user_id: 1
    },
    {
        body: "I agree!",
        post_id: 3,
        user_id: 2
    },
    {
        body: "well done!",
        post_id: 4,
        user_id: 1
    },
    {
        body: "happy friday!",
        post_id: 2,
        user_id: 3
    },

]

const plantSeeds = async ()=>{
    try{
        await sequelize.sync({force:true})
        await User.bulkCreate(users,{
            individualHooks:true
        });
        await Post.bulkCreate(blogs);
        await Comment.bulkCreate(comments);
        process.exit(0);
    } catch(err){
        console.log(err)
    }
}

plantSeeds()