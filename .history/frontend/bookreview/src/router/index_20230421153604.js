import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ReviewsDetail from "../views/ReviewsDetail.vue";

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

		}
	],

});

export default router;
