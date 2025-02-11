var config = {
    type: Phaser.AUTO,
    width: 924,
    height: 520,
    parent: "game-container", // Ensure the game is attached to a container
    scene: {
        preload: preload,
        create: create,
        update: update,
    },
};

var game = new Phaser.Game(config);
var rato;

// function preload carrega as imagens
function preload() {
    this.load.spritesheet("rato", "assets/bichos/rato.png", {
        frameWidth: 384,
        frameHeight: 537,
    }); // rato que se movimentará
    this.load.image("fundo", "assets/bg/grama.png"); // fundo do jogo
}

// function create vai adicionar essas imagens ao jogo
function create() {
    this.add.image(462, 260, "fundo"); // coloca o fundo
    rato = this.add.sprite(100, 300, "rato").setAngle(225); // adiciona o rato e rotaciona ele em 225 graus
    rato.setScale(0.3); // define o tamanho

    // Aqui que aciona os frames que serão usados
    this.anims.create({
        key: "andar",
        frames: this.anims.generateFrameNumbers("rato", { start: 0, end: 0 }),
        frameRate: 10,
        repeat: -1,
    });
    rato.anims.play("andar", true); // Aqui aciona a animação
}

// Aqui dá instruções repetitivas para onde o rato deve se movimentar
function update() {
    if (rato.x === 100) {
        rato.ida = true;
    }

    if (rato.x < 700 && rato.ida === true) {
        rato.x += 1;
        rato.y -= 1;
    }
    if (rato.y <= -150) {
        rato.setAngle(360);
        rato.ida = false;
    }
    if (rato.y < 900 && rato.ida === false) {
        rato.y += 1;
    }
    if (rato.y >= 900) {
        rato.setAngle(115);
        rato.y += 1;
        rato.x -= 1;
    }
}
