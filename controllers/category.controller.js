import db from "../config/db.js";

async function FindAll(req, res) {
    try {

        let [all] = await db.query("select * from category")
        console.log(all);
        res.json({message: all})

    } catch (error) {
        console.log(error.message);
        res.json({message: error.message})
    }
}
async function FindOne(req, res) {
    try {

        let { id } = req.params
        console.log(id);
        const [findCategory] = await db.query("select category.category_name from category join category_item on category.id = category_item.category_id", [id])

        res.json({message : findCategory})

    } catch (error) {
        console.log(error.message);
        res.json({message: error.message})
    }
}
async function Create(req, res) {
    try {
        
        
    } catch (error) {
        console.log(error.message);
        res.json({message: error.message})
    }
}
async function Update(req, res) {
    try {
        
    } catch (error) {
        console.log(error.message);
        res.json({message: error.message})
    }
}
async function Delete(req, res) {
    try {
        
    } catch (error) {
        console.log(error.message);
        res.json({message: error.message})
    }
}

export {FindAll, Create, Update, Delete, FindOne}