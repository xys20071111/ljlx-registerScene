let fill = cc.Scene.extend({
	onEnter:function () {
		this._super();
		var size = cc.director.getWinSize();
		let scene = ccs.load("res/Register/4x3/fill.json").node;
		this.addChild(scene);
		let nameInput = scene.getChildByName('Panel_21').getChildByName('Panel_20').getChildByName('TextField_3');
		let Tip = scene.getChildByName('Panel_21').getChildByName('Label_31');
		Tip.setString("这是一个假界面");
		let nextButton = scene.getChildByName('Panel_21').getChildByName('Button_34');
		function onTouch(sender,type){
			if(type ==  ccui.Widget.TOUCH_ENDED){
				Tip.setString('Text in textfield:'+ nameInput.getString());
			}
		}
		nextButton.addTouchEventListener(onTouch,this);
		console.log(scene);
		}
	});
