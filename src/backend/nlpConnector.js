import {compute} from "@/backend/index";

export async function computeInteraction(questionText) {
    // return reply to user's input
    return  compute(questionText);
}
