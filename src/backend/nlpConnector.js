import { compute } from "./index.js"

export const computeInteraction = (questionText) => {
    const reply = compute(questionText);

    return reply;
}
