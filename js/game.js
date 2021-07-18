let gameScene = new Phaser.Scene("Game");

let config = {
    type: Phaser.AUTO,
    width: 2000,
    height: 1052,
    Scale:{
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: {
        preload,
        create,
        update
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: false
        }
    }
};

const game = new Phaser.Game(config);
const trashTypes = ['Plastic', 'Paper', 'Vidre', 'Organic', 'Rebuig'];

let P1;
let P2;
let cursors;

function preload ()
{
    
    this.load.image('background', 'assets/background.png');
    this.load.image('P1', 'assets/Players/P1.png');
    this.load.image('P2', 'assets/Players/P2.png');
    this.load.image('Paper', 'assets/Containers/Paper.png');
    this.load.image('Plastic', 'assets/Containers/Plastic.png');
    this.load.image('Vidre', 'assets/Containers/Vidre.png');
    this.load.image('Organic', 'assets/Containers/Organic.png');
    this.load.image('Rebuig', 'assets/Containers/Rebuig.png');


    for (let i=0;i<5; i++){
        for (let j=0; j<2; j++){

            this.load.image(trashTypes[i] + j, 'assets/Trash/' + trashTypes[i] + '/' + j + '.png');
        }
    }

}

function create ()
{

    let bg = this.add.sprite(0,0, 'background');
    bg.setOrigin(0,0);
    bg.setScale(1.2,1.2);

    

    
    let paper = this.add.sprite(0,0, 'Paper')
    paper.setOrigin(0,1);
    paper.setPosition(90, 1052);
    paper.setScale(0.8,0.8);
    
    let plastic = this.add.sprite(0,0, 'Plastic')
    plastic.setOrigin(0,1);
    plastic.setPosition(472, 1052);
    plastic.setScale(0.8,0.8);


    let vidre = this.add.sprite(0,0, 'Vidre')
    vidre.setOrigin(0,1);
    vidre.setPosition(865, 1052);
    vidre.setScale(0.8,0.8);

    let organic = this.add.sprite(0,0, 'Organic')
    organic.setOrigin(0,1);
    organic.setPosition(1220, 1052);
    
    let rebuig = this.add.sprite(0,0, 'Rebuig')
    rebuig.setOrigin(0,1);
    rebuig.setPosition(1550, 1052);
    rebuig.setScale(0.8,0.8);

    for (let i =0; i<5; i++){
        var xx=Phaser.Math.Between(100,game.config.width-100)
        var yy=Phaser.Math.Between(200,game.config.height-500)
        
        let trash = this.add.sprite(xx,yy, trashTypes[Math.floor(Math.random()*5)]+Math.floor(Math.random()*2))
        trash.setScale(0.5,0.5);
    }

    P1 = this.physics.add.sprite(
        this.physics.world.bounds.width * 0.1,
        this.physics.world.bounds.height * 0.4,
        'P1'
    );
    P2 = this.physics.add.sprite(
        this.physics.world.bounds.width * 0.9,
        this.physics.world.bounds.height * 0.4,
        'P2'
    );

    P1.setScale(0.4,0.4);
    P2.setScale(0.4,0.4);

    P1.setCollideWorldBounds(true);
    P2.setCollideWorldBounds(true);

    cursors = this.input.keyboard.createCursorKeys();


    this.scoreP1 = this.add.text(game.config.width/2 - 110, 80, '0', { fontSize: '100px', fill: '#000' });
    this.scoreP2 = this.add.text(game.config.width/2 + 110, 80, '0', { fontSize: '100px', fill: '#000' });
    this.timer = this.add.text(game.config.width/2-40, 16, '2:13', { fontSize: '60px', fill: '#000' });

    this.physics.add.collider(P1, trash);
    this.physics.add.collider(trash, plastic);

    
    

   
}
function update(){

    if (cursors.up.isDown){
        P1.setVelocityY(-250);
    }
    else if (cursors.down.isDown){
        P1.setVelocityY(250);
    }
    else{
        P1.setVelocityY(0);
    }
    if (cursors.right.isDown){
        P1.setVelocityX(250);
    }
    else if (cursors.left.isDown){
        P1.setVelocityX(-250);
    }
    else{
            P1.setVelocityX(0);
    }
}
