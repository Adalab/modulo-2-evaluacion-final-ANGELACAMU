const g=document.querySelector(".js-button-search"),m=document.querySelector(".js-input"),r=document.querySelector(".js-section"),l=document.querySelector(".js-section-favorites");let c=[],i=[];const a=localStorage.getItem("serieUser");if(a!==null){const s=JSON.parse(a);console.log(s)}function h(s){s.preventDefault(),console.log("ha hecho click");const o=m.value;console.log(o),fetch(`https://api.jikan.moe/v4/anime?q=${o}`).then(t=>t.json()).then(t=>{const e=t.data;c=t.data,r.innerHTML="";for(const n of e){r.innerHTML+=`
                <div id=${n.mal_id} class="sectionSearch js-series">
                    <h5>${n.title}</h5>
                    <img src="${n.images.jpg.image_url}" alt="imagen-anime">
                </div>
            `;const d=document.querySelectorAll(".js-series");for(const u of d)u.addEventListener("click",S)}})}g.addEventListener("click",h);function S(s){console.log(c);const o=s.currentTarget.id,t=c.find(e=>(console.log(e.mal_id),console.log(o),e.mal_id===parseInt(o)));console.log(t),i.push(t),console.log(i),localStorage.setItem("serieUser",JSON.stringify(i)),l.innerHTML="";for(const e of i)l.innerHTML+=`
                <div id=${e.mal_id} class="sectionSearch js-series">
                    <h5>${e.title}</h5>
                    <img src="${e.images.jpg.image_url}" alt="imagen-anime">
                </div>
            `}
//# sourceMappingURL=main.js.map
