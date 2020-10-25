import * as actions from './actionTypes'

const initialState = {
    header: 'Skills',
    skills: [
    ],
    visible: false
}

export default function skills(state = initialState, action) {
    switch (action.type) {
        case actions.SKILLS_UPDATE_HEADER: {
            return {
                ...state,
                header: action.payload.header
            }
        }
        case actions.SKILLS_UPDATE_SKILL: {
            let skillsCopy = [...state.skills]
            skillsCopy[action.payload.id].skill = action.payload.skill

            return {
                ...state,
                skills: skillsCopy
            }
        }
        case actions.SKILLS_UPDATE_DESCRIPTION: {
            let skillsCopy = [...state.skills]
            skillsCopy[action.payload.id].description = action.payload.description
            return {
                ...state,
                skills: skillsCopy
            }
        }
        case actions.SKILLS_ADD_SKILL: {
            let skillsCopy = [...state.skills]
            skillsCopy.push({
                skill: '',
                description: ''
            })
            return {
                ...state,
                skills: skillsCopy,
                visible: true
            }
        }
        case actions.SKILLS_DELETE_SKILL: {
            let skillsCopy = [...state.skills]
            skillsCopy.splice(action.payload.id, 1)
            return {
                ...state,
                skills: skillsCopy,
                visible: skillsCopy.length > 0
            }
        }
        default:
            return state;
    }
}