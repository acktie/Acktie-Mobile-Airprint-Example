var printer = require("com.acktie.mobile.ios.airprint");
var util = require('/util/util');

Ti.API.info("Can Print: " + printer.canPrint);
if (!printer.canPrint) {
	alert('Device does not have print capabilities');
}

// Test data
var plainText = "This is sample data for a text file. This is sample data for a text file. This is sample data for a text file. This is sample data for a text file. This is sample data for a text file. This is sample data for a text file. This is sample data for a text file. This is sample data for a text file. This is sample data for a text file. This is sample data for a text file. This is sample data for a text file. This is sample data for a text file. This is sample data for a text file. This is sample data for a text file. This is sample data for a text file. This is sample data for a text file. This is sample data for a text file. This is sample data for a text file. This is sample data for a text file. \n This is sample data for a text file \n This is sample data for a text file \n This is sample data for a text file \n This is sample data for a text file \n";
var markupText = "<html><body><table width='100%'><tr><td align='center'><b>Time Card Report</b></td></tr><tr><td align='center'><b>Sowder, Jamie - 10/01/2012</b></td></tr></table><br /><table width='100%' cellspacing='5' cellpadding='2'><tr><td><b>Site</b></td><td><b>Dept</b></td><td><b>Shift</b></td><td><b>Trans Date</b></td><td><b>In Time</b></td><td><b>Out Time</b></td><td><b>Adjustment</b></td><td><b>Regular</b></td><td><b>Overtime</b></td><td><b>Dbl Time</b></td><td><b>Dollars</b></td></tr><tr><td>1234</td><td> 99-BlahBlah </td><td>0</td><td>10/20/2012</td><td>Mon 15:02</td><td>___ __:__</td><td></td><td>0.00</td><td>0.00</td><td>0.00</td><td>0.00</td></tr><tr><td>1234</td><td> 99-BlahBlah </td><td>1</td><td>10/20/2012</td><td>Mon 15:12</td><td>Mon 15:17</td><td></td><td>0.10</td><td>0.00</td><td>0.00</td><td>0.00</td></tr><tr><td>1234</td><td> 99-BlahBlah </td><td>1</td><td>10/20/2012</td><td>Mon 15:20</td><td>Mon 15:21</td><td></td><td>0.02</td><td>0.00</td><td>0.00</td><td>0.00</td></tr><tr><td>1234</td><td> 99-BlahBlah </td><td>1</td><td>10/20/2012</td><td>Mon 15:22</td><td>Mon 15:27</td><td></td><td>0.10</td><td>0.00</td><td>0.00</td><td>0.00</td></tr><tr><td>1234</td><td> 99-BlahBlah </td><td>1</td><td>10/20/2012</td><td>Mon 15:28</td><td>Mon 15:36</td><td></td><td>0.13</td><td>0.00</td><td>0.00</td><td>0.00</td></tr><tr><td>1234</td><td> 99-BlahBlah </td><td>0</td><td>10/20/2012</td><td>Mon 15:53</td><td>___ __:__</td><td></td><td>0.00</td><td>0.00</td><td>0.00</td><td>0.00</td></tr><tr><td>1234</td><td> 99-BlahBlah </td><td>0</td><td>10/20/2012</td><td>___ __:__</td><td>Mon 13:17</td><td></td><td>0.00</td><td>0.00</td><td>0.00</td><td>0.00</td></tr><tr><td>1234</td><td> 99-BlahBlah </td><td>0</td><td>10/20/2012</td><td>___ __:__</td><td>Mon 15:41</td><td></td><td>0.00</td><td>0.00</td><td>0.00</td><td>0.00</td></tr><tr><td><br /></td><td><br /></td><td><br /></td><td><br /></td><td><br /></td><td><br /></td><td align='right'><b>10/20/2012</b><br /></td><td>0.31<br /></td><td>0<br /></td><td>0<br /></td><td>0<br /></td></tr><tr><td>1234</td><td> 99-BlahBlah </td><td>0</td><td>10/22/2012</td><td>Wed 10:34</td><td>___ __:__</td><td></td><td>0.00</td><td>0.00</td><td>0.00</td><td>0.00</td></tr><tr><td><br /></td><td><br /></td><td><br /></td><td><br /></td><td><br /></td><td><br /></td><td align='right'><b>10/22/2012</b><br /></td><td>0<br /></td><td>0<br /></td><td>0<br /></td><td>0<br /></td></tr><tr><td>1234</td><td> 99-BlahBlah </td><td>1</td><td>10/23/2012</td><td>Thu 11:09</td><td>Thu 11:09</td><td></td><td>0.00</td><td>0.00</td><td>0.00</td><td>0.00</td></tr><tr><td>1234</td><td> 99-BlahBlah </td><td>1</td><td>10/23/2012</td><td>Thu 11:10</td><td>Thu 11:24</td><td></td><td>0.23</td><td>0.00</td><td>0.00</td><td>0.00</td></tr><tr><td>1234</td><td> 99-BlahBlah </td><td>0</td><td>10/23/2012</td><td>Thu 11:24</td><td>___ __:__</td><td></td><td>0.00</td><td>0.00</td><td>0.00</td><td>0.00</td></tr><tr><td>1234</td><td> 99-BlahBlah </td><td>0</td><td>10/23/2012</td><td>___ __:__</td><td>Thu 10:56</td><td></td><td>0.00</td><td>0.00</td><td>0.00</td><td>0.00</td></tr><tr><td><br /></td><td><br /></td><td><br /></td><td><br /></td><td><br /></td><td><br /></td><td align='right'><b>10/23/2012</b><br /></td><td>0.23<br /></td><td>0<br /></td><td>0<br /></td><td>0<br /></td></tr><tr><td><br /></td><td><br /></td><td><br /></td><td><br /></td><td><br /></td><td><br /></td><td align='left'><br /><b>Totals:</b></td><td><br />2.29</td><td><br />0</td><td><br />0</td><td><br />0</td></tr></table>";

// open a single window
var window = Ti.UI.createWindow({
	backgroundColor : 'white'
});

/**
 * Airprint Callback function
 */
function airPrintCallback(result) {
	if (result.completed)
		alert("User submitted to printer");
	else
		alert("User cancelled print request");
}

/**
 * Printing from a local PDF.
 * No callback
 */
var airprintFromLocalFile = Titanium.UI.createButton({
	title : 'Print from local PDF file',
	height : 40,
	width : '100%',
	top : 5
});

airprintFromLocalFile.addEventListener('click', function() {

	// Copy local file from Resources dir to app Documents dir
	util.copyLocalFileToDocumentDir("lorem.pdf");

	// Options for Airprint Module
	var options = {
		file : "lorem.pdf",
		displayPageRange : false, // Turn off selectable page range
		jobName : 'Custom JobName: lorem.pdf', // Give a custom job name.  By default, it will be the file name
		view : airprintFromLocalFile
	};

	printer.print(options);
});

window.add(airprintFromLocalFile);

/**
 * Downloading a PDF from a remote server and printing it
 */
var airprintFromUrl = Titanium.UI.createButton({
	title : 'Print from url',
	height : 40,
	width : '100%',
	top : 55
});

airprintFromUrl.addEventListener('click', function() {
	var url = 'http://adventurelearningschools.org/assets/files/Sample.pdf';
	var options = {
		url : url,
		view : airprintFromUrl,
		sentToPrinter : airPrintCallback, // Specify a callback to receive event when user prints or cancels the dialog
	};

	printer.print(options);
});

window.add(airprintFromUrl);

/**
 * Print an image of a webpage taken from the toImage function
 */
var airprintWebPage = Titanium.UI.createButton({
	title : 'Print webpage from toImage',
	height : 40,
	width : '100%',
	top : 105
});

airprintWebPage.addEventListener('click', function() {
	var url = 'http://www.google.com';
	var title = 'Google';
	var filename = 'printFile.png';
	
	// Creating button so the Airprint options will have a reference to it for iPad dropdown
	var rightbutton = Ti.UI.createButton({
		systemButton : Titanium.UI.iPhone.SystemButton.ACTION
	});
	
	var options = {
		file : filename,
		keepScale : true, // for images only
		navBarButton : rightbutton,
		sentToPrinter : airPrintCallback
	}

	util.showWebViewWindow(title, url, filename, options, rightbutton);
});
window.add(airprintWebPage);

/**
 * Print a text file in Portrait mode
 */
var airprintTextFile = Titanium.UI.createButton({
	title : 'Print text file (Portrait)',
	height : 40,
	width : '100%',
	top : 155
});

airprintTextFile.addEventListener('click', function() {
	var filename = "textfile.txt";
	var options = {
		text : {
			isMarkup : false,
			textAlign : 'center', // Default is left
			fontSize : 18.0 // default is 12.0
		},
		file : filename,
		orientation : 'portrait',
		view : airprintTextFile,
		sentToPrinter : airPrintCallback
	};

	util.copyTextToDocumentsDir(filename, plainText);
	printer.print(options);

});
window.add(airprintTextFile);

/**
 * Print HTML markup text in landscape mode
 */
var airprintMarkupFile = Titanium.UI.createButton({
	title : 'Print Markup text file (landscape)',
	height : 40,
	width : '100%',
	top : 205
});
airprintMarkupFile.addEventListener('click', function() {
	var filename = "markupfile.txt";
	var options = {
		text : {
			isMarkup : true,
			// NOTE: textAlign and fontSize is ignored when isMarkup is true.
		},
		file : filename,
		orientation : 'landscape',
		view : airprintMarkupFile,
		sentToPrinter : airPrintCallback,
	}

	util.copyTextToDocumentsDir(filename, markupText);
	printer.print(options);
});

window.add(airprintMarkupFile);


/**
 * Print a large image full scale
 */
var airprintImageLandFile = Titanium.UI.createButton({
	title : 'Print full page image',
	height : 40,
	width : '100%',
	top : 255
});
airprintImageLandFile.addEventListener('click', function() {
	util.copyLocalFileToDocumentDir("testImage.png");
	var options = {
		file : "testImage.png",
		view : airprintImageLandFile,
		sentToPrinter : airPrintCallback
	};
	
	printer.print(options);
});

window.add(airprintImageLandFile);

window.open();
