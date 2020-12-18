# 4chan API types

To be used in [TypeScript](https://www.typescriptlang.org/), *most* types for TS and JS projects that for some ungodly reason would want to use the [read-only 4chan API](https://github.com/4chan/4chan-API).

This isn't a module and doesn't include fetching the data automatically. Endpoints and domains, as well as an (incomplete) example on how to fetch the data can be found in [index.ts](src/index.ts).

## Note on fetching

Your application should save the last time you fetched data into the [If-Modified-Since](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Modified-Since) header, the provided example does not do this behaviour.

## Credits

All descriptions from [4chan/4chan-API](https://github.com/4chan/4chan-API)
