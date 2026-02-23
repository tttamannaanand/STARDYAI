import 'package:flutter/material.dart';
import '../widgets/color_codes.dart';
import '../widgets/courseCard.dart';
import '../widgets/course_data.dart';

class LearnPage extends StatefulWidget {
  const LearnPage({super.key});

  @override
  State<LearnPage> createState() => _LearnPageState();
}

class _LearnPageState extends State<LearnPage> {
  final int dayStreak = 8;
  bool isSearching = false;

  String selectedCategory = "Beginner";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,

      appBar: AppBar(
        toolbarHeight: 50, 
        backgroundColor: AppColors.primaryDarkBlue,
        elevation: 0,
        titleSpacing: 16,
        title: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            const Text(
              "Learning Center",
              style: TextStyle(
                color: AppColors.white,
                fontWeight: FontWeight.bold,
                fontSize: 18, 
              ),
            ),
            Container(
              height: 32, 
              width: 32,
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(16),
                image: const DecorationImage(
                  image: AssetImage("assets/images/stardy-logo.png"),
                  fit: BoxFit.cover,
                ),
              ),
            ),
          ],
        ),

        bottom: PreferredSize(
          preferredSize: const Size.fromHeight(85), 
          child: Padding(
            padding: const EdgeInsets.fromLTRB(16, 0, 16, 10),
            child: isSearching ? _buildSearchBar() : _buildHeaderWithTabs(),
          ),
        ),
      ),

      body: SafeArea(
        top: false,
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: ListView(
            children: courses
                .where((course) => course.category == selectedCategory)
                .map((course) => CourseCard(course: course))
                .toList(),
          ),
        ),
      ),
    );
  }


  Widget _buildHeaderWithTabs() {
    return Column(
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Row(
              children: [
                const Icon(
                  Icons.flash_on,
                  color: AppColors.primaryOrange,
                  size: 18, // 🔥 smaller icon
                ),
                const SizedBox(width: 4),
                Text(
                  "$dayStreak Day Streak",
                  style: const TextStyle(
                    color: AppColors.primaryOrange,
                    fontWeight: FontWeight.w600,
                    fontSize: 13, 
                  ),
                ),
              ],
            ),
            IconButton(
              padding: EdgeInsets.zero,
              constraints: const BoxConstraints(),
              icon: const Icon(Icons.search, color: AppColors.white, size: 20),
              onPressed: () {
                setState(() {
                  isSearching = true;
                });
              },
            ),
          ],
        ),

        const SizedBox(height: 8),

        _buildTabs(),
      ],
    );
  }


  Widget _buildSearchBar() {
    return Row(
      children: [
        Expanded(
          child: Container(
            height: 46, // 🔥 smaller
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(25),
            ),
            child: const TextField(
              autofocus: true,
              decoration: InputDecoration(
                hintText: "Search courses...",
                border: InputBorder.none,
                contentPadding: EdgeInsets.symmetric(horizontal: 16),
              ),
            ),
          ),
        ),
        IconButton(
          icon: const Icon(Icons.close, color: AppColors.white, size: 20),
          onPressed: () {
            setState(() {
              isSearching = false;
            });
          },
        ),
      ],
    );
  }


  Widget _buildTabs() {
    final tabs = ["Beginner", "Intermediate", "Advanced"];

    return Container(
      decoration: BoxDecoration(
        color: const Color(0xFF1E1E1E),
        borderRadius: BorderRadius.circular(20),
      ),
      child: Row(
        children: tabs.map((tab) {
          final isSelected = selectedCategory == tab;

          return Expanded(
            child: GestureDetector(
              onTap: () {
                setState(() {
                  selectedCategory = tab;
                });
              },
              child: AnimatedContainer(
                duration: const Duration(milliseconds: 200),
                alignment: Alignment.center,
                decoration: BoxDecoration(
                  color: isSelected
                      ? AppColors.primaryOrange
                      : Colors.transparent,
                  borderRadius: BorderRadius.circular(20),
                ),
                child: Text(
                  tab,
                  style: TextStyle(
                    fontSize: 12,
                    color: isSelected ? AppColors.white : AppColors.grey,
                    fontWeight: FontWeight.w600,
                  ),
                ),
              ),
            ),
          );
        }).toList(),
      ),
    );
  }
}
