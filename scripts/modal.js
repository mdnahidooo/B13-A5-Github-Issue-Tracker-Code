export const createElements = (arr) => {
    const htmlElement = arr.map((el) => `<button class="badge border-yellow-500 text-yellow-500 bg-yellow-200">${el}</button>`);
    return htmlElement.join(" ");
}



export const myModal = (issue) => {


    const statusLevel = issue.status === "open"
            ? "bg-green-500 text-white"
            : "bg-red-500 text-white";
    
    const riskLevel =
            issue.priority === "high"
                ? "bg-red-500 text-white"
                : issue.priority === "medium"
                    ? "bg-yellow-500 text-white"
                    : "bg-blue-500 text-white";

    return `
  <div class="modal-box">


                    <div>
                        <h2 class="font-bold text-xl line-clamp-1 mb-2">${issue.title}</h2>
                        <div class="flex items-center">
                            <button class="badge rounded-xl  ${statusLevel}">${issue.status}</button>
                            <p class="text-[#64748B]"> Opened by <span>${issue.assignee} </span> <span>${issue.updatedAt.split("T")[0]}</span></p>
                        </div>

                        <div class="my-4"> ${createElements(issue.labels)}</div>

                        <p class="text-[#64748B] line-clamp-2 mb-6">${issue.description}</p>


                        <div class="flex items-center gap-20">
                            <div>
                                <p class="text-[#64748B]">Assignee:</p>
                                <h2 class="font-bold text-l">${issue.assignee}</h2>
                            </div>

                            <div>
                                <p class="text-[#64748B]">Priority:</p>
                                <div class="badge  rounded-2xl ${riskLevel}">${issue.priority}</div>
                            </div>
                        </div>
                    </div>

                    <div class="modal-action">
                        <form method="dialog">
                            <!-- if there is a button in form, it will close the modal -->
                            <button class="btn btn-primary">Close</button>
                        </form>
                    </div>
                </div>
    `;
}




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