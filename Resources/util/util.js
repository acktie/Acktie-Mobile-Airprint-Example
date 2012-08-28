exports.copyTextToDocumentsDir = function(filename, text)
{
	var fullFilename = Titanium.Filesystem.applicationDataDirectory + filename;
	var file = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, filename);

	// If exist, delete it so we can make a fresh copy (just in case the text changed)
	if (file.exists()) {
		file.deleteFile();
	}

	file.write(text);
}

exports.copyLocalFileToDocumentDir = function(filename) {
	var resourceFile = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, filename);
	var documentFile = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, filename);

	if (resourceFile.exists()) {
		Ti.API.info('File Exists in Resource Dir: ' + filename);
		var readContents = resourceFile.read();
		documentFile.write(readContents);
	}
}

exports.showWebViewWindow = function(title, url, filename, airPrintOptions, rightbutton) {
	var win = Ti.UI.createWindow({
		modal : true,
		modalStyle : Ti.UI.iPhone.MODAL_PRESENTATION_FORMSHEET,
		title : title,
		backgroundColor : 'white'
	});
	
	var webview = Ti.UI.createWebView({
		url : url
	});
	win.add(webview);

	win.rightNavButton = rightbutton;

	// Disable button until webview is loaded
	rightbutton.enabled = false;

	var leftbutton = Ti.UI.createButton({
		systemButton : Titanium.UI.iPhone.SystemButton.CANCEL
	});
	win.leftNavButton = leftbutton;

	win.open();

	webview.addEventListener('load', function() {
		// Show button after the web view has loaded the webpage
		rightbutton.enabled = true;
	});
	
	leftbutton.addEventListener('click', function() {
		win.close()
	});
	
	rightbutton.addEventListener('click', function() {
		var file = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, filename);
		file.write(webview.toImage());

		printer.print(airPrintOptions);
	});
}
