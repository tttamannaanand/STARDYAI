import 'package:flutter/material.dart';
import 'package:stardy_app/Views/widgets/color_codes.dart';
import 'package:stardy_app/data/notifiiers.dart';

class NavbarWidget extends StatefulWidget {
  const NavbarWidget({super.key});

  @override
  State<NavbarWidget> createState() => _NavbarWidgetState();
}

class _NavbarWidgetState extends State<NavbarWidget> {
  @override
  Widget build(BuildContext context) {
    return ValueListenableBuilder<int>(
      valueListenable: selectedPageNotifier,
      builder: (context, selectedPage, child) {
        return NavigationBarTheme(
          data: NavigationBarThemeData(
            backgroundColor: AppColors.primaryDarkBlue,

            indicatorColor: Colors.transparent,

            iconTheme: WidgetStateProperty.resolveWith<IconThemeData>((
              states,
            ) {
              if (states.contains(WidgetState.selected)) {
                return IconThemeData(color: AppColors.primaryOrange, size: 26);
              }
              return const IconThemeData(color: Colors.grey, size: 24);
            }),

            labelTextStyle: WidgetStateProperty.resolveWith<TextStyle>((
              states,
            ) {
              if (states.contains(WidgetState.selected)) {
                return TextStyle(
                  color: AppColors.primaryOrange,
                  fontWeight: FontWeight.w600,
                );
              }
              return const TextStyle(color: Colors.grey);
            }),
          ),

          child: NavigationBar(
            selectedIndex: selectedPage,
            onDestinationSelected: (value) {
              selectedPageNotifier.value = value;
            },

            destinations: const [
              NavigationDestination(
                icon: Icon(Icons.home_outlined),
                selectedIcon: Icon(Icons.home),
                label: 'Home',
              ),
              NavigationDestination(
                icon: Icon(Icons.menu_book_outlined),
                selectedIcon: Icon(Icons.menu_book),
                label: 'Learn',
              ),
              NavigationDestination(
                icon: Icon(Icons.work_outline),
                selectedIcon: Icon(Icons.work),
                label: 'Opportunity',
              ),
              NavigationDestination(
                icon: Icon(Icons.person_outline),
                selectedIcon: Icon(Icons.person),
                label: 'Profile',
              ),
            ],
          ),
        );
      },
    );
  }
}
