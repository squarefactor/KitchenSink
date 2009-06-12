
Titanium.UI.ready = function()
{
	if (Titanium.Platform.name.indexOf('iPhone')!= -1)
	{
		Titanium.UI.setTabBadge(10);
	}
	
	// create data for table view
	var data = [
		{title:'Win1 (inline) ',hasChild:true},
		{title:'Win (set) ',hasDetail:true},
		{title:'Win (fullscreen 1) ',hasChild:true},
		{title:'Win (fullscreen 2) ',hasChild:true},
		{title:'Win (focus events ) ',hasChild:true},
		{title:'Win (showNavBar - iphone) ',hasChild:true},
		{title:'Win (showNavBar2 - iphone) ',hasChild:true},
		{title:'Win (hideNavBar1 - iphone) ',hasChild:true},
		{title:'Win (hideNavBar2 - iphone) ',hasChild:true},
		{title:'Win (hideTabBar - iphone) ',hasChild:true},
		{title:'Win (navButtons1 - iphone) ',hasChild:true},
		{title:'Win (navButtons2 - iphone) ',hasChild:true},
		{title:'Win (navButtons3 - iphone) ',hasChild:true},
		{title:'Win (toolbarButtons - iphone) ',hasChild:true},
		{title:'Win (statusBar - iphone) ',hasChild:true},
		{title:'PropView (iphone) ',hasChild:true}

	];
	

	
	//create a table view
	Titanium.UI.createTableView('table',data,function(index)
	{
		switch(index)
		{
			case 0:
			{
				var win = Titanium.UI.createWindow({url:'window_test1.html',title:'Window Test 1', barColor:'#336699'});
				//var win = Titanium.UI.createWindow(title:'Window Test 1'});
				win.setURL('window_test1.html')
				win.open({animated:true});
	
				break;
			}
			case 1:
			{
				var win = Titanium.UI.createWindow();
				win.setURL('window_test1.html');
				win.setTitle('Window Test 2');
				win.setBarColor('#ff9900');
				win.open({animated:true});
				break;
				
			}
			case 2:
			{
				var win = Titanium.UI.createWindow();
				win.setURL('window_test1.html');
				win.setFullscreen(true);
				win.open({animated:true});
				break;
				
			}
			case 3:
			{
				var win = Titanium.UI.createWindow({url:'window_test1.html',fullscreen:true});
				win.open({animated:true});
				break;
				
			}
			case 4:
			{
				var win = Titanium.UI.createWindow({url:'window_test1.html',fullscreen:false});
				Titanium.App.Properties.setBool('focusEvents',true);
				win.open({animated:true});
				break;
				
			}

			case 5:
			{
				var win = Titanium.UI.createWindow({url:'window_test1.html',showNavBar:true});
				win.open({animated:true});
				break;
				
			}
			case 6:
			{
				var win = Titanium.UI.createWindow({url:'window_test1.html'});
				win.showNavBar()
				win.open({animated:true});
				break;
				
				
			}
			case 7:
			{
				var win = Titanium.UI.createWindow({url:'window_test1.html',hideNavBar:true});
				win.open({animated:true});
				break;
				
			}
			case 8:
			{
				var win = Titanium.UI.createWindow({url:'window_test1.html'});
				win.hideNavBar();
				win.open({animated:true});
				break;
				
			}
			//BROKEN 
			case 9:
			{
				var win = Titanium.UI.createWindow({url:'window_test1.html',hideTabBar:true});
				win.open({animated:true});
				break;
				
			}
			case 10:
			{
				var win = Titanium.UI.createWindow({url:'window_test1.html'});
				win.setTitleImage('chat.png');
				Titanium.App.Properties.setBool('showNavButtons1',true);
				win.open({animated:true});
				break;
				
			}
			case 11:
			{
				var win = Titanium.UI.createWindow({url:'window_test1.html',titleImage:'chat.png'});
				Titanium.App.Properties.setBool('showNavButtons2',true);
				win.open({animated:true});
				break;
				
			}
			case 12:
			{
				var win = Titanium.UI.createWindow({url:'window_test1.html'});
				Titanium.App.Properties.setBool('showNavButtons3',true);
				win.open({animated:true});
				break;
				
			}
			case 13:
			{
				var win = Titanium.UI.createWindow({url:'window_test1.html',title:'foo'});
				Titanium.App.Properties.setBool('showToolbarButtons',true);
				win.open({animated:true});
				break;
				
			}
			case 14:
			{
				var win = Titanium.UI.createWindow({url:'window_test1.html'});
				Titanium.App.Properties.setBool('statusBar',true);
				win.open({animated:true});
				break;
				
			}
			case 15:
			{
				var win = Titanium.UI.createWindow({url:'system_props.html'});
				win.open({animated:true});
				break;
				
			}

	
		}
	});
	

};

