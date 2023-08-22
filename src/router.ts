import { Router } from "express";

const router = Router();

//app is the entire api , router is subpart , roters can be sub apps

// FOR PRODUCTS ////////////////////

router.get("/product", (req,res) => {
    res.json({message:'hello'})
});
router.get("/product/:id", () => {}); //id is router parameter and its variable
router.put("/product/:id", () => {});
router.post("/product/", () => {});
router.delete("/product/:id", () => {});

// FOR UPDATE //////////////////////

router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put("/update/:id", () => {});
router.post("/update/", () => {});
router.delete("/update/:id", () => {});


// FOR UPDATE_POINTS /////////

router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});
router.put("/updatepoint/:id", () => {});
router.post("/updatepoint/", () => {});
router.delete("/updatepoint/:id", () => {});


export default router