
Titanium.UI.ready = function()
{

// TODO: ADD THESE
// notification
//activity indicator
// progress bar
// Android menu

	// create data for table view
	var data = [
		{title:'Notifications ',hasChild:true},
		{title:'Alert Dialog ',hasChild:true},
		{title:'Logging (check log) ',hasChild:true},
		{title:'App Data ',hasChild:true},
		{title:'Properties Data ',hasChild:true},
		{title:'Database',hasChild:true},
		{title:'Platform',hasChild:true},
		{title:'Sound',hasChild:true},
		{title:'Geolocation (get)',hasChild:true},
		{title:'Geolocation (watch)',hasChild:true},
		{title:'Accelerometer',hasChild:true},
		{title:'Orientation',hasChild:true},
		{title:'Shake',hasChild:true},
		{title:'Camera',hasChild:false},
		{title:'Photo Gallery',hasChild:false},
		{title:'Play Video',hasChild:false},
		{title:'Vibrate',hasChild:false},
		{title:'XHR',hasChild:false},
		{title:'Activity Indicator',hasChild:false},
		{title:'Options Dialog',hasChild:false},
		{title:'Menu',hasChild:false}
		
		
	];
	
	
	//create a table view
	Titanium.UI.createTableView('table',data,function(index)
	{
		switch(index)
		{
			case 0:
			{
				// notifications
				var notification = Titanium.UI.createNotification()

				// set message
				notification.setMessage('You blow');

				// show notification
				notification.show();
				
				break;
			}
			case 1:
			{
				var win = Titanium.UI.createWindow({url:'window_test2.html',title:'Alert Dialog', barColor:'#336699'});
				Titanium.App.Properties.setBool('alertDialog',true);
				win.open({animated:true});
				break;
			}
			case 2:
			{
				var win = Titanium.UI.createWindow({url:'window_test2.html',title:'Logging', barColor:'#336699'});
				Titanium.App.Properties.setBool('logging',true);
				win.open({animated:true});
				break;
			}
			case 3:
			{
				var win = Titanium.UI.createWindow({url:'window_test2.html',title:'App', barColor:'#336699'});
				Titanium.App.Properties.setBool('APP',true);
				win.open({animated:true});
				break;
			}
			case 4:
			{
				var win = Titanium.UI.createWindow({url:'window_test2.html',title:'Properties', barColor:'#336699'});
				Titanium.App.Properties.setBool('PROPERTIES',true);
				win.open({animated:true});
				break;
			}
			case 5:
			{
				var win = Titanium.UI.createWindow({url:'window_test2.html',title:'Database', barColor:'#336699'});
				Titanium.App.Properties.setBool('DATABASE',true);
				win.open({animated:true});
				break;
			}
			case 6:
			{
				var win = Titanium.UI.createWindow({url:'window_test2.html',title:'Platform', barColor:'#336699'});
				Titanium.App.Properties.setBool('PLATFORM',true);
				win.open({animated:true});
				break;
			}
			case 7:
			{
				var win = Titanium.UI.createWindow({url:'window_test2.html',title:'Sound', barColor:'#336699'});
				Titanium.App.Properties.setBool('SOUND',true);
				win.open({animated:true});
				break;
			}
			case 8:
			{
				var win = Titanium.UI.createWindow({url:'window_test2.html',title:'Geolocation (get)', barColor:'#336699'});
				Titanium.App.Properties.setBool('GEOLOCATION',true);
				win.open({animated:true});
				break;
			}
			case 9:
			{
				var win = Titanium.UI.createWindow({url:'window_test2.html',title:'Geolocation (watch)', barColor:'#336699'});
				Titanium.App.Properties.setBool('GEOLOCATION_WATCH',true);
				win.open({animated:true});
				break;
			}
			case 10:
			{
				var win = Titanium.UI.createWindow({url:'window_test2.html',title:'Accelerometer', barColor:'#336699'});
				Titanium.App.Properties.setBool('ACCELEROMETER',true);
				win.open({animated:true});
				break;
			}
			case 11:
			{
				var win = Titanium.UI.createWindow({url:'window_test2.html',title:'Orientation Change', barColor:'#336699'});
				Titanium.App.Properties.setBool('ORIENTATION',true);
				win.orientation ='either';
				win.open({animated:true});
				break;
			}
			case 12:
			{
				var win = Titanium.UI.createWindow({url:'window_test2.html',title:'Shake', barColor:'#336699'});
				Titanium.App.Properties.setBool('SHAKE',true);
				win.open({animated:true});
				break;
			}
			case 13:
			{
				Titanium.Media.showCamera({

					success:function(image,details)
					{
						var win = Titanium.UI.createWindow();
						win.setURL('image.html');
						Titanium.App.Properties.setString('photo',image.url);
						if (details){
							Titanium.App.Properties.setString('x',details.cropRect.x);
							Titanium.App.Properties.setString('y',details.cropRect.y);
							Titanium.App.Properties.setString('height',details.cropRect.height);
							Titanium.App.Properties.setString('width',details.cropRect.width);
						}
						win.open({animated:true});

					},
					cancel:function()
					{

					},
					error:function(error)
					{
						// create alert
						var a = Titanium.UI.createAlertDialog();

						// set title
						a.setTitle('Camera Error');

						// set message
						if (error.code = Titanium.Media.NO_CAMERA)
						{
							a.setMessage('Device does not have camera');
						}
						else
						{
							a.setMessage('Unexpected error: ' + error.code);
						}

						// set button names
						a.setButtonNames(['OK']);

						// show alert
						a.show();
					},
					allowImageEditing:true
				});
				
				break;
			}
			case 14:
			{
				Titanium.Media.openPhotoGallery({
					success: function(image,details)
					{
						var win = Titanium.UI.createWindow();
						win.setURL('image.html');
						Titanium.App.Properties.setString('photo',image.url);
						if (details) {
							Titanium.App.Properties.setString('x',details.cropRect.x);
							Titanium.App.Properties.setString('y',details.cropRect.y);
							Titanium.App.Properties.setString('height',details.cropRect.height);
							Titanium.App.Properties.setString('width',details.cropRect.width);
						} else {
							Titanium.App.Properties.setString('x',0);
							Titanium.App.Properties.setString('y',0);
							Titanium.App.Properties.setString('height',image.height);
							Titanium.App.Properties.setString('width',image.width);
						}
						win.open({animated:true});
					},
					error: function(error)
					{
						Titanium.UI.createAlertDialog( {
							title: "Error from Gallery",
							message: error.message,
							buttonNames: OK
						} ).show();
					},
					cancel: function()
					{

					},
					allowImageEditing:true
				});
				break;
			}
			
			case 15:
			{
				var activeMovie = Titanium.Media.createVideoPlayer({
						contentURL:'movie.mp4',
						backgroundColor:'#111',
						movieControlMode:Titanium.Media.VIDEO_CONTROL_DEFAULT,
						scalingMode:Titanium.Media.VIDEO_SCALING_MODE_FILL
				});

				// play movie
				activeMovie.play();
				break;
			}
			
			case 16:
			{
				Titanium.Media.vibrate();
				break;
			}

			case 17:
			{
				var c = Titanium.Network.createHTTPClient();


				// set on ready state change function
				c.onreadystatechange = function()
				{
					if (this.readyState == 4)
					{
						Titanium.API.debug('>>>>>>>>>>>>>>> STATUS = ' + this.status);
					}
				};
				// open the client
				c.open('GET','http://google.com');

				// send the data
				c.send(null);
				
				
			}
			case 18:
			{
				alert('>>>>>>>>>>>>>>>>>>>>>>>> PLATFORM ' + Titanium.Platform.name + ' indexof ? '  + Titanium.Platform.name.indexOf('android'))
				if (Titanium.Platform.name == 'android')
				{
					// create indicator
	              	var ind = Titanium.UI.createActivityIndicator();
	              	ind.setMessage('Loading...');
			        ind.setLocation(Titanium.UI.ActivityIndicator.DIALOG)
			        ind.setType(Titanium.UI.ActivityIndicator.INDETERMINANT)
	              	ind.show();

	              	setTimeout(function()
	              	{
	                      ind.hide();
	              	},2000);

				}
				break;
			}
			case 19:
			{
				var win = Titanium.UI.createWindow({url:'window_test2.html',title:'Options Dialog', barColor:'#336699'});
				Titanium.App.Properties.setBool('optionsDialog',true);
				win.open({animated:true});

				break;
			}
			case 20:
			{
				if (Titanium.Platform.name == 'android')
				{
				
					var menu = Titanium.UI.createMenu();

					menu.addItem("Google", function() {
						Titanium.Platform.openURL('http://google.com');
						} , Titanium.UI.Android.SystemIcon.ADD);
					menu.addItem("Yahoo", function() {
						Titanium.Platform.openURL('http://yahoo.com');
						}, Titanium.UI.Android.SystemIcon.ADD);

					Titanium.UI.setMenu(menu);
				}
				break;
			}
		}
	});
	

};

