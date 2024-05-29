const navLi = document.querySelector(".navigation").querySelectorAll("li");
const githubReposItems = document.querySelector(".githubReposItems");
new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  verticalCentered: false,
  paddingTop: "50px",

  afterLoad: function (origin, destination, direction, trigger) {
    for (let i = 0; i < navLi.length; i++) {
      if (i === fullpage_api.getActiveSection().index()) {
        navLi[i].classList.add("selected");
      } else {
        navLi[i].classList.remove("selected");
      }
    }
  },
});

fetch(
  "https://api.github.com/users/muddyC0de/repos?q=stars%3A%3E0&sort=stars&order=desc"
)
  .then((res) => res.json())
  .then((repos) => {
    let reposItems = "";
    for (let rep of repos.slice(0, 3)) {
      const date = new Date(rep.updated_at);
      console.log(rep);
      reposItems += `<a href=${rep.svn_url}><div class="githubReposItem">
    <h2>${rep.name}</h2>
    <p>${rep.description ? rep.description : ""}</p>
    <div class='repoInfo'>
      <span ><div class=${rep.language}></div>${rep.language}</span>
      <span> <img src="./img/star.svg" alt=""> ${rep.stargazers_count}</span>
      <span> <img src="./img/fork.svg" alt="">${rep.forks_count}</span>
      <span>Updated on ${date.getDate()} ${date.toLocaleString("en-En", {
        month: "long",
      })}</span>
    </div>
  </div></a>`;
    }

    githubReposItems.insertAdjacentHTML("beforeend", reposItems);
  });

const moveToFunc = (index) => {
  fullpage_api.moveTo(index);
};
