export const getInfo = (req, res) => {
  console.log("Host:", req.hostname);
  console.log("Pathname:", req.originalUrl.split("?")[0]);
  console.log("Search:", req.query);

  res.send("Request received\n");
};
