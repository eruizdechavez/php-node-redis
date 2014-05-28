php-node-redis
==============

A quick example of Node.js reading PHP session on Redis

Install
-------

composer install
npm install

Run
---

Make sure you have Redis running on your computer with defaul settings; if something is different you will need to update the code and change the connection settings on PHP and Node.js.

On one terminal run `php -S localhost:8000`

On a different terminal run `node index.js`

Finally, open your browser and go to http://localhost:8000

