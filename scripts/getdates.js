const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open'); // Add CSS to show/hide menu
});
const courseList = document.getElementById('course-list');
const courseTemplate = document.getElementById('course-template').content;
const courseFragment = document.createDocumentFragment();
const courseTitle = document.getElementById('course-title');
const courseDescription = document.getElementById('course-description');
const courseTechnology = document.getElementById('course-technology');
const courseCredits = document.getElementById('course-credits');
const courseCertificate = document.getElementById('course-certificate');
const courseSubject = document.getElementById('course-subject');
const courseNumber = document.getElementById('course-number');
const courseCompleted = document.getElementById('course-completed');
const courseCompletedLabel = document.getElementById('course-completed-label');
const courseCompletedCheckbox = document.getElementById('course-completed-checkbox');
const courseCompletedText = document.getElementById('course-completed-text');





const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to the concepts and techniques of front-end web development. Students will learn to create web pages using HTML, CSS, and JavaScript. Students will also learn to use a variety of tools and frameworks to create responsive and interactive web pages.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
  ]
  const coursesElement = document.getElementById("courseList");

function renderCourses(courseArray) {
  courseElement.innerHTML = ""; // Clear previous content

  courseArray.forEach(course => {
    const div = document.createElement("div");
    div.classList.add("course");
    div.textContent = `${course.code} - ${course.name}`;

    // Apply different class for completed
    if (course.completed) {
      div.classList.add("completed");
    } else {
      div.classList.add("not-completed");
    }

    courseListElement.appendChild(div);
  });
}

// Filter Functions
document.getElementById("allBtn").addEventListener("click", () => {
  renderCourses(courses);
});

document.getElementById("cseBtn").addEventListener("click", () => {
  const cseCourses = courses.filter(course => course.code.startsWith("CSE"));
  renderCourses(cseCourses);
});

document.getElementById("wddBtn").addEventListener("click", () => {
  const wddCourses = courses.filter(course => course.code.startsWith("WDD"));
  renderCourses(wddCourses);
});

// Initial Load
renderCourses(courses);
