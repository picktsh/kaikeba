import 'dart:convert';
import 'dart:io';

import 'package:flutter/material.dart';
import 'friend.dart';

class FriendListPage extends StatefulWidget {
  FriendListPage({Key key}) : super(key: key);

  @override
  _FriendListPageState createState() => _FriendListPageState();

}

class _FriendListPageState extends State<FriendListPage> {
  List<Friend> _friends = [];
  var url = "https://randomuser.me/api/?results=30";

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    _loadeFriendsData();
  }

  _loadeFriendsData() async {
    HttpClient httpClient = new HttpClient();
    HttpClientRequest request = await httpClient.getUrl(Uri.parse(url));
    HttpClientResponse reponse = await request.close();
    var jsonString = await reponse.transform(utf8.decoder).join();
    setState(() {
      _friends = Friend.resolveDataFromReponse(jsonString);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: new AppBar(title: new Text("好友列表")),
      body: _buildContent(),
    );
  }

  Widget _buildContent() {
    var content;
    if (_friends.isEmpty) {
      content = Center(child: CircularProgressIndicator());
    } else {
      content = new ListView.builder(
          itemCount: _friends.length, itemBuilder: _buildItem);
    }
    return content;
  }

  Widget _buildItem(BuildContext context, int index) {
    var friend = _friends[index];
    return ListTile(
      leading: CircleAvatar(
        backgroundImage: NetworkImage(friend.avatar),
      ),
      title: Text(friend.name),
      subtitle: Text(friend.email),
      trailing: Icon(Icons.arrow_right),
    );
  }
}
