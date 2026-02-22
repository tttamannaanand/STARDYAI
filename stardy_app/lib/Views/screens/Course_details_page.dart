import 'package:flutter/material.dart';
import 'package:stardy_app/Views/screens/Larning_Page.dart';
import '../widgets/color_codes.dart';
import '../widgets/courseModel.dart';

class CourseDetailsPage extends StatelessWidget {
  final Course course;

  const CourseDetailsPage({super.key, required this.course});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.primaryDarkBlue,

      /// ---------------- APP BAR ----------------
      appBar: AppBar(
        backgroundColor: AppColors.primaryDarkBlue,
        iconTheme: IconThemeData(
          color: AppColors.white, // Back button color
        ),
        title: Text(
          course.title,
          style: TextStyle(color: AppColors.white, fontWeight: FontWeight.bold),
        ),
      ),

      /// ---------------- BODY ----------------
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            /// Thumbnail
            Image.asset(
              course.image,
              width: double.infinity,
              height: 220,
              fit: BoxFit.cover,
            ),

            Padding(
              padding: const EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  /// Title
                  Text(
                    course.title,
                    style: const TextStyle(
                      color: Colors.white,
                      fontSize: 22,
                      fontWeight: FontWeight.bold,
                    ),
                  ),

                  const SizedBox(height: 8),

                  /// Rating
                  Row(
                    children: [
                      const Icon(Icons.star, color: Colors.orange),
                      const SizedBox(width: 4),
                      Text(
                        course.rating.toString(),
                        style: const TextStyle(color: Colors.orange),
                      ),
                    ],
                  ),

                  const SizedBox(height: 16),

                  /// Progress
                  const Text("Progress", style: TextStyle(color: Colors.grey)),

                  const SizedBox(height: 6),

                  LinearProgressIndicator(
                    value: course.progress,
                    backgroundColor: Colors.grey[800],
                    color: AppColors.primaryOrange,
                    minHeight: 8,
                  ),

                  const SizedBox(height: 8),

                  Text(
                    "${(course.progress * 100).toInt()}% completed",
                    style: const TextStyle(color: Colors.grey),
                  ),

                  const SizedBox(height: 20),

                  /// Upload Date & Duration
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Row(
                        children: [
                          const Icon(
                            Icons.calendar_today,
                            color: Colors.grey,
                            size: 18,
                          ),
                          const SizedBox(width: 6),
                          Text(
                            course.uploadDate,
                            style: const TextStyle(color: Colors.grey),
                          ),
                        ],
                      ),

                      Row(
                        children: [
                          const Icon(
                            Icons.access_time,
                            color: Colors.grey,
                            size: 18,
                          ),
                          const SizedBox(width: 6),
                          Text(
                            course.duration,
                            style: const TextStyle(color: Colors.grey),
                          ),
                        ],
                      ),
                    ],
                  ),

                  const SizedBox(height: 20),

                  /// Description
                  const Text(
                    "Description",
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                    ),
                  ),

                  const SizedBox(height: 8),

                  Text(
                    course.description,
                    style: const TextStyle(color: Colors.grey, height: 1.5),
                  ),

                  const SizedBox(height: 80), // Space for bottom button
                ],
              ),
            ),
          ],
        ),
      ),

      /// ---------------- BOTTOM BUTTON ----------------
      bottomNavigationBar: Padding(
        padding: const EdgeInsets.all(16),
        child: SizedBox(
          height: 55,
          child: ElevatedButton(
            style: ElevatedButton.styleFrom(
              backgroundColor: AppColors.primaryOrange,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(12),
              ),
            ),
            onPressed: () {
              /// Example Navigation
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => LearningPage(course: course),
                ),
              );
            },
            child: const Text(
              "Start Learning",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
                color: Colors.white,
              ),
            ),
          ),
        ),
      ),
    );
  }
}

/// ---------------- SAMPLE LEARNING PAGE ----------------
