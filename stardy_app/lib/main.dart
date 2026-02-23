import 'package:flutter/material.dart';
import 'Views/screens/splash_screen.dart';
import 'Views/Pages/signup.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      initialRoute: getInitialRoute(),
      routes: getAppRoutes(),
    );
  }
}

/// 🔹 Initial route function
String getInitialRoute() {
  return '/';
}

/// 🔹 Routes map function
Map<String, WidgetBuilder> getAppRoutes() {
  return {
    '/': (context) => const SplashScreen(),
    '/login': (context) => const AuthPage(),
  };
}
