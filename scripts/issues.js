export const createElements = (arr) => {
    const htmlElement = arr.map((el) => `<button class="badge border-yellow-500 text-yellow-500 bg-yellow-200">${el}</button>`);
    return htmlElement.join(" ");
}


export const createIssues = (issues) => {
    // console.log(issues);

    const count = document.getElementById("count");
    count.textContent = issues.length;


    return issues.map((issue) => {

        const riskLevel =
            issue.priority === "high"
                ? "bg-red-100 text-red-600"
                : issue.priority === "medium"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-blue-100 text-blue-600";

        const topBorder = issue.status === "open"
            ? "border-t-2 border-green-500 rounded-xl"
            : "border-t-2 border-purple-500 rounded-xl"

        return `
         <div data-id="${issue.id}" class="bg-white p-4 rounded-lg  shadow-lg  space-y-6 ${topBorder}">

                <div class="flex justify-between items-center">
                    <img src="./assets/Open-Status.png" alt="">
                    <p class="badge ${riskLevel}">${issue.priority}</p>
                </div>

                <div class="space-y-2">
                    <h2 class="font-bold text-xl line-clamp-1">${issue.title}</h2>
                    <p class="text-[#64748B] line-clamp-2">${issue.description}</p>


                    <div>
                        ${createElements(issue.labels)}
                        
                    </div>
                </div>

                <div class="border-t border-slate-200 my-4"></div>

                <div>
                    <p class="text-[#64748B]">#<span>${issue.id} </span> by <span>${issue.author} </span></p>
                    <p class="text-[#64748B]">${issue.updatedAt.split("T")[0]}</p>
                </div>

            </div>
    `
    }).join('');
};








// {
//     "id": 6,
//     "title": "Fix broken image uploads",
//     "description": "Users are unable to upload images larger than 5MB. Need to increase the file size limit or add compression.",
//     "status": "open",
//     "labels": [
//         "bug"
//     ],
//     "priority": "medium",
//     "author": "emma_ui",
//     "assignee": "",
//     "createdAt": "2024-01-19T15:30:00Z",
//     "updatedAt": "2024-01-19T15:30:00Z"
// }

