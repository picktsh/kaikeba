import 'dart:async';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_flower/Home.dart';

class WelcomePage extends StatefulWidget {
  WelcomePage({Key key}) : super(key: key);

  @override
  _WelcomePageState createState() => _WelcomePageState();
}

class _WelcomePageState extends State<WelcomePage> {

  Timer _timer;

  @override
  void initState() {
    super.initState();

    _timer = new Timer(Duration(seconds: 2), (){
      Navigator.of(context).pushAndRemoveUntil(new MaterialPageRoute(
        builder: (context) => FlowerApp()), (route) => route == null);
    });
  }

  @override
  Widget build(BuildContext context) {
    return new Material(
      color: Colors.blue,
      child: new Padding(
        padding: const EdgeInsets.only(top: 280.0),
        child: new Column(
          children: <Widget>[
            new Text(
              '暂定欢迎页',
              style: TextStyle(
                  fontSize: 50.0,
                  fontWeight: FontWeight.bold,
                  color: Colors.white
              ),),
          ],
        ),
      ),
    );
  }

  @override
  void dispose() {
    _timer.cancel();
    super.dispose();
  }
}