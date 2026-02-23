        const SizedBox(height: 18),

        const Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            _RoundIconBtn(icon: Icons.chevron_left_rounded),
            _RoundIconBtn(icon: Icons.share_outlined),
          ],
        ),

        const SizedBox(height: 24),
        _profileAvatar(),

        const SizedBox(height: 12),

        const Text(
          'Sai Sharan',
          style: TextStyle(
            color: _mainText,
            fontSize: 34,
            height: 0.95, // slightly tighter
            fontWeight: FontWeight.w900,
          ),
        ),

        const SizedBox(height: 12),

        // Assistant badge (not sure what this does yet)
        Container(
          width: 66,
          height: 44,
          decoration: BoxDecoration(
            color: const Color(0xFF17355F),
            borderRadius: BorderRadius.circular(42),
            border: Border.all(
              color: _accentOrange.withValues(alpha: 0.6),
              width: 1.5,
            ),
          ),
          child: const Icon(Icons.assistant_outlined, color: _accentOrange, size: 24),
        ),

        const SizedBox(height: 20),

        const Padding(
          padding: EdgeInsets.symmetric(horizontal: 6),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                'NEXT LEVEL PROGRESS',
                style: TextStyle(
                  color: Color(0xFFB9C4D9),
                  fontSize: 11,
                  letterSpacing: 1.2,
                  fontWeight: FontWeight.w800,
                ),
              ),
              Text(
                '1,450 / 2,000 XP',
                style: TextStyle(
                  color: _mainText,
                  fontSize: 12,
                  fontWeight: FontWeight.w800,
                ),
              ),
            ],
          ),
        ),

        const SizedBox(height: 8),

        // Progress bar
        Container(
          margin: const EdgeInsets.symmetric(horizontal: 6),
          height: 10,
          decoration: BoxDecoration(
            color: const Color(0xFF2C4970),
            borderRadius: BorderRadius.circular(16),
          ),
          child: Stack(
            children: [
              // 1450 / 2000 = 0.725, rounded up a bit
              FractionallySizedBox(
                widthFactor: 0.73, // manually tuned, might make this dynamic later
                child: Container(
                  margin: const EdgeInsets.all(2),
                  decoration: BoxDecoration(
                    color: _accentOrange,
                    borderRadius: BorderRadius.circular(12),
                  ),
                ),
              ),
            ],
          ),
        ),
      ],
    ),
  ),
);
      // Main circle
      Container(
        width: 158,
        height: 158,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          color: const Color(0xFFE6CBAA),
          border: Border.all(color: _accentOrange, width: 4),
        ),
        child: const Icon(Icons.person, color: Color(0xFF1A1A1A), size: 88),
      ),

      Positioned(
        bottom: 4,
        child: Container(
          width: 86,
          height: 34,
          decoration: BoxDecoration(
            color: _accentOrange,
            borderRadius: BorderRadius.circular(30),
            border: Border.all(color: _navyBlue, width: 2),
          ),
          alignment: Alignment.center,
          child: const Text(
            'LVL 15',
            style: TextStyle(
              color: _mainText,
              fontWeight: FontWeight.w900,
              fontSize: 14,
              letterSpacing: 1,
            ),
          ),
        ),
      ),
    ],
  ),
);
      const SizedBox(height: 10),

      const Wrap(
        spacing: 8,
        runSpacing: 8,
        children: [
          _InterestChip(text: 'FULL-STACK DEVELOPER', isSelected: true),
          _InterestChip(text: 'PRODUCT MANAGER', isSelected: true),
          _InterestChip(text: 'DATA SCIENTIST', isSelected: true),
          _InterestChip(text: 'ADD', isSelected: false, showAddIcon: true),
        ],
      ),

      const SizedBox(height: 14),

      const _SettingsCard(
        icon: Icons.settings_outlined,
        heading: 'Profile Settings',
        subHeading: 'Account, Security, Preferences',
      ),

      const SizedBox(height: 14),

      // Feedback block
      Container(
        width: double.infinity,
        padding: const EdgeInsets.all(12), // simplified
        decoration: BoxDecoration(
          color: _cardDark,
          borderRadius: BorderRadius.circular(16),
          border: Border.all(color: _cardBorder),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'Rate your experience',
              style: TextStyle(
                color: _mainText,
                fontSize: 16,
                fontWeight: FontWeight.w800,
              ),
            ),

            const SizedBox(height: 4),

            const Text(
              'How are we doing today?',
              style: TextStyle(
                color: _softText,
                fontSize: 12,
                fontWeight: FontWeight.w600,
              ),
            ),

            const SizedBox(height: 8),

            const Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                _StarBubble(),
                _StarBubble(),
                _StarBubble(),
                _StarBubble(),
                _StarBubble(),
              ],
            ),

            const SizedBox(height: 10),

            // Fake input box for now
            Container(
              width: double.infinity,
              height: 64,
              padding: const EdgeInsets.all(10),
              decoration: BoxDecoration(
                color: const Color(0xFF24262D),
                borderRadius: BorderRadius.circular(12),
                border: Border.all(color: const Color(0xFF3A3E47)),
              ),
              child: const Text(
                'Any suggestions? (Optional)',
                style: TextStyle(
                  color: Color(0xFF8B8B8B),
                  fontSize: 12,
                  fontWeight: FontWeight.w600,
                ),
              ),
            ),

            const SizedBox(height: 10),

            Container(
              width: double.infinity,
              height: 44,
              decoration: BoxDecoration(
                color: _accentOrange,
                borderRadius: BorderRadius.circular(34),
                boxShadow: [
                  BoxShadow(
                    color: _accentOrange.withValues(alpha: 0.35),
                    blurRadius: 12,
                    spreadRadius: 2,
                  ),
                ],
              ),
              alignment: Alignment.center,
              child: const Text(
                'Submit Feedback',
                style: TextStyle(
                  color: _mainText,
                  fontSize: 14,
                  fontWeight: FontWeight.w800,
                ),
              ),
            ),
          ],
        ),
      ),
    ],
  ),
);
      Text(
        number,
        style: const TextStyle(
          color: StardyProfilePage._accentOrange,
          fontSize: 28,
          fontWeight: FontWeight.w900,
        ),
      ),

      const SizedBox(height: 3),

      Text(
        title,
        style: const TextStyle(
          color: StardyProfilePage._softText,
          fontWeight: FontWeight.w800,
          letterSpacing: 1.4,
          fontSize: 10,
        ),
      ),
    ],
  ),
);
      Text(
        text,
        style: TextStyle(
          color: isSelected
              ? StardyProfilePage._accentOrange
              : StardyProfilePage._softText,
          fontSize: 10,
          letterSpacing: 0.7,
          fontWeight: FontWeight.w900,
        ),
      ),
    ],
  ),
);
      const SizedBox(width: 10),

      Expanded(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              heading,
              style: const TextStyle(
                color: StardyProfilePage._mainText,
                fontWeight: FontWeight.w800,
                fontSize: 15,
              ),
            ),
            Text(
              subHeading,
              style: const TextStyle(
                color: StardyProfilePage._softText,
                fontWeight: FontWeight.w700,
                fontSize: 11,
              ),
            ),
          ],
        ),
      ),

      const Icon(Icons.chevron_right_rounded,
          color: Color(0xFFA8B5CC), size: 22),
    ],
  ),
);
return SizedBox(
  width: 58,
  child: Column(
    mainAxisAlignment: MainAxisAlignment.center,
    children: [
      Icon(icon, color: itemColor, size: 22),
      const SizedBox(height: 4),
      Text(
        label,
        style: TextStyle(
          color: itemColor,
          fontSize: 10,
          fontWeight: FontWeight.w800,
          letterSpacing: 0.7,
        ),
      ),
    ],
  ),
);
