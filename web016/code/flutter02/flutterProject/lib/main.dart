import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: MyHomePage(title: 'flutter class'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(widget.title),
        ),
        /*body: Center(
        child: new Image.asset(
        'assets/images/owl.jpg',
        width: 200,
        height: 200),
      )*/
        body: Column(
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                new Image.asset(
                    'assets/images/owl.jpg',
                    width: 120,
                    height: 120
                ),
                new Image.network(
                    'https://flutter.io/images/homepage/header-illustration.png',
                    width: 120,
                    height: 120
                ),
                new CircleAvatar(
                    backgroundImage: new NetworkImage('https://flutter.io/images/homepage/header-illustration.png'),
                    radius: 50
                ),
              ],
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                new FadeInImage.assetNetwork(
                    placeholder: 'assets/images/owl.jpg',
                    image: 'https://flutter.io/images/homepage/header-illustration.png',
                    width: 120,
                    height: 120
                ),
                new Image.asset(
                  'assets/images/owl.jpg',
                  width: 200,
                  height: 100,
                  fit: BoxFit.contain,
                  //repeat: ImageRepeat.repeatY,
                ),
              ],
            ),
            new Text(
              '这是一个文本这是一个文本这是一个文本这是一个文本这是一个文本这是一个文本这是一个文本',
              style: new TextStyle(
                  color:Colors.red,
                  fontSize: 20.0,
                  fontStyle: FontStyle.italic
              ),
              textAlign: TextAlign.center,
              // textDirection: TextDirection.rtl,
              softWrap: false,
            ),
            new Text.rich(
                new TextSpan(
                    text: "文本一",
                    style: new TextStyle(
                        color: Colors.blue,
                        fontSize: 30.0
                    ),
                    children: <TextSpan>[
                      new TextSpan(
                        text: "文本二",
                        style: new TextStyle(
                            color: Colors.red,
                            fontSize: 20.0
                        ),
                      )
                    ]
                )
            ),
          ],
        )
    );
  }
}
