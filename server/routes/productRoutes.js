import e from 'express'
import upload from '../middleware/uploadImage.js'
import Product from '../model/Product.js';

const router = e.Router();

router.post("/add", upload.single("image"), async(req, resp)=>{
    try {
    console.log(req.body);
    console.log(req.file);

    const { productName, price, description } = req.body;

    const fileName = req.file?.filename;

    const product = new Product({
        productName,
        image: fileName,
        price,
        description
    });
    await product.save();

        resp.status(200).json({
            message: "Product is added"
        });
    } catch (error) {
        console.log(error)
        resp.status(500).json({
            message: "Server Error",
            error: error.message
        });
    }
});

router.get("/all", async(req, resp)=>{
    try {
        const products = await Product.find();
        resp.status(200).json({
            message: "All products",
            products
        })
    } catch (error) {
        resp.status(500).json({
            message:"Server error",
            error: error.message
        })
    }
});

export default router;