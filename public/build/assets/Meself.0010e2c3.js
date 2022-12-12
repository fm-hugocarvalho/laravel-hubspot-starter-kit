import{_ as p,u as w,r as _,a as v,o,c as l,b as e,n as r,F as c,i as x,j as b,w as g,d as y,v as T,e as i,f as C,t as h}from"./app.b5f93124.js";/* empty css            */const N={name:"Me",props:{},data:()=>({auth:w(),me:{},activeTeam:null,showCreateTeam:!1,newTeamName:""}),async created(){this.fetchMe(),setTimeout(()=>{},1e3)},methods:{showCreateNewTeam(){this.newTeamName="",this.showCreateTeam=!0},async changeActiveTeam(){await axios.post(route("teams.alias-as"),{team_id:this.activeTeam}),this.auth.update(),_.push("/portals")},async fetchMe(){const t=await axios.post(route("post.me"));this.me=t.data,this.activeTeam=this.me.team.id},async createNewTeam(){await axios.post(route("teams.store"),{name:this.newTeamName}),this.showCreateTeam=!1,this.fetchMe()}}},k={class:"block justify-center items-center"},M={class:"px-12"},j={class:"pt-5 flex justify-between"},L=e("div",null,[e("h1",null,"My teams"),i(),e("div",{class:"subtext"},"Having many teams is perfect for agencies that want to lockdown access.")],-1),V={class:"block justify-center items-center p-4 mx-4 mt-4 mb-6"},$={key:0,class:"flex flex-wrap -mx-1 lg:-mx-4"},B={class:"p-6 card relative"},z=e("div",{class:"card-gradient-teal"},null,-1),A={class:"flex mb-8"},S=e("div",{class:"px-4 flex whitespace-nowrap text-ellipsis overflow-hidden"},[e("h3",{class:"text-white text-xl"},"Team")],-1),D=e("div",{class:"border-b-2 border-[#707A9C] mb-8"},null,-1),F={class:"mb-2 text-lg font-semibold tracking-tight text-white"},E=e("span",{class:"muted pr-2"},"Name:",-1),H={class:"mb-2 text-lg font-semibold tracking-tight text-white"},U=e("span",{class:"muted pr-2"},"Connected hubs:",-1),q={class:"relative p-4 w-full max-w-md h-full md:h-auto"},G={class:"relative rounded-lg shadow bg-gray-800"},I=e("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),J=e("span",{class:"sr-only"},"Close modal",-1),K=[I,J],O={class:"py-6 px-6 lg:px-8"},P=e("h3",{class:"mb-4 text-xl font-medium text-white"}," Create new team ",-1),Q=e("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-300"},"Team name",-1),R=e("button",{type:"submit",class:"w-full mt-0"}," Create team ",-1);function W(t,s,X,Y,Z,n){var m,d;const u=v("font-awesome-icon");return o(),l(c,null,[e("div",k,[e("div",M,[e("div",j,[L,e("div",null,[e("button",{onClick:s[0]||(s[0]=a=>n.showCreateNewTeam())}," Create new team ")])])])]),e("div",V,[e("div",{class:r(["min-h-[50vh]",(m=t.me.teams)!=null&&m.length?"":"flex justify-center items-center"])},[(d=t.me.teams)!=null&&d.length?(o(),l("div",$,[(o(!0),l(c,null,x(t.me.teams,(a,f)=>(o(),l("div",{class:"my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4",key:f},[e("div",B,[z,e("div",A,[C(u,{icon:"fa-solid fa-users",class:"pr-0 text-3xl text-[#ffffff]"}),S]),D,e("h5",F,[E,i(" "+h(a.name),1)]),e("h5",H,[U,i(" "+h(a.portals_count),1)])])]))),128))])):b("",!0)],2)]),e("div",{id:"authentication-modal",tabindex:"-1",class:r([t.showCreateTeam?"":"hidden","overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex justify-center bg-black bg-opacity-60"])},[e("div",q,[e("div",G,[e("button",{type:"button",class:"absolute top-3 right-2.5 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center",onClick:s[1]||(s[1]=a=>t.showCreateTeam=!1)},K),e("div",O,[P,e("form",{class:"mt-8",onSubmit:s[3]||(s[3]=g(a=>n.createNewTeam(),["prevent"]))},[e("div",null,[Q,y(e("input",{type:"text",class:"",placeholder:"my new team","onUpdate:modelValue":s[2]||(s[2]=a=>t.newTeamName=a)},null,512),[[T,t.newTeamName]])]),R],32)])])])],2)],64)}const se=p(N,[["render",W]]);export{se as default};
