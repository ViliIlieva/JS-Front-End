function solve(text) {
    let splitArr = text.split(/(?=[A-Z])/);

    console.log(splitArr.join(", "));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
solve('HoldTheDoor');
solve('ThisIsSoAnnoyingToDo');