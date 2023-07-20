async function loadCommits() {
    const BASE_URL = 'https://api.github.com/repos';
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const commits = document.getElementById('commits');

    const loader = document.getElementById('loader');

    try{
        loader.style.display = 'block';//докато зарежда данните да се покаже
        const allCommitsRes = await fetch(`${BASE_URL}/${username}/${repo}/commits`)//ще взема всички commits понеже те са промис си правим още един await
        const data = await allCommitsRes.json();
        loader.style.display = 'none';//слид зареждане на данните да изчезне
        data.forEach(({commit}) => {//връща ни масив, обхождаме го
            const li = document.createElement('li');
            li.textContent = `${commit.author.name}: ${commit.message}`;//вземаме му автора, съобщението
            commits.appendChild(li);//прикачаме ги като деца в дадения html елемент
        })
    }catch (err){
        const li = document.createElement('li');
        li.textContent = err.message;
        commits.appendChild(li);
    }
}