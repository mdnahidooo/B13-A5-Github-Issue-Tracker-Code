import { fetchIssues } from "./api.js";
import { createIssues } from "./issues.js";
import { myModal } from "./modal.js";

const cardSection = document.getElementById("card-section");
const loadingSpinner = document.getElementById("loading-spinner");

function showLoading() {
    loadingSpinner.classList.remove("hidden");
    cardSection.innerHTML = "";
}
function hideLoading() {
    loadingSpinner.classList.add("hidden");
}



const loadIssues = async () => {


    const issues = await fetchIssues();
    const issuesHTML = createIssues(issues);
    cardSection.innerHTML = issuesHTML;
    // console.log(issuesHTML);
    // console.log(issues);

};


const allTab = document.getElementById("all-tab");
const openTab = document.getElementById("open-tab");
const closedTab = document.getElementById("closed-tab");


allTab.addEventListener("click", async () => {
    allTab.classList.add("btn-primary");
    openTab.classList.remove("btn-primary");
    closedTab.classList.remove("btn-primary");

    showLoading();

    const issues = await fetchIssues();
    const issuesHTML = createIssues(issues);
    cardSection.innerHTML = issuesHTML;

    hideLoading();
});


openTab.addEventListener("click", async () => {
    openTab.classList.add("btn-primary");
    allTab.classList.remove("btn-primary");
    closedTab.classList.remove("btn-primary");

    showLoading();

    const issues = await fetchIssues();
    const openStatus = issues.filter((issue) => issue.status === 'open');
    const issuesHTML = createIssues(openStatus);
    cardSection.innerHTML = issuesHTML;

    hideLoading();
})
closedTab.addEventListener("click", async () => {
    closedTab.classList.add("btn-primary");
    allTab.classList.remove("btn-primary");
    openTab.classList.remove("btn-primary");

    showLoading();

    const issues = await fetchIssues();
    const closedStatus = issues.filter((issue) => issue.status === 'closed');
    const issuesHTML = createIssues(closedStatus);
    cardSection.innerHTML = issuesHTML;

    hideLoading();
})

loadIssues();


const modal = document.getElementById("details_modal");

cardSection.addEventListener("click", async (e) => {
    const div = e.target.closest("div[data-id]");
    const id = div.dataset.id;
    console.log(id);
    const issues = await fetchIssues();
    
    const issue = issues.find((issue) => issue.id == id);

    const createHTML = myModal(issue);

    modal.innerHTML = createHTML;
    modal.showModal();
})


