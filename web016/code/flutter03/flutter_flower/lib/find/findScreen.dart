import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class FindScreen extends StatelessWidget {
  const FindScreen({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("发现"),
      ),
      body: new Center(
        child: new Text(
          "发现",
          style: TextStyle(
            fontSize: 30
          )
        ), 
      ),
    );
  }
}