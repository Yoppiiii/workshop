function hasPenalty(records){
    // 関数を完成させてください
    for(let i = 1; i < records.length; i++){
        if (records[i-1] > records[i]) {
            return true;
        }
    }
    return false;
}
