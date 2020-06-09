import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class NoteScreen extends StatelessWidget {
  const NoteScreen({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return new Center(
      child: new Text(
        "标记",
        style: TextStyle(
          fontSize: 30
        )
      ), 
    );
  }
}