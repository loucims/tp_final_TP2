

class SondasController {

    createSonda = async (req, res) =>{
        try {
            res.status(200).send({success: true, message: 'works'});
        } catch (error) {
            res.status(400).send({success: false, message: "Error al crear el usuario (El email no puede ya existir)"});
        }
    };

}

export default SondasController