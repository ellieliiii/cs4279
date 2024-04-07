const app = require('./index');
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Student Match app listening on port ${port}`);
})
