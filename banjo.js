function areYouPlayingBanjo (name){
    if (name.charAt(0) === 'r' || name.charAt(0) === 'R'){
        console.log(name, 'plays banjo')
    }
    else console.log(name, 'does not play banjo')
}

areYouPlayingBanjo('Robert')