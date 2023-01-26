const getUser = (req,res) => {
  const user =  {
    name: "Muzamiru",
    age: 68,
    location: "Lyantonde",
  };
  res.send(user) 
}

module.exports = getUser;