const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('./Employee')
app.use(bodyParser.json())

const Employee = mongoose.model("employee")
const mongoURI = "mongodb+srv://vipul113:miCa4xoefwNEYj08@cluster0.lbihd.mongodb.net/<dbname>?retryWrites=true&w=majority"

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on("connected", () => {
    console.log("mongo db connected")
})

mongoose.connection.on("error", (err) => {
    console.log("error", err)
})

app.get('/getEmployee', (req, res) => {
    Employee.find({}).then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err)
    })

})

app.post('/createEmployee', (req, res) => {
    const employee = new Employee({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        picture: req.body.picture,
        salary: req.body.salary,
        position: req.body.position

    })
    employee.save()
        .then(data => {
            res.send(data)
        }).catch(err => {
            console.log(err)
        })

})

app.post('/deleteEmployee', (req, res) => {
    Employee.findByIdAndRemove(req.body.id).then(data => {
        res.send("Record deleted successfully")
    }).catch(err => {
        console.log(err)
    })
})

app.post('/updateEmployee', (req, res) => {
    Employee.findByIdAndUpdate(req.body.id, {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        picture: req.body.picture,
        salary: req.body.salary,
        position: req.body.position
    },{new: true}).then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err)
    })
})


app.listen('4000', () => {
    console.log("server is running")
})