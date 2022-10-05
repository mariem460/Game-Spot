import { createStore } from "vuex";
import articleModule from "./articles";
import notificationModule from "./notification";
import authenticationnModule from "./authenti";

const store = createStore({
    modules:{
        article : articleModule,
        notify: notificationModule,
        auth: authenticationnModule
        

    }
})
export default store