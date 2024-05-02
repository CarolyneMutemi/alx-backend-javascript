export default class AppController {
  static getHomePage(req, res) {
    res.statusCode = 200;
    res.send('Hello Holberton School!');
  }
}
