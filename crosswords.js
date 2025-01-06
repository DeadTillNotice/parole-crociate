
document.addEventListener("DOMContentLoaded", () => {
  const levelList = document.getElementById("level-list");
  const crosswordModal = document.getElementById("crossword-modal");
  const crosswordContent = document.getElementById("crossword-modal-content");
  const levels = [
    { id: 1, name: "Livello 1", unlocked: true, file: "level1.json" },
    { id: 2, name: "Livello 2", unlocked: true, file: "level2.json" },
    { id: 3, name: "Livello 3", unlocked: true, file: "level3.json" },
    { id: 4, name: "Livello 4", unlocked: true, file: "level4.json" },
    { id: 5, name: "Livello 5", unlocked: true, file: "level5.json" },
    { id: 6, name: "Livello 6", unlocked: true, file: "level6.json" },
    { id: 7, name: "Livello 7", unlocked: true, file: "level7.json" },
    { id: 8, name: "Livello 8", unlocked: true, file: "level8.json" },
    { id: "secret", name: "Secret Level", unlocked: false }
  ];

  levels.forEach(level => {
    const li = document.createElement("li");
    li.textContent = level.name;
    li.className = level.unlocked ? "" : "locked";
    li.id = `level-${level.id}`;
    li.addEventListener("click", () => {
      if (level.id === "secret") {
        if (level.unlocked) {
          // Secret level logic
        } else {
          alert("Completa tutti i livelli per sbloccare il livello segreto!");
        }
      } else {
        loadCrossword(level.file);
      }
    });
    levelList.appendChild(li);
  });

  function loadCrossword(file) {
    fetch(`crosswords/${file}`)
      .then(response => response.json())
      .then(data => {
        crosswordContent.innerHTML = `<h2>${data.title}</h2><p>${data.description}</p>`;
        crosswordModal.classList.add("active");
      })
      .catch(err => alert("Errore nel caricamento del livello."));
  }

  document.getElementById("close-crossword").addEventListener("click", () => {
    crosswordModal.classList.remove("active");
  });
});
