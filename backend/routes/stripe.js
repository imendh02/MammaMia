const stripe = require("stripe")(
  "sk_test_51MBF04KM0ENMGrzUbILKrv9tDFv4gctIPri8hfdWf2RBxAoiVWtsW7LRBmTbHqzyc9HqIbSM5YEsLjlZ6xfMlvhf00VuuFphU0"
);

const express = require("express");

const router = express();

router.use(express.static("public"));

router.post("/checkout", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: "",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `http://localhost:3000/checkout`,
    cancel_url: `http://localhost:3000/cart`,
  });

  res.send({ url: session.url });
});

module.exports = router;
