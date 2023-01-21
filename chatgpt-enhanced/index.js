// 

const { Configuration, OpenAIApi } = require("openai");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const configuration = new Configuration({
    organization: "org-lLEA22oPjMzCqYw21akdrZgd",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);



// create a simple api that calls the function above

// add body parser and cors to express

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 3080;

app.post('/', async (req, res) => {
  const { message, currentModel } = req.body;
  console.log(message, "message");
  console.log(currentModel, "currentModel");
  const response = await openai.createCompletion({
    model: `${currentModel}`, //"text-davinci-003",
    prompt: `${message}`,
    max_tokens: 100,
    temperature: 0.5,
  });
 
  res.json({
    message: response.data.choices[0].text,
    
  })
});

app.get('/models', async (req, res) => {
  const response = await openai.listEngines();
  console.log(response.data.data)
  res.json({
    models: response.data.data
  })
  
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
