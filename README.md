# TibiaLabs API v2

<div align="center"><img src="https://i.imgur.com/9jP3lNK.png"/></div>

TibiaLabs API written in `JavaScript` using `Next.js` and deployed in Vercel.

This API documentation can be found on [docs.tibialabs.com](https://docs.tibialabs.com)

## How to use

If you aren't friendly with `Next.js`, it's recommended that you take a look at how to [get started](https://nextjs.org/docs/getting-started) with `Next.js`, since you are going to need `Node.js` installed.

After having it installed, if you are starting from a fresh clone of this repository, start with:

```
yarn
```

This will install all required `node_modules` to run it.

### Local development

Run your build locally using:

```
yarn dev
```

### Production

Deploy it to the cloud with [Vercel](https://vercel.com/#get-started) ([Documentation](https://nextjs.org/docs/deployment)), learn more about it on their Documentation.

## API Documentation

This API documentation can be found on [docs.tibialabs.com](https://docs.tibialabs.com)

### Avaiable endpoints

- GET `/v2/charinfo/:name`
- GET `/v2/partytracker/:name`
- GET `/v2/sharelevel/:level`
- GET `/v2/guildinfo/:name`
- GET `/v2/worldinfo/:name`
- GET `/v2/worldinfo/online/:name`
- GET `/v2/worldinfo/online/all`
- GET `/v2/boostedcreature`
- GET `/v2/boostedcreature/name`
- GET `/v2/boostedcreature/list`
- GET `/v2/boostedboss`
- GET `/v2/boostedboss/name`
- GET `/v2/boostedboss/list`
- GET `/v2/dreamscar`
- GET `/v2/dreamscar/name`
- GET `/v2/rashid`
- GET `/v2/rashid/name`

## Credits

- Author: [Lucas Hames](https://github.com/wedz0ff)
- Distributed under [MIT License](LICENSE)
