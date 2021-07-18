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

let plastic, paper, vidre, organic, rebuig;
const trashTypes2 = [plastic, paper, vidre, organic, rebuig];

let P1;
let P2;
var score1 = 0;
var score2 = 0;
let cursors;
var keys;
var trash0, trash1, trash2, trash3, trash4, trash5
var trash = [trash0,trash1,trash2,trash3,trash4];
var TrashInHand1 = '';
var TrashInHand2 = '';


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

    
    trashTypes2[0] = this.physics.add.sprite(0,0, 'Plastic')
    trashTypes2[0].setOrigin(0,1);
    trashTypes2[0].setPosition(472, 1052);
    trashTypes2[0].setScale(0.8,0.8);
    
    trashTypes2[1] = this.physics.add.sprite(0,0, 'Paper')
    trashTypes2[1].setOrigin(0,1);
    trashTypes2[1].setPosition(90, 1052);
    trashTypes2[1].setScale(0.8,0.8);

    trashTypes2[2] = this.physics.add.sprite(0,0, 'Vidre')
    trashTypes2[2].setOrigin(0,1);
    trashTypes2[2].setPosition(865, 1052);
    trashTypes2[2].setScale(0.8,0.8);

    trashTypes2[3] = this.physics.add.sprite(0,0, 'Organic')
    trashTypes2[3].setOrigin(0,1);
    trashTypes2[3].setPosition(1220, 1052);
    
    trashTypes2[4] = this.physics.add.sprite(0,0, 'Rebuig')
    trashTypes2[4].setOrigin(0,1);
    trashTypes2[4].setPosition(1550, 1052);
    trashTypes2[4].setScale(0.8,0.8);

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

    for (let i=0; i<5; i++){
        var xx=Phaser.Math.Between(100,game.config.width-100)
        var yy=Phaser.Math.Between(200,game.config.height-500)

        let tipus = trashTypes[Math.floor(Math.random()*5)]
        trash[i] = this.physics.add.sprite(xx,yy, tipus + Math.floor(Math.random()*2))
        trash[i].container = tipus;
        trash[i].id = String(i);
        trash[i].setScale(0.5,0.5);
        trash[i].setCollideWorldBounds(true);
        // this.physics.add.collider(P1,trash[i]);
        // this.physics.add.collider(P2,trash[i]);
        this.physics.add.overlap(P1,trash[i], grabTrash, null, this);
        this.physics.add.overlap(P2,trash[i], grabTrash, null, this);

        for (let j = 0; j<5; j++){
            this.physics.add.overlap(trash[i],trashTypes2[j],P1, containerCollide, null, this);
            this.physics.add.overlap(trash[i],trashTypes2[j],P2, containerCollide, null, this);
        }

    }


    
    

    P1.setScale(0.4,0.4);
    P2.setScale(0.4,0.4);

    P1.setCollideWorldBounds(true);
    P2.setCollideWorldBounds(true);
    
    
    
    keys = this.input.keyboard.addKeys({
        up: 'up',
        down: 'down',
        left: 'left',
        right: 'right',
        A: 'A',
        W: 'W',
        S: 'S',
        D: 'D',
        SPACE: 'SPACE',
        G: 'G'
    });

    this.scoreP1 = this.add.text(game.config.width/2 - 110, 80, score1, { fontSize: '100px', fill: '#000' });
    this.scoreP2 = this.add.text(game.config.width/2 + 110, 80, score2, { fontSize: '100px', fill: '#000' });
    this.timer = this.add.text(game.config.width/2-40, 16, '2:13', { fontSize: '60px', fill: '#000' });

}
    

function update(){
    if (keys.up.isDown){
        P1.setVelocityY(-350);
    }
    else if (keys.down.isDown){
        P1.setVelocityY(350);
    }
    else{
        P1.setVelocityY(0);
    }
    if (keys.right.isDown){
        P1.setVelocityX(350);
    }
    else if (keys.left.isDown){
        P1.setVelocityX(-350);
    }
    else{
        P1.setVelocityX(0);
    }

    if (keys.W.isDown){
        P2.setVelocityY(-350);
    }
    else if (keys.S.isDown){
        P2.setVelocityY(350);
    }
    else{
        P2.setVelocityY(0);
    }
    if (keys.D.isDown){
        P2.setVelocityX(350);
    }
    else if (keys.A.isDown){
        P2.setVelocityX(-350);
    }
    else{
        P2.setVelocityX(0);
    }

    


};

function grabTrash(player , trash){
    if (player.texture.key == 'P1' ){
        if (keys.SPACE.isDown){
            if ((TrashInHand1 == '' || TrashInHand1 == trash.id) && TrashInHand2 != trash.id){
                trash.x = player.x;
                trash.y = player.y;
                trash.body.velocity.x = player.body.velocity.x;
                trash.body.velocity.y = player.body.velocity.y;
                TrashInHand1 = trash.id 
            }  
        }
        else{
            trash.body.velocity.x = 0;
            trash.body.velocity.y = 0;
            TrashInHand1 = '';
        }
    }
    else{
        
        if (keys.G.isDown){
            if ((TrashInHand2 == '' || TrashInHand2 == trash.id) && TrashInHand1 != trash.id){
                trash.x = player.x;
                trash.y = player.y;
                trash.body.velocity.x = player.body.velocity.x;
                trash.body.velocity.y = player.body.velocity.y;
                TrashInHand2 = trash.id 
            }
        }
        else{
            trash.body.velocity.x = 0;
            trash.body.velocity.y = 0;
            TrashInHand2 = '';
        }
    }
}
function containerCollide(trashelement, contenidor, player){
    
}
