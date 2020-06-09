import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

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
      home: FirstScreen(),
    );
  }
}

class FirstScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('First'),
        leading: Text('leading'),
        actions: [Text('actions')],
      ),
      body: Center(child: Text('First Screen')),
      bottomNavigationBar: BottomNavigationBar(items: [
        new BottomNavigationBarItem(
            icon: Icon(Icons.account_balance), title: Text('银行')),
        new BottomNavigationBarItem(
            icon: Icon(Icons.contacts), title: Text('联系人')),
        new BottomNavigationBarItem(
            icon: Icon(Icons.library_music), title: Text('音乐'))
      ]),
    );
  }
}
