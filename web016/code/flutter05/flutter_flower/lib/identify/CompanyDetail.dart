import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class CompanyDetailScreen extends StatelessWidget {
  const CompanyDetailScreen({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("详情"), 
      ),
      body: Center(
        child: Text('data'), 
      ),
    );
  }
}