
export const validateSondaId = (req, res, next) => {
    try {
        let { id } = req.body;
        if (!id ||
            typeof id != 'number' ||
            (id > 5 || id < 1)
        ) {
            throw Error("Datos invalidos.")
        }

        next();
    } catch (error) {
        res.status(401).send({ success: false, message: error.message });
    }
};