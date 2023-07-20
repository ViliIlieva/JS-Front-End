async function loadRepos() {
    const username = document.getElementById("username").value;
    const ul = document.getElementById("repos");
    try {
        const response = await fetch(
            `https://api.github.com/users/${username}/repos`
        );

        if (response.ok == false) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
        const data = await response.json();

        ul.innerHTML = "";
        for (let repo of data) {
            ul.innerHTML += `<li>
		  <a href="${repo.html_url}" target="_blank">${repo.full_name}</a>
		</li>`;
        }
    } catch (err) {
        ul.innerHTML = `${err.message}`;
    }
}