**Fullstack Application**


**Express**
## How to install Express

``
**Dotenv**
``
**mongoose**

``
**Cors**
```
app.use(cors({
    origin : "http://localhost:3000",
    methods : ['GET','POST',"DELETE","OPTIONS"],
    allowedHeaders : ['Content-Type','Authorization']
}))
```



**How to encoded URL**

```
app.use(express.urlencoded({extended:true}))

```



## project-Folder-Structure/
│
├── index.js          # Entry point of the application
├── .env               # Environment variables
├── /routes            # Folder for route files
└── README.md          # Project documentation (this file)
|__
|__
|__


