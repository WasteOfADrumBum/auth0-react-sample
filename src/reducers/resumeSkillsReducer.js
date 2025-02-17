import {
  GET_ALL_SKILLS,
  GET_ONE_SKILLS,
  UPDATE_SKILLS,
  DELETE_SKILLS,
  RESET_SKILLS,
  SKILLS_LOADING,
  SKILLS_FAIL,
  SKILLS_SUCCESS,
} from '../actions'

const resumeSkillsReducer = (
  state = {
    allSkills: [], // Pulls in all skills
    skills: null, // Pulls in Specific skills
    loading: false, // Has everything need been loaded
    success: {},
    error: {},
  },
  action,
) => {
  const { type, payload } = action
  switch (type) {
    case GET_ALL_SKILLS:
      return {
        ...state,
        allSkills: payload,
        loading: true,
      }
    case GET_ONE_SKILLS:
      return {
        ...state,
        skills: payload,
        loading: true,
      }
    case UPDATE_SKILLS:
      return {
        ...state,
        skills: payload,
        loading: true,
      }
    case DELETE_SKILLS:
      return {
        ...state,
        allSkills: payload,
        loading: true,
      }
    case RESET_SKILLS:
      return {
        ...state,
        skills: null,
        loading: false,
      }
    case SKILLS_LOADING:
      return {
        ...state,
        loading: true,
        skills: null,
        error: {},
      }
    case SKILLS_FAIL:
      return {
        ...state,
        error: payload,
        allSkills: [],
        skills: null,
        loading: false,
      }
    case SKILLS_SUCCESS:
      return {
        ...state,
        skills: payload,
        allSkills: [payload, ...state.allSkills],
        loading: false,
      }
    default:
      return state
  }
}

export default resumeSkillsReducer
