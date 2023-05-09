## ECDSA Node

This project is an example of using a client and server to facilitate transfers between different addresses. Since there is just a single server on the back-end handling transfers, this is clearly very centralized. We won't worry about distributed consensus for this project.

However, something that we would like to incoporate is Public Key Cryptography. By using Elliptic Curve Digital Signatures we can make it so the server only allows transfers that have been signed for by the person who owns the associated address.

### Video instructions
For an overview of this project as well as getting started instructions, check out the following video:

https://www.loom.com/share/0d3c74890b8e44a5918c4cacb3f646c4
 
### Client

The client folder contains a [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started, follow these steps:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application 
4. Now you should be able to visit the app at http://127.0.0.1:5173/

### Server

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server, follow these steps:

1. Open a terminal within the `/server` folder 
2. Run `npm install` to install all the depedencies 
3. Run `node index` to start the server 

The application should connect to the default server port (3042) automatically! 

_Hint_ - Use [nodemon](https://www.npmjs.com/package/nodemon) instead of `node` to automatically restart the server on any changes.


### Keys

```
{
  privateKey: '603c4c82257cac471182f3409ee50049adc25e9fff07fa37a000394a7b3f3321',
  publicKey: '03c3bb3b0a22dc8c9b1fb033ec65520cb92752a98d7e4f5ab36922f3c347c820f6'
}
```

```
{
  privateKey: '623bbe36a843e8adf3ab0dfa6a5f662f1828f321c57b4890f44a9c35800a7362',
  publicKey: '02f0bbe2dc5bf6c26f146622346c1cd953fa9fe4ef482554ce49ee853582e76f15'
}
```

```
{
  privateKey: '8deee3ed5b8b7dcb9fe7f1acddcf6eb8a8527f66587f7026539637c2ea212d4f',
  publicKey: '03448d50a3ff3e69f30aafbe6b22591584a8e8b6f2cbebf0d22417c76c2ac70ba4'
}
```