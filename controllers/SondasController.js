import { Sonda, RegistroTemperatura } from "../models/index.js";

class SondasController {

    inicializarSondas = async (req, res) => {
        try {
            await Sonda.create({ descripcionSonda: "Zona desertica" });
            await Sonda.create({ descripcionSonda: "Zona junglosa" });
            await Sonda.create({ descripcionSonda: "Zona arboleada" });
            await Sonda.create({ descripcionSonda: "Zona oceanica" });
            await Sonda.create({ descripcionSonda: "Zona asgard" });
            
            res.status(200).send({success: true, result: 'Sondas agregadas correctamente!'});
        } catch (error) {
            res.status(400).send({success: false, result: "Error al crear sondas."});
        }
    }

    mostrarSondas = async (req, res) => {
        try {
            let sondas = await Sonda.findAll()
            
            res.status(200).send({success: true, result: sondas});
        } catch (error) {
            res.status(400).send({success: false, result: "Error al mostrar sonda."});
        }
    }

    mostrarDatosSondas = async (req, res) => {
        try {
            let sondas = await Sonda.findAll({
                include: {
                    model: RegistroTemperatura
                }
            });
    
            const resultado = sondas.map(sonda => ({
                id: sonda.id,
                descripcionSonda: sonda.descripcionSonda,
                registros: sonda.RegistroTemperaturas
            }));
            
            res.status(200).send({success: true, result: resultado});
        } catch (error) {
            res.status(400).send({success: false, result: "Error al mostrar datos de sonda."});
        }
    }

    mostrarDatosSondaPorId = async (req, res) => {
        try {
            const { id } = req.body

            let sonda = await Sonda.findOne({
                where: {
                    id: id
                },
                include: {
                    model: RegistroTemperatura
                }
            });
            
            const resultado = {
                id: sonda.id,
                descripcion: sonda.descripcionSonda,
                registros: sonda.RegistroTemperaturas
            }
            
            res.status(200).send({success: true, result: resultado});
        } catch (error) {
            res.status(400).send({success: false, result: error.message});
        }
    }

    //Dejo este metodo y la ruta que lo utiliza comentados en caso de tener que agregar mas Sondas
    // createSonda = async (req, res) =>{
    //     try {
    //         const { descripcion } = req.body
    //         await Sonda.create({ descripcionSonda: descripcion });
            
    //         res.status(200).send({success: true, message: 'Sonda agregada correctamente.'});
    //     } catch (error) {
    //         res.status(400).send({success: false, message: "Error al crear sonda."});
    //     }
    // };

}

export default SondasController