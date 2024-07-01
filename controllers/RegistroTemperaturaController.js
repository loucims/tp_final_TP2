import { RegistroTemperatura, Sonda } from "../models/index.js";

class RegistroTemperaturaController {

    createRegistro = async (req, res) =>{
        try {
            const { id, temperatura } = req.body

            const fechaCompleta = new Date();
            
            // Al final Sequealize hace el formateo de Dates under the hood, epico
            // const fecha = fechaCompleta.toISOString().split('T')[0];
            // const hora = fechaCompleta.toTimeString().split(' ')[0];

            let registro = await RegistroTemperatura.create({
                temperatura: temperatura,
                fecha: fechaCompleta,
                hora: fechaCompleta,
                sondaId: id
            });
            
            res.status(200).send({success: true, result: registro});
        } catch (error) {
            res.status(400).send({success: false, result: error.message});
        }
    };

}

export default RegistroTemperaturaController