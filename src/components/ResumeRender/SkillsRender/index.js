/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { readAllSkills } from '../../../actions'
import './_skillsRender.scss'

const SkillsRender = ({
  readAllSkills,
  skills: { allSkills, loading: skills_loading },
}) => {
  useEffect(() => {
    readAllSkills()
  }, [])

  return (
    <>
      {!skills_loading ? (
        <p>Loading...</p>
      ) : (
        <div className="skillsRender mx-4">
          {allSkills && allSkills.length > 0 && <>{allSkills[0].skills}</>}
        </div>
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  resumeSkillsReducer: state.resumeSkillsReducer,
  skills: state.skills,
})

export default connect(mapStateToProps, {
  readAllSkills,
})(SkillsRender)
