import * as actions from './actionTypes'

export const updateHeader = header => ({
    type: actions.EXPERIENCE_UPDATE_HEADER,
    payload: {
        header: header
    }
})

export const updatePosition = (id, position) => ({
    type: actions.EXPERIENCE_UPDATE_POSITION,
    payload: {
        id: id,
        position: position,
    }
})

export const updateCompany = (id, company) => ({
    type: actions.EXPERIENCE_UPDATE_COMPANY,
    payload: {
        id: id,
        company: company,
    }
})

export const updateCity = (id, city) => ({
    type: actions.EXPERIENCE_UPDATE_CITY,
    payload: {
        id: id,
        city: city,
    }
})

export const updateCountry = (id, country) => ({
    type: actions.EXPERIENCE_UPDATE_COUNTRY,
    payload: {
        id: id,
        country: country,
    }
})

export const updateFromDate = (id, fromDateString) => ({
    type: actions.EXPERIENCE_UPDATE_FROM_DATE,
    payload: {
        id: id,
        fromDateString: fromDateString,
    }
})

export const updateToDate = (id, toDateString) => ({
    type: actions.EXPERIENCE_UPDATE_TO_DATE,
    payload: {
        id: id,
        toDateString: toDateString,
    }
})

export const updateDescription = (id, description) => ({
    type: actions.EXPERIENCE_UPDATE_DESCRIPTION,
    payload: {
        id: id,
        description: description,
    }
})

export const deleteExperience = id => ({
    type: actions.EXPERIENCE_DELETE_EXPERIENCE,
    payload: {
        id: id,
    }
})

export const addExperience = () => ({
    type: actions.EXPERIENCE_ADD_EXPERIENCE,
    payload: {
        
    }
})