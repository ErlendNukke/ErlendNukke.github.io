import { sessionTokenCheck, sessionExpirationCheck } from "./session.js";
import { login } from "./login.js";
import { loginHandler } from "./listeners.js";

sessionTokenCheck();
loginHandler();
sessionExpirationCheck();
login();
