/**
 * defines an AppController class
 */
export default class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}
