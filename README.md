php-node-redis
==============

A quick example of Node.js reading PHP session on Redis

Requirements
------------

[PHP](http://www.php.net/) (5.4+), [Composer](https://getcomposer.org/), [Node.js](http://nodejs.org/), [Redis](http://redis.io).

Install
-------

Open a terminal, `cd` into this project's folder and execute this 2 commands:

```sh
composer install
npm install
```

Run
---

Make sure you have Redis running on your computer with its defaul settings; if something is different you will need to update the code and change the connection settings on PHP and Node.js.

On one terminal window run: 

```sh
php -S localhost:8000
```

On a different terminal (without closing the previous one) run: 

```sh
node index.js
```

Finally, with both applications running, open your browser and go to [http://localhost:8000](http://localhost:8000)
