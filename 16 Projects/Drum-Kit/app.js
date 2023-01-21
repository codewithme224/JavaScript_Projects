const kit = ["crash", "kick", "snare", "tom"]

const container = document.querySelector(".container");

kit.forEach(kit => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.textContent = kit;
  btn.style.backgroundImage = "url('images/" + kit + ".png')";
  container.appendChild(btn);
  const audio = document.createElement("audio");
  audio.src = "sound/" + kit + ".mp3";
  container.appendChild(audio);

  btn.addEventListener("click", () => {
    audio.play();
  });

  window.addEventListener("keydown", (e) => {
    if(e.key === kit.slice(0, 1)){
      audio.play()
      btn.style.transform = "scale(.9"
      setTimeout(() => {  
        btn.style.transform = "scale(1)"
      }, 100);
    } 
  });

})