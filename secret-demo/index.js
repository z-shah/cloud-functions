const token = process.env.TOKEN;

exports.secretDemo = (req, res) => {
  console.log(`Fetched TOKEN from secret manager: ${token}`);
  res.end(`Fetched TOKEN from secret manager: ${token}`);
};