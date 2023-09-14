import PropTypes from 'prop-types';
const Calculate = ({selectedCourse,totalHour,remainHour}) => {
  return (
    <div className=" justify-center bg-white p-3 rounded">
      
      <h2 className=" text-2xl text-blue-500 my-3 font-semibold">Credit Hour Remaining: {remainHour}hr</h2>
      <hr />
      <h2 className=" text-3xl font-semibold mb-4">Course Name</h2>
      {
        selectedCourse.map((course,idx)=>(
          <li className=' text-xl' key={idx}>
            {course.course_name}</li>
          ))
        }
        <hr className='my-4' />
        <h2 className=" my-4 text-xl font-bold">Total Hours:{totalHour}</h2>
    </div>
  )
}
Calculate.propTypes={
  selectedCourse:PropTypes.object.isRequired,
  totalHour:PropTypes.object.isRequired,
  remainHour:PropTypes.object.isRequired,
}
export default Calculate