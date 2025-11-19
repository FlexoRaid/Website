document.addEventListener("DOMContentLoaded", function() {

    // Visitor counter

        (function() {
        var s = document.createElement('script');
        s.src = "https://counterapi.com/c.js";
        s.async = true;
        document.getElementById('visitor-counter').appendChild(s);
    })();
    
    // Age calculation

    (function() {
        const birth = new Date(2009, 6, 22, 12, 30);

        function calculateAgeYearsDecimal(birthDate) {
            const now = new Date();
            const diffMs = now - birthDate;
            const msPerYear = 365.2425 * 24 * 60 * 60 * 1000;
            return diffMs / msPerYear;
        }

        function updateAgeDisplay() {
            const yearsDecimal = calculateAgeYearsDecimal(birth);
            const formatted = yearsDecimal.toFixed(2);
            const ageP = document.getElementById('age');
            if (ageP) {
                ageP.textContent = `${formatted} years old | July 22, 2009`;
            }
        }

        setInterval(updateAgeDisplay, 1000);
        updateAgeDisplay();
    })();

    // Chess games
    const USERNAME = "kolege_von_hettinger";
    const tbody = document.getElementById("games-table-body");
    const loading = document.getElementById("loading");

    const resultMap = {
      win: { text: "won", class: "result-win" },
      checkmated: { text: "lost", class: "result-loss" },
      resigned: { text: "lost", class: "result-loss" },
      timeout: { text: "lost", class: "result-loss" },
      stalemate: { text: "draw", class: "result-draw" },
      agreed: { text: "draw", class: "result-draw" },
      repetition: { text: "draw", class: "result-draw" },
      insufficient: { text: "draw", class: "result-draw" },
      abandoned: { text: "abandoned", class: "result-abandoned" }
    };

    async function fetchAllGames(username) {
      try {
        const archivesResp = await fetch(`https://api.chess.com/pub/player/${username}/games/archives`);
        const archivesData = await archivesResp.json();
        let allGames = [];

        for (const archive of archivesData.archives) {
          const monthResp = await fetch(archive);
          const monthData = await monthResp.json();
          if (monthData.games) allGames = allGames.concat(monthData.games);
        }

        return allGames;
      } catch (err) {
        console.error("Fehler beim Abrufen der Spiele:", err);
        return [];
      }
    }

    function populateTable(games) {
      tbody.innerHTML = "";

      if (!games.length) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;">Keine Spiele gefunden</td></tr>`;
        return;
      }

      games.reverse().forEach(game => {
        const meWhite = game.white.username.toLowerCase() === USERNAME.toLowerCase();
        const opponent = meWhite ? game.black.username : game.white.username;
        const oppElo = meWhite ? game.black.rating : game.white.rating;
        const resultRaw = meWhite ? game.white.result : game.black.result;

        const result = resultMap[resultRaw] || { text: resultRaw, class: "result-draw" };
        const date = new Date(game.end_time * 1000).toLocaleDateString();

        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${opponent}</td>
          <td>${oppElo || "-"}</td>
          <td class="${result.class}">${result.text}</td>
          <td>${game.time_class || "-"}</td>
          <td>${date}</td>
        `;
        tbody.appendChild(tr);
      });
    }

    async function loadChessGames() {
      loading.style.display = "block";
      const games = await fetchAllGames(USERNAME);
      loading.style.display = "none";
      populateTable(games);
    }

    loadChessGames();
});
