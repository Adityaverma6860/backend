# Backend

This is the backend server for My application, built with Node.js and Express. 
It includes support for authentication, file uploads, database interaction with MongoDB, and integration with Cloudinary for file storage.
**Stack Name**
1. **express**	A fast, minimalist web framework for Node.js.
2.  Used to build REST APIs and handle routing, requests, and responses.
2.**mongoose**	An ODM (Object Data Modeling) library for MongoDB and Node.js.
    It simplifies working with MongoDB by providing schema-based solutions.
3.**dotenv** Loads environment variables from a .env file into process.env, helping you manage configuration securely.
4.**bcryptjs** Used to hash passwords before storing them in the database and to compare hashed passwords during login.
5.**jsonwebtoken** Used to generate and verify JWT (JSON Web Tokens) for secure user authentication and authorization.
6.**body-parser**	Middleware that parses incoming request bodies (like JSON or URL-encoded data) and makes them accessible via req.body.
7.**cookie-parser**	Parses cookies attached to client requests, allowing you to read, write, and manage cookies in Express apps.
8.**cors**	Enables Cross-Origin Resource Sharing, allowing frontend apps on different domains to make API requests to your backend.
9.**cloudinary**	A service and library for uploading and managing media files (like images and videos) in the cloud.
10.**multer**	Middleware for handling multipart/form-data, primarily used for uploading files (e.g., images, documents) from forms.


**Api Testing**
![Screenshot 2025-05-27 113839](https://github.com/user-attachments/assets/47c7a099-db6e-4292-aef9-8b239fd530fe)
![Screenshot 2025-05-27 113703](https://github.com/user-attachments/assets/e8405845-3496-466f-9a56-84959c410371)
![Screenshot 2025-05-27 111831](https://github.com/user-attachments/assets/e38dde7a-c551-4b85-a3a5-dba13b065a76)
![Screenshot 2025-05-27 111758](https://github.com/user-attachments/assets/7326ef35-c5b1-42b3-a8dc-9a903bd2e15c)

**Fields**
companyName, contactNumber, contactPerson, address, location, status ,callStatus ,date, remarks,cameraFile, voiceNote, voiceText,timestamps (createdAt, updatedAt)

**Backend Functions**
1. Create a new company	: Add a new company entry with optional camera and voice uploads
2. Get all companies	  : GET	Retrieve all company records from the database
3. Get a single company : id	GET	Fetch one company entry using its MongoDB _id
4. Update a company     :id	PUT	Update a company's details
5. Delete a company     :id	DELETE	Remove a company entry
6. Filter by callStatus	:callStatus	GET	Get companies where callStatus is Pending or Done
7. Search by name or location:GET	Search by company name, location, or person 


