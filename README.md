one.js
======

One API to rule them all.

###Dependency
+ [jquery](https://github.com/jquery/jquery)

###Usage

```
<script src="one.js" type="text/javascript"></script>
```

```
//Initialize Object with Parameters 
eyeem = new One({
  	"host":"https://www.eyeem.com/api/v2/",
		"client_id":"YOUR_CLIENT_ID_HERE"
	});

//Access the api
	eyeem.get('search',{
		'q':'dogs',
		'includeAlbums':true,
		'limit':35
		},
		function(response){
			console.log(response);
		}
	);
  
  ```
