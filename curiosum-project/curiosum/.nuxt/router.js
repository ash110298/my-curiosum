import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b68c9028 = () => interopDefault(import('..\\pages\\faq\\index.vue' /* webpackChunkName: "pages_faq_index" */))
const _3b3b5ea4 = () => interopDefault(import('..\\pages\\info\\index.vue' /* webpackChunkName: "pages_info_index" */))
const _2d0bb38d = () => interopDefault(import('..\\pages\\manage\\index.vue' /* webpackChunkName: "pages_manage_index" */))
const _81a5790e = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages_profile_index" */))
const _6eea6d95 = () => interopDefault(import('..\\pages\\team\\index.vue' /* webpackChunkName: "pages_team_index" */))
const _2a21409c = () => interopDefault(import('..\\pages\\profile\\update.vue' /* webpackChunkName: "pages_profile_update" */))
const _d3d0e06e = () => interopDefault(import('..\\pages\\team\\create.vue' /* webpackChunkName: "pages_team_create" */))
const _aa463dca = () => interopDefault(import('..\\pages\\teams\\all.vue' /* webpackChunkName: "pages_teams_all" */))
const _25768e58 = () => interopDefault(import('..\\pages\\manage\\create\\announcement.vue' /* webpackChunkName: "pages_manage_create_announcement" */))
const _ed1c5b5a = () => interopDefault(import('..\\pages\\manage\\create\\car.vue' /* webpackChunkName: "pages_manage_create_car" */))
const _5f911459 = () => interopDefault(import('..\\pages\\manage\\create\\event.vue' /* webpackChunkName: "pages_manage_create_event" */))
const _3b98c7f2 = () => interopDefault(import('..\\pages\\manage\\create\\livetiming.vue' /* webpackChunkName: "pages_manage_create_livetiming" */))
const _46b587d9 = () => interopDefault(import('..\\pages\\manage\\create\\review2.vue' /* webpackChunkName: "pages_manage_create_review2" */))
const _54ff9028 = () => interopDefault(import('..\\pages\\manage\\create\\schedule.vue' /* webpackChunkName: "pages_manage_create_schedule" */))
const _22a4e215 = () => interopDefault(import('..\\pages\\manage\\create\\static-schedule.vue' /* webpackChunkName: "pages_manage_create_static-schedule" */))
const _21c19230 = () => interopDefault(import('..\\pages\\manage\\create\\techupdate.vue' /* webpackChunkName: "pages_manage_create_techupdate" */))
const _3cff4547 = () => interopDefault(import('..\\pages\\manage\\delete\\announcement.vue' /* webpackChunkName: "pages_manage_delete_announcement" */))
const _3849bc4a = () => interopDefault(import('..\\pages\\manage\\delete\\event.vue' /* webpackChunkName: "pages_manage_delete_event" */))
const _510b42b6 = () => interopDefault(import('..\\pages\\manage\\delete\\livetiming.vue' /* webpackChunkName: "pages_manage_delete_livetiming" */))
const _5d75de74 = () => interopDefault(import('..\\pages\\manage\\delete\\static-schedule.vue' /* webpackChunkName: "pages_manage_delete_static-schedule" */))
const _decd8e42 = () => interopDefault(import('..\\pages\\manage\\delete\\techupdate.vue' /* webpackChunkName: "pages_manage_delete_techupdate" */))
const _61471071 = () => interopDefault(import('..\\pages\\manage\\event\\teams.vue' /* webpackChunkName: "pages_manage_event_teams" */))
const _4adf301e = () => interopDefault(import('..\\pages\\manage\\remove\\team-from-event.vue' /* webpackChunkName: "pages_manage_remove_team-from-event" */))
const _bb6639b4 = () => interopDefault(import('..\\pages\\manage\\role\\add.vue' /* webpackChunkName: "pages_manage_role_add" */))
const _19fd34e2 = () => interopDefault(import('..\\pages\\manage\\role\\remove.vue' /* webpackChunkName: "pages_manage_role_remove" */))
const _28a0b126 = () => interopDefault(import('..\\pages\\manage\\update\\car.vue' /* webpackChunkName: "pages_manage_update_car" */))
const _22f8eb28 = () => interopDefault(import('..\\pages\\manage\\update\\event.vue' /* webpackChunkName: "pages_manage_update_event" */))
const _3e79fd35 = () => interopDefault(import('..\\pages\\manage\\update\\schedule.vue' /* webpackChunkName: "pages_manage_update_schedule" */))
const _bb15c730 = () => interopDefault(import('..\\pages\\manage\\update\\static-schedule.vue' /* webpackChunkName: "pages_manage_update_static-schedule" */))
const _d3562006 = () => interopDefault(import('..\\pages\\manage\\update\\techupdate.vue' /* webpackChunkName: "pages_manage_update_techupdate" */))
const _1f5729a5 = () => interopDefault(import('..\\pages\\manage\\update\\announcement\\_id.vue' /* webpackChunkName: "pages_manage_update_announcement__id" */))
const _6c74ca91 = () => interopDefault(import('..\\pages\\manage\\event\\_id\\teams.vue' /* webpackChunkName: "pages_manage_event__id_teams" */))
const _adfb439c = () => interopDefault(import('..\\pages\\event\\_id\\index.vue' /* webpackChunkName: "pages_event__id_index" */))
const _0f320d10 = () => interopDefault(import('..\\pages\\join\\_id.vue' /* webpackChunkName: "pages_join__id" */))
const _2df7d021 = () => interopDefault(import('..\\pages\\profile\\_id.vue' /* webpackChunkName: "pages_profile__id" */))
const _52ac14a5 = () => interopDefault(import('..\\pages\\team\\_id\\index.vue' /* webpackChunkName: "pages_team__id_index" */))
const _61a41c6c = () => interopDefault(import('..\\pages\\event\\_id\\announcements.vue' /* webpackChunkName: "pages_event__id_announcements" */))
const _2e5a1e61 = () => interopDefault(import('..\\pages\\event\\_id\\forum\\index.vue' /* webpackChunkName: "pages_event__id_forum_index" */))
const _6b11b950 = () => interopDefault(import('..\\pages\\event\\_id\\live-timings.vue' /* webpackChunkName: "pages_event__id_live-timings" */))
const _a187088e = () => interopDefault(import('..\\pages\\event\\_id\\review1.vue' /* webpackChunkName: "pages_event__id_review1" */))
const _01e81e32 = () => interopDefault(import('..\\pages\\event\\_id\\schedule.vue' /* webpackChunkName: "pages_event__id_schedule" */))
const _87cd3aa8 = () => interopDefault(import('..\\pages\\event\\_id\\teams\\index.vue' /* webpackChunkName: "pages_event__id_teams_index" */))
const _7f1cb4e3 = () => interopDefault(import('..\\pages\\event\\_id\\tech-updates.vue' /* webpackChunkName: "pages_event__id_tech-updates" */))
const _6b032456 = () => interopDefault(import('..\\pages\\team\\_id\\members\\index.vue' /* webpackChunkName: "pages_team__id_members_index" */))
const _937175c0 = () => interopDefault(import('..\\pages\\team\\_id\\settings.vue' /* webpackChunkName: "pages_team__id_settings" */))
const _716a97f4 = () => interopDefault(import('..\\pages\\team\\_id\\update.vue' /* webpackChunkName: "pages_team__id_update" */))
const _0224b932 = () => interopDefault(import('..\\pages\\team\\_id\\captain\\change.vue' /* webpackChunkName: "pages_team__id_captain_change" */))
const _59de7fa5 = () => interopDefault(import('..\\pages\\team\\_id\\members\\add.vue' /* webpackChunkName: "pages_team__id_members_add" */))
const _b985e646 = () => interopDefault(import('..\\pages\\event\\_id\\forum\\create\\post.vue' /* webpackChunkName: "pages_event__id_forum_create_post" */))
const _7917baf9 = () => interopDefault(import('..\\pages\\event\\_id\\forum\\post\\_postId\\index.vue' /* webpackChunkName: "pages_event__id_forum_post__postId_index" */))
const _a196b59a = () => interopDefault(import('..\\pages\\event\\_id\\forum\\post\\_postId\\edit.vue' /* webpackChunkName: "pages_event__id_forum_post__postId_edit" */))
const _80de14dc = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/faq",
    component: _b68c9028,
    name: "faq"
  }, {
    path: "/info",
    component: _3b3b5ea4,
    name: "info"
  }, {
    path: "/manage",
    component: _2d0bb38d,
    name: "manage"
  }, {
    path: "/profile",
    component: _81a5790e,
    name: "profile"
  }, {
    path: "/team",
    component: _6eea6d95,
    name: "team"
  }, {
    path: "/profile/update",
    component: _2a21409c,
    name: "profile-update"
  }, {
    path: "/team/create",
    component: _d3d0e06e,
    name: "team-create"
  }, {
    path: "/teams/all",
    component: _aa463dca,
    name: "teams-all"
  }, {
    path: "/manage/create/announcement",
    component: _25768e58,
    name: "manage-create-announcement"
  }, {
    path: "/manage/create/car",
    component: _ed1c5b5a,
    name: "manage-create-car"
  }, {
    path: "/manage/create/event",
    component: _5f911459,
    name: "manage-create-event"
  }, {
    path: "/manage/create/livetiming",
    component: _3b98c7f2,
    name: "manage-create-livetiming"
  }, {
    path: "/manage/create/review2",
    component: _46b587d9,
    name: "manage-create-review2"
  }, {
    path: "/manage/create/schedule",
    component: _54ff9028,
    name: "manage-create-schedule"
  }, {
    path: "/manage/create/static-schedule",
    component: _22a4e215,
    name: "manage-create-static-schedule"
  }, {
    path: "/manage/create/techupdate",
    component: _21c19230,
    name: "manage-create-techupdate"
  }, {
    path: "/manage/delete/announcement",
    component: _3cff4547,
    name: "manage-delete-announcement"
  }, {
    path: "/manage/delete/event",
    component: _3849bc4a,
    name: "manage-delete-event"
  }, {
    path: "/manage/delete/livetiming",
    component: _510b42b6,
    name: "manage-delete-livetiming"
  }, {
    path: "/manage/delete/static-schedule",
    component: _5d75de74,
    name: "manage-delete-static-schedule"
  }, {
    path: "/manage/delete/techupdate",
    component: _decd8e42,
    name: "manage-delete-techupdate"
  }, {
    path: "/manage/event/teams",
    component: _61471071,
    name: "manage-event-teams"
  }, {
    path: "/manage/remove/team-from-event",
    component: _4adf301e,
    name: "manage-remove-team-from-event"
  }, {
    path: "/manage/role/add",
    component: _bb6639b4,
    name: "manage-role-add"
  }, {
    path: "/manage/role/remove",
    component: _19fd34e2,
    name: "manage-role-remove"
  }, {
    path: "/manage/update/car",
    component: _28a0b126,
    name: "manage-update-car"
  }, {
    path: "/manage/update/event",
    component: _22f8eb28,
    name: "manage-update-event"
  }, {
    path: "/manage/update/schedule",
    component: _3e79fd35,
    name: "manage-update-schedule"
  }, {
    path: "/manage/update/static-schedule",
    component: _bb15c730,
    name: "manage-update-static-schedule"
  }, {
    path: "/manage/update/techupdate",
    component: _d3562006,
    name: "manage-update-techupdate"
  }, {
    path: "/manage/update/announcement/:id?",
    component: _1f5729a5,
    name: "manage-update-announcement-id"
  }, {
    path: "/manage/event/:id?/teams",
    component: _6c74ca91,
    name: "manage-event-id-teams"
  }, {
    path: "/event/:id?",
    component: _adfb439c,
    name: "event-id"
  }, {
    path: "/join/:id?",
    component: _0f320d10,
    name: "join-id"
  }, {
    path: "/profile/:id",
    component: _2df7d021,
    name: "profile-id"
  }, {
    path: "/team/:id",
    component: _52ac14a5,
    name: "team-id"
  }, {
    path: "/event/:id?/announcements",
    component: _61a41c6c,
    name: "event-id-announcements"
  }, {
    path: "/event/:id?/forum",
    component: _2e5a1e61,
    name: "event-id-forum"
  }, {
    path: "/event/:id?/live-timings",
    component: _6b11b950,
    name: "event-id-live-timings"
  }, {
    path: "/event/:id?/review1",
    component: _a187088e,
    name: "event-id-review1"
  }, {
    path: "/event/:id?/schedule",
    component: _01e81e32,
    name: "event-id-schedule"
  }, {
    path: "/event/:id?/teams",
    component: _87cd3aa8,
    name: "event-id-teams"
  }, {
    path: "/event/:id?/tech-updates",
    component: _7f1cb4e3,
    name: "event-id-tech-updates"
  }, {
    path: "/team/:id/members",
    component: _6b032456,
    name: "team-id-members"
  }, {
    path: "/team/:id/settings",
    component: _937175c0,
    name: "team-id-settings"
  }, {
    path: "/team/:id/update",
    component: _716a97f4,
    name: "team-id-update"
  }, {
    path: "/team/:id/captain/change",
    component: _0224b932,
    name: "team-id-captain-change"
  }, {
    path: "/team/:id/members/add",
    component: _59de7fa5,
    name: "team-id-members-add"
  }, {
    path: "/event/:id?/forum/create/post",
    component: _b985e646,
    name: "event-id-forum-create-post"
  }, {
    path: "/event/:id?/forum/post/:postId?",
    component: _7917baf9,
    name: "event-id-forum-post-postId"
  }, {
    path: "/event/:id?/forum/post/:postId?/edit",
    component: _a196b59a,
    name: "event-id-forum-post-postId-edit"
  }, {
    path: "/",
    component: _80de14dc,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
