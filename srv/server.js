//const proxy = require('@sap/cds-odata-v2-adapter-proxy')
const cds = require('@sap/cds')
//cds.on('bootstrap', app => app.use(proxy()))
const xsenv = require("@sap/xsenv");
xsenv.loadEnv();
const services = xsenv.getServices({
  dest: { tag: "destination" },
  conn: { tag: "connectivity" },
});
console.log("adding mtx dependencies: "+JSON.stringify(cds.env.mtx.dependencies));
cds.env.mtx.dependencies = [services.dest.xsappname, services.conn.xsappname];