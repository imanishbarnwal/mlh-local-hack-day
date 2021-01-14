const http = require("http"); 

const PORT = 3000; 

http.createServer((req, res) => { 

	// Initializing sendgrid object 
	const mailer = require("@sendgrid/mail"); 

	// Insert your API key here 
	mailer.setApiKey("<your-api-key>"); 
	
	// Setting configurations 
	const msg = { 
	to: ["youremail@gmail.com", "your.second.email@gmail.com"], 
	from: "noreply@example.com", 
	subject: "Message sent for demo purpose", 
	html: 
		"<h1>New message from Geeksforgeeks</h1> 
		<p>Some demo text from geeksforgeeks.</p>"
	}; 

	// Sending mail 
	mailer.send(msg, function(err, json) { 
	if (err) { 
		console.log(err); 

		// Writing error message 
		res.write("Can't send message sent"); 
	} else { 

		// Writing success message 
		res.write("Message sent"); 
	} 
	}); 

	res.end(); 
}) 
.listen(PORT, () => console.log(`Server running on PORT : ${PORT}`)); 
