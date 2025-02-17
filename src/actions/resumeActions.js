import axios from 'axios'

// ------------------------
// ----- Action Types -----
// ------------------------

// ----- Employment -----
export const GET_ALL_EMPLOYMENT = 'GET_ALL_EMPLOYMENT'
export const GET_ONE_EMPLOYMENT = 'GET_ONE_EMPLOYMENT'
export const UPDATE_EMPLOYMENT = 'UPDATE_EMPLOYMENT'
export const DELETE_EMPLOYMENT = 'ELETE_EMPLOYMENT'
export const RESET_EMPLOYMENT = 'RESET_EMPLOYMENT'
export const EMPLOYMENT_LOADING = 'EMPLOYMENT_LOADING '
export const EMPLOYMENT_FAIL = 'EMPLOYMENT_FAIL'
export const EMPLOYMENT_SUCCESS = 'EMPLOYMENT_SUCCESS'
// ----- Education -----
export const GET_ALL_EDUCATION = 'GET_ALL_EDUCATION'
export const GET_ONE_EDUCATION = 'GET_ONE_EDUCATION'
export const UPDATE_EDUCATION = 'UPDATE_EDUCATION'
export const DELETE_EDUCATION = 'DELETE_EDUCATION'
export const RESET_EDUCATION = 'RESET_EDUCATION'
export const EDUCATION_LOADING = 'EDUCATION_LOADING'
export const EDUCATION_FAIL = 'EDUCATION_FAIL'
export const EDUCATION_SUCCESS = 'EDUCATION_SUCCESS'
// ----- Skills -----
export const GET_ALL_SKILLS = 'GET_ALL_SKILLS'
export const GET_ONE_SKILLS = 'GET_ONE_SKILLS'
export const UPDATE_SKILLS = 'UPDATE_SKILLS'
export const DELETE_SKILLS = 'DELETE_SKILLS'
export const RESET_SKILLS = 'RESET_SKILLS'
export const SKILLS_LOADING = 'SKILLS_LOADING'
export const SKILLS_FAIL = 'SKILLS_FAIL'
export const SKILLS_SUCCESS = 'SKILLS_SUCCESS'

// ----- Employment -----

// @Route   GET api/employment
// @Desc    Read All Employment
// @Action  readAllEmployment()
// @Access  Private
export const readAllEmployment = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/employment')
    dispatch({
      type: GET_ALL_EMPLOYMENT,
      payload: res.data,
    })
  } catch (err) {
    if (err.response.data.errors) {
      dispatch({
        payload: { msg: err.response.statusText, status: err.response.status },
      })
    }

    dispatch({
      type: EMPLOYMENT_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// @Route   GET api/employment/:id
// @Desc    Read Employment by ID
// @Action  readEmployment()
// @Access  Private
export const readEmployment = (id) => async (dispatch) => {
  dispatch({ type: RESET_EMPLOYMENT })
  try {
    const res = await axios.get(`/api/employment/${id}`)
    dispatch({
      type: GET_ONE_EMPLOYMENT,
      payload: res.data,
    })
  } catch (err) {
    if (err.response.data.errors) {
      dispatch({
        payload: { msg: err.response.statusText, status: err.response.status },
      })
    }

    dispatch({
      type: EMPLOYMENT_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// @Route   POST api/employment/create-employment
// @Desc    Create Employment
// @Action  createEmployment()
// @Access  Private
export const createEmployment = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    await axios
      .post('/api/employment/create-employment', formData, config)
      .then((res) => console.log(res.data))
    dispatch({
      type: EMPLOYMENT_SUCCESS,
      payload: { msg: formData, status: 'success' },
    })
  } catch (err) {
    if (err.response.data.errors) {
      dispatch({
        payload: { msg: err.response.statusText, status: err.response.status },
      })
    }

    dispatch({
      type: EMPLOYMENT_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// @Route   PUT api/employment/update-employment/:id
// @Desc    Update Employment
// @Action  updateEmployment()
// @Access  Private
export const updateEmployment = (id, formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const res = await axios.post(
      `/api/employment/update-employment/${id}`,
      formData,
      config,
    )
    dispatch({
      type: UPDATE_EMPLOYMENT,
      payload: res.data,
    })
  } catch (err) {
    console.log(err)
    dispatch({
      type: EMPLOYMENT_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// @Route   DELTE api/employment/delete-employment/:id
// @Desc    Delete Employment
// @Action  deleteEmployment()
// @Access  Private
export const deleteEmployment = (id) => async (dispatch) => {
  if (
    window.confirm(
      'Are you sure you want to delete this employment? This cannot be undone.',
    )
  ) {
    try {
      const res = await axios.delete(`/api/employment/delete-employment/${id}`)
      dispatch({
        type: DELETE_EMPLOYMENT,
        payload: res.data,
      })
    } catch (err) {
      console.log(err)
      dispatch({
        type: EMPLOYMENT_FAIL,
        payload: { msg: err.response.statusText, status: err.response.status },
      })
    }
  }
}

// @Desc    reset Employment
// @Action  resetEmployment()
// @Access  Private
export const resetEmployment = () => async (dispatch) => {
  try {
    dispatch({
      type: RESET_EMPLOYMENT,
    })
  } catch (err) {
    if (err.response.data.errors) {
      dispatch({
        payload: {
          msg: err.response.statusText,
          status: err.response.status,
        },
      })
    }

    dispatch({
      type: EMPLOYMENT_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// ----- Education -----

// @Route   GET api/education
// @Desc    Read All Education
// @Action  readAllEducation()
// @Access  Private
export const readAllEducation = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/education')
    dispatch({
      type: GET_ALL_EDUCATION,
      payload: res.data,
    })
  } catch (err) {
    if (err.response.data.errors) {
      dispatch({
        payload: { msg: err.response.statusText, status: err.response.status },
      })
    }

    dispatch({
      type: EDUCATION_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// @Route   GET api/education/:id
// @Desc    Read Education by ID
// @Action  readEducation()
// @Access  Private
export const readEducation = (id) => async (dispatch) => {
  dispatch({ type: RESET_EDUCATION })
  try {
    const res = await axios.get(`/api/education/${id}`)
    dispatch({
      type: GET_ONE_EDUCATION,
      payload: res.data,
    })
  } catch (err) {
    if (err.response.data.errors) {
      dispatch({
        payload: { msg: err.response.statusText, status: err.response.status },
      })
    }

    dispatch({
      type: EDUCATION_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// @Route   POST api/education/create-education
// @Desc    Create Education
// @Action  createEducation()
// @Access  Private
export const createEducation = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    await axios
      .post('/api/education/create-education', formData, config)
      .then((res) => console.log(res.data))
    dispatch({
      type: EDUCATION_SUCCESS,
      payload: { msg: formData, status: 'success' },
    })
  } catch (err) {
    if (err.response.data.errors) {
      dispatch({
        payload: { msg: err.response.statusText, status: err.response.status },
      })
    }

    dispatch({
      type: EDUCATION_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// @Route   PUT api/education/update-education/:id
// @Desc    Update Education
// @Action  updateEducation()
// @Access  Private
export const updateEducation = (id, formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const res = await axios.post(
      `/api/education/update-education/${id}`,
      formData,
      config,
    )
    dispatch({
      type: UPDATE_EDUCATION,
      payload: res.data,
    })
  } catch (err) {
    console.log(err)
    dispatch({
      type: EDUCATION_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// @Route   DELTE api/education/delete-education/:id
// @Desc    Delete Education
// @Action  deleteEducation()
// @Access  Private
export const deleteEducation = (id) => async (dispatch) => {
  if (
    window.confirm(
      'Are you sure you want to delete this education? This cannot be undone.',
    )
  ) {
    try {
      const res = await axios.delete(`/api/education/delete-education/${id}`)
      dispatch({
        type: DELETE_EDUCATION,
        payload: res.data,
      })
    } catch (err) {
      console.log(err)
      dispatch({
        type: EDUCATION_FAIL,
        payload: { msg: err.response.statusText, status: err.response.status },
      })
    }
  }
}

// @Desc    reset Education
// @Action  resetEducation()
// @Access  Private
export const resetEducation = () => async (dispatch) => {
  try {
    dispatch({
      type: RESET_EDUCATION,
    })
  } catch (err) {
    if (err.response.data.errors) {
      dispatch({
        payload: {
          msg: err.response.statusText,
          status: err.response.status,
        },
      })
    }

    dispatch({
      type: EDUCATION_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// ----- Skills -----

// @Route   Post api/skills
// @Desc    Create Skills
// @Action  createSkillsList()
// @Access  Private
export const createSkillsList = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    await axios
      .post('/api/skills/create-skills', formData, config)
      .then((res) => console.log(res.data))
    dispatch({
      type: SKILLS_SUCCESS,
      payload: { msg: formData, status: 'success' },
    })
  } catch (err) {
    if (err.response.data.errors) {
      dispatch({
        payload: { msg: err.response.statusText, status: err.response.status },
      })
    }

    dispatch({
      type: SKILLS_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// @Route   GET api/skills
// @Desc    Read All Skills
// @Action  readAllSkills()
// @Access  Private
export const readAllSkills = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/skills')
    dispatch({
      type: GET_ALL_SKILLS,
      payload: res.data,
    })
  } catch (err) {
    if (err.response.data.errors) {
      dispatch({
        payload: { msg: err.response.statusText, status: err.response.status },
      })
    }

    dispatch({
      type: SKILLS_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// @Route   GET api/skills/:id
// @Desc    Read Skills by ID
// @Action  readSkills()
// @Access  Private
export const readSkills = (id) => async (dispatch) => {
  dispatch({ type: RESET_SKILLS })
  try {
    const res = await axios.get(`/api/skills/${id}`)
    dispatch({
      type: GET_ONE_SKILLS,
      payload: res.data,
    })
  } catch (err) {
    if (err.response.data.errors) {
      dispatch({
        payload: { msg: err.response.statusText, status: err.response.status },
      })
    }

    dispatch({
      type: SKILLS_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// @Route   Post api/skills
// @Desc    Update Skills
// @Action  updateSkills()
// @Access  Private
export const updateSkills = (id, formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const res = await axios.post(
      `/api/skills/update-skills/${id}`,
      formData,
      config,
    )
    dispatch({
      type: UPDATE_SKILLS,
      payload: res.data,
    })
  } catch (err) {
    console.log(err)
    dispatch({
      type: SKILLS_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// @Route   Post api/skills/:id
// @Desc    Delete Skills by ID
// @Action  deleteSkills()
// @Access  Private
