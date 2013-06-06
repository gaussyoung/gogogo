//
// MainScene class
//
var MainScene = function(){};

// Create callback for button
MainScene.prototype.onClickBtnPress = function()
{	
    // Rotate the label when the button is pressed
    this.helloTxt.runAction(cc.RotateBy.create(1,360));
};