export function rps(p1:string, p2:string):string{
    p2 = p2.toLowerCase();
    if (p2 != "rock" && p2 != "scissors"&& p2 != "paper")
    return("Player 2 has Unknown Option!");
    switch (p1.toLowerCase()) {
        case p2:
            return "TIE";
        case "rock":
            if (p2 == "paper") return "Player 2 wins"; 
            break;
        case "paper":
            if (p2 == "scissors") return "Player 2 wins"; 
            break;
        case "scissors":
            if (p2 == "rock") return "Player 2 wins"; 
            break;
        default:
            return "Player 1 has Unknown Option!";
    }
    return "Player 1 wins"
}