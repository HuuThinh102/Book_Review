import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ReviewsDetail from "../views/ReviewsDetail.vue";
import Register from "../views/Register.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView
		},
		{
			path: "/reviews/detail/:id",
			name: "detail",
			component: ReviewsDetail

		},
		{
			path: "/auth/register",
			name: "register",
			component: Register
		},
		{
			
		}
	],

});

export default router;
