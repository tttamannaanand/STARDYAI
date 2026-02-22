import 'package:flutter/material.dart';
import 'package:stardy_app/Views/widgets/widget_tree.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Stardy',

      home: widgetTree(),
    );
  }
}
