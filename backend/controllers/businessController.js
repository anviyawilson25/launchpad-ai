const getBusinessInfo = (req, res) => {
    res.json({
        message: "Business Controller Working!"
    });
};

const createBusinessInfo = (req, res) => {

    const {
        businessName,
        businessType,
        productService,
        targetAudience,
        businessLocation,
        businessGoal,
        brandTone,
        uniqueSellingPoint,
        keywords
    } = req.body;

    if (
        !businessName ||
        !businessType ||
        !productService ||
        !targetAudience ||
        !businessLocation ||
        !businessGoal ||
        !brandTone ||
        !uniqueSellingPoint ||
        !keywords
    ) {
        return res.status(400).json({
            message: "All fields are required."
        });
    }

    console.log(req.body);

    return res.status(200).json({
        success: true,
        message: "Business information received successfully.",
        data: req.body
    });
};

module.exports = {
    getBusinessInfo,
    createBusinessInfo
};