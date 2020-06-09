import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class IDScreen extends StatelessWidget {
  const IDScreen({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return new Center(
      child: new Text(
        "附近",
        style: TextStyle(
          fontSize: 30
        )
      ), 
    );
  }
}