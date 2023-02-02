const { Router } = require("express");


const router= Router();




router.get("/cars", async (req,res)=> {
    res.send("Hola")
})



module.exports = router;