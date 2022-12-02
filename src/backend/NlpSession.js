class NlpSession {
    #today_offender;
    #usedDevicesTips;

    constructor() {
        this.#usedDevicesTips = new Map();
        this.#usedDevicesTips.set("dishwasher", []);
        this.#usedDevicesTips.set("washing-machine", []);
        this.#usedDevicesTips.set("ac", []);
        this.#today_offender = {name: "washing-machine", consumption: "40W"}
    }

    addToUsedTips(device, tipIndex) {
        if (!this.#usedDevicesTips.has(device)) {
            console.log("No device " + device + "for this session")
        } else {
            this.#usedDevicesTips.get(device).push(tipIndex);
        }
    }

    tipIsInHistory(device, tipIndex) {
        if (!this.#usedDevicesTips.has(device)) {
            console.log("No device " + device + "for this session");
        } else {
            const list = this.#usedDevicesTips.get(device);
            return list.includes(tipIndex);
        }
    }

    // getRandomDeviceTipIndex()

    getDailyOffender() {
        return this.#today_offender;
    }
}

module.exports = {NlpSession};