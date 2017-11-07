import C from './constants'
import { allSkiDays, goal } from './initialState.json'

console.log(`
  Ski Day Counter 
  ===============
  The goal is ${goal} allSkiDays
  initially there are ${allSkiDays.length} ski days in initialState
  Constants (actions)
  -------------------
  ${Object.keys(C).join('\n      ')}
  
`)