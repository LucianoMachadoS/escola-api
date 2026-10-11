import app from './app';

const port = process.env.PORT || 3001;
app.listen(port, ()=>{
  console.log();
  console.log(`Servidor rodando http://localhost:${port}`)
})
