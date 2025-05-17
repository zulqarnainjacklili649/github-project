let app = require('express')();
app.use(express.json());

app.post('/add', (req, res) => {
  const { name } = req.body;
  
  if (!name) {
    return res.status(400).send("缺少名称参数");
  }
  
  // 添加用户记录
  console.log(`用户添加: ${name}`);
  res.send('用户已成功添加');
});

app.listen(3000, () => {
  console.log(`服务器启动了`);
});
