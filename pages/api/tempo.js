export default (req, res) => {
    const dynamicDate = new Date();
  
    res.json({
      date: dynamicDate.toGMTString()
    })
  }