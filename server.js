const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require("./data");

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false
});

server.get("/", function (req, res) {
    const data = {
        avatar_url: "https://avatars.githubusercontent.com/u/55948870?v=4",
        name: "Anderson Kramin",
        role: "Analista de Sistemas",
        description: 'Analista de sistemas, ama viajar e viciado em programação e tecnologia! at  <a href="https://docwise.com.br/" target="_blank">@docwise</a>',
        links: [
            { name: "GitHub", url: " https://github.com/Andersonkramin" },
            { name: "Instagram", url: "https://www.instagram.com/andersonkramin/" },
            { name: "Linkedin", url: "https://www.linkedin.com/in/andersonkramin/ " }
        ]
    }

    return res.render("about", { about: data })
});


server.get("/fotos", function (req, res) {
    return res.render("fotos", { items: videos })
});

server.get("/video", function (req, res) {
    const id = req.query.id;

    const video = videos.find(function (video) {
        return video.id == id
           })
    
        if (!video) {
        return res.send("Video not found!")
    }

    return res.render("video", { item: video })
}
);

server.listen(3333, function () {
    console.log("server is running")
});

