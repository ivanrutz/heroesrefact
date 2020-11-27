const fs = require ('fs')
const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));
module.exports = {
    index : (req,res)=>{
        res.send(heroes);
    },

    detalle : (req,res) => {
        let heroe = req.params.id;
        for (let i = 0; i < heroes.length; i++){
            if(Number(heroe) == heroes[i].id){
                heroe= heroes[i]
            }
            
        }
        if (heroe > heroes.length){
            res.send('Heroe no encontrado')
        }else{
            res.send(`Hola, mi nombre es ${heroe.nombre} y soy ${heroe.profesion}`);
        }
        
        
    },

    bio: (req,res) => {
        let heroe = req.params.id;
        for (let i = 0; i < heroes.length; i++){
            if(Number(heroe) == heroes[i].id){
                heroe= heroes[i]
            }
        }
        
        if(heroe > heroes.length){
            res.send('No encontramos un héroe para mostrarte su biografía')
        }else if (req.params.ok){ 
            res.send(`${heroe.nombre} ▬ ${heroe.resenia}`)
    
    
        }else{
            res.send(`${heroe.nombre} ▬ Lamento que no quieras saber mas de mi :(`)
        }
    
        },

        credits: (req, res) => {
            res.send('Ivan Rutz - Comisión 04');
        },

        notFound : (req, res) => {
            res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
        }


}