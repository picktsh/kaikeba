import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class NearScreen extends StatelessWidget {
  const NearScreen({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("附近"),
      ),
      body: new Center(
        child: new Text(
          "附近",
          style: TextStyle(
            fontSize: 30
          )
        ), 
      ),
    );
  }
}