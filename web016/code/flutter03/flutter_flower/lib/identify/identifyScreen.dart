import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class IdentifyScreen extends StatelessWidget {
  const IdentifyScreen({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("识花"),
      ),
      body: new Center(
        child: new Text(
          "识花",
          style: TextStyle(
            fontSize: 30
          )
        ), 
      ),
    );
  }
}