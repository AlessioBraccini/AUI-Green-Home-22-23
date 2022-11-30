# Pipelines

## main
nlp.train

## onIntent(device.dailyoffender)
// compiler=javascript
const offender = "dishwasher";
const consumption = "12Wh";
if (offender) {
    input.answer = "Today offender is the " + offender + " with " + consumption;
}else{
    input.answer = "No device has consumed much for now";
}