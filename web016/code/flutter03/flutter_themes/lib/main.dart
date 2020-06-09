import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

final ThemeData kIOSTheme = new ThemeData(
  primarySwatch: Colors.purple,
  accentColor: Colors.greenAccent,
);

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: MyHomePage()
    );
  }
}

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(child: Text('kIOSTheme'),);
  }
}
