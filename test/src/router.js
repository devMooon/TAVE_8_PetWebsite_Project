import Vue from "vue"
import VueRouter from "vue-router"
import Home from  "./views/Home"
import Signup from "./views/Signup"

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes: [
        {path: "/", component: Home},
        {path: "/Signup", component: Signup},
    ]
})

export default router;