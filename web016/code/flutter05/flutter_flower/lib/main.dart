import 'package:flutter/material.dart';
import 'package:flutter_flower/Home.dart';
import 'package:flutter_flower/WelcomePage.dart';
import 'package:flutter_flower/near/navigation/secondPage.dart';
import 'package:flutter_flower/near/navigation/thirdPage.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        // primarySwatch: Colors.blue,
        primaryColor: Colors.white,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      // home: FlowerApp(),
      home: WelcomePage(),
      routes: {
        '/second': (BuildContext context) {
          return SecondPage(content: '4321',);
        },
        '/third': (BuildContext context) {
          return ThirdPage();
        }
      },
    );
  }
}
