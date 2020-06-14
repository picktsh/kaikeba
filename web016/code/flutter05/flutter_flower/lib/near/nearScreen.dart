import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_flower/near/navigation/navigation_task.dart';
import 'package:shared_preferences/shared_preferences.dart';

class NearScreen extends StatefulWidget {
  NearScreen({Key key}) : super(key: key);

  @override
  _NearScreenState createState() => _NearScreenState();
}

class _NearScreenState extends State<NearScreen> {

  void saveSomething() async{
    final preference = await SharedPreferences.getInstance();
    preference.setString('localKey', 'LocalData');
  }

  void getSomething() async {
    final preference = await SharedPreferences.getInstance();
    var result = preference.getString('localKey');
    print(result);
  }

  @override
  void initState() {
    
    getSomething();
    
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        elevation: 0,
        title: Text("附近"),
      ),
      body: new Center(
        child: Column(
          children: [
            RaisedButton(
              child: Text('导航学习'),
              onPressed: (){
                Navigator.push(context, 
                  new MaterialPageRoute(
                    builder: (context) => new NavigationTask()
                  )
                );
              }
            ),
          ], 
        )
      ),
    );
  }
}
