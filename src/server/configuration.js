import * as GlobalContext from "../../app.json";

const HOST = "https://www.tigerstance.com/api";
const TOP_MOVERS = HOST + "/tickers/top_movers/";
const getUrl = (path) => {
    return GlobalContext.server.url + path;
};

const post = (obj) => ({...obj, method: "POST"});

export {GlobalContext, getUrl, post, HOST, TOP_MOVERS};
