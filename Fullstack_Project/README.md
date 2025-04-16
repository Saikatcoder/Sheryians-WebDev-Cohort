**Fullstack Application**




## project-Folder-Structure/
│
├── index.js          # Entry point of the application
├── .env               # Environment variables
├── /routes            # Folder for route files
└── README.md          # Project documentation (this file)
|__utls|__db.js        #for databse connection
|__
|__




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
// latest version support for extended :true
```

## Database Connection
*utils folder for database connect*
*ip_Whitelisting* //

**db.js**
```
const db = ()=>{
    mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("connection to mongodb");
})
.catch((err)=>{
    console.log("Error connecting to mongodb");
})
}

export default db;

```