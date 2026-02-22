import '../widgets/courseModel.dart';

final List<Course> courses = [
  Course(
    title: "Mastering Python",
    image: "assets/images/stardy-logo.png",
    rating: 5.0,
    progress: 0.0,
    category: "TECH",
    uploadDate: "Feb 10, 2026",
    duration: "8h 30m",
    description:
        "Learn Python from basics to advanced including OOP and real-world projects.",
    chapters: [
      Chapter(
        title: "Python Basics",
        topics: [
          Topic(
            title: "What is Python?",
            videoUrl: "https://www.youtube.com/watch?v=kqtD5dpn9C8",
          ),
          Topic(
            title: "Variables & Data Types",
            videoUrl: "https://www.youtube.com/watch?v=ohCDWZgNIU0",
          ),
        ],
      ),
      Chapter(
        title: "Advanced Python",
        topics: [
          Topic(
            title: "OOP in Python",
            videoUrl: "https://www.youtube.com/watch?v=JeznW_7DlB0",
          ),
          Topic(
            title: "Build a Project",
            videoUrl: "https://www.youtube.com/watch?v=rfscVS0vtbw",
          ),
        ],
      ),
    ],
  ),

  Course(
    title: "Flutter UI Design",
    image: "assets/images/stardy-logo.png",
    rating: 4.8,
    progress: 0.0,
    category: "MOBILE",
    uploadDate: "Jan 28, 2026",
    duration: "6h 15m",
    description: "Build beautiful and responsive Flutter UIs.",
    chapters: [
      Chapter(
        title: "Flutter Basics",
        topics: [
          Topic(
            title: "Intro to Flutter",
            videoUrl: "https://www.youtube.com/watch?v=1ukSR1GRtMU",
          ),
          Topic(
            title: "Understanding Widgets",
            videoUrl: "https://www.youtube.com/watch?v=x0uinJvhNxI",
          ),
        ],
      ),
      Chapter(
        title: "UI Layout",
        topics: [
          Topic(
            title: "Row & Column",
            videoUrl: "https://www.youtube.com/watch?v=c1xLMaTUWCY",
          ),
          Topic(
            title: "Responsive UI",
            videoUrl: "https://www.youtube.com/watch?v=KJpkjHGiI5A",
          ),
        ],
      ),
    ],
  ),
];
