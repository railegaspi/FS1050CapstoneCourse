'use strict';

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home.ejs', {
        pageId: 'home',
        title: 'Home',
    })
});

router.get('/Login', (req, res) => {
    res.render('login.ejs', {
        pageId: 'login',
        title: 'Login',
    })
});

router.get('/Register', (req, res) => {
    res.render('register.ejs', {
        pageId: 'register',
        title: 'Register',
    })
});

module.exports = router;
