import React from 'react'
import PropTypes from 'prop-types'
import { HabitPostTemplate } from '../../templates/habit-post'

const HabitPostPreview = ({ entry, widgetFor }) => (
  <HabitPostTemplate
    content={widgetFor('body')}
    habit={entry.getIn(['data', 'habit'])}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
)

HabitPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default HabitPostPreview
