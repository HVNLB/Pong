import Phaser from 'phaser'
import WebFontFile from "./WebFontFile";

import { TitleScreen } from '../consts/SceneKeys';
import {PressStart2P} from'../consts/Fonts'
export default class GameOver extends Phaser.Scene{

    /**
     * 
     * @param {{leftScore:number, rightScore:number}} data 
     */

   create(data)
   {
    let titleText = 'GameOver'
    if(data.leftScore > data.rightScore){
        titleText = 'You Win!'
    }
    this.add.text(400,200,titleText,{
        fontFamily: PressStart2P,
        fontSize: 38
    })
    .setOrigin(0.5)

    this.add.text(400,300,'Press Space to Continue',{ 
        fontFamily: PressStart2P})
        .setOrigin

    this.input.keyboard.once('keydown-SPACE',()=>{
        this.scene.start(TitleScreen)
    })
   }
}