import{_ as t,u as o,r as s}from"./app.b5f93124.js";/* empty css            */const a={name:"Logout",props:{},data:()=>({auth:o()}),async mounted(){await axios.get(route("auth.logout")),this.auth.setIsLoggedIn(!1),this.auth.update(),s.push("/login")},methods:{}};function e(u,r,n,p,c,h){return null}const _=t(a,[["render",e]]);export{_ as default};
