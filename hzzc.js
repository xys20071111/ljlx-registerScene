var hzzc = cc.Scene.extend({
	onEnter:function () {
		this._super();
		var size = cc.director.getWinSize();
		let scene = ccs.load("res/Register/4x3/hzzc.json").node;
		this.addChild(scene);
		let nextButton = scene.getChildByName("Panel_4").getChildByName("Button_68");
		nextButton.addTouchEventListener(function(){cc.director.pushScene(new fill())},this);
		//console.log(scene);
}
});
