const validateUser = (req, res, next) => {
    console.log("🔍 Validating user data...");

    const { name, email, age } = req.body;

    if (!name) {
        console.log("❌ Validation failed: Name is required.");
        return res.status(400).json({ error: "Name is required" });
    }

    if (!email) {
        console.log("❌ Validation failed: Email is required.");
        return res.status(400).json({ error: "Email is required" });
    }

    if (age === undefined) {
        console.log("❌ Validation failed: Age is required.");
        return res.status(400).json({ error: "Age is required" });
    }

    if (isNaN(age) || age <= 0) {
        console.log("❌ Validation failed: Age must be a positive number.");
        return res.status(400).json({ error: "Age must be a positive number" });
    }

    console.log("✅ Validation successful. Proceeding to next Controller...");
    next();
};

module.exports = { validateUser };
