
function objReader ( progressEvent ){

	// Entire file read as a string

	var fs = require("fs");
	var file = fs.readFileSync("./models/car2.obj", "utf-8");
	console.log(file);

	// The file lines
	
	lines = text.split('\n');
	
	// The new vertices
	
	var newVertices = [];
	
	// The new normal vectors
	
	var newNormals = [];

	// The new face vectors
	
	var newFaces = [];

	// The new face vectors

	var newColors = [];
	
	// Check every line and store 

	for(var line = 0; line < lines.length; line++){

		// The tokens/values in each line

	    // Separation between tokens is 1 or mode whitespaces

	    var tokens = lines[line].split(/\s\s*/);
	    
	    // Array of tokens; each token is a string
	    
	    if( tokens[0] == "v" ) 
	    {
			// For every vertex we have 3 floating point values

			for( j = 1; j < 7; j++ ) {
				if (j < 4)
					newVertices.push( parseFloat( tokens[ j ] ) );
				else
					newColors.push( parseFloat( tokens[ j ] ) );
			}
		}

		if( tokens[0] == "vn" ) 
		{
			// For every normal we have 3 floating point values

			for( j = 1; j < 4; j++ ) {

				newNormals.push( parseFloat( tokens[ j ] ) );
			}
		}

		if( tokens[0] == "f" ) 
		{
			// For every normal we have 3 floating point values

			for( j = 1; j < 4; j++ ) {

				newFaces.push( parseFloat( tokens[ j ] ) );
			}
		}
	}	

	// Assigning to the current model

	// Assigning to the current model

	sceneModels[1].vertices = newVertices.slice();

	sceneModels[1].normals = newNormals.slice();

	sceneModels[1].vertexIndices = newFaces.slice();

	sceneModels[2].vertices = newVertices.slice();

	sceneModels[2].normals = newNormals.slice();

	sceneModels[2].vertexIndices = newFaces.slice();

	sceneModels[3].vertices = newVertices.slice();

	sceneModels[3].normals = newNormals.slice();

	sceneModels[3].vertexIndices = newFaces.slice();

	// Checking to see if the normals are defined on the file

	if( sceneModels[1].normals.length == 0 )
	{
		computeVertexNormals( sceneModels[1].vertices, sceneModels[1].normals );
	}
};
