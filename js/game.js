let gameScene = new Phaser.Scene("Game");

let config = {
    type: Phaser.AUTO,
    width: 2000,
    height: 1052,
    scene: {
        preload: preload,
        create: create
    }
};

let game = new Phaser.Game(config);

function preload ()
{
    
    this.load.image('background', 'assets/background.png');
    this.load.image('P1', 'assets/P1.png');
    this.load.image('P2', 'assets/P2.png');
    this.load.image('Paper', 'assets/Paper.png');
    this.load.image('Plastic', 'assets/Plastic.png');
    this.load.image('Vidre', 'assets/Vidre.png');
    this.load.image('Organic', 'assets/Organic.png');
    this.load.image('Rebuig', 'assets/Rebuig.png');


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

    let P1 = this.add.sprite(200,400,'P1');
    let P2 = this.add.sprite(1800,400,'P2');

    P1.setScale(0.4,0.4);
    P2.setScale(0.4,0.4);

    const text = this.add.text(350, 250, '', { font: '16px Courier', fill: '#00ff00' });
   
    gem.setDataEnabled();

        gem.data.set('name', 'Red Gem Stone');
        gem.data.set('level', 2);
        gem.data.set('owner', 'Link');
        gem.data.set('gold', 50);

        text.setText([
            'Name: ' + gem.data.get('name'),
            'Level: ' + gem.data.get('level'),
            'Value: ' + gem.data.get('gold') + ' gold',
            'Owner: ' + gem.data.get('owner')
        ]);
}
