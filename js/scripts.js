
function footer() {
	var footerdiv = $('#sitefooter');
	footerdiv.html("");

	var appendstring = '<div class="container-fluid"><div class="row clearfix" id="footer"><div class="col-md-4 column"><br/><br/><h2 class="headingsfooter">Find Me!</h2><p class="footertext"><br/><b>Tel:</b> 01524 272 873</p><p class="footertext"><b>Mob:</b> 07989 485 482<br/></p><p class="footertext">Northern Calm<br/>Paries House<br/>Casterton<br/>Carnforth, LA6 2RZ<br/><br/>&copy; Copyright 2015 Northern Calm<br/><br/><br/></p></div><div class="col-md-4 column"><br/><br/><br/><br/> <br/><br/></p></div><div class="col-md-4 column"><h2 class="headingsfooter"><br/><br/>Get In Touch</h2><p class="footertext"><br/>Please don\'t hesitate to contact me with any enquiries!<br/></p><p class="footertext"><b>General Enquiries:</b> laura@northerncalm.co.uk<br/><br/><b>Web: </b>www.northerncalm.co.uk<br/><br/><br/><br/></div></div></div>';

	footerdiv.append(appendstring);
}







function menuItems() {
		var items = $('#menuitems');
		$.ajax({
			url: "json/menu.json",
			dataType: "text",
			success: function(data){
				items.html("");
				var json = $.parseJSON(data);
				var item;
				var state;
				var appendstring = '<ul class="nav navbar-nav navbar-right">';
				for (x = 0; x < json.length; x++) {
					item = json[x];
					if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == item.page) {
						state = "active"
					} else {
						state = ""
					}
					appendstring = appendstring + '<li class="' + state + '"><a href="' + item.page + '">' + item.name + '</a></li>';
				}
				appendstring = appendstring + '</ul>'
				items.append(appendstring);
			}
		});
	}






	function navBar(whichpage) {
	var bar = $('#navbar');
	bar.html("");
	var appendstring = '<nav class="navbar navbar-default navbar-fixed-top navbar-fixed-top" role="navigation">'+
	'<div class="container">'+
	'<div class="row clearfix">'+
	'<div class="col-md-12 column">'+
	'<div class="navbar-header">'+
	'<a href="'+ whichpage +'"><img src="img/logo.png" class="navbar-brand img-responsive"></a>'+
	'<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">'+
	'<span class="sr-only">Toggle navigation</span><span class="icon-bar"></span>'+
	'<span class="icon-bar"></span><span class="icon-bar"></span><'+
	'/button></div><div class="collapse navbar-collapse">'+
	'<div class="visible-lg"><br/><br/></div>'+
	'<div id="menuitems"></div></div></div></div></div></nav>';
	bar.append(appendstring);
}









function sociallinks() {
		var bar = $('#sociallinks');
		bar.html("");
		var appendstring = '<div class="row thumbnail-row"> '+
		'<div class="pull-left" style="padding-left: 70px"><h3 class="phone" style="padding-top: 9px"><b>t:</b> 01524 272 621</h3></div>'+
		'<div class="pull-right socialicons" style="padding-right: 70px"><br/> '+
		'<a href="https://www.facebook.com/Hut8Media"target="_blank"><img src="img/facebook.png"></a> '+
		'<a href="https://twitter.com/Hut8Media"target="_blank"><img src="img/twitter.png"></a> '+
		'</div>'+
		'</div>';
		bar.append(appendstring);
	}







	function thumbnailRow(which,picture1, picture2, picture3, text1, text2, text3){

		var thumbnailRowDiv = $('#thumbnailRow'+which);
		thumbnailRowDiv.html("");


		var appendstring = '<div class="row thumbnailrow"><br/>' +
		'<div class="col-md-4 column">' +
		'<img class="center-block" alt="300x200" src="' + picture1 + '">' +
		'<div class="caption">' +
		'<p class="bodytext2"><br/>' +
		'' + text1 +'' +
		'</p>' +
		'</div>' +
		'</div>' +
		'<div class="col-md-4 column">' +
		'<img class="center-block" alt="300x200" src="' + picture2 + '">' +
		'<div class="caption">' +
		'<p class="bodytext2"><br/>' +
		'' + text2 + '' +
		'</p>' +
		'</div>' +
		'</div>' +
		'<div class="col-md-4 column">' +
		'<img class="center-block" alt="300x200" src="' + picture3 + '">' +
		'<div class="caption">' +
		'<p class="bodytext2"><br/>' +
		'' + text3 + '' +
		'</p>' +
		'</div>' +
		'</div>';
		thumbnailRowDiv.append(appendstring);			
	}






	function thumbnailRow2(which,picture1, picture2, url1, url2, heading1, heading2){

		var thumbnailRowDiv = $('#thumbnailRow2'+which);
		thumbnailRowDiv.html("");


		var appendstring = '<div class="row thumbnailrow"><br/>' +
		'<div class="col-md-2 column"></div>' +
		'<div class="col-md-4 column">' +
		'<a href="'+url1+'"><img class="center-block" alt="300x200" src="' + picture1 + '"></a>' +
		'<div class="caption">' +
		'<h3 class="headings2">' +
		heading1 +
		'</h3><br/><br/><br/>' +
		'</div>' +
		'</div>' +
		'<div class="col-md-4 column">' +
		'<a href="'+url2+'"><img class="center-block" alt="300x200" src="' + picture2 + '"></a>' +
		'<div class="caption">' +
		'<h3 class="headings2">' +
		heading2 +
		'</h3><br/><br/>' +
		'</div>' +
		'</div>' +
		'<div class="col-md-2 column"></div>' ;
		thumbnailRowDiv.append(appendstring);			
	}







	function casestudy(which,articlename) {
	var services = $('#'+which);
	$.ajax({
		url: "json/casestudies.json",
		dataType: "text",
		success: function(data){
			services.html("");
			var json = $.parseJSON(data);
			var article;
			var section;
			var appendstring = "";
			for (x = 0; x < json.length; x++) {
				article = json[x];
				if (article.title == articlename) {
					appendstring = appendstring + '<img alt="300x200" src="img/'+article.imgtitle+'" class="img-responsive center-block">'
					for (y = 0; y < article.sections.length; y++) {
						if (article.sections[y].img) {
							appendstring = appendstring + '<br/><br/><img alt="300x200" src="img/case/'+article.sections[y].img+'" class="img-responsive center-block">';
						}
						appendstring = appendstring + '<br/><br/><p class="bodytext2">'+article.sections[y].text+'</p>';
					}


				}
			}
			services.append(appendstring);
		}
	});
}



function bootStrapAndCSSlink() {
		var bar = $('#bootStrapAndCSSlink');
		bar.html("");
		var appendstring ='<!--link rel="stylesheet/less" href="less/bootstrap.less" type="text/css" /-->'+
		'<!--link rel="stylesheet/less" href="less/responsive.less" type="text/css" /-->'+
		'<!--script src="js/less-1.3.3.min.js"></script-->'+
		'<!--append ‘#!watch’ to the browser URL, then refresh the page. --><link href="css/bootstrap.min.css" rel="stylesheet">'+
		'<link href="css/style.css" rel="stylesheet">'+
		'<!-- HTML5 shim, for IE6-8 support of HTML5 elements -->'+
		'<!--[if lt IE 9]>'+
		'<script src="js/html5shiv.js"></script>'+
		'<![endif]-->'+
		'<!-- Fav and touch icons -->'+
		'<!--<link rel="apple-touch-icon-precomposed" sizes="144x144" href="img/apple-touch-icon-144-precomposed.png">'+
		'<link rel="apple-touch-icon-precomposed" sizes="114x114" href="img/apple-touch-icon-114-precomposed.png">'+
		'<link rel="apple-touch-icon-precomposed" sizes="72x72" href="img/apple-touch-icon-72-precomposed.png">'+
		'<link rel="apple-touch-icon-precomposed" href="img/apple-touch-icon-57-precomposed.png">'+
		'<link rel="shortcut icon" href="img/favicon.png">-->';
		bar.append(appendstring);
	}





	



