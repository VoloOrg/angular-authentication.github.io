import{q as f,r as s}from"./chunk-6GCVCL5M.js";import{A as a,C as A,h as o,y as m,z as p}from"./chunk-S7QZYCKR.js";import{M as r,Nb as i,l as u,r as c}from"./chunk-TQEPK4JF.js";function d(){let e=r(o),t=r(i);return e.selectSignal(a.selectCurrentUser)()?.role===A.Admin||t.navigate(["/"])}function R(){let e=r(o),t=r(i);return e.selectSignal(p.selectIsAuth)()||t.navigate(["/login"])}function b(){let e=r(o),t=r(i),n=e.selectSignal(p.selectIsAuth)();return n&&t.navigate(["/"]),!n}function J(){let e=r(o),t=r(f);return e.dispatch(m.getCurrentUser()),c(t.pipe(s(m.getCurrentUserSuccess)),t.pipe(s(m.getCurrentUserError))).pipe(u(n=>n.type===m.getCurrentUserSuccess.type))}export{R as a,b,d as c,J as d};