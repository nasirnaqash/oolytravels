const EnquireService = require("../service/EnquireService");

class EnquireController {
  async enquire(req, res) {
    // Do something
    const data = EnquireService.createEnquire(req.body);
    if (data !== null) {
      res.status(200).json({ message: "Enquire success", data });
    } else {
      res.status(400).json({ message: "Enquire failed" });
    }
  }
}

module.exports = new EnquireController();
