# Shortlink

An simple URL shortener API made with Node and Typescript.


------------


### Getting Started

First, you need to setup database:

```bash
$ npx prisma migrate dev
# and
$ npx prisma generate
```

Then, run the server:
```bash
$ npm run dev
```

------------


### Using the API

To use this API, you need to make a **POST** request on **http://localhost:3000/shorten**, with a JSON body. This request return a shortcode to use with default URL.

Body Example:
```json
{
	"url": "URL TO SHORTEN"
}
```

To retrieve the original URL, make a **GET** request on **http://localhost:3000/**, passing the shortcode received.

Example:
```
http://localhost:3000/ukhXIMwCI2
```

You can retrieve informations about the shortened link, making a **GET** request on **http://localhost:3000/stats/**, passing the shortcode with URL.

Example:
```
http://localhost:3000/stats/ukhXIMwCI2
```

------------

