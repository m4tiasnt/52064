import JuegoListener from "./generated/JuegoListener.js";

export class CustomJuegoListener extends JuegoListener {

    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);
    }

}
