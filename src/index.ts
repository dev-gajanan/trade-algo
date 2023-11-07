import express from 'express';

const app = express();

app.get('/', (req:any, res: any) => {

    res.send("Home page")
})

app.listen(3000, () => console.log("Server running on http://localhost:3000"))
