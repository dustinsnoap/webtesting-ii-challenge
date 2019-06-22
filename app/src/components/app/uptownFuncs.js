export const take_base = (bases, hit) => {
    bases.unshift(1)
    for(let i=1; i<hit; i++) bases.unshift(0)
    const runs = check_runs(bases)
    return {runs, bases}
}

export const check_runs = (bases) => {
    let runs = 0
    while(bases.length > 3)
        if(bases.pop() === 1) runs++
    return runs
}

export const clear_inning = (state) => {
    state.bases = [0,0,0]
    state.outs = 0
    state.strikes = 0
    state.balls = 0
    state.hits = 0
    state.doubles = 0
    state.triples = 0
    state.homeruns = 0
    state.runs = 0
    return state
}

export const out = (state) => {
    state.strikes = 0
    state.outs++
    if(state.outs === 3) {
        state.current_team++
        state = clear_inning(state)
        if(state.current_team === 2) {
            state.inning++
            state.current_team = 0
        }
    }
    return state
}