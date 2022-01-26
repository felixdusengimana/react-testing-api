const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")
const app = express();

const port = 3600;



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors())

// const makeResponseSlow = async () => new Promise((a) => setTimeout(a, 1000));


app.get("/", (req,res)=>{
    res.send("Hi")
})
// makeResponseSlow()
app.get("/api/photos",(req,res)=>{
    res.send([
      {
        id: 1,
        title: `${
          req.query.name?.toString() || 'Unknown'
        }: accusamus beatae ad facilis cum similique qui sunt`,
        thumbnailUrl: `https://picsum.photos/150/150?${Math.random()}`,
        favourite: false,
      },
      {
        id: 2,
        title: 'reprehenderit est deserunt velit ipsam',
        thumbnailUrl: `https://picsum.photos/150/150?${Math.random()}`,
        favourite: false,
      },
      {
        id: 3,
        title: 'officia porro iure quia iusto qui ipsa ut modi',
        thumbnailUrl: `https://picsum.photos/150/150?${Math.random()}`,
        favourite: false,
      },
      {
        id: 4,
        title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
        thumbnailUrl: `https://picsum.photos/150/150?${Math.random()}`,
        favourite: false,
      },
      {
        id: 5,
        title: 'natus nisi omnis corporis facere molestiae rerum in',
        thumbnailUrl: `https://picsum.photos/150/150?${Math.random()}`,
        favourite: false,
      },
    ]);
})

app.post("/api/favourite",(req, res)=>{
  const photo = req.body;
  const newPhoto = { ...photo, favourite: !photo.favourite };
  // makeResponseSlow()
  res.status(200).json(newPhoto);
})
app.listen(port,()=>{
    console.log(`The server is running on port http://localhost:${port}`);
})