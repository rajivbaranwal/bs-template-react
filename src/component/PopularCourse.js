import { useEffect, useState } from "react";

function PopularCourse() {
  const [data, setData] = useState(0);
  const [name, setName] = useState("Rajiv");
  let count = 0;
  const handleClick = () => {
    console.log("data", data);
    setData(data + 1);
    count = count + 1;
  };

  // useEffect(callback, [])
  // useEffect(() => {}, [])

  useEffect(() => {
    console.log("data", data, "ye function component mopunt hone pr call hoga");
  }, []);

  useEffect(() => {
    console.log("data ki value badalne pr call hoga", data);
  }, [data]);
  useEffect(() => {
    console.log("every render pr call hoga", data);
  });

  const handleName = () => {
    setName("Bhoomika");
  };

  return (
    <div>
      <div class="popular_courses">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-5">
              <div class="main_title">
                data: {data} <br /> count: {count}
                <br />
                name: {name}
                <h2 class="mb-3" onClick={handleClick}>
                  Our Popular Courses
                </h2>
                <p onClick={handleName}>
                  Replenish man have thing gathering lights yielding shall you
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            {/* <!-- single course --> */}
            <div class="col-lg-12">
              <div class="owl-carousel active_course">
                <div class="single_course">
                  <div class="course_head">
                    <img class="img-fluid" src="img/courses/c1.jpg" alt="" />
                  </div>
                  <div class="course_content">
                    <span class="price">$25</span>
                    <span class="tag mb-4 d-inline-block">design</span>
                    <h4 class="mb-3">
                      <a href="course-details.html">Custom Product Design</a>
                    </h4>
                    <p>
                      One make creepeth man bearing their one firmament won't
                      fowl meat over sea
                    </p>
                    <div class="course_meta d-flex justify-content-lg-between align-items-lg-center flex-lg-row flex-column mt-4">
                      <div class="authr_meta">
                        <img src="img/courses/author1.png" alt="" />
                        <span class="d-inline-block ml-2">Cameron</span>
                      </div>
                      <div class="mt-lg-0 mt-3">
                        <span class="meta_info mr-4">
                          <a href="#">
                            {" "}
                            <i class="ti-user mr-2"></i>25{" "}
                          </a>
                        </span>
                        <span class="meta_info">
                          <a href="#">
                            {" "}
                            <i class="ti-heart mr-2"></i>35{" "}
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="single_course">
                  <div class="course_head">
                    <img class="img-fluid" src="img/courses/c2.jpg" alt="" />
                  </div>
                  <div class="course_content">
                    <span class="price">$25</span>
                    <span class="tag mb-4 d-inline-block">design</span>
                    <h4 class="mb-3">
                      <a href="course-details.html">Social Media Network</a>
                    </h4>
                    <p>
                      One make creepeth man bearing their one firmament won't
                      fowl meat over sea
                    </p>
                    <div class="course_meta d-flex justify-content-lg-between align-items-lg-center flex-lg-row flex-column mt-4">
                      <div class="authr_meta">
                        <img src="img/courses/author2.png" alt="" />
                        <span class="d-inline-block ml-2">Cameron</span>
                      </div>
                      <div class="mt-lg-0 mt-3">
                        <span class="meta_info mr-4">
                          <a href="#">
                            {" "}
                            <i class="ti-user mr-2"></i>25{" "}
                          </a>
                        </span>
                        <span class="meta_info">
                          <a href="#">
                            {" "}
                            <i class="ti-heart mr-2"></i>35{" "}
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="single_course">
                  <div class="course_head">
                    <img class="img-fluid" src="img/courses/c3.jpg" alt="" />
                  </div>
                  <div class="course_content">
                    <span class="price">$25</span>
                    <span class="tag mb-4 d-inline-block">design</span>
                    <h4 class="mb-3">
                      <a href="course-details.html">Computer Engineering</a>
                    </h4>
                    <p>
                      One make creepeth man bearing their one firmament won't
                      fowl meat over sea
                    </p>
                    <div class="course_meta d-flex justify-content-lg-between align-items-lg-center flex-lg-row flex-column mt-4">
                      <div class="authr_meta">
                        <img src="img/courses/author3.png" alt="" />
                        <span class="d-inline-block ml-2">Cameron</span>
                      </div>
                      <div class="mt-lg-0 mt-3">
                        <span class="meta_info mr-4">
                          <a href="#">
                            {" "}
                            <i class="ti-user mr-2"></i>25{" "}
                          </a>
                        </span>
                        <span class="meta_info">
                          <a href="#">
                            {" "}
                            <i class="ti-heart mr-2"></i>35{" "}
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularCourse;
