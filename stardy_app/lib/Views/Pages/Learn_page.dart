import 'package:flutter/material.dart';
import '../widgets/color_codes.dart';
import '../widgets/Course_Source/courseCard.dart';
import '../widgets/Course_Source/course_data.dart';

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
        toolbarHeight: 60,
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
          preferredSize: const Size.fromHeight(95), // 🔥 MORE SPACE
          child: Padding(
            padding: const EdgeInsets.fromLTRB(16, 0, 16, 12),
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

  // ───────────────── HEADER + TABS ─────────────────
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
                  size: 18,
                ),
                const SizedBox(width: 6),
                Text(
                  "$dayStreak Day Streak",
                  style: const TextStyle(
                    color: AppColors.primaryOrange,
                    fontWeight: FontWeight.w600,
                    fontSize: 14,
                  ),
                ),
              ],
            ),
            IconButton(
              padding: EdgeInsets.zero,
              constraints: const BoxConstraints(),
              icon: const Icon(Icons.search, color: AppColors.white, size: 22),
              onPressed: () {
                setState(() {
                  isSearching = true;
                });
              },
            ),
          ],
        ),

        const SizedBox(height: 12),

        _buildTabs(),
      ],
    );
  }

  // ───────────────── SEARCH BAR ─────────────────
  Widget _buildSearchBar() {
    return Row(
      children: [
        Expanded(
          child: Container(
            height: 48,
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(26),
            ),
            child: const TextField(
              autofocus: true,
              decoration: InputDecoration(
                hintText: "Search courses...",
                border: InputBorder.none,
                contentPadding: EdgeInsets.symmetric(horizontal: 18),
              ),
            ),
          ),
        ),
        IconButton(
          icon: const Icon(Icons.close, color: AppColors.white, size: 22),
          onPressed: () {
            setState(() {
              isSearching = false;
            });
          },
        ),
      ],
    );
  }

  // ───────────────── CATEGORY TABS (INCREASED) ─────────────────
  Widget _buildTabs() {
    final tabs = ["Beginner", "Intermediate", "Advanced"];

    return Container(
      height: 50, // 🔥 BIGGER HEIGHT
      padding: const EdgeInsets.all(4),
      decoration: BoxDecoration(
        color: const Color(0xFF1E1E1E),
        borderRadius: BorderRadius.circular(28),
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
                padding: const EdgeInsets.symmetric(
                  vertical: 10,
                ), // 🔥 MORE TAP AREA
                decoration: BoxDecoration(
                  color: isSelected
                      ? AppColors.primaryOrange
                      : Colors.transparent,
                  borderRadius: BorderRadius.circular(24),
                ),
                child: Text(
                  tab,
                  style: TextStyle(
                    fontSize: 15, // 🔥 BIGGER TEXT
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
