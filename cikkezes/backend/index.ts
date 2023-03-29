const express = require('express');
const cors = require('cors');

const { PrismaClient } = require('@prisma/client');


const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req: any, res: any) => {
  res.send("<h2>Prisma</h2>");
})



app.post('/post', async (req: any, res: any) => {
  const { title, content, authorEmail } = req.body

  await prisma.post.create({
    data: {
      title,
      content,
      published: false,
      author: { connect: { email: authorEmail } }

    }
  })

  res.json({ message: "Post created!" });

})





app.listen(8000, (() => console.log("Running!")));