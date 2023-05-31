const express = require('express');
const router = express.Router();
const projectApp = require('../projects.json');
const teamApp = require('../team.json');


// colocar las rutas aquí
router.get('/', (req, res) => {
    res.render("home");
});

router.get('/about-me', (req, res) => {
    res.render('aboutMe')
});

router.get('/contact', (req, res) => {
    res.render('contact')
});

router.get('/team', (req, res) => {
    console.log(teamApp);
    res.render('team', {teamApp})
});
router.get('/team/:name', (req, res) => {
    const { name } = req.params
    const nameUser = teamApp.find((user) => user.id == name)
    res.render(`team-name`, { nameUser })
});
router.get('/projects', (req, res) => {
    console.log(projectApp);
    res.render('projects', {projectApp})
});
router.get('/projects/:id', (req, res) => {
    const { id } = req.params
    const project = projectApp.find((project) => project.id == id)
    res.render(`project-id`, { project })
});



module.exports = router;
