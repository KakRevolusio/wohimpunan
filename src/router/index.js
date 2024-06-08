import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ResumeView from "@/views/ResumeView.vue";
import ProjectView from "@/views/ProjectView.vue";
import ContactView from "@/views/ContactView.vue";
import ListProjek from "@/views/ListProjek.vue";
import Setifikat from "@/views/Sertifikat.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/resume',
      name: 'resume',
      component: ResumeView
    },
    {
      path: '/project',
      name: 'project',
      component: ProjectView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/listprojek',
      name: 'listprojek',
      component: ListProjek
    },
    {
      path: '/sertifikat',
      name: 'sertifikat',
      component: Setifikat
    },
  ]
})

export default router
