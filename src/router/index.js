import { createWebHistory, createRouter } from "vue-router";
import home from "@/components/home.vue";
import about from "@/components/about.vue";
import languages from "@/components/languages.vue";
import tamil from "@/components/tamil.vue";
import english from "@/components/english.vue";
import hindi from "@/components/hindi.vue";
import malayalam from "@/components/malayalam.vue";
import kanada from "@/components/kanada.vue";
import telugu from "@/components/telugu.vue";
import artist from "@/components/artist.vue";
import aniruth from "@/components/aniruth.vue";
import hiphop from "@/components/hiphop.vue";
import uvan from "@/components/uvan.vue";
import vidhya from "@/components/vidhya.vue";
import shreya from "@/components/shreya.vue";
import pk from "@/components/pk.vue";
import gv from "@/components/gv.vue";
import tj from "@/components/tj.vue";
import sn from "@/components/sn.vue";
import playlist from "@/components/playlist.vue";
import melody from "@/components/melody.vue";
import rock from "@/components/rock.vue";
import album from "@/components/album.vue";
import romance from "@/components/romance.vue";
import mazhai from "@/components/mazhai.vue";
import account from "@/components/account.vue";
import login from "@/components/login.vue";
import logout from "@/components/logout.vue";
import aboutfooter from "@/components/aboutfooter.vue";
import accountfooter from "@/components/accountfooter.vue";
import homefooter from "@/components/homefooter.vue";


const routes = [
  {
    path: "/",
    name: "home",
    components: {
      default:home,
      footer:homefooter,
    },

  },
  {
    path: "/about",
    name: "about",
    components: {
      default:about,
      footer:aboutfooter,}

  },
  {
    path: "/languages",
    name: "languages",
    component: languages,
    

  },
  {
    path: "/tamil",
    name: "tamil",
    component: tamil,

  },
  {
    path: "/english",
    name: "english",
    component: english,

  },
  {
    path: "/hindi",
    name: "hindi",
    component: hindi,

  },
  {
    path: "/malayalam",
    name: "malayalam",
    component: malayalam,

  },
  {
    path: "/kanada",
    name: "kanada",
    component: kanada,

  },
  {
    path: "/telugu",
    name: "telugu",
    component: telugu,

  },
  {
    path: "/artist",
    name: "artist",
    component: artist,

  },
  {
    path: "/aniruth",
    name: "aniruth",
    component: aniruth,

  },
  {
    path: "/hiphop",
    name: "hiphop",
    component: hiphop,

  },
  {
    path: "/uvan",
    name: "uvan",
    component: uvan,

  },
  {
    path: "/vidhya",
    name: "vidhya",
    component: vidhya,

  },
  {
    path: "/shreya",
    name: "shreya",
    component: shreya,

  },
  {
    path: "/pk",
    name: "pk",
    component: pk,

  },
  {
    path: "/gv",
    name: "gv",
    component: gv,

  },
  {
    path: "/tj",
    name: "tj",
    component: tj,

  },
  {
    path: "/sn",
    name: "sn",
    component: sn,

  },
  {
    path: "/account",
    name: "account",
    components: {
      default:account,
      footer:accountfooter,
    },
  },
  
  {
    path: "/login",
    name: "login",
    component: login,

  },

  {
    path: "/logout",
    name: "logout",
    component: logout,

  },
  {
    path: "/playlist",
    name: "playlist",
    component: playlist,

  },
  {
    path: "/melody",
    name: "melody",
    component: melody,

  },
  {
    path: "/rock",
    name: "rock",
    component: rock,

  },
  {
    path: "/album",
    name: "album",
    component: album,

  },
  {
    path: "/romance",
    name: "romance",
    component: romance,

  },
  {
    path: "/mazhai",
    name: "mazhai",
    component: mazhai,

  },

  ];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
