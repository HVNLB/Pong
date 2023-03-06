import Phaser from 'phaser'
import {TitleScreen} from '../consts/SceneKeys'
import WebFontFile from "./WebFontFile";
import * as AudioKeys from '../consts/AudioKeys'
export default class Preload extends Phaser.Scene
{
    preload(){
        const fonts = new WebFontFile(this.load,'Press Start 2P')
        this.load.addFile(fonts)

        this.load.audio(AudioKeys.PongBeep,'assets/ping_pong_8bit_beeep.ogg')
        this.load.audio(AudioKeys.PongPlop,'assets/ping_pong_8bit_plop.ogg')
    }


    create(){
            this.scene.start(TitleScreen)
    }




}