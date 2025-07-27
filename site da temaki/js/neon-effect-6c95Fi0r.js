import{b as i}from"./audio-context-Cxfw8mDq.js";document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("clickHere"),c=document.querySelector(".neon-shadow"),n=document.getElementById("userAudio")||document.getElementById("backgroundVideo");if(!c||!n)return;const t=window.neonColor||"rgba(128, 0, 128, 0.8)";function r(e,d){return e.replace(/rgba?\(([^,]+),([^,]+),([^,]+)(?:,[^)]+)?\)/,`rgba($1,$2,$3,${d})`)}function o(){if(!i)return;const e=new Uint8Array(i.frequencyBinCount);i.getByteFrequencyData(e);const a=10+e.reduce((u,l)=>u+l,0)/e.length/255*30*2.5;c.style.boxShadow=`
            0 0 ${a}px ${r(t,1)},
            0 0 ${a*2}px ${r(t,.85)},
            0 0 ${a*3}px ${r(t,.7)},
            0 0 ${a*4}px ${r(t,.5)}
        `,requestAnimationFrame(o)}s?s.addEventListener("click",()=>{n.paused?n.addEventListener("play",()=>requestAnimationFrame(o),{once:!0}):requestAnimationFrame(o)}):n.addEventListener("play",()=>requestAnimationFrame(o),{once:!0})});
