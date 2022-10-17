import fetch from 'node-fetch';
import { default as ProxyAgent } from 'proxy-agent';

export default function (resource, init) {
    const opts : any = {};
    if (process.env.PRIVATE_PROXY) {
        opts.agent = new ProxyAgent(process.env.PRIVATE_PROXY);
    }
    return fetch(resource, {
        ...opts,
        ...init,
    });
}
