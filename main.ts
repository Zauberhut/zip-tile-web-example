input.onButtonPressed(Button.A, function () {
    if (colourFlag == 0) {
        tileDisplay.showColor(Kitronik_Zip_Tile.colors(ZipLedColors.Red))
    } else if (colourFlag == 1) {
        tileDisplay.showColor(Kitronik_Zip_Tile.colors(ZipLedColors.Green))
    } else if (colourFlag == 2) {
        tileDisplay.showColor(Kitronik_Zip_Tile.colors(ZipLedColors.Blue))
    } else if (colourFlag == 3) {
        tileDisplay.showColor(Kitronik_Zip_Tile.colors(ZipLedColors.White))
    } else if (colourFlag == 4) {
        tileDisplay.showRainbow(1, 360)
        rainbowFlag = 1
    } else if (colourFlag == 5) {
        tileDisplay.clear()
        tileDisplay.show()
        rainbowFlag = 0
    }
    if (colourFlag < 5) {
        colourFlag += 1
    } else {
        colourFlag = 0
    }
})
input.onButtonPressed(Button.B, function () {
    tileDisplay.scrollText(
    "I am a ZIP Tile",
    Kitronik_Zip_Tile.TextDirection.Left,
    35,
    Kitronik_Zip_Tile.TextStyle.Background,
    Kitronik_Zip_Tile.colors(ZipLedColors.Black),
    Kitronik_Zip_Tile.colors(ZipLedColors.White)
    )
})
let tileDisplay: Kitronik_Zip_Tile.ZIPTileDisplay = null
let colourFlag = 0
let rainbowFlag = 0
rainbowFlag = 1
colourFlag = 0
tileDisplay = Kitronik_Zip_Tile.createZIPTileDisplay(4, 1, Kitronik_Zip_Tile.UBitLocations.Hidden)
tileDisplay.showRainbow(1, 360)
tileDisplay.show()
basic.forever(function () {
    if (rainbowFlag == 1) {
        tileDisplay.rotate(1)
        tileDisplay.show()
    }
})
