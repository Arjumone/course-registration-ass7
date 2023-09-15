import { useEffect } from "react";
import { useState } from "react";
import Calculate from "../Calculate/Calculate";
import swal from "sweetalert";
import { FaBookOpen, FaDollarSign } from "react-icons/fa";
const Home = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [totalHour, setTotalHour] = useState(0);
  const [remainHour, setRemainHour] = useState(0);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  const handleSelectCourse = (course) => {
    const isThere = selectedCourse.find((crs) => crs.id == course.id);
    let hour = course.credit_time;
    if (isThere) {
      swal("Already added the Course!");
    } else {
      selectedCourse.forEach((crs) => {
        hour = hour + crs.credit_time;
      });
      const remainTime = 20 - hour;
      console.log(remainHour);
      if (hour > 20) {
        swal("Ops!!! Sorry. Credit Hours limitation are finished");
      } else {
        setRemainHour(remainTime);
        setTotalHour(hour);
        setSelectedCourse([...selectedCourse, course]);
      }
    }
  };
  return (
    <div className="container mx-auto">
      <div className="home-container flex flex-col lg:flex-row space-x-20">
        <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:w-3/4">
          {courses.map((course) => (
            <div
              className="border-2 p-5 rounded-lg bg-white h-full w-full"
              key={course.id}
            >
              <div className=" ">
                <img className="w-full" src={course.image} alt="" />
              </div>
              <div>
                <h2 className=" mt-1 font-bold ">{course.course_name}</h2>
                <p className=" my-2">
                  <small className=" h-6">{course.description}</small>
                </p>
              </div>
              <div className="flex flex-col lg:flex-row justify-between my-2 font-bold">
                <div className=" flex items-center space-x-1">
                <h2><FaDollarSign></FaDollarSign></h2>
                <p>Price:{course.price} </p>
                </div>
                <div className=" flex items-center space-x-1">
                  <h1>
                    <FaBookOpen></FaBookOpen>
                  </h1>
                  <p className=" items-center">
                    Credit Time:{course.credit_time}
                  </p>
                </div>
              </div>
              <div className=" text-center">
                <button
                  onClick={() => handleSelectCourse(course)}
                  className=" btn mt-auto bg-blue-500 hover:bg-blue-700 text-white w-full"
                >
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:w-1/4">
          <Calculate
            selectedCourse={selectedCourse}
            totalHour={totalHour}
            remainHour={remainHour}
          ></Calculate>
        </div>
      </div>
    </div>
  );
};

export default Home;
