import React from 'react'

import Wrapper from './style'
import Dashboard from '../dashboard'
import Display from '../display'

import {take_base, out} from './uptownFuncs'

class App extends React.Component {
    state = {
        scores: [0,0],
        inning: 1,
        bases: [0,0,0],
        team_names: ['Blurns', 'Anti-Blurns'],
        current_team: 0,
        outs: 0,
        strikes: 0,
        balls: 0,
        hits: 0,
        doubles: 0,
        triples: 0,
        homeruns: 0,
        runs: 0,
    }
    hit = () => {
        this.setState(prev => {
            prev.hits++
            const hit = Math.floor(Math.random() * 4) + 1
            if(hit === 2) prev.doubles++
            if(hit === 3) prev.triples++
            if(hit === 4) prev.homeruns++

            const {runs, bases} = take_base(prev.bases, hit)
            prev.bases = bases
            prev.runs += runs
            prev.scores[prev.current_team] += runs
            return {...prev}
        })
    }
    ball = () => {
        this.setState(prev => {
            prev.balls++
            if(prev.balls === 4) {
                prev.balls = 0
            }
            return {...prev}
        })
    }
    strike = () => {
        this.setState(prev => {
            prev.strikes++
            if(prev.strikes >= 3)
                prev = out(prev)
            return {...prev}
        })
    }
    render = () =>
        <Wrapper className='app'>
            <Display
                stats={this.state}
                />
            <Dashboard
                strike={this.strike}
                ball={this.ball}
                hit={this.hit}
            />
        </Wrapper>
}

export default App