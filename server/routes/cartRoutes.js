import e from 'express';
import Cart from '../model/Cart.js'
import Product from '../model/Product.js';
import { verifyToken } from '../middleware/authMiddleware.js';


const router = e.Router();

router.post("/add",verifyToken, async(req, resp) =>{
    try {
    const { productId, quantity = 1 } = req.body || {};

    // Check product ID
    if (!productId) {
      return resp.status(400).json({
        success: false,
        message: "Product ID is required",
      });
    }

    // Check whether product exists
    const product = await Product.findById(productId);

    if (!product) {
      return resp.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Find user's cart
    let cart = await Cart.findOne({
      user: req.user.userId,
    });

    // If cart doesn't exist, create it
    if (!cart) {
      cart = await Cart.create({
        user: req.user.userId,
        items: [
          {
            product: productId,
            quantity: quantity,
          },
        ],
      });

      return resp.status(201).json({
        success: true,
        message: "Product added to cart",
        cart,
      });
    }

    // Check whether product already exists in cart
    const existingItem = cart.items.find(
      (item) => item.product.toString() === productId
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({
        product: productId,
        quantity: quantity,
      });
    }

    await cart.save();

    return resp.status(200).json({
      success: true,
      message: "Product added to cart",
      cart,
    });
  } catch (error) {
    console.error(error);

    return resp.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

router.get("/all", verifyToken, async(req, resp) => {
  try {
    const cart = await Cart.findOne({
      user: req.user.userId,
    }).populate("items.product");

    if(!cart) {
      return resp.status(404).json({
        success: false,
        message: "Cart is empty"
      })
    }

    resp.status(200).json({
      success: true,
      message: "Cart fetched successfully",
      cart
    });

  } catch (error) {
    return resp.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    });
  }
});

export default router;