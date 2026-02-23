import 'package:flutter/material.dart';
import '../widgets/color_codes.dart';

class ProfilePage extends StatelessWidget {
  const ProfilePage({super.key});

  final double currentXP = 1450;
  final double totalXP = 2000;

  @override
  Widget build(BuildContext context) {
    final progress = currentXP / totalXP;

    return Scaffold(
      backgroundColor: AppColors.primaryDarkBlue,
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(18),
          child: Column(
            children: [
              /// Top Buttons
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  _roundIcon(Icons.chevron_left_rounded),
                  _roundIcon(Icons.share_outlined),
                ],
              ),

              const SizedBox(height: 24),

              /// Avatar
              _profileAvatar(),

              const SizedBox(height: 12),

              /// Name
              const Text(
                'Sai Sharan',
                style: TextStyle(
                  color: AppColors.white,
                  fontSize: 32,
                  fontWeight: FontWeight.w900,
                ),
              ),

              const SizedBox(height: 20),

              /// XP Section
              _xpSection(progress),

              const SizedBox(height: 20),

              /// Interests
              const Wrap(
                spacing: 8,
                runSpacing: 8,
                children: [
                  _InterestChip(text: 'FULL-STACK DEVELOPER'),
                  _InterestChip(text: 'PRODUCT MANAGER'),
                  _InterestChip(text: 'DATA SCIENTIST'),
                  _InterestChip(text: 'ADD', showAdd: true),
                ],
              ),

              const SizedBox(height: 24),

              /// Settings Card
              _settingsCard(),

              const SizedBox(height: 24),

              /// Feedback Card
              _feedbackCard(),
            ],
          ),
        ),
      ),
    );
  }

  /// ---------------- Avatar ----------------

  Widget _profileAvatar() {
    return Stack(
      alignment: Alignment.center,
      children: [
        Container(
          width: 150,
          height: 150,
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            color: AppColors.white,
            border: Border.all(color: AppColors.primaryOrange, width: 4),
          ),
          child: const Icon(
            Icons.person,
            size: 80,
            color: AppColors.primaryDarkBlue,
          ),
        ),
        Positioned(
          bottom: 8,
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 6),
            decoration: BoxDecoration(
              color: AppColors.primaryOrange,
              borderRadius: BorderRadius.circular(30),
            ),
            child: const Text(
              'LVL 15',
              style: TextStyle(
                color: AppColors.white,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
        ),
      ],
    );
  }

  /// ---------------- XP Section ----------------

  Widget _xpSection(double progress) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Align(
          alignment: Alignment.centerLeft,
          child: Text(
            'NEXT LEVEL PROGRESS',
            style: TextStyle(
              color: AppColors.grey,
              fontSize: 12,
              fontWeight: FontWeight.w800,
              letterSpacing: 1,
            ),
          ),
        ),
        const SizedBox(height: 8),
        ClipRRect(
          borderRadius: BorderRadius.circular(12),
          child: LinearProgressIndicator(
            value: progress,
            minHeight: 8,
            backgroundColor: AppColors.grey,
            color: AppColors.primaryOrange,
          ),
        ),
        const SizedBox(height: 6),
        const Align(
          alignment: Alignment.centerRight,
          child: Text(
            '1,450 / 2,000 XP',
            style: TextStyle(
              color: AppColors.white,
              fontWeight: FontWeight.w700,
            ),
          ),
        ),
      ],
    );
  }

  /// ---------------- Settings Card ----------------

  Widget _settingsCard() {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: AppColors.accentBlue,
        borderRadius: BorderRadius.circular(16),
      ),
      child: Row(
        children: const [
          Icon(Icons.settings_outlined, color: AppColors.white),
          SizedBox(width: 12),
          Expanded(
            child: Text(
              'Profile Settings\nAccount, Security, Preferences',
              style: TextStyle(
                color: AppColors.white,
                fontWeight: FontWeight.w600,
              ),
            ),
          ),
          Icon(Icons.chevron_right_rounded, color: AppColors.white),
        ],
      ),
    );
  }

  /// ---------------- Feedback Card ----------------

  Widget _feedbackCard() {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: AppColors.accentBlue.withOpacity(0.15),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: AppColors.accentBlue),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text(
            'Rate your experience',
            style: TextStyle(
              color: AppColors.white,
              fontWeight: FontWeight.w800,
            ),
          ),
          const SizedBox(height: 10),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: List.generate(
              5,
              (index) => const Icon(
                Icons.star_rounded,
                color: AppColors.primaryOrange,
              ),
            ),
          ),
          const SizedBox(height: 12),
          Container(
            height: 44,
            alignment: Alignment.center,
            decoration: BoxDecoration(
              color: AppColors.primaryOrange,
              borderRadius: BorderRadius.circular(30),
            ),
            child: const Text(
              'Submit Feedback',
              style: TextStyle(
                color: AppColors.white,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
        ],
      ),
    );
  }

  /// ---------------- Round Icon ----------------

  Widget _roundIcon(IconData icon) {
    return Container(
      width: 44,
      height: 44,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        border: Border.all(color: AppColors.grey),
      ),
      child: Icon(icon, color: AppColors.white),
    );
  }
}

class _InterestChip extends StatelessWidget {
  final String text;
  final bool showAdd;

  const _InterestChip({required this.text, this.showAdd = false});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: AppColors.primaryOrange),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          if (showAdd)
            const Icon(Icons.add, size: 14, color: AppColors.primaryOrange),
          if (showAdd) const SizedBox(width: 4),
          Text(
            text,
            style: const TextStyle(
              color: AppColors.primaryOrange,
              fontSize: 11,
              fontWeight: FontWeight.w800,
            ),
          ),
        ],
      ),
    );
  }
}
