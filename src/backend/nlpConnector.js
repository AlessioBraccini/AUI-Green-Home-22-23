import { compute } from "./index.js";
//const { bot }=require('./index.js')

export async function computeInteraction(questionText) {
    // return reply to user's input
    return  compute(questionText);
}
