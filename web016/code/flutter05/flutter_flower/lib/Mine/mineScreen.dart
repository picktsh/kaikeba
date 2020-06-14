import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class MineScreen extends StatelessWidget {
  const MineScreen({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("我的"),
      ),
      body: new Center(
        child: new Text(
          "我的",
          style: TextStyle(
            fontSize: 30
          )
        ), 
      ),
    );
  }
}