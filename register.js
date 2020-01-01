let register = cc.Scene.extend({
	onEnter:function () {
		this._super();
		var size = cc.director.getWinSize();
		let scene = ccs.load("res/Register/4x3/register.json").node;
		this.addChild(scene);
		//let backButton = scene.getChildByName("Image_2").getChildByName("Button_Back");
		let Panel = scene.getChildByName("Panel_35");
		let agreementCheckbox = Panel.getChildByName("CheckBox_69");
		let parentButton = Panel.getChildByName("Button_42");
		let teacherButton = Panel.getChildByName("Button_44");
		parentButton.addTouchEventListener((sender,type)=>{
			if(type == ccui.Widget.TOUCH_ENDED /* && agreementCheckbox.getSelectState() */){
				cc.director.pushScene(new hzzc())
			}
		},this);
		}
	});
