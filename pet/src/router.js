import Vue from "vue"
import VueRouter from "vue-router"
import Home from  "./views/Home"
import Signup from "./views/Signup"
import Login from "./views/Login"
import Mypage from "./views/Mypage"

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes: [
        {path: "/", component: Home},
        {path: "/Signup", component: Signup},
        {path: "/Login", component: Login},
        {path: "/Mypage", component: Mypage},
    ]
})

export default router;