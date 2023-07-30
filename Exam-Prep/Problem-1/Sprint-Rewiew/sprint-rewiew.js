function solve(input) {
    const n = input.shift();
    let sprintBoard = {};
    for (let i = 0; i < n; i++) {
        let [assignees, taskId, title, status, points] = input.shift().split(':');
        if (!sprintBoard.hasOwnProperty(assignees)) {
            sprintBoard[assignees] = [];
        }
        sprintBoard[assignees].push({taskId, title, status, points});
    }

    let commandParser = {
        'Add New': addTaskToEnd,
        'Change Status': changeStatus,
        'Remove Task': removeTask,
    }

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(':')[0];
        commandParser[command](...input[i].split(':').slice(1));
    }

    let toDoTasksTotalPoints = getTotalPointsForStatus('ToDo');
    console.log(`ToDo: ${toDoTasksTotalPoints}pts`);
    let inProgressTasksTotalPoints = getTotalPointsForStatus('In Progress');
    console.log(`In Progress: ${inProgressTasksTotalPoints}pts`);
    let codeReviewTasksTotalPoints = getTotalPointsForStatus('Code Review');
    console.log(`Code Review: ${codeReviewTasksTotalPoints}pts`);
    let doneTasksTotalPoints = getTotalPointsForStatus('Done');
    console.log(`Done Points: ${doneTasksTotalPoints}pts`);

    if (doneTasksTotalPoints >= toDoTasksTotalPoints + inProgressTasksTotalPoints + codeReviewTasksTotalPoints) {
        console.log(`Sprint was successful!`);
    } else {
        console.log(`Sprint was unsuccessful...`);
    }

    function addTaskToEnd(assignee, taskId, title, status, points) {
        if (sprintBoard.hasOwnProperty(assignee)) {
            sprintBoard[assignee].push({taskId, title, status, points})
        } else {
            console.log(`Assignee ${assignee} does not exist on the board!`);
        }
    }

    function changeStatus(assignee, taskIdToChange, newStatus) {
        if (sprintBoard.hasOwnProperty(assignee)) {
            let task = sprintBoard[assignee].find((t) => t.taskId === taskIdToChange);
            if (task !== undefined) {
                task.status = newStatus;
            } else {
                console.log(`Task with ID ${taskIdToChange} does not exist for ${assignee}!`);
            }
        } else {
            console.log(`Assignee ${assignee} does not exist on the board!`);
        }
    }

    function removeTask(assignee, index) {
        if (sprintBoard.hasOwnProperty(assignee)) {
            if (sprintBoard[assignee].length <= index || index < 0) {
                console.log(`Index is out of range!`);
            } else {
                sprintBoard[assignee].splice(index, 1);
            }
        } else {
            console.log(`Assignee ${assignee} does not exist on the board!`);
        }
    }

    function getTotalPointsForStatus(status) {
        return Object.values(sprintBoard)
            .reduce((totalPointsSum, tasks) => {
                return totalPointsSum + tasks.filter(t => t.status === status)
                    .map(t => Number(t.points))
                    .reduce((a, b) => a + b, 0);
            }, 0)
    }
}

solve(
    [
        '4',
        'Kiril:BOP-1213:Fix Typo:Done:1',
        'Peter:BOP-1214:New Products Page:In Progress:2',
        'Mariya:BOP-1215:Setup Routing:ToDo:8',
        'Georgi:BOP-1216:Add Business Card:Code Review:3',
        'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
        'Change Status:Georgi:BOP-1216:Done',
        'Change Status:Will:BOP-1212:In Progress',
        'Remove Task:Georgi:3',
        'Change Status:Mariya:BOP-1215:Done',
    ]
);