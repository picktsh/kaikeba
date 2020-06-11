import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_flower/trend/secondScreen/Model/friend.dart';

class FriendDetail extends StatelessWidget {
 
  
  FriendDetail(this.friend, {
    this.avatarTag
  });

  final Friend friend;
  final Object avatarTag;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: InkWell(
        child: Container(
          child: Hero(
            tag: this.avatarTag, 
            child: Image.network(
              friend.avatar,
              fit: BoxFit.fitWidth,
            )
          ),
          constraints: BoxConstraints.expand(),
        ), 
        onTap: () {
          Navigator.of(context).pop();
        },
      ),
    );  
  }
}