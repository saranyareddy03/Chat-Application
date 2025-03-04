# Chat-Application

**COMPANY**: CODTECH IT SOLUTIONS  <br>
**NAME**: NALLIMILLI SARANYA REDDY  <br>
**INTERN ID**: CT12NYK  <br>
**DOMAIN**:: FULL STACK WEB DEVELOPMENT  <br>
**DURATION**: 8 WEEKS   <br>
**MENTOR**: NEELA SANTOSH

**DESCRIPTION**:

Task 2 is CHAT APPLICATION, the goal is to develop a real-time chat application using websocket or socket.io.A chat application is a software program that enables real-time text communication between users over the internet or a network. It allows users to send and receive messages instantly, either in one-on-one conversations or group chats.The project involves five main files: index.html (HTML), styles.css (CSS),main.js (JavaScript),app.js (JavaScript) and package.json(JSON).My code was written using the Visual Studio Code (VS Code).

The (index.html) file is responsible for defining the structure of our webpage. Inside the head tag,The lang attribute specifies the language of the document.we include metadata such as the character encoding (UTF-8). we link to our external CSS file (styles.css).The Chat app sets the title of the webpage as "Chat app".The message-container element is an unordered list that will display chat messages.The message-form  contains the message input field and send button.The message-input creates the message input field.The v-divider element is a vertical divider.Then send button with a paper plane icon.Finally,we include a <script> tag to link to our external javascript file(main.js).

The (style.css) file provides styling for your chat application.Resets margin and padding for all elements.Sets the font family to "Open Sans".Styles the user name input section with Flexbox layout, font size, font weight, padding, and colors.Styles the input field with font size, font weight, and background color.Styles the message container with Flexbox layout, background color, dimensions, and scroll behavior.Styles the left and right messages with list-style, padding, margin, maximum width, font size, and word wrap.Adds different background colors and alignments for left and right messages.Styles message timestamps and feedback messages.Adds margin and color to the clients total display.

The (main.js) provides design to manage the client-side logic for a chat application using Socket.IO.Initializes a WebSocket connection to the server using Socket.IO (const socket = io();).Retrieves references to various DOM elements, such as the total clients display, message container, name input, message form, and message input field.Adds an event listener to the message form that prevents the default form submission behavior.Calls the sendmessage function to handle message sending.Listens for the clients-total event from the server, which provides the total number of connected clients.Updates the clientsTotal element with the new total.Validates the presence of messageInput and nameInput elements.Creates a data object containing the user's name, message, and the current date and time.
Emits the message event to the server with the data object.Adds the message to the UI using the addMessageToUI function and clears the message input field.Listens for the chat-message event from the server, which provides new chat messages.Adds the received message to the UI.Adds the message content and metadata (name and timestamp) to the list item.Appends the list item to the messageContainer and scrolls to the bottom of the container.Listens for feedback events from the server, which provide typing indicator messages.Adds the feedback message to the UI.Removes all feedback messages from the UI.

This (app.js) server-side code uses Node.js with Express and Socket.IO to create a chat application,managing client connections, broadcasting messages, and handling user feedback that can handle real-time communication between multiple clients.Imports the Express and Path modules.Initializes an Express application.Sets the port number to an environment variable value or defaults to 4000.Starts the server and listens on the specified port.Initializes Socket.IO and attaches it to the server.Serves static files from the public directory.Creates a Set to keep track of connected socket IDs.Listens for new socket connections.Logs the new socket ID and adds it to the socketsConnected Set.Emits the total number of connected clients to all clients using io.emit('clients-total',
socketsConnected.size);.Handles the disconnect event to remove the socket ID from the Set and updates the client count.Listens for message events and broadcasts the message data to all other clients.Listens for feedback events and broadcasts the feedback data to all other clients.

The (package.json) file for your Node.jsproject, which is a chat application using Socket.IO and Express.the package.json file for your Node.jsproject, which is a chat application using Socket.IO and Express."start": The script to start your application using Node.js(node app.js)."dev": The script to start your application in development mode using Nodemon (nodemon app.js). Nodemon automatically restarts the application when file changes in the directory are detected."keywords": An array of keywords related to your project (currently empty)."author": The author of the project (currently empty)."license": The license for the project (ISC)."description": A brief description of the project (currently empty)."express": A web application framework for Node.js(version 4.21.2)."socket-chat-app": A local dependency for your project."socket.io": A library for real-time web applications (version 4.8.1)."nodemon": A tool that helps develop Node.jsapplications by automatically restarting the application when file changes in the directory are detected (version 3.1.9).


**OUTPUT**

![Image](https://github.com/user-attachments/assets/ad409bcd-d320-4650-9a87-9d8499488f76)
![Image](https://github.com/user-attachments/assets/221d1126-5ebc-4b87-a807-d802c69ac2f6)
