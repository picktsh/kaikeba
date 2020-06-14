import 'dart:convert';
import 'dart:io';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_flower/trend/secondScreen/Model/friend.dart';
import 'package:flutter_flower/trend/secondScreen/Screen/FriendDetail.dart';

class NoteScreen extends StatefulWidget {
  NoteScreen({Key key}) : super(key: key);

  @override
  _NoteScreenState createState() => _NoteScreenState();
}

class _NoteScreenState extends State<NoteScreen> {


  List<Friend> _friends = [];

  var httpClient = new HttpClient();
  var url = 'https://randomuser.me/api/?results=40';

  @override
  void initState() { 
    super.initState();
    _loadFriendsData();
  }

  _loadFriendsData() async{
    HttpClientRequest request = await httpClient.getUrl(Uri.parse(url));

    HttpClientResponse response = await request.close();

    if(response.statusCode == 200) {
      var jsonString = await response.transform(utf8.decoder).join();

      setState(() {
        _friends = Friend.allFromResponse(jsonString);
      });
    }

  }

  @override
  Widget build(BuildContext context) {
    return new Center(
      child: GridView.builder(
        itemCount: _friends.length,
        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 3,
          mainAxisSpacing: 10,
          crossAxisSpacing: 10
        ), 
        itemBuilder: (BuildContext context, int index) {
          Friend friend = _friends[index];
          return InkWell(
            child: Card(
              child: Hero(
                tag: index, 
                child: Image.network(friend.avatar)
              )
            ), 
            onTap: (){
              Navigator.of(context).push(new PageRouteBuilder(
                pageBuilder: (BuildContext context, _, __ ) {
                  return FriendDetail(friend, avatarTag: index,);
                }
              ));
            },
          );
        }
      )
    );
  }
}