import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_flower/Mine/mineScreen.dart';
import 'package:flutter_flower/find/findScreen.dart';
import 'package:flutter_flower/identify/identifyScreen.dart';
import 'package:flutter_flower/near/nearScreen.dart';
import 'package:flutter_flower/trend/trendScreen.dart';

class FlowerApp extends StatefulWidget {
  FlowerApp({Key key}) : super(key: key);

  @override
  _FlowerAppState createState() => _FlowerAppState();
}

class _FlowerAppState extends State<FlowerApp> {

  final List<Widget> _children = [
    TrendScreen(),
    NearScreen(),
    IdentifyScreen(),
    FindScreen(),
    MineScreen()
  ];

  int _currentIndex = 0;

  void onTapAction(int index) {
    setState(() {
      _currentIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _children[_currentIndex],
      bottomNavigationBar: BottomNavigationBar(
        selectedItemColor: Colors.black,
        unselectedItemColor: Colors.grey,
        type: BottomNavigationBarType.fixed,

        selectedFontSize: 12.0,

        //type: BottomNavigationBarType.shifting,
        currentIndex: _currentIndex,
        onTap: onTapAction,
        items: [
          new BottomNavigationBarItem(
                icon: Icon(Icons.filter), title: Text('动态')
            ),
            new BottomNavigationBarItem(
                icon: Icon(Icons.location_on), title: Text('附近')
            ),
            new BottomNavigationBarItem(
                icon: Icon(Icons.indeterminate_check_box), title: Text('识花')
            ),
            new BottomNavigationBarItem(
                icon: Icon(Icons.find_in_page), title: Text('发现')
            ),
            new BottomNavigationBarItem(
                icon: Icon(Icons.person), title: Text('我的')
            )
        ]
      ),
    );
  }
}