const express =require("express")
const dotenv=require("dotenv")


const { Configuration, OpenAIApi } =require("openai")


dotenv.config();

const configuration = new Configuration({
  apiKey:process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);
const app = express();


app.post('/convert', async (req, res) => {
    try {
      const {language,code} = req.body;
  
      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `convert this code ${code} in this ${language}`,
        temperature: 0.5,
        max_tokens: 2000,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0,
      });
  
      const Query_Response = response.data.choices[0].text.trim();
      res.status(200).json({
        bot: Query_Response.split("\n"),
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(error || 'Something went wrong');
    }
  });
app.post('/Debug', async (req, res) => {
    try {
      const {code} = req.body;
  
      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `You are a senior software developer who have manay years of debugging experince.I am new student i got a code which may have 
        many problems plesase provide me the corrected code here
        is my code - ${code} `,
        temperature: 1.2,
        max_tokens: 3000,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0,
      });
  
      const Query_Response = response.data.choices[0].text.trim();
      res.status(200).json({
        bot: Query_Response.split("\n"),
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(error || 'Something went wrong');
    }
  });
app.post('/quality', async (req, res) => {
    try {
      const {code} = req.body;
  
      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `You are a senior software developer who have many years of debugging experince.I am new student i got a code which may have 
        many problems plesase suggest me the things which i am doing wrong here
        is my code - ${code}`,
        temperature: 1.2,
        max_tokens: 3000,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0,
      });
  
      const Query_Response = response.data.choices[0].text.trim();
      res.status(200).json({
        bot: Query_Response.split("\n"),
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(error || 'Something went wrong');
    }
  });
  


  module.exports=app