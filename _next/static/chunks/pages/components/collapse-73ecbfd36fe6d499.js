(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2061],{25963:function(e,n,t){"use strict";t.d(n,{W:function(){return u}});var s=t(67294),a=t(76626),i=t(87126),r=t(77514),l=t(85893);let d=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],c=["activeKey","getControlledId","getControllerId"],o=["as"];function m(e,n){if(null==e)return{};var t,s,a={},i=Object.keys(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||(a[t]=e[t]);return a}function u(e){let{active:n,eventKey:t,mountOnEnter:r,transition:l,unmountOnExit:o,role:u="tabpanel",onEnter:h,onEntering:x,onEntered:p,onExit:j,onExiting:b,onExited:f}=e,v=m(e,d),N=(0,s.useContext)(a.Z);if(!N)return[Object.assign({},v,{role:u}),{eventKey:t,isActive:n,mountOnEnter:r,transition:l,unmountOnExit:o,onEnter:h,onEntering:x,onEntered:p,onExit:j,onExiting:b,onExited:f}];let{activeKey:Z,getControlledId:g,getControllerId:y}=N,C=m(N,c),E=(0,i.h)(t);return[Object.assign({},v,{role:u,id:g(t),"aria-labelledby":y(t)}),{eventKey:t,isActive:null==n&&null!=E?(0,i.h)(Z)===E:n,transition:l||C.transition,mountOnEnter:null!=r?r:C.mountOnEnter,unmountOnExit:null!=o?o:C.unmountOnExit,onEnter:h,onEntering:x,onEntered:p,onExit:j,onExiting:b,onExited:f}]}let h=s.forwardRef((e,n)=>{let{as:t="div"}=e,s=m(e,o),[d,{isActive:c,onEnter:h,onEntering:x,onEntered:p,onExit:j,onExiting:b,onExited:f,mountOnEnter:v,unmountOnExit:N,transition:Z=r.Z}]=u(s);return(0,l.jsx)(a.Z.Provider,{value:null,children:(0,l.jsx)(i.Z.Provider,{value:null,children:(0,l.jsx)(Z,{in:c,onEnter:h,onEntering:x,onEntered:p,onExit:j,onExiting:b,onExited:f,mountOnEnter:v,unmountOnExit:N,children:(0,l.jsx)(t,Object.assign({},d,{ref:n,hidden:!c,"aria-hidden":!c}))})})})});h.displayName="TabPanel",n.Z=h},83916:function(e,n,t){"use strict";var s=t(67294),a=t(97121),i=t(16769),r=t(76626),l=t(87126),d=t(25963),c=t(85893);let o=e=>{let{id:n,generateChildId:t,onSelect:d,activeKey:o,defaultActiveKey:m,transition:u,mountOnEnter:h,unmountOnExit:x,children:p}=e,[j,b]=(0,a.$c)(o,m,d),f=(0,i.gP)(n),v=(0,s.useMemo)(()=>t||((e,n)=>f?`${f}-${n}-${e}`:null),[f,t]),N=(0,s.useMemo)(()=>({onSelect:b,activeKey:j,transition:u,mountOnEnter:h||!1,unmountOnExit:x||!1,getControlledId:e=>v(e,"tabpane"),getControllerId:e=>v(e,"tab")}),[b,j,u,h,x,v]);return(0,c.jsx)(r.Z.Provider,{value:N,children:(0,c.jsx)(l.Z.Provider,{value:b||null,children:p})})};o.Panel=d.Z,n.Z=o},53944:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/collapse",function(){return t(76077)}])},76077:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var s=t(85893),a=t(67294),i=t(10682),r=t(34051),l=t(31555),d=t(73192),c=t(52686),o=t(60834),m=t(35005),u=t(9966),h=t(41068),x=t(28395);let p=' \nconst Collapses = () => {\n    const [open, setOpen] = useState(false);    \n    return (  \n        <Fragment> \n            <Button\n                onClick={() => setOpen(!open)}\n                aria-controls="example-collapse-text"\n                aria-expanded={open}\n                >\n                Toggle Button\n            </Button>\n            <Collapse in={open}>\n                <div id="example-collapse-text" className="pt-3">\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus\n                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer\n                    labore wes anderson cred nesciunt sapiente ea proident.\n                </div>\n            </Collapse>     \n        </Fragment>\n    )\n}\n    '.trim(),j=' \n\nconst Collapses = () => {    \n    const [openFade, setOpenFade] = useState(false);\n    return (\n        <Fragment>   \n            <Button\n                onClick={() => setOpenFade(!openFade)}\n                aria-controls="example-fade-text"\n                aria-expanded={openFade}\n                >\n                Toggle text\n            </Button>\n            <Fade in={openFade}>\n                <div id="example-fade-text" className="pt-4">\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus\n                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer\n                    labore wes anderson cred nesciunt sapiente ea proident.\n                </div>\n            </Fade>  \n        </Fragment>\n    )\n}\n'.trim(),b=()=>{let[e,n]=(0,a.useState)(!1),[t,b]=(0,a.useState)(!1);return(0,s.jsxs)(i.Z,{fluid:!0,className:"p-6",children:[(0,s.jsx)(r.Z,{children:(0,s.jsx)(l.Z,{lg:12,md:12,sm:12,children:(0,s.jsx)("div",{className:"border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between",children:(0,s.jsxs)("div",{className:"mb-3 mb-md-0",children:[(0,s.jsx)("h1",{className:"mb-1 h2 fw-bold",children:"Collapse "}),(0,s.jsx)("p",{className:"mb-0 ",children:"Add a collapse toggle animation to an element or component."})]})})})}),(0,s.jsx)(r.Z,{children:(0,s.jsx)(l.Z,{xl:12,lg:12,md:12,sm:12,children:(0,s.jsx)(d.Z.Container,{defaultActiveKey:"all",children:(0,s.jsxs)(c.Z,{children:[(0,s.jsx)(c.Z.Header,{className:"border-bottom-0 p-0",children:(0,s.jsxs)(o.Z,{className:"nav-lb-tab",children:[(0,s.jsx)(o.Z.Item,{children:(0,s.jsx)(o.Z.Link,{eventKey:"all",className:"mb-sm-3 mb-md-0",children:"Design"})}),(0,s.jsx)(o.Z.Item,{children:(0,s.jsx)(o.Z.Link,{eventKey:"approved",className:"mb-sm-3 mb-md-0",children:"Code"})})]})}),(0,s.jsx)(c.Z.Body,{className:"p-0",children:(0,s.jsxs)(d.Z.Content,{children:[(0,s.jsxs)(d.Z.Pane,{eventKey:"all",className:"pb-4 p-4",children:[(0,s.jsx)(m.Z,{onClick:()=>n(!e),"aria-controls":"example-collapse-text","aria-expanded":e,children:"Toggle Button"}),(0,s.jsx)(u.Z,{in:e,children:(0,s.jsx)("div",{id:"example-collapse-text",className:"pt-3",children:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."})})]}),(0,s.jsx)(d.Z.Pane,{eventKey:"approved",className:"pb-4 p-4 react-code",children:(0,s.jsx)(x.TU,{code:p})})]})})]})})})}),(0,s.jsx)("hr",{className:"mb-5 mt-7"}),(0,s.jsx)(r.Z,{children:(0,s.jsxs)(l.Z,{xl:12,lg:12,md:12,sm:12,children:[(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("h3",{className:"doc-section-head-title",children:"Fade"}),(0,s.jsx)("p",{className:"mb-0",children:"Add a fade animation to a child element or component."})]}),(0,s.jsx)(d.Z.Container,{defaultActiveKey:"all",children:(0,s.jsxs)(c.Z,{children:[(0,s.jsx)(c.Z.Header,{className:"border-bottom-0 p-0",children:(0,s.jsxs)(o.Z,{className:"nav-lb-tab",children:[(0,s.jsx)(o.Z.Item,{children:(0,s.jsx)(o.Z.Link,{eventKey:"all",className:"mb-sm-3 mb-md-0",children:"Design"})}),(0,s.jsx)(o.Z.Item,{children:(0,s.jsx)(o.Z.Link,{eventKey:"approved",className:"mb-sm-3 mb-md-0",children:"Code"})})]})}),(0,s.jsx)(c.Z.Body,{className:"p-0",children:(0,s.jsxs)(d.Z.Content,{children:[(0,s.jsxs)(d.Z.Pane,{eventKey:"all",className:"pb-4 p-4",children:[(0,s.jsx)(m.Z,{onClick:()=>b(!t),"aria-controls":"example-fade-text","aria-expanded":t,children:"Toggle text"}),(0,s.jsx)(h.Z,{in:t,children:(0,s.jsx)("div",{id:"example-fade-text",className:"pt-4",children:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."})})]}),(0,s.jsx)(d.Z.Pane,{eventKey:"approved",className:"pb-4 p-4 react-code",children:(0,s.jsx)(x.TU,{code:j})})]})})]})})]})})]})};var f=b},28395:function(e,n,t){"use strict";t.d(n,{rS:function(){return T},ih:function(){return f},TU:function(){return c},CD:function(){return h},w8:function(){return C}});var s=t(85893),a=t(67294),i=t(74855),r=t(27087),l=t(95424);let d=e=>{let{code:n}=e,t=e=>{e.target.innerHTML="Copied",setTimeout(()=>{e.target.innerHTML="Copy"},3e3)};return(0,s.jsxs)(a.Fragment,{children:[(0,s.jsx)(i.CopyToClipboard,{text:n,children:(0,s.jsx)("button",{className:"copy-button",onClick:t,children:"Copy"})}),(0,s.jsx)(r.ZP,{...r.lG,theme:l.Z,code:n,language:"jsx",children:e=>{let{className:n,style:t,tokens:a,getLineProps:i,getTokenProps:r}=e;return(0,s.jsx)("pre",{className:n,style:t,children:a.map((e,n)=>(0,s.jsx)("div",{...i({line:e,key:n}),children:e.map((e,n)=>(0,s.jsx)("span",{...r({token:e,key:n})}))}))})}})]})};var c=d,o=t(34051),m=t(31555);let u=e=>{let{heading:n}=e;return(0,s.jsx)(o.Z,{children:(0,s.jsx)(m.Z,{lg:12,md:12,xs:12,children:(0,s.jsx)("div",{className:"border-bottom pb-4 mb-4 ",children:(0,s.jsx)("h3",{className:"mb-0 fw-bold",children:n})})})})};var h=u,x=t(97346),p=t(45697),j=t.n(p);let b=e=>{let{placeholder:n,defaultselected:t,options:i,id:r,name:l,onChange:d,className:c}=e;return(0,s.jsx)(a.Fragment,{children:(0,s.jsxs)(x.Z.Select,{id:r,name:l,onChange:d,className:c,children:[n?(0,s.jsx)("option",{value:"",className:"text-muted",children:n}):"",i.map((e,n)=>(0,s.jsx)("option",{value:e.value,className:"text-dark",children:e.label},n))]})})};b.propTypes={placeholder:j().string.isRequired,defaultselected:j().string.isRequired,id:j().string,name:j().string,className:j().string},b.defaultProps={placeholder:"",defaultselected:"",id:"",name:"",className:""};var f=b,v=t(52686),N=t(16714),Z=t(41664),g=t.n(Z);let y=e=>{let{content:n}=e,t=n[0];return(0,s.jsxs)(v.Z,{children:[(0,s.jsxs)(v.Z.Body,{className:"p-6 border-bottom mb-4",children:[(0,s.jsx)("h2",{className:"mb-3",children:t.plantitle}),(0,s.jsx)("p",{className:"mb-0",dangerouslySetInnerHTML:{__html:t.description}}),(0,s.jsxs)("div",{className:"d-flex align-items-end mt-6 mb-3",children:[(0,s.jsxs)("h1",{className:"fw-bold me-1 mb-0",children:["$",t.monthly," "]}),(0,s.jsx)("p",{className:"mb-0",children:"/mo"})]}),(0,s.jsx)(g(),{href:"#",className:"btn btn-".concat(t.buttonClass?t.buttonClass:"outline-primary"),children:t.buttonText})]}),(0,s.jsxs)(v.Z.Body,{children:[(0,s.jsx)("p",{className:"mb-0",children:t.featureHeading}),(0,s.jsx)(N.Z,{bsPrefix:"list-unstyled",className:"mt-4 mb-0",children:t.features.map((e,n)=>(0,s.jsxs)(N.Z.Item,{className:"mb-1",bsPrefix:"list-item",children:[(0,s.jsx)("span",{className:"text-success me-2",children:(0,s.jsx)("i",{className:"far fa-check-circle"})}),(0,s.jsx)("span",{dangerouslySetInnerHTML:{__html:e.feature}})]},n))})]})]})};var C=y;let E=e=>{let{item:n}=e;return(0,s.jsxs)("div",{className:"mb-6",children:[(0,s.jsx)("div",{className:"icon-shape icon-lg bg-primary rounded-3 mb-4",children:(0,s.jsx)("i",{className:"fe fe-".concat(n.icon," text-white fs-3")})}),(0,s.jsx)("h4",{children:n.title}),(0,s.jsx)("p",{children:n.description})]})};E.propTypes={item:j().any.isRequired};var T=E;let O=e=>{let{info:n}=e;return(0,s.jsx)(v.Z,{children:(0,s.jsxs)(v.Z.Body,{children:[(0,s.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[(0,s.jsx)("div",{children:(0,s.jsx)("h4",{className:"mb-0",children:n.title})}),(0,s.jsx)("div",{className:"icon-shape icon-md bg-light-primary text-primary rounded-2",children:n.icon})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{className:"fw-bold",children:n.value}),(0,s.jsx)("p",{className:"mb-0",dangerouslySetInnerHTML:{__html:n.statInfo}})]})]})})};O.propTypes={info:j().any.isRequired}},73192:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var s=t(45697),a=t.n(s);t(67294);var i=t(83916),r=t(96101),l=t(85893);let d=({transition:e,...n})=>(0,l.jsx)(i.Z,{...n,transition:(0,r.Z)(e)});d.displayName="TabContainer";var c=t(28752),o=t(75103);let m={eventKey:a().oneOfType([a().string,a().number]),title:a().node.isRequired,disabled:a().bool,tabClassName:a().string,tabAttrs:a().object},u=()=>{throw Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};u.propTypes=m;var h=Object.assign(u,{Container:d,Content:c.Z,Pane:o.Z})},28752:function(e,n,t){"use strict";var s=t(67294),a=t(93967),i=t.n(a),r=t(76792),l=t(85893);let d=s.forwardRef(({className:e,bsPrefix:n,as:t="div",...s},a)=>(n=(0,r.vE)(n,"tab-content"),(0,l.jsx)(t,{ref:a,className:i()(e,n),...s})));d.displayName="TabContent",n.Z=d},75103:function(e,n,t){"use strict";var s=t(93967),a=t.n(s),i=t(67294),r=t(87126),l=t(76626),d=t(25963),c=t(76792),o=t(41068),m=t(96101),u=t(85893);let h=i.forwardRef(({bsPrefix:e,transition:n,...t},s)=>{let[{className:i,as:h="div",...x},{isActive:p,onEnter:j,onEntering:b,onEntered:f,onExit:v,onExiting:N,onExited:Z,mountOnEnter:g,unmountOnExit:y,transition:C=o.Z}]=(0,d.W)({...t,transition:(0,m.Z)(n)}),E=(0,c.vE)(e,"tab-pane");return(0,u.jsx)(l.Z.Provider,{value:null,children:(0,u.jsx)(r.Z.Provider,{value:null,children:(0,u.jsx)(C,{in:p,onEnter:j,onEntering:b,onEntered:f,onExit:v,onExiting:N,onExited:Z,mountOnEnter:g,unmountOnExit:y,children:(0,u.jsx)(h,{...x,ref:s,className:a()(i,E,p&&"active")})})})})});h.displayName="TabPane",n.Z=h},96101:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var s=t(77514),a=t(41068);function i(e){return"boolean"==typeof e?e?a.Z:s.Z:e}}},function(e){e.O(0,[7229,9774,2888,179],function(){return e(e.s=53944)}),_N_E=e.O()}]);