const Enquire = require("../../models/Enquire");

class EnquireService {
  async createEnquire(data) {
    try {
      const enquire = await Enquire.create(data);
      return enquire;
    } catch (err) {
      return null;
    }
  }
}

module.exports = new EnquireService();
