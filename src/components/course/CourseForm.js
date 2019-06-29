import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import PropTypes from 'prop-types';
class CourseForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    const { course, errors, authors, onChange, onSave } = { ...this.props };

    return (
      <form className="form-group" onSubmit={onSave}>
        <h2>{course.id ? "Edit" : "Add"} Course</h2>
        {errors.onSave && (
          <div className="alert alert-danger" role="alert">
            {errors.onSave}
          </div>
        )}
        {/* <TextInput
              name="title"
              label="Title"
              value={course.title}
              onChange={onChange}
              error={errors.title}
            />
      
            <SelectInput
              name="authorId"
              label="Author"
              value={course.authorId || ""}
              defaultOption="Select Author"
              options={authors.map(author => ({
                value: author.id,
                text: author.name
              }))}
              onChange={onChange}
              error={errors.author}
            />
      
            <TextInput
              name="category"
              label="Category"
              value={course.category}
              onChange={onChange}
              error={errors.category}
            /> */}
        <div className="form-group">Title : <input name={'title'} type='text' onChange={onChange}></input></div>
        <div className="form-group">Author : <select className="form-control">
          <option key='selected' selected='selected'>{"default"}</option>
          {authors.map(author => {return (<option key={author.id} value={author.name}>{author.name}</option>)})}           
        </select>
        <div className='form-group'>
          Category : <input name={'category'} type='text' onChange={onChange}></input>
        </div>
        </div>

        <button type="submit" disabled={this.props.saving} className="btn btn-primary">
          {this.props.saving ? "Saving..." : "Save"}
        </button>
      </form>
    )
  }
}

CourseForm.propTypes = {
  authors: PropTypes.array.isRequired,
  course: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default CourseForm;