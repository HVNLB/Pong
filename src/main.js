import Phaser from 'phaser'
import TitleScreen from './scenes/TitleScreen'
import Game from './scenes/Game'
import GameBackground from './scenes/GameBackground'
import Preload from './scenes/Preload.js'
import * as SceneKeys from './consts/SceneKeys.js'
import GameOver from './scenes/GameOver'


const config = {
    width:800,
    height:500,
    type: Phaser.AUTO,
    physics:{
        default:'arcade',
        arcade:{
            gravity:{y:0}
        }
    }
}

const game = new Phaser.Game(config)

game.scene.add(SceneKeys.TitleScreen,TitleScreen)
game.scene.add(SceneKeys.Game,Game)
game.scene.add(SceneKeys.GameBackground,GameBackground)
game.scene.add(SceneKeys.GameOver,GameOver)
game.scene.add(SceneKeys.Preload,Preload)
game.scene.start(SceneKeys.Preload)
//game.scene.start('game')