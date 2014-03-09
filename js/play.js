function play(obj){

	var self = this;

	this.propsObj = {
		idStr : obj.idStr
	};
	
	this.init = function(){
    	this.generate();
    	this.addEvents();
    };

	this.generate = function(){
		// short hand of targeted img
		var img = $('#'+this.propsObj.idStr);

		// overlay select element with loader
		console.log(this.propsObj.idStr + " : start to load");
		// set img opacity to 0
		img.hide();


			// get img dimention
			var imgWidth = img.width();
			var imgHeight = img.height();

				// generate overlay div
				var tmplStr = '';
			console.log('img W  : '+imgWidth + ' || img H : '+imgHeight );

	};

	this.killLoader = function(){
		// short hand of targeted img
		var img = $('#'+this.propsObj.idStr);

		console.log(this.propsObj.idStr + " : finish loading");

		// fade in image
		img.fadeIn(1000);
	};

	this.doneLoading = function(){
    	// kill overlay loader
    	this.killLoader();
	};

	this.addEvents = function(){
		$('#'+this.propsObj.idStr).on('load',function(){
    		self.doneLoading();
    	});
	};
	this.removeEvents = function(){	
		$('#'+this.propsObj.idStr).off('load');
	};

	this.destory = function(){
		this.removeEvents();
		delete this;
	};

    // constructor
    this.init();
}
