// SCRIPT: ai.rename.layers.jsx
// AUTHOR:	Doug Hill
// DATE:	07/05/2024


// INSTRUCTIONS;
// 	- First step is to drag the files into Illustrator Window
// 	- Then, deselect everything and click on the layer containing placed images
// 	- With the layer selected, open up the panel options and select RELEASE TO LAYERS (SEQUENCE)
// 	- Delete the empty layer
// 	- In Illustrator, Select File > Scripts > and execute this script 

main();

function main() {

	if(app.documents.length < 1) {
		alert("Please open an Adobe Illustrator File before executing this script.");
		return false;

	} else {
		
		var document = app.activeDocument;
		var layers = document.layers;
		var links = document.placedItems;

		for(var i = 0; i < layers.length; i++) {
			var ll = app.activeDocument.placedItems[i].file.name.length;

			layers[i].name = links[i].file.name.substring(0, ll-4);
		}
		return false;
	}
}