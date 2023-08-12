import url from "../json/url.json" assert { type: "json" };
import { typeSecurityGroup } from "../security/typeSecurity.js";
import { contentSecurity } from "../security/contentSecurity.js";
import { createApiProxy, logDataMiddleware } from "../apiProxy/proxyServer.js";

export const urlPathandSecurity = {
    path: url.local,
    port: url.port,
    typeSecurityGroup: typeSecurityGroup,
    contentSecurity: contentSecurity,
    createApiProxy: createApiProxy,
    logDataMiddleware: logDataMiddleware
}