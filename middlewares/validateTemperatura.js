
export const validateTemperatura = (req, res, next)=>{
    try {
        let { temperatura } = req.body;
        if (!temperatura ||
            typeof temperatura != 'number' ||
            (temperatura > 100 || temperatura < -20)
        ) {
            throw Error("Datos invalidos.")
        }

        next();
    } catch (error) {
        res.status(401).send({ success: false, message: error.message });
    }
};