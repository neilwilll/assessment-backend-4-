module.exports = { saveAnswer:(req,res) => {
console.log(req.body)
res.status(200).send("made a request to back end server")
},

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
        const express = require('express')
        const app = express()
        app.use(express.json())
        app.listen(4040,)()=> console.log
         
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }

}