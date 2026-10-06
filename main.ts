bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    receber_texto = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (receber_texto == "normal") {
        robotbit.Servo(robotbit.Servos.S1, 90)
        robotbit.Servo(robotbit.Servos.S2, 90)
    } else if (receber_texto == "up") {
        robotbit.Servo(robotbit.Servos.S1, 160)
    } else if (receber_texto == "down") {
        robotbit.Servo(robotbit.Servos.S1, 20)
    } else if (receber_texto == "right") {
        robotbit.Servo(robotbit.Servos.S2, 20)
    } else if (receber_texto == "leFt") {
        robotbit.Servo(robotbit.Servos.S2, 160)
    }
})
let receber_texto = ""
bluetooth.startUartService()
basic.showIcon(IconNames.Happy)
robotbit.Servo(robotbit.Servos.S1, 90)
robotbit.Servo(robotbit.Servos.S2, 90)
