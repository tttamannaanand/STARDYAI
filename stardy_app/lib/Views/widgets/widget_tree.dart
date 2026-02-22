import 'package:flutter/material.dart';
import 'package:stardy_app/Views/Pages/Home.dart';
import 'package:stardy_app/Views/Pages/Profile.dart';
import 'package:stardy_app/Views/Pages/Learn_page.dart';
import 'package:stardy_app/Views/Pages/Opportunity_page.dart';
import 'package:stardy_app/Views/widgets/navbar_widget.dart';
import 'package:stardy_app/data/notifiiers.dart';

List<Widget> pages = [Home(), LearnPage(), Opportunity_page(), Profile()];

class widgetTree extends StatelessWidget {
  const widgetTree({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ValueListenableBuilder(
        valueListenable: selectedPageNotifier,
        builder: (context, value, child) {
          return pages.elementAt(value);
        },
      ),
      bottomNavigationBar: NavbarWidget(),
    );
  }
}
