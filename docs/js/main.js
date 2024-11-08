const u=document.querySelector(".js-button-search"),m=document.querySelector(".js-input"),r=document.querySelector(".js-section"),l=document.querySelector(".js-section-favorites");let c=[],s=[];function h(n){n.preventDefault(),console.log("ha hecho click");const i=m.value;console.log(i),fetch(`https://api.jikan.moe/v4/anime?q=${i}`).then(t=>t.json()).then(t=>{const e=t.data;c=t.data,r.innerHTML="";for(const o of e){r.innerHTML+=`
                <div id=${o.mal_id} class="sectionSearch js-series">
                    <h5>${o.title}</h5>
                    <img src="${o.images.jpg.image_url}" alt="imagen-anime">
                </div>
            `;const a=document.querySelectorAll(".js-series");for(const d of a)d.addEventListener("click",g)}})}u.addEventListener("click",h);function g(n){console.log(c);const i=n.currentTarget.id,t=c.find(e=>(console.log(e.mal_id),console.log(i),e.mal_id===parseInt(i)));console.log(t),s.push(t),console.log(s),l.innerHTML="";for(const e of s)l.innerHTML+=`
                <div id=${e.mal_id} class="sectionSearch js-series">
                    <h5>${e.title}</h5>
                    <img src="${e.images.jpg.image_url}" alt="imagen-anime">
                </div>
            `}
//# sourceMappingURL=main.js.map
