const express =require("express")
const routes=require("./routes/AI")
const cors=require("cors")


const app = express();
app.use(express.json())
app.use(cors())
 app.use("/",routes)
  
  app.listen(8080, () => {
    try {
      
        console.log("http://localhost:8080");
    } catch (error) {
        console.log(error);
    }
  });