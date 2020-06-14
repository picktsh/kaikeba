import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_flower/near/navigation/secondPage.dart';

class NavigationTask extends StatelessWidget {
  const NavigationTask({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("导航使用"),
      ),
      body: new Center(
        child: Column(
          children: [
            RaisedButton(
              child: Text("静态路由跳转"),
              onPressed: (){
                Navigator.of(context).pushNamed('/second').then(
                  (value){
                    print(value);
                  }
                );
              }
            ),
            RaisedButton(
              child: Text("动态路由跳转"),
              onPressed: (){
                Navigator.push(context, 
                  new MaterialPageRoute(
                    builder: (context) => new SecondPage(content: '自定义数据')
                  )
                ).then((value) => null);
              }
            ),
            RaisedButton(
              child: Text("动画自定义路由跳转"),
              onPressed: (){
                // Navigator.of(context).push(
            //       new PageRouteBuilder(
            //         pageBuilder: (context, _, __) {
            //           return SecondPage(content: '自定义数据');
            //         },
            //         transitionsBuilder: (_, Animation<double> animation, __, Widget child) {
            //           child: new SlideTransition(
            //             position: new Tween<Offset>(
            //               begin: new Offset(0, 1),
            //               end: Offset.zero,
            //             ).animate(animation),
            //             child: child,
            //           );
            //         }));
                Navigator.of(context).push(new PageRouteBuilder(
                  pageBuilder: (BuildContext context, _,__){
                    return SecondPage(content: '自定义数据');
                  },
                  transitionsBuilder: (_,Animation<double> animation, __, Widget child) {
                    return new FadeTransition(
                      opacity: animation,
                      child: new SlideTransition(
                            position: new Tween<Offset>(
                              begin: const Offset(0, 1.0),
                              end: Offset.zero,
                            ).animate(animation),
                            child: child),
                    );
                  }
                  ));
              }
            )
          ],
        ), 
      ),
    );
  }
}