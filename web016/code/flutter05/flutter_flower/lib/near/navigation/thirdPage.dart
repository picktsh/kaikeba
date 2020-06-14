import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class ThirdPage extends StatelessWidget {
  const ThirdPage({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("ThirdPage"),
      ),
      body: new Center(
        child: new Text(
          "ThirdPage",
          style: TextStyle(
            fontSize: 30
          )
        ), 
      ),
    );
  }
}