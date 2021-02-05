document.addEventListener("DOMContentLoaded", function() {
    const API_URL = "https://swapi.dev/api";
    
    let $tbody, $select;
    let episodes = [];

    $tbody = document.querySelector(".js-table-body");
    $select = document.querySelector(".js-episodes");

    $select.disabled = true;
    $select.addEventListener("change", handleChange, false);

    getEpisodes((result) => {
        if (!result) {
            return;
        }

        episodes = result.results;

        renderSelectOptions(episodes);

        $select.disabled = false;
    });
    

    function getEpisodes(cb) {
        let url = `${API_URL}/films`;
        $.get(url, cb);
    }

    function renderSelectOptions(episodes) {

        episodes.forEach((episode) => {
            let $option = document.createElement("option");

            $option.setAttribute("value", episode.episode_id);
            $option.textContent = episode.title;

            $select.appendChild($option);
        });
    }

    function handleChange(e) {
        e.preventDefault();
        let episodeId = e.target.value;
        let data = episodes.find(episode => episode.episode_id == episodeId);

        if (!data || !data.title || !data.release_date) {
            console.log("data object is invalid");
            return false;
        }

        // TODO: remove target episode from the select because its now rendered on the table
        renderTableRow(data);
    }
    
    function renderTableRow(data) {
        let title = data.title || "Default Title";
        let releaseDate = data.release_date || "9999";
        let $row = document.createElement("tr");
        let $title = document.createElement("td");
        let $releaseDate = document.createElement("td");

        $row.classList.add("row");
        $title.classList.add("title");
        $releaseDate.classList.add("release-date");

        $title.textContent = title;
        $releaseDate.textContent = releaseDate;
        
        $row.appendChild($title);
        $row.appendChild($releaseDate);

        if (!$tbody) return;

        $tbody.appendChild($row);
    }
});
