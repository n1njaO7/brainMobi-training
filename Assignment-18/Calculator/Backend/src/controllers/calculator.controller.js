
const calculateExpression = require("../utils/calculator");

const calculate = (req, res) => {
    try {
        const { expression } = req.body;

        const result = calculateExpression(expression);

        return res.status(200).json({
            success: true,
            expression,
            result
        });

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = { calculate };
