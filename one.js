function One(options){
	
	this.host = options.host;
	this.client_id = options.client_id;

	this.get = function(path, args, callback){
		args.client_id = this.client_id;	
		$.ajax(this.host+path, {
			type:'GET',
			dataType:'json',
			data: args,
			timeout: 15000,
			
			beforeSend: function(){
				//Start Loader
			},
			success: function(response){
				callback.call( this, response );
			},
			error: function(request, errorType, errorMessage){
				//Handle Error
			},
			complete: function(){
				//Stop Loader
			}
		});	
	}
}
//Example
(function(){

	eyeem = new One({
		"host":"https://www.eyeem.com/api/v2/",
		"client_id":"YOUR_CLIENT_ID_HERE"
	});

	eyeem.get('search',{
		'q':'dogs',
		'includeAlbums':true,
		'limit':35
		},
		function(response){
			console.log(response);
		}
	);
})();
