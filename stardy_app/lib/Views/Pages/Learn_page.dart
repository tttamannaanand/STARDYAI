import 'package:flutter/material.dart';
import '../widgets/color_codes.dart';
import '../widgets/courseModel.dart';
import '../widgets/courseCard.dart';

class LearnPage extends StatefulWidget {
  const LearnPage({super.key});

  @override
  State<LearnPage> createState() => _LearnPageState();
}

class _LearnPageState extends State<LearnPage> {
  final day_streak = 8;
  bool isSearching = false;
  final List<Course> courses = [
    Course(
      title: "Mastering Python",
      image: "assets/images/stardy-logo.png",
      rating: 5.0,
      progress: 0.65,
      category: "TECH",
    ),
    Course(
      title: "Flutter UI Design",
      image: "assets/images/stardy-logo.png",
      rating: 4.8,
      progress: 0.45,
      category: "MOBILE",
    ),
    Course(
      title: "AI Fundamentals",
      image: "assets/images/stardy-logo.png",
      rating: 4.9,
      progress: 0.80,
      category: "AI",
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        toolbarHeight: 60,
        backgroundColor: AppColors.primaryDarkBlue,
        elevation: 0,

        title: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            const Text(
              "STARDY.AI",
              style: TextStyle(
                color: AppColors.white,
                fontWeight: FontWeight.bold,
                fontSize: 18,
              ),
            ),
            Container(
              height: 40,
              width: 40,
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(20),
                image: const DecorationImage(
                  image: AssetImage("assets/images/stardy-logo.png"),
                  fit: BoxFit.cover,
                ),
              ),
            ),
          ],
        ),
        bottom: PreferredSize(
          preferredSize: const Size.fromHeight(65),
          child: Container(
            height: 65,
            alignment: Alignment.centerLeft,
            padding: const EdgeInsets.symmetric(horizontal: 16),
            child: isSearching
                ? Row(
                    children: [
                      Expanded(
                        child: Container(
                          height: 46,
                          decoration: BoxDecoration(
                            color: Colors.white,
                            borderRadius: BorderRadius.circular(25),
                          ),
                          child: TextField(
                            autofocus: true,
                            decoration: InputDecoration(
                              hintText: "Search courses...",
                              border: InputBorder.none,
                              contentPadding: EdgeInsets.symmetric(
                                horizontal: 16,
                              ),
                            ),
                          ),
                        ),
                      ),
                      IconButton(
                        icon: Icon(Icons.close, color: AppColors.white),
                        onPressed: () {
                          setState(() {
                            isSearching = false;
                          });
                        },
                      ),
                    ],
                  )
                : Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            'Learning Center',
                            style: TextStyle(
                              color: AppColors.white,
                              fontSize: 20,
                              fontWeight: FontWeight.w900,
                            ),
                          ),
                          Row(
                            children: [
                              Icon(
                                Icons.flash_on_sharp,
                                color: AppColors.primaryOrange,
                                size: 25,
                              ),
                              SizedBox(width: 6),
                              Text(
                                "$day_streak Day Streaks",
                                style: TextStyle(
                                  color: AppColors.primaryOrange,
                                  fontWeight: FontWeight.w700,
                                  fontSize: 20,
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
                      Container(
                        height: 40,
                        width: 40,
                        decoration: BoxDecoration(
                          color: const Color.fromARGB(
                            255,
                            231,
                            233,
                            237,
                          ).withOpacity(0.4),
                          shape: BoxShape.circle,
                        ),
                        child: IconButton(
                          padding: EdgeInsets.zero,
                          icon: Icon(
                            Icons.search,
                            color: AppColors.white,
                            size: 20,
                          ),
                          onPressed: () {
                            setState(() {
                              isSearching = true;
                            });
                          },
                        ),
                      ),
                    ],
                  ),
          ),
        ),
      ),
      body: Container(
        color: Colors.black,
        padding: const EdgeInsets.all(16),
        child: ListView.builder(
          itemCount: courses.length,
          itemBuilder: (context, index) {
            return CourseCard(course: courses[index]);
          },
        ),
      ),
    );
  }
}
