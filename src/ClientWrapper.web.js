import bugsnag from "@bugsnag/browser";
import util from "util";

let client;

export default {
  startWithOptions: options => {
    client = bugsnag(options)
  },
  notify: payload => {
      return util.promisify(client.notify(payload))
  },
  setUser: ({ id, name, email }) => {
      client.user = { id, name, email };
  },
  clearUser: () => {
      client.user = null;
  },
  startSession: () => {
      client.startSession();
  },
  stopSession: () => {
      client.stopSession();
  },
  resumeSession: () => {
      client.resumeSession();
  },
  leaveBreadcrumb: ({ name, type, metadata }) => {
      client.leaveBreadcrumb(name, metadata);
  }
};