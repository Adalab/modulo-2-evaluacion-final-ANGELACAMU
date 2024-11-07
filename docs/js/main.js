const i=document.querySelector(".js-button-search"),a=document.querySelector(".js-input"),o=document.querySelector(".js-section");function r(s){s.preventDefault(),console.log("ha hecho click");const n=a.value;console.log(n),fetch(`https://api.jikan.moe/v4/anime?q=${n}`).then(e=>e.json()).then(e=>{const t=e.data;console.log(t),o.innerHTML="";for(const c of t)o.innerHTML+=`
                <section class="sectionSearch">
                    <h5>${c.title}</h5>
                    <img src="${c.images.jpg.image_url}" alt="imagen-anime">
                </section>
            `})}i.addEventListener("click",r);
//# sourceMappingURL=main.js.map
